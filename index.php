<?php
/*
Plugin Name:	Custom Ajax for Oxygen
Plugin URI:		https://brainagency.com.ua
Description:	Custom ajax functions for Oxygen pagebuilder.
Version:		1.0.0
Author:			AlexB
Author URI:		https://brainagency.com.ua

*/
		add_action('wp_ajax_openModal', 'openModal_action');
		add_action( 'wp_ajax_nopriv_openModal', 'openModal_action' );
		function openModal_action() {
			global $wpdb;
			$table_name = $wpdb->prefix . 'company_leads';
			$row_id = $_POST['data_set'];
			$lead_data = $wpdb->get_results( "SELECT * FROM `$table_name` WHERE `lead_id` = '$row_id'" );
			echo json_encode($lead_data);
			 wp_die();
		}

		add_action('wp_ajax_SendFormData', 'gm_deny_pobox_postcode');
     	add_action( 'wp_ajax_nopriv_SendFormData', 'gm_deny_pobox_postcode' );
		
		function gm_deny_pobox_postcode() {
			global $wpdb;
          $content = $_POST['Image_Upload'];
        //   $content = json_decode(file_get_contents("php://input"));
          
			$looks_arr = array();
				foreach ($content->looks as $key => $value) {
					if (strpos($key, 'look') === 0) {
						$looks_arr[$key] = $value;
					}
				};
			$json_look = json_encode($content->looks);
			$name = $content->name;
			$email = $content->email;
			$phone = $content->phone;
			$company = $content->company;
			$time = current_time( 'mysql' );
			$date = $content->date;
			$rush = $content->notimeline;
			$project = $content->project;
			$look0 = $json_look;
			$user_message = $content->message;
			$furnishings = $content->budget;
			$finish = $content->finish;
			$need = $content->need;
			$square = $content->space;
			// $file = $content->file;
			$file = $content;
			$table_name = $wpdb->prefix . 'company_leads';
			
			$table_name1 = $wpdb->prefix . 'users';
			
			$to = 'aaron@dreampotentials.org';
			$subject = 'New Get Started From   Email';
			$message = ' 
			
			Name: '.$name.'<br/> 
			Email: '.$email.'<br/> 
			Phone: '. $phone .'<br/> 
			Company: '. $company .'<br/> 
			Date: '. $date .'<br/> 
			Rush: '.$rush.'<br/> 
			Project: '.$project.'<br/> 
			Interested in looks: '. $look0.'<br/> 
			<br/> 
			Do you have a budget for furnishings? - '.$furnishings.' <br/> 
			Finish: '.$finish .'<br/> 
			Need: '. $need .'<br/> 
			Square: '. $square .'<br/> 
			Message: '. $user_message .'<br/>
			File:'.$file.'<br/>
			';
			
			$message1 = '<p style = "width:600px; text-align:center"><img src = "https://spaciel.com/wp-content/uploads/2021/07/Spaciel-Logo_Black.png" alt="Spaciel" style="border: none; display: inline-block; font-size: 14px; font-weight: bold; height: auto; outline: none; text-decoration: none; text-transform: capitalize; vertical-align: middle; max-width: 100%; margin-left: 0; margin-right: 0;" /></p>
			<body style = "background-color: #f7f7f7; width: 600px; border: 1px solid #dedede; box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1); border-radius: 3px;"><h1 style = "font-family: &quot;Helvetica Neue&quot;, Helvetica, Roboto, Arial, sans-serif; font-size: 30px; font-weight: 300; line-height: 150%; margin: 0; text-align: left; text-shadow: 0 1px 0 #ccaf84; color: #202020; background-color: inherit; padding: 36px 48px;background-color: #bf9b65">Thank you</h1>
			<p style = "padding-left:48px;">Please login to Spaciel using the below link</p><br/>
			<a style = "padding-left:48px;" href = "https://spaciel.com/log-in">Log in</a><br/>
			<p style = "padding-left:48px;">Your password is "password"</p>
			<a style = "padding-left:48px;" href = "https://spaciel.com/my-account/edit-account/">Please update your password here.</a></body>';
			
			$headers = array('Content-Type: text/html; charset=UTF-8');
			wp_mail( $to, $subject, $message, $headers );
			wp_mail($email,$subject,$message1,$headers);

			$SQL = $wpdb->prepare("INSERT INTO `$table_name` (`lead_name`, `date`, `lead_email`, `lead_phone`, `lead_company`, `lead_date`, `lead_rush`, `lead_project`, `lead_look`, `lead_furnishings`, `lead_finish`, `lead_need`, `lead_square`, `Message`)
VALUES ('$name', '$time', '$email', '$phone', '$company', '$date', '$rush', '$project', '$look0', '$furnishings', '$finish', '$need', '$square', '$user_message');");

$sql = "SELECT * FROM $table_name1 WHERE user_email = '$email'";
    		$data = $wpdb->query($sql);
			
			if($data == 0){
				wp_create_user( $name, 'password', $email );
				$creds = array(
                    'user_login'    => $name,
                    'user_password' => 'password',
                    'remember'      => true
                );
                $autologin_user = wp_signon( $creds, is_ssl() );
				
			}
			else {
				$sql3 = "UPDATE $table_name1 SET user_login='$name', user_nicename = '$name', user_email = '$email', user_url = '', user_registered = '$time', user_activation_key = '', user_status = '', display_name = '$name' WHERE user_email='$email'";
				$wpdb->query($sql3);
			}
			
			
			$wpdb->query($SQL);
			$sql_get_id = "SELECT ID FROM $table_name1 WHERE user_email = '$email'";
			$current_id = $wpdb->query($sql_get_id);
			$u = new WP_User( $current_id );
			$u->set_role( 'customer' );	
			$admin = new WP_User(1);
			$admin->set_role('administrator');
			
			echo ($wpdb->last_result);

			// Print last SQL query Error
			echo $wpdb->last_error;
			
          wp_die();
      	}