(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recipes-recipes-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipes-item/recipes-item.component.html":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipes-item/recipes-item.component.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRecipesRecipesItemRecipesItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-item  [routerLink]=\"['/recipes',recipeItem.id]\">\n  <ion-avatar slot=\"start\">\n    <ion-img [src]=\"recipeItem.imgUrl\"></ion-img>\n  </ion-avatar>\n  <ion-label>\n    {{recipeItem.title}}\n  </ion-label>\n</ion-item>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipes.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipes.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRecipesRecipesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>recipes!</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n        <ion-col size-md=\"6\" offset-md=\"3\">\n          <ion-list >\n          <app-recipes-item [recipeItem]=\"recipe\" *ngFor=\"let recipe of recipes\"></app-recipes-item>\n          </ion-list>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/recipes/recipes-item/recipes-item.component.scss":
    /*!******************************************************************!*\
      !*** ./src/app/recipes/recipes-item/recipes-item.component.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppRecipesRecipesItemRecipesItemComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlcy1pdGVtL3JlY2lwZXMtaXRlbS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/recipes/recipes-item/recipes-item.component.ts":
    /*!****************************************************************!*\
      !*** ./src/app/recipes/recipes-item/recipes-item.component.ts ***!
      \****************************************************************/

    /*! exports provided: RecipesItemComponent */

    /***/
    function srcAppRecipesRecipesItemRecipesItemComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecipesItemComponent", function () {
        return RecipesItemComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var RecipesItemComponent = /*#__PURE__*/function () {
        function RecipesItemComponent() {
          _classCallCheck(this, RecipesItemComponent);
        }

        _createClass(RecipesItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RecipesItemComponent;
      }();

      RecipesItemComponent.ctorParameters = function () {
        return [];
      };

      RecipesItemComponent.propDecorators = {
        recipeItem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      RecipesItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipes-item',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./recipes-item.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipes-item/recipes-item.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./recipes-item.component.scss */
        "./src/app/recipes/recipes-item/recipes-item.component.scss"))["default"]]
      })], RecipesItemComponent);
      /***/
    },

    /***/
    "./src/app/recipes/recipes-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/recipes/recipes-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: RecipesPageRoutingModule */

    /***/
    function srcAppRecipesRecipesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecipesPageRoutingModule", function () {
        return RecipesPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _recipes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./recipes.page */
      "./src/app/recipes/recipes.page.ts");

      var routes = [{
        path: '',
        component: _recipes_page__WEBPACK_IMPORTED_MODULE_3__["RecipesPage"]
      }, {
        path: 'recipe-detail',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | recipe-detail-recipe-detail-module */
          "common").then(__webpack_require__.bind(null,
          /*! ./recipe-detail/recipe-detail.module */
          "./src/app/recipes/recipe-detail/recipe-detail.module.ts")).then(function (m) {
            return m.RecipeDetailPageModule;
          });
        }
      }];

      var RecipesPageRoutingModule = function RecipesPageRoutingModule() {
        _classCallCheck(this, RecipesPageRoutingModule);
      };

      RecipesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RecipesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/recipes/recipes.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/recipes/recipes.module.ts ***!
      \*******************************************/

    /*! exports provided: RecipesPageModule */

    /***/
    function srcAppRecipesRecipesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecipesPageModule", function () {
        return RecipesPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _recipes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./recipes-routing.module */
      "./src/app/recipes/recipes-routing.module.ts");
      /* harmony import */


      var _recipes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./recipes.page */
      "./src/app/recipes/recipes.page.ts");
      /* harmony import */


      var _recipes_item_recipes_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./recipes-item/recipes-item.component */
      "./src/app/recipes/recipes-item/recipes-item.component.ts");

      var RecipesPageModule = function RecipesPageModule() {
        _classCallCheck(this, RecipesPageModule);
      };

      RecipesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _recipes_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecipesPageRoutingModule"]],
        declarations: [_recipes_page__WEBPACK_IMPORTED_MODULE_6__["RecipesPage"], _recipes_item_recipes_item_component__WEBPACK_IMPORTED_MODULE_7__["RecipesItemComponent"]]
      })], RecipesPageModule);
      /***/
    },

    /***/
    "./src/app/recipes/recipes.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/recipes/recipes.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppRecipesRecipesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlcy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/recipes/recipes.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/recipes/recipes.page.ts ***!
      \*****************************************/

    /*! exports provided: RecipesPage */

    /***/
    function srcAppRecipesRecipesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecipesPage", function () {
        return RecipesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _recipes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./recipes.service */
      "./src/app/recipes/recipes.service.ts");

      var RecipesPage = /*#__PURE__*/function () {
        function RecipesPage(recipeService) {
          _classCallCheck(this, RecipesPage);

          this.recipeService = recipeService;
        }

        _createClass(RecipesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.recipes = this.recipeService.getAllRecipes();
          }
        }]);

        return RecipesPage;
      }();

      RecipesPage.ctorParameters = function () {
        return [{
          type: _recipes_service__WEBPACK_IMPORTED_MODULE_2__["RecipesService"]
        }];
      };

      RecipesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./recipes.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipes.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./recipes.page.scss */
        "./src/app/recipes/recipes.page.scss"))["default"]]
      })], RecipesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=recipes-recipes-module-es5.js.map