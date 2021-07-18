import {o as openBlock, c as createBlock, a as createVNode, b as createTextVNode, d as axios, w as withCtx, T as Transition, r as resolveComponent, F as Fragment, e as renderList, f as createCommentVNode, g as withDirectives, v as vModelText, h as vModelCheckbox, i as withModifiers, t as toDisplayString, j as vModelRadio, k as createApp} from "./vendor.f9a7117d.js";
const p$1 = function polyfill(modulePath = ".", importFunctionName = "__import__") {
  try {
    self[importFunctionName] = new Function("u", `return import(u)`);
  } catch (error) {
    const baseURL = new URL(modulePath, location);
    const cleanup = (script) => {
      URL.revokeObjectURL(script.src);
      script.remove();
    };
    self[importFunctionName] = (url) => new Promise((resolve, reject) => {
      const absURL = new URL(url, baseURL);
      if (self[importFunctionName].moduleMap[absURL]) {
        return resolve(self[importFunctionName].moduleMap[absURL]);
      }
      const moduleBlob = new Blob([
        `import * as m from '${absURL}';`,
        `${importFunctionName}.moduleMap['${absURL}']=m;`
      ], {type: "text/javascript"});
      const script = Object.assign(document.createElement("script"), {
        type: "module",
        src: URL.createObjectURL(moduleBlob),
        onerror() {
          reject(new Error(`Failed to import: ${url}`));
          cleanup(script);
        },
        onload() {
          resolve(self[importFunctionName].moduleMap[absURL]);
          cleanup(script);
        }
      });
      document.head.appendChild(script);
    });
    self[importFunctionName].moduleMap = {};
  }
};
p$1("/assets/");
var main = ':root {\n  --brown: #2d2926;\n  --light-brown: #c5b072;\n}\n#questionaire * {\n  font-family: "Poppins", sans-serif;\n}\n#questionaire button {\n  border: none;\n  color: #fff;\n  padding: 15px 30px;\n  background: var(--brown);\n  display: flex;\n  align-items: center;\n  line-height: 24px;\n  cursor: pointer;\n  font-size: 14px;\n}\n#questionaire button svg {\n  height: 24px;\n  width: 24px;\n}\n#questionaire button.inverse {\n  border: none;\n  background: transparent;\n  color: var(--brown);\n}\n#questionaire .heading-container {\n  position: relative;\n  padding: 12px 22px 18px;\n  margin: 10px;\n  text-align: left;\n}\n#questionaire .heading-container .title {\n  font-family: "Freight", serif;\n  line-height: 1.2;\n  margin-bottom: 20px;\n}\n#questionaire .heading-container .description {\n  margin: 0;\n}\n#questionaire .heading-container::after {\n  content: "";\n  position: absolute;\n  z-index: -1;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 50px;\n  border: 2px solid var(--light-brown);\n  border-right-color: transparent;\n}\n#questionaire .page-nav {\n  display: flex;\n  margin: 20px auto;\n  justify-content: space-around;\n}\n#questionaire .block-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n#questionaire .block-grid .item {\n  background: #f5f5f5;\n  border: 2px solid #f5f5f5;\n  position: relative;\n  margin: 20px;\n  padding: 10px 20px;\n  text-align: left;\n}\n#questionaire .box-list .item {\n  background: #f5f5f5;\n  border: 2px solid #f5f5f5;\n  position: relative;\n  margin: 20px auto;\n  padding: 10px 20px;\n  text-align: left;\n}\n#questionaire .box-list .item input[type=checkbox],\n#questionaire .box-list .item input[type=radio] {\n  display: none;\n}\n#questionaire .box-list .item label {\n  cursor: pointer;\n}\n#questionaire .box-list .item .icon-check {\n  display: none;\n}\n#questionaire .box-list .item .title {\n  margin: 0;\n  font-size: 18px;\n}\n#questionaire .box-list .item .description {\n  margin: 0;\n}\n#questionaire .box-list .item::after {\n  content: "";\n  position: absolute;\n  right: 20px;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 50%;\n  height: 24px;\n  width: 24px;\n  border: 2px solid var(--light-brown);\n}\n#questionaire .box-list .item.selected {\n  border: 2px solid var(--light-brown);\n  background: #f6f0e6;\n}\n#questionaire .box-list .item.selected::after {\n  display: none;\n}\n#questionaire .box-list .item.selected .icon-check {\n  display: initial;\n  position: absolute;\n  right: 20px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n#questionaire .image-grid .item {\n  position: relative;\n  cursor: pointer;\n}\n#questionaire .image-grid .item label {\n  cursor: pointer;\n}\n#questionaire .image-grid .item img {\n  border: 2px solid transparent;\n  width: 100%;\n}\n#questionaire .image-grid .item input[type=checkbox],\n#questionaire .image-grid .item input[type=radio] {\n  display: none;\n}\n#questionaire .image-grid .item .title {\n  margin: 0 0 20px 0;\n  font-weight: bold;\n  text-align: left;\n  font-size: 18px;\n}\n#questionaire .image-grid .item .icon-check {\n  display: none;\n}\n#questionaire .image-grid .item:hover img {\n  opacity: 0.9;\n  filter: brightness(1.1);\n}\n#questionaire .image-grid .item.selected img {\n  border-color: var(--light-brown);\n}\n#questionaire .image-grid .item.selected .icon-check {\n  display: grid;\n  place-items: center;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  background: #fff;\n  border-radius: 50%;\n}\n#questionaire .form-group label {\n  text-align: left;\n  display: block;\n}\n#questionaire .form-group input:not([type=checkbox]) {\n  display: block;\n  margin-bottom: 10px;\n  width: 100%;\n  border: 2px solid #efefef;\n  border-radius: 0;\n  padding: 10px;\n}\n#questionaire .form-group textarea {\n  border: 2px solid var(--light-brown);\n  display: block;\n  width: 100%;\n}\n@media (min-width: 940px) {\n  #questionaire .page-content {\n    display: flex;\n    justify-content: space-between;\n  }\n  #questionaire .page-content .left {\n    flex: 0 0 32%;\n  }\n  #questionaire .page-content .right {\n    flex: 0 0 58%;\n  }\n  #questionaire .image-grid {\n    display: grid;\n    gap: 10px;\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n#questionaire .slide-fade-enter-active {\n  transition: all 0.3s ease-out;\n}\n#questionaire .slide-fade-leave-active {\n  position: absolute;\n  z-index: -1;\n  transition: all 0.3s ease-out;\n}\n#questionaire .slide-fade-enter-from,\n#questionaire .slide-fade-leave-to {\n  transform: translateX(20px);\n  opacity: 0;\n}\n';
const _sfc_main$1 = {
  props: ["page", "pages"]
};
const _hoisted_1$1 = {class: "page-nav"};
const _hoisted_2$1 = /* @__PURE__ */ createVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ createVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M7 16l-4-4m0 0l4-4m-4 4h18"
  })
], -1);
const _hoisted_3$1 = /* @__PURE__ */ createTextVNode("\xA0\xA0 Back ");
const _hoisted_4$1 = {key: 1};
const _hoisted_5$1 = {key: 4};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1$1, [
    $props.page > 1 ? (openBlock(), createBlock("button", {
      key: 0,
      onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("back")),
      class: "inverse"
    }, [
      _hoisted_2$1,
      _hoisted_3$1
    ])) : (openBlock(), createBlock("span", _hoisted_4$1, "\xA0")),
    $props.page < $props.pages - 1 ? (openBlock(), createBlock("button", {
      key: 2,
      onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("next"))
    }, "Next")) : $props.page === $props.pages - 1 ? (openBlock(), createBlock("button", {
      key: 3,
      onClick: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("next"))
    }, "Submit")) : (openBlock(), createBlock("span", _hoisted_5$1, "\xA0"))
  ]);
}
_sfc_main$1.render = _sfc_render$1;
const _sfc_main = {
  name: "App",
  components: {
    PageNav: _sfc_main$1
  },
  data() {
    return {
      loading: false,
      page: 1,
      pages: 7,
      projects: [],
      needs: [
        {
          id: 1,
          title: "A little pick me up",
          description: "Need to spruce up the place",
          icon: null
        },
        {
          id: 2,
          title: "A whole new look",
          description: "It's ancient",
          icon: null
        },
        {
          id: 3,
          title: "Custom",
          description: "It's not what it used to be",
          icon: null
        }
      ],
      finishes: [
        {
          id: "Economical",
          title: "We need to go super economical",
          description: "$19-24/SF"
        },
        {
          id: "Average",
          title: "Average is fine by us",
          description: "$25-32/SF"
        },
        {
          id: "Quality",
          title: "Quality stuff that won't break the bank",
          description: "$32-44/SF"
        },
        {
          id: "Upscale",
          title: "Upscale all the way!",
          description: "$45+/SF"
        }
      ],
      form: {
        project: null,
        looks: [],
        need: null,
        space: null,
        budget: null,
        finish: null,
        name: null,
        email: null,
        phone: null,
        company: null,
        date: null,
        file: null,
        notimeline: 0
      }
    };
  },
  methods: {
    goto(page, condition = true) {
      if (!condition)
        return;
      if (page < 0 || page > this.pages)
        return;
      this.page = page;
    },
    isSelected(val, list) {
      return list.indexOf(val) > -1;
    },
    uploadFile() {
      this.$refs.fileUpload.click();
    },
    onFileChange(e) {
      this.form.file = e.target.files[0];
      console.log(this.form.file);
    }
  },
  computed: {
    looks() {
      if (this.form.project) {
        console.log("yes   " + this.form.project);
        for (p in this.projects) {
          if (this.projects[p].title === this.form.project) {
            return this.projects[p].looks;
          }
        }
      }
      return [];
    }
  },
  mounted() {
    this.loading = true;
    axios.get("/wp-admin/admin-ajax.php?action=projects").then((response) => {
      this.projects = response.data;
    }).catch(() => {
      this.projects = [];
    }).finally(() => {
      this.loading = false;
    });
  }
};
const _hoisted_1 = {id: "questionaire"};
const _hoisted_2 = {
  key: 0,
  class: "page-content"
};
const _hoisted_3 = {class: "left"};
const _hoisted_4 = /* @__PURE__ */ createVNode("div", {class: "heading-container"}, [
  /* @__PURE__ */ createVNode("h1", {class: "title"}, "What's your project?"),
  /* @__PURE__ */ createVNode("p", {class: "description"}, "What type of project are you looking to do?")
], -1);
const _hoisted_5 = {class: "right"};
const _hoisted_6 = {class: "image-grid"};
const _hoisted_7 = {class: "title"};
const _hoisted_8 = /* @__PURE__ */ createVNode("span", {class: "icon-check"}, [
  /* @__PURE__ */ createVNode("svg", {
    height: "24",
    width: "24",
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, [
    /* @__PURE__ */ createVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 13l4 4L19 7"
    })
  ])
], -1);
const _hoisted_9 = {
  key: 0,
  class: "page-content"
};
const _hoisted_10 = {class: "left"};
const _hoisted_11 = /* @__PURE__ */ createVNode("div", {class: "heading-container"}, [
  /* @__PURE__ */ createVNode("h1", {class: "title"}, "Select the looks you love"),
  /* @__PURE__ */ createVNode("p", {class: "description"}, "Pack as many as you like")
], -1);
const _hoisted_12 = {class: "right"};
const _hoisted_13 = {class: "image-grid"};
const _hoisted_14 = /* @__PURE__ */ createVNode("span", {class: "icon-check"}, [
  /* @__PURE__ */ createVNode("svg", {
    height: "24",
    width: "24",
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, [
    /* @__PURE__ */ createVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 13l4 4L19 7"
    })
  ])
], -1);
const _hoisted_15 = {
  key: 0,
  class: "page-content"
};
const _hoisted_16 = {class: "left"};
const _hoisted_17 = /* @__PURE__ */ createVNode("div", {class: "heading-container"}, [
  /* @__PURE__ */ createVNode("h1", {class: "title"}, "What does your space need?"),
  /* @__PURE__ */ createVNode("p", {class: "description"}, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
], -1);
const _hoisted_18 = {class: "right"};
const _hoisted_19 = {class: "box-list"};
const _hoisted_20 = {class: "title"};
const _hoisted_21 = {class: "description"};
const _hoisted_22 = /* @__PURE__ */ createVNode("span", {class: "icon-check"}, [
  /* @__PURE__ */ createVNode("svg", {
    height: "24",
    width: "24",
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, [
    /* @__PURE__ */ createVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 13l4 4L19 7"
    })
  ])
], -1);
const _hoisted_23 = {
  key: 0,
  class: "page-content"
};
const _hoisted_24 = {class: "left"};
const _hoisted_25 = /* @__PURE__ */ createVNode("div", {class: "heading-container"}, [
  /* @__PURE__ */ createVNode("h1", {class: "title"}, "Tell us your budget and finish level"),
  /* @__PURE__ */ createVNode("p", {class: "description"}, "This will give us a better understanding of your project")
], -1);
const _hoisted_26 = {class: "right"};
const _hoisted_27 = {class: "form-group text_input"};
const _hoisted_28 = /* @__PURE__ */ createVNode("label", {class: "input_text_label"}, "How big is your space (sq. ft.)", -1);
const _hoisted_29 = {class: "form-group text_input"};
const _hoisted_30 = /* @__PURE__ */ createVNode("label", {class: "input_text_label"}, "Do you have a budget for furnishings?", -1);
const _hoisted_31 = /* @__PURE__ */ createVNode("label", null, "What level of finish are you looking or?", -1);
const _hoisted_32 = {class: "box-list"};
const _hoisted_33 = {class: "title"};
const _hoisted_34 = {class: "description"};
const _hoisted_35 = /* @__PURE__ */ createVNode("span", {class: "icon-check"}, [
  /* @__PURE__ */ createVNode("svg", {
    height: "24",
    width: "24",
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, [
    /* @__PURE__ */ createVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 13l4 4L19 7"
    })
  ])
], -1);
const _hoisted_36 = {
  key: 0,
  class: "page-content"
};
const _hoisted_37 = {class: "left"};
const _hoisted_38 = /* @__PURE__ */ createVNode("div", {class: "heading-container"}, [
  /* @__PURE__ */ createVNode("h1", {class: "title"}, "Almost done"),
  /* @__PURE__ */ createVNode("p", {class: "description"}, "Just a few more details")
], -1);
const _hoisted_39 = {class: "right"};
const _hoisted_40 = {class: "form-group text_input"};
const _hoisted_41 = /* @__PURE__ */ createVNode("label", {class: "input_text_label"}, "Name", -1);
const _hoisted_42 = {class: "form-group text_input"};
const _hoisted_43 = /* @__PURE__ */ createVNode("label", {class: "input_text_label"}, "Email", -1);
const _hoisted_44 = {class: "form-group text_input"};
const _hoisted_45 = /* @__PURE__ */ createVNode("label", {class: "input_text_label"}, "Phone", -1);
const _hoisted_46 = {class: "form-group text_input"};
const _hoisted_47 = /* @__PURE__ */ createVNode("label", {class: "input_text_label"}, "Company", -1);
const _hoisted_48 = {class: "form-group text_input"};
const _hoisted_49 = /* @__PURE__ */ createVNode("label", {class: "input_text_label"}, "When do you need the project completed by?", -1);
const _hoisted_50 = {class: "form-group"};
const _hoisted_51 = /* @__PURE__ */ createTextVNode(" We're not in a rush, no timeline yet ");
const _hoisted_52 = {
  key: 0,
  class: "page-content"
};
const _hoisted_53 = {class: "left"};
const _hoisted_54 = /* @__PURE__ */ createVNode("div", {class: "heading-container"}, [
  /* @__PURE__ */ createVNode("h1", {class: "title"}, "What else would you like us to know?"),
  /* @__PURE__ */ createVNode("p", {class: "description"}, "Tell us about your company, your locatio, your brand, your ideas for the space, what you want the end product to be like, and whatever else you'd like us to know")
], -1);
const _hoisted_55 = {class: "right"};
const _hoisted_56 = {
  class: "form-group",
  style: {width: "400px"}
};
const _hoisted_57 = /* @__PURE__ */ createVNode("label", null, "Tell Us", -1);
const _hoisted_58 = {
  class: "form-group",
  style: {"text-align": "left"}
};
const _hoisted_59 = {key: 0};
const _hoisted_60 = /* @__PURE__ */ createVNode("p", {class: "description"}, "valid file formats: png, jpg, pdf", -1);
const _hoisted_61 = {
  key: 0,
  class: "page-content",
  style: {"justify-content": "center"}
};
const _hoisted_62 = /* @__PURE__ */ createVNode("div", {
  class: "thanks",
  style: {"text-align": "center"}
}, [
  /* @__PURE__ */ createVNode("span", {
    class: "icon-check",
    style: {background: "#e9edf1", "border-radius": "50%", height: "48px", width: "48px", display: "grid", "place-items": "center", margin: "0 auto 30px"}
  }, [
    /* @__PURE__ */ createVNode("svg", {
      height: "36",
      width: "36",
      xmlns: "http://www.w3.org/2000/svg",
      class: "h-6 w-6",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, [
      /* @__PURE__ */ createVNode("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M5 13l4 4L19 7"
      })
    ])
  ]),
  /* @__PURE__ */ createVNode("h1", null, "We'll be in touch"),
  /* @__PURE__ */ createVNode("p", {style: {"max-width": "400px"}}, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
], -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_page_nav = resolveComponent("page-nav");
  return openBlock(), createBlock("div", _hoisted_1, [
    createVNode(Transition, {name: "slide-fade"}, {
      default: withCtx(() => [
        $data.page == 1 ? (openBlock(), createBlock("div", _hoisted_2, [
          createVNode("div", _hoisted_3, [
            _hoisted_4,
            createVNode(_component_page_nav, {
              page: $data.page,
              pages: $data.pages,
              onNext: _cache[1] || (_cache[1] = ($event) => $options.goto($data.page + 1, $data.form.project))
            }, null, 8, ["page", "pages"])
          ]),
          createVNode("div", _hoisted_5, [
            createVNode("div", _hoisted_6, [
              (openBlock(true), createBlock(Fragment, null, renderList($data.projects, (project) => {
                return openBlock(), createBlock("div", {
                  key: project.title,
                  class: ["item", {selected: project.title === $data.form.project}]
                }, [
                  withDirectives(createVNode("input", {
                    type: "radio",
                    name: "project",
                    id: `project-${project.title}`,
                    "onUpdate:modelValue": ($event) => $data.form.project = $event,
                    value: project.title
                  }, null, 8, ["id", "onUpdate:modelValue", "value"]), [
                    [vModelRadio, $data.form.project]
                  ]),
                  createVNode("label", {
                    for: `project-${project.title}`
                  }, [
                    createVNode("img", {
                      src: project.image.sizes.medium
                    }, null, 8, ["src"]),
                    createVNode("p", _hoisted_7, toDisplayString(project.title), 1),
                    _hoisted_8
                  ], 8, ["for"])
                ], 2);
              }), 128))
            ])
          ])
        ])) : createCommentVNode("", true)
      ]),
      _: 1
    }),
    createVNode(Transition, {name: "slide-fade"}, {
      default: withCtx(() => [
        $data.page == 2 ? (openBlock(), createBlock("div", _hoisted_9, [
          createVNode("div", _hoisted_10, [
            _hoisted_11,
            createVNode(_component_page_nav, {
              page: $data.page,
              pages: $data.pages,
              onNext: _cache[2] || (_cache[2] = ($event) => $options.goto($data.page + 1, $data.form.looks)),
              onBack: _cache[3] || (_cache[3] = ($event) => $options.goto($data.page - 1, $data.form.looks))
            }, null, 8, ["page", "pages"])
          ]),
          createVNode("div", _hoisted_12, [
            createVNode("div", _hoisted_13, [
              (openBlock(true), createBlock(Fragment, null, renderList($options.looks, (look) => {
                return openBlock(), createBlock("div", {
                  key: look.title,
                  class: ["item", {selected: $options.isSelected(look.title, $data.form.looks)}]
                }, [
                  withDirectives(createVNode("input", {
                    type: "checkbox",
                    name: "looks",
                    id: `look-${look.title}`,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.form.looks = $event),
                    value: look.title
                  }, null, 8, ["id", "value"]), [
                    [vModelCheckbox, $data.form.looks]
                  ]),
                  createVNode("label", {
                    for: `look-${look.title}`
                  }, [
                    createVNode("img", {
                      src: look.image.sizes.medium
                    }, null, 8, ["src"]),
                    _hoisted_14
                  ], 8, ["for"])
                ], 2);
              }), 128))
            ])
          ])
        ])) : createCommentVNode("", true)
      ]),
      _: 1
    }),
    createVNode(Transition, {name: "slide-fade"}, {
      default: withCtx(() => [
        $data.page == 3 ? (openBlock(), createBlock("div", _hoisted_15, [
          createVNode("div", _hoisted_16, [
            _hoisted_17,
            createVNode(_component_page_nav, {
              page: $data.page,
              pages: $data.pages,
              onNext: _cache[5] || (_cache[5] = ($event) => $options.goto($data.page + 1)),
              onBack: _cache[6] || (_cache[6] = ($event) => $options.goto($data.page - 1))
            }, null, 8, ["page", "pages"])
          ]),
          createVNode("div", _hoisted_18, [
            createVNode("div", _hoisted_19, [
              (openBlock(true), createBlock(Fragment, null, renderList($data.needs, (need) => {
                return openBlock(), createBlock("div", {
                  key: need.title,
                  class: ["item", {selected: need.title === $data.form.need}]
                }, [
                  withDirectives(createVNode("input", {
                    type: "radio",
                    name: "need",
                    id: `need-${need.id}`,
                    "onUpdate:modelValue": ($event) => $data.form.need = $event,
                    value: need.title
                  }, null, 8, ["id", "onUpdate:modelValue", "value"]), [
                    [vModelRadio, $data.form.need]
                  ]),
                  createVNode("label", {
                    for: `need-${need.id}`
                  }, [
                    createVNode("h3", _hoisted_20, toDisplayString(need.title), 1),
                    createVNode("p", _hoisted_21, toDisplayString(need.description), 1),
                    _hoisted_22
                  ], 8, ["for"])
                ], 2);
              }), 128))
            ])
          ])
        ])) : createCommentVNode("", true)
      ]),
      _: 1
    }),
    createVNode(Transition, {name: "slide-fade"}, {
      default: withCtx(() => [
        $data.page == 4 ? (openBlock(), createBlock("div", _hoisted_23, [
          createVNode("div", _hoisted_24, [
            _hoisted_25,
            createVNode(_component_page_nav, {
              page: $data.page,
              pages: $data.pages,
              onNext: _cache[7] || (_cache[7] = ($event) => $options.goto($data.page + 1)),
              onBack: _cache[8] || (_cache[8] = ($event) => $options.goto($data.page - 1))
            }, null, 8, ["page", "pages"])
          ]),
          createVNode("div", _hoisted_26, [
            createVNode("div", _hoisted_27, [
              withDirectives(createVNode("input", {
                class: "text_input_field",
                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $data.form.space = $event)
              }, null, 512), [
                [vModelText, $data.form.space]
              ]),
              _hoisted_28
            ]),
            createVNode("div", _hoisted_29, [
              withDirectives(createVNode("input", {
                class: "text_input_field",
                "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $data.form.buget = $event)
              }, null, 512), [
                [vModelText, $data.form.buget]
              ]),
              _hoisted_30
            ]),
            _hoisted_31,
            createVNode("div", _hoisted_32, [
              (openBlock(true), createBlock(Fragment, null, renderList($data.finishes, (finish) => {
                return openBlock(), createBlock("div", {
                  key: finish.title,
                  class: ["item", {selected: finish.title === $data.form.finish}]
                }, [
                  withDirectives(createVNode("input", {
                    type: "radio",
                    name: "finish",
                    id: `finish-${finish.id}`,
                    "onUpdate:modelValue": ($event) => $data.form.finish = $event,
                    value: finish.title
                  }, null, 8, ["id", "onUpdate:modelValue", "value"]), [
                    [vModelRadio, $data.form.finish]
                  ]),
                  createVNode("label", {
                    for: `finish-${finish.id}`
                  }, [
                    createVNode("h3", _hoisted_33, toDisplayString(finish.title), 1),
                    createVNode("p", _hoisted_34, toDisplayString(finish.description), 1),
                    _hoisted_35
                  ], 8, ["for"])
                ], 2);
              }), 128))
            ])
          ])
        ])) : createCommentVNode("", true)
      ]),
      _: 1
    }),
    createVNode(Transition, {name: "slide-fade"}, {
      default: withCtx(() => [
        $data.page == 5 ? (openBlock(), createBlock("div", _hoisted_36, [
          createVNode("div", _hoisted_37, [
            _hoisted_38,
            createVNode(_component_page_nav, {
              page: $data.page,
              pages: $data.pages,
              onNext: _cache[11] || (_cache[11] = ($event) => $options.goto($data.page + 1)),
              onBack: _cache[12] || (_cache[12] = ($event) => $options.goto($data.page - 1))
            }, null, 8, ["page", "pages"])
          ]),
          createVNode("div", _hoisted_39, [
            createVNode("div", _hoisted_40, [
              withDirectives(createVNode("input", {
                class: "text_input_field",
                "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => $data.form.name = $event)
              }, null, 512), [
                [vModelText, $data.form.name]
              ]),
              _hoisted_41
            ]),
            createVNode("div", _hoisted_42, [
              withDirectives(createVNode("input", {
                class: "text_input_field",
                "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => $data.form.email = $event)
              }, null, 512), [
                [vModelText, $data.form.email]
              ]),
              _hoisted_43
            ]),
            createVNode("div", _hoisted_44, [
              withDirectives(createVNode("input", {
                class: "text_input_field",
                "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => $data.form.phone = $event)
              }, null, 512), [
                [vModelText, $data.form.phone]
              ]),
              _hoisted_45
            ]),
            createVNode("div", _hoisted_46, [
              withDirectives(createVNode("input", {
                class: "text_input_field",
                "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => $data.form.company = $event)
              }, null, 512), [
                [vModelText, $data.form.company]
              ]),
              _hoisted_47
            ]),
            createVNode("div", _hoisted_48, [
              withDirectives(createVNode("input", {
                class: "text_input_field",
                "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => $data.form.date = $event)
              }, null, 512), [
                [vModelText, $data.form.date]
              ]),
              _hoisted_49
            ]),
            createVNode("div", _hoisted_50, [
              createVNode("label", null, [
                withDirectives(createVNode("input", {
                  type: "checkbox",
                  "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => $data.form.notimeline = $event),
                  value: "1"
                }, null, 512), [
                  [vModelCheckbox, $data.form.notimeline]
                ]),
                _hoisted_51
              ])
            ])
          ])
        ])) : createCommentVNode("", true)
      ]),
      _: 1
    }),
    createVNode(Transition, {name: "slide-fade"}, {
      default: withCtx(() => [
        $data.page == 6 ? (openBlock(), createBlock("div", _hoisted_52, [
          createVNode("div", _hoisted_53, [
            _hoisted_54,
            createVNode(_component_page_nav, {
              page: $data.page,
              pages: $data.pages,
              onNext: _cache[19] || (_cache[19] = ($event) => $options.goto($data.page + 1)),
              onBack: _cache[20] || (_cache[20] = ($event) => $options.goto($data.page - 1))
            }, null, 8, ["page", "pages"])
          ]),
          createVNode("div", _hoisted_55, [
            createVNode("div", _hoisted_56, [
              _hoisted_57,
              withDirectives(createVNode("textarea", {
                "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => $data.form.message = $event),
                rows: "20"
              }, null, 512), [
                [vModelText, $data.form.message]
              ])
            ]),
            createVNode("div", _hoisted_58, [
              createVNode("p", null, [
                !$data.form.file ? (openBlock(), createBlock("a", {
                  key: 0,
                  href: "#",
                  onClick: _cache[22] || (_cache[22] = withModifiers((...args) => $options.uploadFile && $options.uploadFile(...args), ["prevent"])),
                  style: {color: "black", "text-decoration": "underline", "margin-top": "10px"}
                }, "upload a file")) : createCommentVNode("", true)
              ]),
              createVNode("input", {
                ref: "fileUpload",
                type: "file",
                onChange: _cache[23] || (_cache[23] = (...args) => $options.onFileChange && $options.onFileChange(...args)),
                style: {display: "none"}
              }, null, 544),
              $data.form.file && $data.form.file.name ? (openBlock(), createBlock("p", _hoisted_59, [
                createTextVNode(toDisplayString($data.form.file.name) + " ", 1),
                createVNode("span", {
                  onClick: _cache[24] || (_cache[24] = ($event) => $data.form.file = null),
                  style: {cursor: "pointer"}
                }, "\xD7")
              ])) : createCommentVNode("", true),
              _hoisted_60
            ])
          ])
        ])) : createCommentVNode("", true)
      ]),
      _: 1
    }),
    createVNode(Transition, {name: "slide-fade"}, {
      default: withCtx(() => [
        $data.page == 7 ? (openBlock(), createBlock("div", _hoisted_61, [
          _hoisted_62
        ])) : createCommentVNode("", true)
      ]),
      _: 1
    })
  ]);
}
_sfc_main.render = _sfc_render;
createApp(_sfc_main).mount("#app");
