'use strict';
(self.webpackChunkflights = self.webpackChunkflights || []).push([
  [179],
  {
    5416: (Je, me, C) => {
      C.d(me, { e: () => D });
      var p = C(9523);
      let D = (() => {
        class P {
          constructor() {
            this._userName = '';
          }
          get userName() {
            return this._userName;
          }
          login(Y) {
            this._userName = Y;
          }
          logout() {
            this._userName = '';
          }
          isAuth() {
            return '' !== this._userName;
          }
        }
        return (
          (P.ɵfac = function (Y) {
            return new (Y || P)();
          }),
          (P.ɵprov = p.Yz7({ token: P, factory: P.ɵfac, providedIn: 'root' })),
          P
        );
      })();
    },
    6209: (Je, me, C) => {
      C.d(me, { E: () => H });
      var p = C(3144),
        D = C(9523),
        P = C(1135),
        J = C(9300);
      const Y = { baseUrl: '' };
      let H = (() => {
        class ee {
          constructor() {
            (this.http = (0, D.f3M)(p.eN)),
              (this._config = Y),
              (this.loadedSubject = new P.X(!1)),
              (this.loaded$ = this.loadedSubject
                .asObservable()
                .pipe((0, J.h)((de) => !!de)));
          }
          get config() {
            return { ...this._config };
          }
          loadConfig() {
            this.http.get('./assets/config.json').subscribe((de) => {
              (this._config = de), this.loadedSubject.next(!0);
            });
          }
        }
        return (
          (ee.ɵfac = function (de) {
            return new (de || ee)();
          }),
          (ee.ɵprov = D.Yz7({
            token: ee,
            factory: ee.ɵfac,
            providedIn: 'root',
          })),
          ee
        );
      })();
    },
    616: (Je, me, C) => {
      C.d(me, { mQ: () => xe, jm: () => Xe, I$: () => Te });
      class p {}
      const D = { debug: 32, info: 34, error: 31 };
      var P = C(9523),
        J = (() => (
          ((J = J || {})[(J.DEBUG = 0)] = 'DEBUG'),
          (J[(J.INFO = 1)] = 'INFO'),
          (J[(J.ERROR = 2)] = 'ERROR'),
          J
        ))();
      class Y {}
      let H = (() => {
        class Ye {
          constructor() {
            this.config = (0, P.f3M)(p);
          }
          apply(qe, ue) {
            const ne = J[qe].toLowerCase();
            return `\x1b[${this.config[ne]}m${ue}\x1b[0m`;
          }
        }
        return (
          (Ye.ɵfac = function (qe) {
            return new (qe || Ye)();
          }),
          (Ye.ɵprov = P.Yz7({ token: Ye, factory: Ye.ɵfac })),
          Ye
        );
      })();
      var ee = (() => (
        ((ee = ee || {})[(ee.COLOR = 0)] = 'COLOR'),
        (ee[(ee.OTHER_FEATURE = 1)] = 'OTHER_FEATURE'),
        (ee[(ee.ADDITIONAL_FEATURE = 2)] = 'ADDITIONAL_FEATURE'),
        ee
      ))();
      function Te(Ye) {
        const pt = { ...D, ...Ye };
        return {
          kind: ee.COLOR,
          providers: [
            { provide: p, useValue: pt },
            { provide: Y, useClass: H },
          ],
        };
      }
      let $ = (() => {
        class Ye {
          constructor() {
            this.colorService = (0, P.f3M)(Y, { optional: !0, self: !0 });
          }
          append(qe, ue, ne) {
            this.colorService && (ne = this.colorService.apply(qe, ne)),
              console.log(ne);
          }
        }
        return (
          (Ye.ɵfac = function (qe) {
            return new (qe || Ye)();
          }),
          (Ye.ɵprov = P.Yz7({ token: Ye, factory: Ye.ɵfac })),
          Ye
        );
      })();
      const oe = new P.OlP('LOG_APPENDERS'),
        le = new P.OlP('LOG_FORMATTER');
      class Le {}
      const et = {
        level: J.DEBUG,
        formatter: (Ye, pt, qe) =>
          `[${J[Ye].padEnd(5)}] ${pt.toUpperCase()} ${qe}`,
        appenders: [$],
      };
      let xe = (() => {
        class Ye {
          constructor() {
            (this.formatter = (0, P.f3M)(le)),
              (this.config = (0, P.f3M)(Le)),
              (this.appenders = (0, P.f3M)(oe)),
              (this.parentLogger = (0, P.f3M)(Ye, {
                optional: !0,
                skipSelf: !0,
              }));
          }
          log(qe, ue, ne) {
            if (qe < this.config.level) return;
            const se = this.formatter(qe, ue, ne);
            for (const ce of this.appenders) ce.append(qe, ue, se);
            this.parentLogger && this.parentLogger.log(qe, ue, ne);
          }
          error(qe, ue) {
            this.log(J.ERROR, qe, ue);
          }
          info(qe, ue) {
            this.log(J.INFO, qe, ue);
          }
          debug(qe, ue) {
            this.log(J.DEBUG, qe, ue);
          }
        }
        return (
          (Ye.ɵfac = function (qe) {
            return new (qe || Ye)();
          }),
          (Ye.ɵprov = P.Yz7({ token: Ye, factory: Ye.ɵfac })),
          Ye
        );
      })();
      function Xe(Ye, ...pt) {
        const qe = { ...et, ...Ye };
        if ((pt?.filter((ne) => ne.kind === ee.COLOR)?.length ?? 0) > 1)
          throw new Error('Only one color feature allowed for logger!');
        return (0, P.MR2)([
          xe,
          { provide: Le, useValue: qe },
          { provide: le, useValue: qe.formatter },
          qe.appenders.map((ne) => ({ provide: oe, useClass: ne, multi: !0 })),
          pt.map((ne) => ne.providers),
        ]);
      }
    },
    4382: (Je, me, C) => {
      C.r(me), C.d(me, { NextFlightsModule: () => de });
      var p = C(4755),
        D = C(9646),
        P = C(9523);
      let J = (() => {
        class $ {
          load() {
            const le = new Date().toISOString();
            return (0, D.of)([
              { id: 7, from: 'Paris', to: 'London', date: le, delayed: !1 },
              { id: 8, from: 'London', to: 'Paris', date: le, delayed: !1 },
              { id: 9, from: 'Paris', to: 'Berlin', date: le, delayed: !1 },
            ]);
          }
        }
        return (
          ($.ɵfac = function (le) {
            return new (le || $)();
          }),
          ($.ɵprov = P.Yz7({ token: $, factory: $.ɵfac })),
          $
        );
      })();
      var Y = C(2008);
      let H = (() => {
        class $ {}
        return (
          ($.ɵfac = function (le) {
            return new (le || $)();
          }),
          ($.ɵcmp = P.Xpm({
            type: $,
            selectors: [['app-checkin']],
            decls: 2,
            vars: 0,
            template: function (le, Ve) {
              1 & le &&
                (P.TgZ(0, 'b'),
                P._uU(1, 'Check in for your flights now!'),
                P.qZA());
            },
          })),
          $
        );
      })();
      const Te = [
        {
          path: '',
          pathMatch: 'full',
          component: (() => {
            class $ {
              constructor() {
                (this.nextFlightsService = (0, P.f3M)(J)),
                  (this.flights$ = this.nextFlightsService.load());
              }
            }
            return (
              ($.ɵfac = function (le) {
                return new (le || $)();
              }),
              ($.ɵcmp = P.Xpm({
                type: $,
                selectors: [['app-next-flights']],
                decls: 7,
                vars: 5,
                template: function (le, Ve) {
                  1 & le &&
                    (P.TgZ(0, 'h2'),
                    P._uU(1, 'Your Next Flights'),
                    P.qZA(),
                    P.TgZ(2, 'pre'),
                    P._uU(3),
                    P.ALo(4, 'json'),
                    P.ALo(5, 'async'),
                    P.qZA(),
                    P._UZ(6, 'app-checkin')),
                    2 & le &&
                      (P.xp6(3), P.Oqu(P.lcZ(4, 1, P.lcZ(5, 3, Ve.flights$))));
                },
                dependencies: [H, p.Ov, p.Ts],
              })),
              $
            );
          })(),
        },
      ];
      let de = (() => {
        class $ {}
        return (
          ($.ɵfac = function (le) {
            return new (le || $)();
          }),
          ($.ɵmod = P.oAB({ type: $ })),
          ($.ɵinj = P.cJS({
            providers: [J],
            imports: [p.ez, Y.Bz.forChild(Te)],
          })),
          $
        );
      })();
    },
    3813: (Je, me, C) => {
      var p = C(3144),
        D = C(9523),
        P = C(4942),
        J = C(6550),
        Y = C(2008),
        H = C(4755),
        ee = C(9300),
        Te = C(4004),
        de = C(6451);
      const $ = function () {
          return { aux: 'basket' };
        },
        oe = function (De) {
          return { outlets: De };
        },
        le = function (De) {
          return [De];
        };
      let Ve = (() => {
          class De {}
          return (
            (De.ɵfac = function (W) {
              return new (W || De)();
            }),
            (De.ɵcmp = D.Xpm({
              type: De,
              selectors: [['app-sidebar-cmp']],
              standalone: !0,
              features: [D.jDz],
              decls: 28,
              vars: 6,
              consts: [
                [1, 'sidebar-wrapper'],
                [1, 'logo'],
                [
                  'href',
                  'http://angulararchitects.io',
                  1,
                  'simple-text',
                  'logo-mini',
                ],
                [1, 'logo-image-small'],
                ['src', 'assets/paper-design/angular2-logo.png'],
                [
                  'href',
                  'http://angulararchitects.io',
                  1,
                  'simple-text',
                  'logo-normal',
                ],
                [1, 'nav'],
                [1, 'active'],
                ['routerLink', 'home'],
                ['routerLink', 'flight-booking'],
                ['routerLink', 'next-flights'],
                ['routerLink', 'about'],
                [3, 'routerLink'],
              ],
              template: function (W, ae) {
                1 & W &&
                  (D.TgZ(0, 'div', 0)(1, 'div', 1)(2, 'a', 2)(3, 'div', 3),
                  D._UZ(4, 'img', 4),
                  D.qZA()(),
                  D.TgZ(5, 'a', 5),
                  D._uU(6, ' Flights 42 '),
                  D.qZA()(),
                  D.TgZ(7, 'ul', 6)(8, 'li', 7)(9, 'a', 8)(10, 'p'),
                  D._uU(11, 'Home'),
                  D.qZA()()(),
                  D.TgZ(12, 'li')(13, 'a', 9)(14, 'p'),
                  D._uU(15, 'Flights'),
                  D.qZA()()(),
                  D.TgZ(16, 'li')(17, 'a', 10)(18, 'p'),
                  D._uU(19, 'Next Flights'),
                  D.qZA()()(),
                  D.TgZ(20, 'li')(21, 'a', 11)(22, 'p'),
                  D._uU(23, 'About'),
                  D.qZA()()(),
                  D.TgZ(24, 'li')(25, 'a', 12)(26, 'p'),
                  D._uU(27, 'Basket'),
                  D.qZA()()()()()),
                  2 & W &&
                    (D.xp6(25),
                    D.Q6J(
                      'routerLink',
                      D.VKq(4, le, D.VKq(2, oe, D.DdM(1, $)))
                    ));
              },
              dependencies: [Y.rH],
              encapsulation: 2,
            })),
            De
          );
        })(),
        Le = (() => {
          class De {
            constructor() {
              this.sidebarVisible = !1;
            }
            sidebarToggle() {
              const W = document.getElementsByTagName('body')[0];
              0 == this.sidebarVisible
                ? (W.classList.add('nav-open'), (this.sidebarVisible = !0))
                : ((this.sidebarVisible = !1), W.classList.remove('nav-open'));
            }
          }
          return (
            (De.ɵfac = function (W) {
              return new (W || De)();
            }),
            (De.ɵcmp = D.Xpm({
              type: De,
              selectors: [['app-navbar-cmp']],
              standalone: !0,
              features: [D.jDz],
              decls: 47,
              vars: 1,
              consts: [
                [
                  1,
                  'navbar',
                  'navbar-expand-lg',
                  'navbar-absolute',
                  'fixed-top',
                  'navbar-transparent',
                ],
                [1, 'container-fluid'],
                [1, 'navbar-wrapper'],
                [1, 'navbar-toggle'],
                ['type', 'button', 1, 'navbar-toggler', 3, 'click'],
                [1, 'navbar-toggler-bar', 'bar1'],
                [1, 'navbar-toggler-bar', 'bar2'],
                [1, 'navbar-toggler-bar', 'bar3'],
                ['href', '', 1, 'navbar-brand'],
                [
                  'type',
                  'button',
                  'aria-controls',
                  'collapseExample',
                  1,
                  'navbar-toggler',
                  3,
                  'click',
                ],
                [1, 'navbar-toggler-bar', 'navbar-kebab'],
                [
                  'id',
                  'collapseExample',
                  1,
                  'collapse',
                  'navbar-collapse',
                  'justify-content-end',
                ],
                [1, 'input-group', 'no-border'],
                [
                  'type',
                  'text',
                  'value',
                  '',
                  'placeholder',
                  'Search...',
                  1,
                  'form-control',
                ],
                [1, 'input-group-append'],
                [1, 'input-group-text'],
                [1, 'nc-icon', 'nc-zoom-split'],
                [1, 'navbar-nav'],
                [1, 'nav-item'],
                ['href', 'javascript:void(0)', 1, 'nav-link', 'btn-magnify'],
                [1, 'nc-icon', 'nc-layout-11'],
                [1, 'd-lg-none', 'd-md-block'],
                [
                  'ngbDropdown',
                  '',
                  'placement',
                  'bottom-left',
                  1,
                  'nav-item',
                  'btn-rotate',
                ],
                [
                  'ngbDropdownToggle',
                  '',
                  'id',
                  'navbarDropdownMenuLink',
                  1,
                  'nav-link',
                ],
                [1, 'nc-icon', 'nc-bell-55'],
                [
                  'ngbDropdownMenu',
                  '',
                  'aria-labelledby',
                  'navbarDropdownMenuLink',
                  1,
                  'dropdown-menu',
                  'dropdown-menu-right',
                ],
                ['ngbDropdownItem', '', 'href', 'javascript:void(0)'],
                ['href', 'javascript:void(0)', 1, 'nav-link', 'btn-rotate'],
                [1, 'nc-icon', 'nc-settings-gear-65'],
              ],
              template: function (W, ae) {
                1 & W &&
                  (D.TgZ(0, 'nav', 0)(1, 'div', 1)(2, 'div', 2)(3, 'div', 3)(
                    4,
                    'button',
                    4
                  ),
                  D.NdJ('click', function () {
                    return ae.sidebarToggle();
                  }),
                  D._UZ(5, 'span', 5)(6, 'span', 6)(7, 'span', 7),
                  D.qZA()(),
                  D.TgZ(8, 'a', 8),
                  D._uU(9, 'Flights42'),
                  D.qZA()(),
                  D.TgZ(10, 'button', 9),
                  D.NdJ('click', function () {
                    return ae.sidebarToggle();
                  }),
                  D._UZ(11, 'span', 10)(12, 'span', 10)(13, 'span', 10),
                  D.qZA(),
                  D.TgZ(14, 'div', 11)(15, 'form')(16, 'div', 12),
                  D._UZ(17, 'input', 13),
                  D.TgZ(18, 'div', 14)(19, 'div', 15),
                  D._UZ(20, 'i', 16),
                  D.qZA()()()(),
                  D.TgZ(21, 'ul', 17)(22, 'li', 18)(23, 'a', 19),
                  D._UZ(24, 'i', 20),
                  D.TgZ(25, 'p')(26, 'span', 21),
                  D._uU(27, 'Stats'),
                  D.qZA()()()(),
                  D.TgZ(28, 'li', 22)(29, 'a', 23),
                  D._UZ(30, 'i', 24),
                  D.TgZ(31, 'p')(32, 'span', 21),
                  D._uU(33, 'Some Actions'),
                  D.qZA()()(),
                  D.TgZ(34, 'div', 25)(35, 'a', 26),
                  D._uU(36, 'Action'),
                  D.qZA(),
                  D.TgZ(37, 'a', 26),
                  D._uU(38, 'Another action'),
                  D.qZA(),
                  D.TgZ(39, 'a', 26),
                  D._uU(40, 'Something else here'),
                  D.qZA()()(),
                  D.TgZ(41, 'li', 18)(42, 'a', 27),
                  D._UZ(43, 'i', 28),
                  D.TgZ(44, 'p')(45, 'span', 21),
                  D._uU(46, 'Account'),
                  D.qZA()()()()()()()()),
                  2 & W &&
                    (D.xp6(10), D.uIk('aria-expanded', !ae.sidebarVisible));
              },
              encapsulation: 2,
            })),
            De
          );
        })();
      var et = C(6209);
      function xe(De, z) {
        1 & De &&
          (D.TgZ(0, 'div', 6)(1, 'div', 7),
          D._UZ(2, 'div', 8)(3, 'div', 9),
          D.qZA()());
      }
      let Xe = (() => {
          class De {
            constructor() {
              (this.title = 'Hello World!'),
                (this.configService = (0, D.f3M)(et.E)),
                (this.router = (0, D.f3M)(Y.F0)),
                this.configService.loadConfig();
              const W = this.router.events.pipe(
                  (0, ee.h)(
                    (Me) =>
                      Me instanceof Y.m2 ||
                      Me instanceof Y.Q3 ||
                      Me instanceof Y.gk
                  ),
                  (0, Te.U)(() => !1)
                ),
                ae = this.router.events.pipe(
                  (0, ee.h)((Me) => Me instanceof Y.OD),
                  (0, Te.U)(() => !0)
                );
              this.loading$ = (0, de.T)(ae, W);
            }
          }
          return (
            (De.ɵfac = function (W) {
              return new (W || De)();
            }),
            (De.ɵcmp = D.Xpm({
              type: De,
              selectors: [['app-root']],
              standalone: !0,
              features: [D.jDz],
              decls: 10,
              vars: 3,
              consts: [
                [1, 'wrapper'],
                [
                  'data-color',
                  'white',
                  'data-active-color',
                  'danger',
                  1,
                  'sidebar',
                ],
                [1, 'main-panel'],
                [1, 'content'],
                ['name', 'aux'],
                ['class', 'loading-indicator', 4, 'ngIf'],
                [1, 'loading-indicator'],
                [1, 'spinner'],
                [1, 'double-bounce1'],
                [1, 'double-bounce2'],
              ],
              template: function (W, ae) {
                1 & W &&
                  (D.TgZ(0, 'div', 0)(1, 'div', 1),
                  D._UZ(2, 'app-sidebar-cmp'),
                  D.qZA(),
                  D.TgZ(3, 'div', 2),
                  D._UZ(4, 'app-navbar-cmp'),
                  D.TgZ(5, 'div', 3),
                  D._UZ(6, 'router-outlet'),
                  D.qZA(),
                  D._UZ(7, 'router-outlet', 4),
                  D.qZA()(),
                  D.YNc(8, xe, 4, 0, 'div', 5),
                  D.ALo(9, 'async')),
                  2 & W && (D.xp6(8), D.Q6J('ngIf', D.lcZ(9, 1, ae.loading$)));
              },
              dependencies: [Ve, Le, Y.lC, H.Ov, H.O5],
              styles: [
                '.loading-indicator[_ngcontent-%COMP%]{position:fixed;left:0;top:0;width:100%;height:100%;background-color:#000;opacity:.3;z-index:1000}.spinner[_ngcontent-%COMP%]{width:40px;height:40px;position:relative;margin:100px auto}.double-bounce1[_ngcontent-%COMP%], .double-bounce2[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:50%;background-color:#fff;opacity:.6;position:absolute;top:0;left:0;animation:_ngcontent-%COMP%_sk-bounce 2s infinite ease-in-out}.double-bounce2[_ngcontent-%COMP%]{animation-delay:-1s}@keyframes _ngcontent-%COMP%_sk-bounce{0%,to{transform:scale(0);-webkit-transform:scale(0)}50%{transform:scale(1);-webkit-transform:scale(1)}}',
              ],
            })),
            De
          );
        })(),
        Ye = (() => {
          class De {}
          return (
            (De.ɵfac = function (W) {
              return new (W || De)();
            }),
            (De.ɵcmp = D.Xpm({
              type: De,
              selectors: [['app-about']],
              standalone: !0,
              features: [D.jDz],
              decls: 3,
              vars: 0,
              template: function (W, ae) {
                1 & W &&
                  (D.TgZ(0, 'h1'),
                  D._uU(1, 'About'),
                  D.qZA(),
                  D._uU(2, ' Fligh-App by AngularArchitects.io\n'));
              },
              dependencies: [H.ez],
            })),
            De
          );
        })();
      var pt = C(616),
        qe = C(5416);
      function ue(De, z) {
        1 & De && (D.TgZ(0, 'h1'), D._uU(1, 'Welcome!'), D.qZA());
      }
      function ne(De, z) {
        if ((1 & De && (D.TgZ(0, 'h1'), D._uU(1), D.qZA()), 2 & De)) {
          const W = D.oxw();
          D.xp6(1), D.hij('Welcome ', W.auth.userName, '!');
        }
      }
      const ce = function () {
          return { aux: null };
        },
        _e = function (De) {
          return { outlets: De };
        },
        ye = function (De) {
          return ['/', De];
        },
        te = [
          { path: '', pathMatch: 'full', redirectTo: 'home' },
          {
            path: 'home',
            component: (() => {
              class De {
                constructor() {
                  (this.logger = (0, D.f3M)(pt.mQ)),
                    (this.auth = (0, D.f3M)(qe.e)),
                    this.logger.debug('home', 'debug'),
                    this.logger.info('home', 'info'),
                    this.logger.error('home', 'error');
                }
              }
              return (
                (De.ɵfac = function (W) {
                  return new (W || De)();
                }),
                (De.ɵcmp = D.Xpm({
                  type: De,
                  selectors: [['app-home']],
                  standalone: !0,
                  features: [D.jDz],
                  decls: 6,
                  vars: 2,
                  consts: [
                    [4, 'ngIf'],
                    [1, 'btn', 'btn-default', 3, 'click'],
                  ],
                  template: function (W, ae) {
                    1 & W &&
                      (D.YNc(0, ue, 2, 0, 'h1', 0),
                      D.YNc(1, ne, 2, 1, 'h1', 0),
                      D.TgZ(2, 'button', 1),
                      D.NdJ('click', function () {
                        return ae.auth.login('Max');
                      }),
                      D._uU(3, 'Login'),
                      D.qZA(),
                      D.TgZ(4, 'button', 1),
                      D.NdJ('click', function () {
                        return ae.auth.logout();
                      }),
                      D._uU(5, 'Logout'),
                      D.qZA()),
                      2 & W &&
                        (D.Q6J('ngIf', !ae.auth.userName),
                        D.xp6(1),
                        D.Q6J('ngIf', ae.auth.userName));
                  },
                  dependencies: [H.ez, H.O5],
                })),
                De
              );
            })(),
          },
          {
            path: 'basket',
            component: (() => {
              class De {}
              return (
                (De.ɵfac = function (W) {
                  return new (W || De)();
                }),
                (De.ɵcmp = D.Xpm({
                  type: De,
                  selectors: [['app-basket']],
                  standalone: !0,
                  features: [D.jDz],
                  decls: 15,
                  vars: 6,
                  consts: [
                    [1, 'gray-bg'],
                    [1, 'flight-history'],
                    [1, 'flight-history-inside', 'card'],
                    [1, 'card-body'],
                    [1, 'list-group'],
                    [1, 'list-group-item'],
                    [1, 'btn', 'btn-default', 3, 'routerLink'],
                  ],
                  template: function (W, ae) {
                    1 & W &&
                      (D._UZ(0, 'div', 0),
                      D.TgZ(1, 'div', 1)(2, 'div', 2)(3, 'div', 3)(4, 'h2'),
                      D._uU(5, 'Your Basket'),
                      D.qZA(),
                      D.TgZ(6, 'ul', 4)(7, 'li', 5)(8, 'p'),
                      D._uU(9, 'Hamburg - Graz'),
                      D.qZA()(),
                      D.TgZ(10, 'li', 5)(11, 'p'),
                      D._uU(12, 'Graz - Hamburg'),
                      D.qZA()()(),
                      D.TgZ(13, 'a', 6),
                      D._uU(14, ' Close '),
                      D.qZA()()()()),
                      2 & W &&
                        (D.xp6(13),
                        D.Q6J(
                          'routerLink',
                          D.VKq(4, ye, D.VKq(2, _e, D.DdM(1, ce)))
                        ));
                  },
                  dependencies: [H.ez, Y.rH],
                  styles: [
                    '.gray-bg[_ngcontent-%COMP%]{opacity:.4;background-color:#000;left:0;top:0;width:100%;height:100%;position:fixed;z-index:2000}.flight-history[_ngcontent-%COMP%]{left:0;top:0;width:100%;height:100%;position:fixed;z-index:2010}.flight-history-inside[_ngcontent-%COMP%]{background-color:#fff;margin:100px auto;width:400px}',
                  ],
                })),
                De
              );
            })(),
            outlet: 'aux',
          },
          {
            path: '',
            resolve: { config: () => (0, D.f3M)(et.E).loaded$ },
            children: [
              {
                path: 'flight-booking',
                loadChildren: () =>
                  C.e(623)
                    .then(C.bind(C, 5623))
                    .then((De) => De.FLIGHT_BOOKING_ROUTES),
              },
              {
                path: 'next-flights',
                loadChildren: () =>
                  Promise.resolve()
                    .then(C.bind(C, 4382))
                    .then((De) => De.NextFlightsModule),
              },
              { path: 'about', component: Ye },
              {
                path: '**',
                component: (() => {
                  class De {}
                  return (
                    (De.ɵfac = function (W) {
                      return new (W || De)();
                    }),
                    (De.ɵcmp = D.Xpm({
                      type: De,
                      selectors: [['app-not-found']],
                      standalone: !0,
                      features: [D.jDz],
                      decls: 2,
                      vars: 0,
                      template: function (W, ae) {
                        1 & W &&
                          (D.TgZ(0, 'p'),
                          D._uU(1, 'not-found works!'),
                          D.qZA());
                      },
                      dependencies: [H.ez],
                    })),
                    De
                  );
                })(),
              },
            ],
          },
        ];
      var Ne = C(4382);
      (0, J.Cg)(Xe, {
        providers: [
          (0, p.h_)(),
          (0, Y.bU)(te, (0, Y.aF)(Y.wm)),
          (0, D.RIp)(Ne.NextFlightsModule),
          (0, D.RIp)(P.Is),
          (0, pt.jm)({}, (0, pt.I$)()),
        ],
      });
    },
    1135: (Je, me, C) => {
      C.d(me, { X: () => D });
      var p = C(7579);
      class D extends p.x {
        constructor(J) {
          super(), (this._value = J);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(J) {
          const Y = super._subscribe(J);
          return !Y.closed && J.next(this._value), Y;
        }
        getValue() {
          const { hasError: J, thrownError: Y, _value: H } = this;
          if (J) throw Y;
          return this._throwIfClosed(), H;
        }
        next(J) {
          super.next((this._value = J));
        }
      }
    },
    9751: (Je, me, C) => {
      C.d(me, { y: () => Te });
      var p = C(930),
        D = C(727),
        P = C(8822),
        J = C(9635),
        Y = C(2416),
        H = C(576),
        ee = C(2806);
      let Te = (() => {
        class le {
          constructor(Le) {
            Le && (this._subscribe = Le);
          }
          lift(Le) {
            const et = new le();
            return (et.source = this), (et.operator = Le), et;
          }
          subscribe(Le, et, xe) {
            const Xe = (function oe(le) {
              return (
                (le && le instanceof p.Lv) ||
                ((function $(le) {
                  return (
                    le &&
                    (0, H.m)(le.next) &&
                    (0, H.m)(le.error) &&
                    (0, H.m)(le.complete)
                  );
                })(le) &&
                  (0, D.Nn)(le))
              );
            })(Le)
              ? Le
              : new p.Hp(Le, et, xe);
            return (
              (0, ee.x)(() => {
                const { operator: Ye, source: pt } = this;
                Xe.add(
                  Ye
                    ? Ye.call(Xe, pt)
                    : pt
                    ? this._subscribe(Xe)
                    : this._trySubscribe(Xe)
                );
              }),
              Xe
            );
          }
          _trySubscribe(Le) {
            try {
              return this._subscribe(Le);
            } catch (et) {
              Le.error(et);
            }
          }
          forEach(Le, et) {
            return new (et = de(et))((xe, Xe) => {
              const Ye = new p.Hp({
                next: (pt) => {
                  try {
                    Le(pt);
                  } catch (qe) {
                    Xe(qe), Ye.unsubscribe();
                  }
                },
                error: Xe,
                complete: xe,
              });
              this.subscribe(Ye);
            });
          }
          _subscribe(Le) {
            var et;
            return null === (et = this.source) || void 0 === et
              ? void 0
              : et.subscribe(Le);
          }
          [P.L]() {
            return this;
          }
          pipe(...Le) {
            return (0, J.U)(Le)(this);
          }
          toPromise(Le) {
            return new (Le = de(Le))((et, xe) => {
              let Xe;
              this.subscribe(
                (Ye) => (Xe = Ye),
                (Ye) => xe(Ye),
                () => et(Xe)
              );
            });
          }
        }
        return (le.create = (Ve) => new le(Ve)), le;
      })();
      function de(le) {
        var Ve;
        return null !== (Ve = le ?? Y.config.Promise) && void 0 !== Ve
          ? Ve
          : Promise;
      }
    },
    7579: (Je, me, C) => {
      C.d(me, { x: () => ee });
      var p = C(9751),
        D = C(727);
      const J = (0, C(3888).d)(
        (de) =>
          function () {
            de(this),
              (this.name = 'ObjectUnsubscribedError'),
              (this.message = 'object unsubscribed');
          }
      );
      var Y = C(8737),
        H = C(2806);
      let ee = (() => {
        class de extends p.y {
          constructor() {
            super(),
              (this.closed = !1),
              (this.currentObservers = null),
              (this.observers = []),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          lift(oe) {
            const le = new Te(this, this);
            return (le.operator = oe), le;
          }
          _throwIfClosed() {
            if (this.closed) throw new J();
          }
          next(oe) {
            (0, H.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.currentObservers ||
                  (this.currentObservers = Array.from(this.observers));
                for (const le of this.currentObservers) le.next(oe);
              }
            });
          }
          error(oe) {
            (0, H.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                (this.hasError = this.isStopped = !0), (this.thrownError = oe);
                const { observers: le } = this;
                for (; le.length; ) le.shift().error(oe);
              }
            });
          }
          complete() {
            (0, H.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.isStopped = !0;
                const { observers: oe } = this;
                for (; oe.length; ) oe.shift().complete();
              }
            });
          }
          unsubscribe() {
            (this.isStopped = this.closed = !0),
              (this.observers = this.currentObservers = null);
          }
          get observed() {
            var oe;
            return (
              (null === (oe = this.observers) || void 0 === oe
                ? void 0
                : oe.length) > 0
            );
          }
          _trySubscribe(oe) {
            return this._throwIfClosed(), super._trySubscribe(oe);
          }
          _subscribe(oe) {
            return (
              this._throwIfClosed(),
              this._checkFinalizedStatuses(oe),
              this._innerSubscribe(oe)
            );
          }
          _innerSubscribe(oe) {
            const { hasError: le, isStopped: Ve, observers: Le } = this;
            return le || Ve
              ? D.Lc
              : ((this.currentObservers = null),
                Le.push(oe),
                new D.w0(() => {
                  (this.currentObservers = null), (0, Y.P)(Le, oe);
                }));
          }
          _checkFinalizedStatuses(oe) {
            const { hasError: le, thrownError: Ve, isStopped: Le } = this;
            le ? oe.error(Ve) : Le && oe.complete();
          }
          asObservable() {
            const oe = new p.y();
            return (oe.source = this), oe;
          }
        }
        return (de.create = ($, oe) => new Te($, oe)), de;
      })();
      class Te extends ee {
        constructor($, oe) {
          super(), (this.destination = $), (this.source = oe);
        }
        next($) {
          var oe, le;
          null ===
            (le =
              null === (oe = this.destination) || void 0 === oe
                ? void 0
                : oe.next) ||
            void 0 === le ||
            le.call(oe, $);
        }
        error($) {
          var oe, le;
          null ===
            (le =
              null === (oe = this.destination) || void 0 === oe
                ? void 0
                : oe.error) ||
            void 0 === le ||
            le.call(oe, $);
        }
        complete() {
          var $, oe;
          null ===
            (oe =
              null === ($ = this.destination) || void 0 === $
                ? void 0
                : $.complete) ||
            void 0 === oe ||
            oe.call($);
        }
        _subscribe($) {
          var oe, le;
          return null !==
            (le =
              null === (oe = this.source) || void 0 === oe
                ? void 0
                : oe.subscribe($)) && void 0 !== le
            ? le
            : D.Lc;
        }
      }
    },
    930: (Je, me, C) => {
      C.d(me, { Hp: () => xe, Lv: () => le });
      var p = C(576),
        D = C(727),
        P = C(2416),
        J = C(7849),
        Y = C(5032);
      const H = de('C', void 0, void 0);
      function de(ue, ne, se) {
        return { kind: ue, value: ne, error: se };
      }
      var $ = C(3410),
        oe = C(2806);
      class le extends D.w0 {
        constructor(ne) {
          super(),
            (this.isStopped = !1),
            ne
              ? ((this.destination = ne), (0, D.Nn)(ne) && ne.add(this))
              : (this.destination = qe);
        }
        static create(ne, se, ce) {
          return new xe(ne, se, ce);
        }
        next(ne) {
          this.isStopped
            ? pt(
                (function Te(ue) {
                  return de('N', ue, void 0);
                })(ne),
                this
              )
            : this._next(ne);
        }
        error(ne) {
          this.isStopped
            ? pt(
                (function ee(ue) {
                  return de('E', void 0, ue);
                })(ne),
                this
              )
            : ((this.isStopped = !0), this._error(ne));
        }
        complete() {
          this.isStopped
            ? pt(H, this)
            : ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed ||
            ((this.isStopped = !0),
            super.unsubscribe(),
            (this.destination = null));
        }
        _next(ne) {
          this.destination.next(ne);
        }
        _error(ne) {
          try {
            this.destination.error(ne);
          } finally {
            this.unsubscribe();
          }
        }
        _complete() {
          try {
            this.destination.complete();
          } finally {
            this.unsubscribe();
          }
        }
      }
      const Ve = Function.prototype.bind;
      function Le(ue, ne) {
        return Ve.call(ue, ne);
      }
      class et {
        constructor(ne) {
          this.partialObserver = ne;
        }
        next(ne) {
          const { partialObserver: se } = this;
          if (se.next)
            try {
              se.next(ne);
            } catch (ce) {
              Xe(ce);
            }
        }
        error(ne) {
          const { partialObserver: se } = this;
          if (se.error)
            try {
              se.error(ne);
            } catch (ce) {
              Xe(ce);
            }
          else Xe(ne);
        }
        complete() {
          const { partialObserver: ne } = this;
          if (ne.complete)
            try {
              ne.complete();
            } catch (se) {
              Xe(se);
            }
        }
      }
      class xe extends le {
        constructor(ne, se, ce) {
          let _e;
          if ((super(), (0, p.m)(ne) || !ne))
            _e = {
              next: ne ?? void 0,
              error: se ?? void 0,
              complete: ce ?? void 0,
            };
          else {
            let ye;
            this && P.config.useDeprecatedNextContext
              ? ((ye = Object.create(ne)),
                (ye.unsubscribe = () => this.unsubscribe()),
                (_e = {
                  next: ne.next && Le(ne.next, ye),
                  error: ne.error && Le(ne.error, ye),
                  complete: ne.complete && Le(ne.complete, ye),
                }))
              : (_e = ne);
          }
          this.destination = new et(_e);
        }
      }
      function Xe(ue) {
        P.config.useDeprecatedSynchronousErrorHandling
          ? (0, oe.O)(ue)
          : (0, J.h)(ue);
      }
      function pt(ue, ne) {
        const { onStoppedNotification: se } = P.config;
        se && $.z.setTimeout(() => se(ue, ne));
      }
      const qe = {
        closed: !0,
        next: Y.Z,
        error: function Ye(ue) {
          throw ue;
        },
        complete: Y.Z,
      };
    },
    727: (Je, me, C) => {
      C.d(me, { Lc: () => H, w0: () => Y, Nn: () => ee });
      var p = C(576);
      const P = (0, C(3888).d)(
        (de) =>
          function (oe) {
            de(this),
              (this.message = oe
                ? `${oe.length} errors occurred during unsubscription:\n${oe
                    .map((le, Ve) => `${Ve + 1}) ${le.toString()}`)
                    .join('\n  ')}`
                : ''),
              (this.name = 'UnsubscriptionError'),
              (this.errors = oe);
          }
      );
      var J = C(8737);
      class Y {
        constructor($) {
          (this.initialTeardown = $),
            (this.closed = !1),
            (this._parentage = null),
            (this._finalizers = null);
        }
        unsubscribe() {
          let $;
          if (!this.closed) {
            this.closed = !0;
            const { _parentage: oe } = this;
            if (oe)
              if (((this._parentage = null), Array.isArray(oe)))
                for (const Le of oe) Le.remove(this);
              else oe.remove(this);
            const { initialTeardown: le } = this;
            if ((0, p.m)(le))
              try {
                le();
              } catch (Le) {
                $ = Le instanceof P ? Le.errors : [Le];
              }
            const { _finalizers: Ve } = this;
            if (Ve) {
              this._finalizers = null;
              for (const Le of Ve)
                try {
                  Te(Le);
                } catch (et) {
                  ($ = $ ?? []),
                    et instanceof P ? ($ = [...$, ...et.errors]) : $.push(et);
                }
            }
            if ($) throw new P($);
          }
        }
        add($) {
          var oe;
          if ($ && $ !== this)
            if (this.closed) Te($);
            else {
              if ($ instanceof Y) {
                if ($.closed || $._hasParent(this)) return;
                $._addParent(this);
              }
              (this._finalizers =
                null !== (oe = this._finalizers) && void 0 !== oe
                  ? oe
                  : []).push($);
            }
        }
        _hasParent($) {
          const { _parentage: oe } = this;
          return oe === $ || (Array.isArray(oe) && oe.includes($));
        }
        _addParent($) {
          const { _parentage: oe } = this;
          this._parentage = Array.isArray(oe)
            ? (oe.push($), oe)
            : oe
            ? [oe, $]
            : $;
        }
        _removeParent($) {
          const { _parentage: oe } = this;
          oe === $
            ? (this._parentage = null)
            : Array.isArray(oe) && (0, J.P)(oe, $);
        }
        remove($) {
          const { _finalizers: oe } = this;
          oe && (0, J.P)(oe, $), $ instanceof Y && $._removeParent(this);
        }
      }
      Y.EMPTY = (() => {
        const de = new Y();
        return (de.closed = !0), de;
      })();
      const H = Y.EMPTY;
      function ee(de) {
        return (
          de instanceof Y ||
          (de &&
            'closed' in de &&
            (0, p.m)(de.remove) &&
            (0, p.m)(de.add) &&
            (0, p.m)(de.unsubscribe))
        );
      }
      function Te(de) {
        (0, p.m)(de) ? de() : de.unsubscribe();
      }
    },
    2416: (Je, me, C) => {
      C.d(me, { config: () => p });
      const p = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: !1,
        useDeprecatedNextContext: !1,
      };
    },
    9841: (Je, me, C) => {
      C.d(me, { a: () => $ });
      var p = C(9751),
        D = C(4742),
        P = C(2076),
        J = C(4671),
        Y = C(3268),
        H = C(3269),
        ee = C(1810),
        Te = C(5403),
        de = C(9672);
      function $(...Ve) {
        const Le = (0, H.yG)(Ve),
          et = (0, H.jO)(Ve),
          { args: xe, keys: Xe } = (0, D.D)(Ve);
        if (0 === xe.length) return (0, P.D)([], Le);
        const Ye = new p.y(
          (function oe(Ve, Le, et = J.y) {
            return (xe) => {
              le(
                Le,
                () => {
                  const { length: Xe } = Ve,
                    Ye = new Array(Xe);
                  let pt = Xe,
                    qe = Xe;
                  for (let ue = 0; ue < Xe; ue++)
                    le(
                      Le,
                      () => {
                        const ne = (0, P.D)(Ve[ue], Le);
                        let se = !1;
                        ne.subscribe(
                          (0, Te.x)(
                            xe,
                            (ce) => {
                              (Ye[ue] = ce),
                                se || ((se = !0), qe--),
                                qe || xe.next(et(Ye.slice()));
                            },
                            () => {
                              --pt || xe.complete();
                            }
                          )
                        );
                      },
                      xe
                    );
                },
                xe
              );
            };
          })(xe, Le, Xe ? (pt) => (0, ee.n)(Xe, pt) : J.y)
        );
        return et ? Ye.pipe((0, Y.Z)(et)) : Ye;
      }
      function le(Ve, Le, et) {
        Ve ? (0, de.f)(et, Ve, Le) : Le();
      }
    },
    7272: (Je, me, C) => {
      C.d(me, { z: () => Y });
      var p = C(8189),
        P = C(3269),
        J = C(2076);
      function Y(...H) {
        return (function D() {
          return (0, p.J)(1);
        })()((0, J.D)(H, (0, P.yG)(H)));
      }
    },
    9770: (Je, me, C) => {
      C.d(me, { P: () => P });
      var p = C(9751),
        D = C(8421);
      function P(J) {
        return new p.y((Y) => {
          (0, D.Xf)(J()).subscribe(Y);
        });
      }
    },
    515: (Je, me, C) => {
      C.d(me, { E: () => D });
      const D = new (C(9751).y)((Y) => Y.complete());
    },
    2076: (Je, me, C) => {
      C.d(me, { D: () => ce });
      var p = C(8421),
        D = C(9672),
        P = C(4482),
        J = C(5403);
      function Y(_e, ye = 0) {
        return (0, P.e)((Ie, Ee) => {
          Ie.subscribe(
            (0, J.x)(
              Ee,
              (te) => (0, D.f)(Ee, _e, () => Ee.next(te), ye),
              () => (0, D.f)(Ee, _e, () => Ee.complete(), ye),
              (te) => (0, D.f)(Ee, _e, () => Ee.error(te), ye)
            )
          );
        });
      }
      function H(_e, ye = 0) {
        return (0, P.e)((Ie, Ee) => {
          Ee.add(_e.schedule(() => Ie.subscribe(Ee), ye));
        });
      }
      var de = C(9751),
        oe = C(2202),
        le = C(576);
      function Le(_e, ye) {
        if (!_e) throw new Error('Iterable cannot be null');
        return new de.y((Ie) => {
          (0, D.f)(Ie, ye, () => {
            const Ee = _e[Symbol.asyncIterator]();
            (0, D.f)(
              Ie,
              ye,
              () => {
                Ee.next().then((te) => {
                  te.done ? Ie.complete() : Ie.next(te.value);
                });
              },
              0,
              !0
            );
          });
        });
      }
      var et = C(3670),
        xe = C(8239),
        Xe = C(1144),
        Ye = C(6495),
        pt = C(2206),
        qe = C(4532),
        ue = C(3260);
      function ce(_e, ye) {
        return ye
          ? (function se(_e, ye) {
              if (null != _e) {
                if ((0, et.c)(_e))
                  return (function ee(_e, ye) {
                    return (0, p.Xf)(_e).pipe(H(ye), Y(ye));
                  })(_e, ye);
                if ((0, Xe.z)(_e))
                  return (function $(_e, ye) {
                    return new de.y((Ie) => {
                      let Ee = 0;
                      return ye.schedule(function () {
                        Ee === _e.length
                          ? Ie.complete()
                          : (Ie.next(_e[Ee++]), Ie.closed || this.schedule());
                      });
                    });
                  })(_e, ye);
                if ((0, xe.t)(_e))
                  return (function Te(_e, ye) {
                    return (0, p.Xf)(_e).pipe(H(ye), Y(ye));
                  })(_e, ye);
                if ((0, pt.D)(_e)) return Le(_e, ye);
                if ((0, Ye.T)(_e))
                  return (function Ve(_e, ye) {
                    return new de.y((Ie) => {
                      let Ee;
                      return (
                        (0, D.f)(Ie, ye, () => {
                          (Ee = _e[oe.h]()),
                            (0, D.f)(
                              Ie,
                              ye,
                              () => {
                                let te, Ne;
                                try {
                                  ({ value: te, done: Ne } = Ee.next());
                                } catch (De) {
                                  return void Ie.error(De);
                                }
                                Ne ? Ie.complete() : Ie.next(te);
                              },
                              0,
                              !0
                            );
                        }),
                        () => (0, le.m)(Ee?.return) && Ee.return()
                      );
                    });
                  })(_e, ye);
                if ((0, ue.L)(_e))
                  return (function ne(_e, ye) {
                    return Le((0, ue.Q)(_e), ye);
                  })(_e, ye);
              }
              throw (0, qe.z)(_e);
            })(_e, ye)
          : (0, p.Xf)(_e);
      }
    },
    8421: (Je, me, C) => {
      C.d(me, { Xf: () => Ve });
      var p = C(655),
        D = C(1144),
        P = C(8239),
        J = C(9751),
        Y = C(3670),
        H = C(2206),
        ee = C(4532),
        Te = C(6495),
        de = C(3260),
        $ = C(576),
        oe = C(7849),
        le = C(8822);
      function Ve(ue) {
        if (ue instanceof J.y) return ue;
        if (null != ue) {
          if ((0, Y.c)(ue))
            return (function Le(ue) {
              return new J.y((ne) => {
                const se = ue[le.L]();
                if ((0, $.m)(se.subscribe)) return se.subscribe(ne);
                throw new TypeError(
                  'Provided object does not correctly implement Symbol.observable'
                );
              });
            })(ue);
          if ((0, D.z)(ue))
            return (function et(ue) {
              return new J.y((ne) => {
                for (let se = 0; se < ue.length && !ne.closed; se++)
                  ne.next(ue[se]);
                ne.complete();
              });
            })(ue);
          if ((0, P.t)(ue))
            return (function xe(ue) {
              return new J.y((ne) => {
                ue.then(
                  (se) => {
                    ne.closed || (ne.next(se), ne.complete());
                  },
                  (se) => ne.error(se)
                ).then(null, oe.h);
              });
            })(ue);
          if ((0, H.D)(ue)) return Ye(ue);
          if ((0, Te.T)(ue))
            return (function Xe(ue) {
              return new J.y((ne) => {
                for (const se of ue) if ((ne.next(se), ne.closed)) return;
                ne.complete();
              });
            })(ue);
          if ((0, de.L)(ue))
            return (function pt(ue) {
              return Ye((0, de.Q)(ue));
            })(ue);
        }
        throw (0, ee.z)(ue);
      }
      function Ye(ue) {
        return new J.y((ne) => {
          (function qe(ue, ne) {
            var se, ce, _e, ye;
            return (0, p.mG)(this, void 0, void 0, function* () {
              try {
                for (se = (0, p.KL)(ue); !(ce = yield se.next()).done; )
                  if ((ne.next(ce.value), ne.closed)) return;
              } catch (Ie) {
                _e = { error: Ie };
              } finally {
                try {
                  ce && !ce.done && (ye = se.return) && (yield ye.call(se));
                } finally {
                  if (_e) throw _e.error;
                }
              }
              ne.complete();
            });
          })(ue, ne).catch((se) => ne.error(se));
        });
      }
    },
    6451: (Je, me, C) => {
      C.d(me, { T: () => H });
      var p = C(8189),
        D = C(8421),
        P = C(515),
        J = C(3269),
        Y = C(2076);
      function H(...ee) {
        const Te = (0, J.yG)(ee),
          de = (0, J._6)(ee, 1 / 0),
          $ = ee;
        return $.length
          ? 1 === $.length
            ? (0, D.Xf)($[0])
            : (0, p.J)(de)((0, Y.D)($, Te))
          : P.E;
      }
    },
    9646: (Je, me, C) => {
      C.d(me, { of: () => P });
      var p = C(3269),
        D = C(2076);
      function P(...J) {
        const Y = (0, p.yG)(J);
        return (0, D.D)(J, Y);
      }
    },
    5963: (Je, me, C) => {
      C.d(me, { H: () => Y });
      var p = C(9751),
        D = C(4986),
        P = C(3532);
      function Y(H = 0, ee, Te = D.P) {
        let de = -1;
        return (
          null != ee && ((0, P.K)(ee) ? (Te = ee) : (de = ee)),
          new p.y(($) => {
            let oe = (function J(H) {
              return H instanceof Date && !isNaN(H);
            })(H)
              ? +H - Te.now()
              : H;
            oe < 0 && (oe = 0);
            let le = 0;
            return Te.schedule(function () {
              $.closed ||
                ($.next(le++),
                0 <= de ? this.schedule(void 0, de) : $.complete());
            }, oe);
          })
        );
      }
    },
    5403: (Je, me, C) => {
      C.d(me, { x: () => D });
      var p = C(930);
      function D(J, Y, H, ee, Te) {
        return new P(J, Y, H, ee, Te);
      }
      class P extends p.Lv {
        constructor(Y, H, ee, Te, de, $) {
          super(Y),
            (this.onFinalize = de),
            (this.shouldUnsubscribe = $),
            (this._next = H
              ? function (oe) {
                  try {
                    H(oe);
                  } catch (le) {
                    Y.error(le);
                  }
                }
              : super._next),
            (this._error = Te
              ? function (oe) {
                  try {
                    Te(oe);
                  } catch (le) {
                    Y.error(le);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._error),
            (this._complete = ee
              ? function () {
                  try {
                    ee();
                  } catch (oe) {
                    Y.error(oe);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._complete);
        }
        unsubscribe() {
          var Y;
          if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            const { closed: H } = this;
            super.unsubscribe(),
              !H &&
                (null === (Y = this.onFinalize) ||
                  void 0 === Y ||
                  Y.call(this));
          }
        }
      }
    },
    4351: (Je, me, C) => {
      C.d(me, { b: () => P });
      var p = C(5577),
        D = C(576);
      function P(J, Y) {
        return (0, D.m)(Y) ? (0, p.z)(J, Y, 1) : (0, p.z)(J, 1);
      }
    },
    9300: (Je, me, C) => {
      C.d(me, { h: () => P });
      var p = C(4482),
        D = C(5403);
      function P(J, Y) {
        return (0, p.e)((H, ee) => {
          let Te = 0;
          H.subscribe((0, D.x)(ee, (de) => J.call(Y, de, Te++) && ee.next(de)));
        });
      }
    },
    4004: (Je, me, C) => {
      C.d(me, { U: () => P });
      var p = C(4482),
        D = C(5403);
      function P(J, Y) {
        return (0, p.e)((H, ee) => {
          let Te = 0;
          H.subscribe(
            (0, D.x)(ee, (de) => {
              ee.next(J.call(Y, de, Te++));
            })
          );
        });
      }
    },
    9718: (Je, me, C) => {
      C.d(me, { h: () => D });
      var p = C(4004);
      function D(P) {
        return (0, p.U)(() => P);
      }
    },
    8189: (Je, me, C) => {
      C.d(me, { J: () => P });
      var p = C(5577),
        D = C(4671);
      function P(J = 1 / 0) {
        return (0, p.z)(D.y, J);
      }
    },
    5577: (Je, me, C) => {
      C.d(me, { z: () => Te });
      var p = C(4004),
        D = C(8421),
        P = C(4482),
        J = C(9672),
        Y = C(5403),
        ee = C(576);
      function Te(de, $, oe = 1 / 0) {
        return (0, ee.m)($)
          ? Te(
              (le, Ve) =>
                (0, p.U)((Le, et) => $(le, Le, Ve, et))((0, D.Xf)(de(le, Ve))),
              oe
            )
          : ('number' == typeof $ && (oe = $),
            (0, P.e)((le, Ve) =>
              (function H(de, $, oe, le, Ve, Le, et, xe) {
                const Xe = [];
                let Ye = 0,
                  pt = 0,
                  qe = !1;
                const ue = () => {
                    qe && !Xe.length && !Ye && $.complete();
                  },
                  ne = (ce) => (Ye < le ? se(ce) : Xe.push(ce)),
                  se = (ce) => {
                    Le && $.next(ce), Ye++;
                    let _e = !1;
                    (0, D.Xf)(oe(ce, pt++)).subscribe(
                      (0, Y.x)(
                        $,
                        (ye) => {
                          Ve?.(ye), Le ? ne(ye) : $.next(ye);
                        },
                        () => {
                          _e = !0;
                        },
                        void 0,
                        () => {
                          if (_e)
                            try {
                              for (Ye--; Xe.length && Ye < le; ) {
                                const ye = Xe.shift();
                                et ? (0, J.f)($, et, () => se(ye)) : se(ye);
                              }
                              ue();
                            } catch (ye) {
                              $.error(ye);
                            }
                        }
                      )
                    );
                  };
                return (
                  de.subscribe(
                    (0, Y.x)($, ne, () => {
                      (qe = !0), ue();
                    })
                  ),
                  () => {
                    xe?.();
                  }
                );
              })(le, Ve, de, oe)
            ));
      }
    },
    8675: (Je, me, C) => {
      C.d(me, { O: () => J });
      var p = C(7272),
        D = C(3269),
        P = C(4482);
      function J(...Y) {
        const H = (0, D.yG)(Y);
        return (0, P.e)((ee, Te) => {
          (H ? (0, p.z)(Y, ee, H) : (0, p.z)(Y, ee)).subscribe(Te);
        });
      }
    },
    3900: (Je, me, C) => {
      C.d(me, { w: () => J });
      var p = C(8421),
        D = C(4482),
        P = C(5403);
      function J(Y, H) {
        return (0, D.e)((ee, Te) => {
          let de = null,
            $ = 0,
            oe = !1;
          const le = () => oe && !de && Te.complete();
          ee.subscribe(
            (0, P.x)(
              Te,
              (Ve) => {
                de?.unsubscribe();
                let Le = 0;
                const et = $++;
                (0, p.Xf)(Y(Ve, et)).subscribe(
                  (de = (0, P.x)(
                    Te,
                    (xe) => Te.next(H ? H(Ve, xe, et, Le++) : xe),
                    () => {
                      (de = null), le();
                    }
                  ))
                );
              },
              () => {
                (oe = !0), le();
              }
            )
          );
        });
      }
    },
    5698: (Je, me, C) => {
      C.d(me, { q: () => J });
      var p = C(515),
        D = C(4482),
        P = C(5403);
      function J(Y) {
        return Y <= 0
          ? () => p.E
          : (0, D.e)((H, ee) => {
              let Te = 0;
              H.subscribe(
                (0, P.x)(ee, (de) => {
                  ++Te <= Y && (ee.next(de), Y <= Te && ee.complete());
                })
              );
            });
      }
    },
    2722: (Je, me, C) => {
      C.d(me, { R: () => Y });
      var p = C(4482),
        D = C(5403),
        P = C(8421),
        J = C(5032);
      function Y(H) {
        return (0, p.e)((ee, Te) => {
          (0, P.Xf)(H).subscribe((0, D.x)(Te, () => Te.complete(), J.Z)),
            !Te.closed && ee.subscribe(Te);
        });
      }
    },
    4408: (Je, me, C) => {
      C.d(me, { o: () => Y });
      var p = C(727);
      class D extends p.w0 {
        constructor(ee, Te) {
          super();
        }
        schedule(ee, Te = 0) {
          return this;
        }
      }
      const P = {
        setInterval(H, ee, ...Te) {
          const { delegate: de } = P;
          return de?.setInterval
            ? de.setInterval(H, ee, ...Te)
            : setInterval(H, ee, ...Te);
        },
        clearInterval(H) {
          const { delegate: ee } = P;
          return (ee?.clearInterval || clearInterval)(H);
        },
        delegate: void 0,
      };
      var J = C(8737);
      class Y extends D {
        constructor(ee, Te) {
          super(ee, Te),
            (this.scheduler = ee),
            (this.work = Te),
            (this.pending = !1);
        }
        schedule(ee, Te = 0) {
          var de;
          if (this.closed) return this;
          this.state = ee;
          const $ = this.id,
            oe = this.scheduler;
          return (
            null != $ && (this.id = this.recycleAsyncId(oe, $, Te)),
            (this.pending = !0),
            (this.delay = Te),
            (this.id =
              null !== (de = this.id) && void 0 !== de
                ? de
                : this.requestAsyncId(oe, this.id, Te)),
            this
          );
        }
        requestAsyncId(ee, Te, de = 0) {
          return P.setInterval(ee.flush.bind(ee, this), de);
        }
        recycleAsyncId(ee, Te, de = 0) {
          if (null != de && this.delay === de && !1 === this.pending) return Te;
          null != Te && P.clearInterval(Te);
        }
        execute(ee, Te) {
          if (this.closed) return new Error('executing a cancelled action');
          this.pending = !1;
          const de = this._execute(ee, Te);
          if (de) return de;
          !1 === this.pending &&
            null != this.id &&
            (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
        }
        _execute(ee, Te) {
          let $,
            de = !1;
          try {
            this.work(ee);
          } catch (oe) {
            (de = !0),
              ($ = oe || new Error('Scheduled action threw falsy error'));
          }
          if (de) return this.unsubscribe(), $;
        }
        unsubscribe() {
          if (!this.closed) {
            const { id: ee, scheduler: Te } = this,
              { actions: de } = Te;
            (this.work = this.state = this.scheduler = null),
              (this.pending = !1),
              (0, J.P)(de, this),
              null != ee && (this.id = this.recycleAsyncId(Te, ee, null)),
              (this.delay = null),
              super.unsubscribe();
          }
        }
      }
    },
    640: (Je, me, C) => {
      C.d(me, { v: () => P });
      const p = { now: () => (p.delegate || Date).now(), delegate: void 0 };
      class D {
        constructor(Y, H = D.now) {
          (this.schedulerActionCtor = Y), (this.now = H);
        }
        schedule(Y, H = 0, ee) {
          return new this.schedulerActionCtor(this, Y).schedule(ee, H);
        }
      }
      D.now = p.now;
      class P extends D {
        constructor(Y, H = D.now) {
          super(Y, H), (this.actions = []), (this._active = !1);
        }
        flush(Y) {
          const { actions: H } = this;
          if (this._active) return void H.push(Y);
          let ee;
          this._active = !0;
          do {
            if ((ee = Y.execute(Y.state, Y.delay))) break;
          } while ((Y = H.shift()));
          if (((this._active = !1), ee)) {
            for (; (Y = H.shift()); ) Y.unsubscribe();
            throw ee;
          }
        }
      }
    },
    4986: (Je, me, C) => {
      C.d(me, { P: () => J, z: () => P });
      var p = C(4408);
      const P = new (C(640).v)(p.o),
        J = P;
    },
    3410: (Je, me, C) => {
      C.d(me, { z: () => p });
      const p = {
        setTimeout(D, P, ...J) {
          const { delegate: Y } = p;
          return Y?.setTimeout
            ? Y.setTimeout(D, P, ...J)
            : setTimeout(D, P, ...J);
        },
        clearTimeout(D) {
          const { delegate: P } = p;
          return (P?.clearTimeout || clearTimeout)(D);
        },
        delegate: void 0,
      };
    },
    2202: (Je, me, C) => {
      C.d(me, { h: () => D });
      const D = (function p() {
        return 'function' == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : '@@iterator';
      })();
    },
    8822: (Je, me, C) => {
      C.d(me, { L: () => p });
      const p =
        ('function' == typeof Symbol && Symbol.observable) || '@@observable';
    },
    6805: (Je, me, C) => {
      C.d(me, { K: () => D });
      const D = (0, C(3888).d)(
        (P) =>
          function () {
            P(this),
              (this.name = 'EmptyError'),
              (this.message = 'no elements in sequence');
          }
      );
    },
    3269: (Je, me, C) => {
      C.d(me, { _6: () => H, jO: () => J, yG: () => Y });
      var p = C(576),
        D = C(3532);
      function P(ee) {
        return ee[ee.length - 1];
      }
      function J(ee) {
        return (0, p.m)(P(ee)) ? ee.pop() : void 0;
      }
      function Y(ee) {
        return (0, D.K)(P(ee)) ? ee.pop() : void 0;
      }
      function H(ee, Te) {
        return 'number' == typeof P(ee) ? ee.pop() : Te;
      }
    },
    4742: (Je, me, C) => {
      C.d(me, { D: () => Y });
      const { isArray: p } = Array,
        { getPrototypeOf: D, prototype: P, keys: J } = Object;
      function Y(ee) {
        if (1 === ee.length) {
          const Te = ee[0];
          if (p(Te)) return { args: Te, keys: null };
          if (
            (function H(ee) {
              return ee && 'object' == typeof ee && D(ee) === P;
            })(Te)
          ) {
            const de = J(Te);
            return { args: de.map(($) => Te[$]), keys: de };
          }
        }
        return { args: ee, keys: null };
      }
    },
    8737: (Je, me, C) => {
      function p(D, P) {
        if (D) {
          const J = D.indexOf(P);
          0 <= J && D.splice(J, 1);
        }
      }
      C.d(me, { P: () => p });
    },
    3888: (Je, me, C) => {
      function p(D) {
        const J = D((Y) => {
          Error.call(Y), (Y.stack = new Error().stack);
        });
        return (
          (J.prototype = Object.create(Error.prototype)),
          (J.prototype.constructor = J),
          J
        );
      }
      C.d(me, { d: () => p });
    },
    1810: (Je, me, C) => {
      function p(D, P) {
        return D.reduce((J, Y, H) => ((J[Y] = P[H]), J), {});
      }
      C.d(me, { n: () => p });
    },
    2806: (Je, me, C) => {
      C.d(me, { O: () => J, x: () => P });
      var p = C(2416);
      let D = null;
      function P(Y) {
        if (p.config.useDeprecatedSynchronousErrorHandling) {
          const H = !D;
          if ((H && (D = { errorThrown: !1, error: null }), Y(), H)) {
            const { errorThrown: ee, error: Te } = D;
            if (((D = null), ee)) throw Te;
          }
        } else Y();
      }
      function J(Y) {
        p.config.useDeprecatedSynchronousErrorHandling &&
          D &&
          ((D.errorThrown = !0), (D.error = Y));
      }
    },
    9672: (Je, me, C) => {
      function p(D, P, J, Y = 0, H = !1) {
        const ee = P.schedule(function () {
          J(), H ? D.add(this.schedule(null, Y)) : this.unsubscribe();
        }, Y);
        if ((D.add(ee), !H)) return ee;
      }
      C.d(me, { f: () => p });
    },
    4671: (Je, me, C) => {
      function p(D) {
        return D;
      }
      C.d(me, { y: () => p });
    },
    1144: (Je, me, C) => {
      C.d(me, { z: () => p });
      const p = (D) =>
        D && 'number' == typeof D.length && 'function' != typeof D;
    },
    2206: (Je, me, C) => {
      C.d(me, { D: () => D });
      var p = C(576);
      function D(P) {
        return Symbol.asyncIterator && (0, p.m)(P?.[Symbol.asyncIterator]);
      }
    },
    576: (Je, me, C) => {
      function p(D) {
        return 'function' == typeof D;
      }
      C.d(me, { m: () => p });
    },
    3670: (Je, me, C) => {
      C.d(me, { c: () => P });
      var p = C(8822),
        D = C(576);
      function P(J) {
        return (0, D.m)(J[p.L]);
      }
    },
    6495: (Je, me, C) => {
      C.d(me, { T: () => P });
      var p = C(2202),
        D = C(576);
      function P(J) {
        return (0, D.m)(J?.[p.h]);
      }
    },
    8239: (Je, me, C) => {
      C.d(me, { t: () => D });
      var p = C(576);
      function D(P) {
        return (0, p.m)(P?.then);
      }
    },
    3260: (Je, me, C) => {
      C.d(me, { L: () => J, Q: () => P });
      var p = C(655),
        D = C(576);
      function P(Y) {
        return (0, p.FC)(this, arguments, function* () {
          const ee = Y.getReader();
          try {
            for (;;) {
              const { value: Te, done: de } = yield (0, p.qq)(ee.read());
              if (de) return yield (0, p.qq)(void 0);
              yield yield (0, p.qq)(Te);
            }
          } finally {
            ee.releaseLock();
          }
        });
      }
      function J(Y) {
        return (0, D.m)(Y?.getReader);
      }
    },
    3532: (Je, me, C) => {
      C.d(me, { K: () => D });
      var p = C(576);
      function D(P) {
        return P && (0, p.m)(P.schedule);
      }
    },
    4482: (Je, me, C) => {
      C.d(me, { A: () => D, e: () => P });
      var p = C(576);
      function D(J) {
        return (0, p.m)(J?.lift);
      }
      function P(J) {
        return (Y) => {
          if (D(Y))
            return Y.lift(function (H) {
              try {
                return J(H, this);
              } catch (ee) {
                this.error(ee);
              }
            });
          throw new TypeError('Unable to lift unknown Observable type');
        };
      }
    },
    3268: (Je, me, C) => {
      C.d(me, { Z: () => J });
      var p = C(4004);
      const { isArray: D } = Array;
      function J(Y) {
        return (0, p.U)((H) =>
          (function P(Y, H) {
            return D(H) ? Y(...H) : Y(H);
          })(Y, H)
        );
      }
    },
    5032: (Je, me, C) => {
      function p() {}
      C.d(me, { Z: () => p });
    },
    9635: (Je, me, C) => {
      C.d(me, { U: () => P, z: () => D });
      var p = C(4671);
      function D(...J) {
        return P(J);
      }
      function P(J) {
        return 0 === J.length
          ? p.y
          : 1 === J.length
          ? J[0]
          : function (H) {
              return J.reduce((ee, Te) => Te(ee), H);
            };
      }
    },
    7849: (Je, me, C) => {
      C.d(me, { h: () => P });
      var p = C(2416),
        D = C(3410);
      function P(J) {
        D.z.setTimeout(() => {
          const { onUnhandledError: Y } = p.config;
          if (!Y) throw J;
          Y(J);
        });
      }
    },
    4532: (Je, me, C) => {
      function p(D) {
        return new TypeError(
          `You provided ${
            null !== D && 'object' == typeof D ? 'an invalid object' : `'${D}'`
          } where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`
        );
      }
      C.d(me, { z: () => p });
    },
    655: (Je, me, C) => {
      function le(z, W, ae, Me) {
        return new (ae || (ae = Promise))(function (Ue, ot) {
          function Tt(St) {
            try {
              ht(Me.next(St));
            } catch (ct) {
              ot(ct);
            }
          }
          function Pt(St) {
            try {
              ht(Me.throw(St));
            } catch (ct) {
              ot(ct);
            }
          }
          function ht(St) {
            St.done
              ? Ue(St.value)
              : (function je(Ue) {
                  return Ue instanceof ae
                    ? Ue
                    : new ae(function (ot) {
                        ot(Ue);
                      });
                })(St.value).then(Tt, Pt);
          }
          ht((Me = Me.apply(z, W || [])).next());
        });
      }
      function ue(z) {
        return this instanceof ue ? ((this.v = z), this) : new ue(z);
      }
      function ne(z, W, ae) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.');
        var je,
          Me = ae.apply(z, W || []),
          Ue = [];
        return (
          (je = {}),
          ot('next'),
          ot('throw'),
          ot('return'),
          (je[Symbol.asyncIterator] = function () {
            return this;
          }),
          je
        );
        function ot(qt) {
          Me[qt] &&
            (je[qt] = function (st) {
              return new Promise(function (cn, It) {
                Ue.push([qt, st, cn, It]) > 1 || Tt(qt, st);
              });
            });
        }
        function Tt(qt, st) {
          try {
            !(function Pt(qt) {
              qt.value instanceof ue
                ? Promise.resolve(qt.value.v).then(ht, St)
                : ct(Ue[0][2], qt);
            })(Me[qt](st));
          } catch (cn) {
            ct(Ue[0][3], cn);
          }
        }
        function ht(qt) {
          Tt('next', qt);
        }
        function St(qt) {
          Tt('throw', qt);
        }
        function ct(qt, st) {
          qt(st), Ue.shift(), Ue.length && Tt(Ue[0][0], Ue[0][1]);
        }
      }
      function ce(z) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.');
        var ae,
          W = z[Symbol.asyncIterator];
        return W
          ? W.call(z)
          : ((z = (function xe(z) {
              var W = 'function' == typeof Symbol && Symbol.iterator,
                ae = W && z[W],
                Me = 0;
              if (ae) return ae.call(z);
              if (z && 'number' == typeof z.length)
                return {
                  next: function () {
                    return (
                      z && Me >= z.length && (z = void 0),
                      { value: z && z[Me++], done: !z }
                    );
                  },
                };
              throw new TypeError(
                W
                  ? 'Object is not iterable.'
                  : 'Symbol.iterator is not defined.'
              );
            })(z)),
            (ae = {}),
            Me('next'),
            Me('throw'),
            Me('return'),
            (ae[Symbol.asyncIterator] = function () {
              return this;
            }),
            ae);
        function Me(Ue) {
          ae[Ue] =
            z[Ue] &&
            function (ot) {
              return new Promise(function (Tt, Pt) {
                !(function je(Ue, ot, Tt, Pt) {
                  Promise.resolve(Pt).then(function (ht) {
                    Ue({ value: ht, done: Tt });
                  }, ot);
                })(Tt, Pt, (ot = z[Ue](ot)).done, ot.value);
              });
            };
        }
      }
      C.d(me, { FC: () => ne, KL: () => ce, mG: () => le, qq: () => ue });
    },
    4922: (Je, me, C) => {
      C.d(me, {
        rt: () => $e,
        tE: () => U,
        qV: () => Lr,
        qm: () => We,
        ic: () => nr,
        X6: () => Tn,
        yG: () => qn,
      });
      var p = C(4755),
        D = C(9523),
        P = C(2966),
        J = C(1135),
        Y = C(7579),
        H = C(9646),
        ee = C(2840),
        Te = C(5698),
        de = C(9300);
      function $(j) {
        return (0, de.h)((N, T) => j <= T);
      }
      var oe = C(4671),
        le = C(4482),
        Ve = C(5403);
      function et(j, N) {
        return j === N;
      }
      var xe = C(2722),
        Xe = C(1692);
      let Ye = (() => {
          class j {
            create(T) {
              return typeof MutationObserver > 'u'
                ? null
                : new MutationObserver(T);
            }
          }
          return (
            (j.ɵfac = function (T) {
              return new (T || j)();
            }),
            (j.ɵprov = D.Yz7({
              token: j,
              factory: j.ɵfac,
              providedIn: 'root',
            })),
            j
          );
        })(),
        ue = (() => {
          class j {}
          return (
            (j.ɵfac = function (T) {
              return new (T || j)();
            }),
            (j.ɵmod = D.oAB({ type: j })),
            (j.ɵinj = D.cJS({ providers: [Ye] })),
            j
          );
        })();
      var ne = C(9841),
        se = C(7272),
        ce = C(9751),
        _e = C(4986),
        Ie = C(4004),
        Ee = C(8675);
      const Ne = new Set();
      let De,
        z = (() => {
          class j {
            constructor(T, Q) {
              (this._platform = T),
                (this._nonce = Q),
                (this._matchMedia =
                  this._platform.isBrowser && window.matchMedia
                    ? window.matchMedia.bind(window)
                    : ae);
            }
            matchMedia(T) {
              return (
                (this._platform.WEBKIT || this._platform.BLINK) &&
                  (function W(j, N) {
                    if (!Ne.has(j))
                      try {
                        De ||
                          ((De = document.createElement('style')),
                          N && (De.nonce = N),
                          De.setAttribute('type', 'text/css'),
                          document.head.appendChild(De)),
                          De.sheet &&
                            (De.sheet.insertRule(`@media ${j} {body{ }}`, 0),
                            Ne.add(j));
                      } catch (T) {
                        console.error(T);
                      }
                  })(T, this._nonce),
                this._matchMedia(T)
              );
            }
          }
          return (
            (j.ɵfac = function (T) {
              return new (T || j)(D.LFG(P.t4), D.LFG(D.Ojb, 8));
            }),
            (j.ɵprov = D.Yz7({
              token: j,
              factory: j.ɵfac,
              providedIn: 'root',
            })),
            j
          );
        })();
      function ae(j) {
        return {
          matches: 'all' === j || '' === j,
          media: j,
          addListener: () => {},
          removeListener: () => {},
        };
      }
      let Me = (() => {
        class j {
          constructor(T, Q) {
            (this._mediaMatcher = T),
              (this._zone = Q),
              (this._queries = new Map()),
              (this._destroySubject = new Y.x());
          }
          ngOnDestroy() {
            this._destroySubject.next(), this._destroySubject.complete();
          }
          isMatched(T) {
            return je((0, Xe.Eq)(T)).some(
              (ge) => this._registerQuery(ge).mql.matches
            );
          }
          observe(T) {
            const ge = je((0, Xe.Eq)(T)).map(
              (ut) => this._registerQuery(ut).observable
            );
            let ke = (0, ne.a)(ge);
            return (
              (ke = (0, se.z)(
                ke.pipe((0, Te.q)(1)),
                ke.pipe(
                  $(1),
                  (function ye(j, N = _e.z) {
                    return (0, le.e)((T, Q) => {
                      let ge = null,
                        ke = null,
                        ut = null;
                      const Rt = () => {
                        if (ge) {
                          ge.unsubscribe(), (ge = null);
                          const Ut = ke;
                          (ke = null), Q.next(Ut);
                        }
                      };
                      function rn() {
                        const Ut = ut + j,
                          _n = N.now();
                        if (_n < Ut)
                          return (
                            (ge = this.schedule(void 0, Ut - _n)),
                            void Q.add(ge)
                          );
                        Rt();
                      }
                      T.subscribe(
                        (0, Ve.x)(
                          Q,
                          (Ut) => {
                            (ke = Ut),
                              (ut = N.now()),
                              ge || ((ge = N.schedule(rn, j)), Q.add(ge));
                          },
                          () => {
                            Rt(), Q.complete();
                          },
                          void 0,
                          () => {
                            ke = ge = null;
                          }
                        )
                      );
                    });
                  })(0)
                )
              )),
              ke.pipe(
                (0, Ie.U)((ut) => {
                  const Rt = { matches: !1, breakpoints: {} };
                  return (
                    ut.forEach(({ matches: rn, query: Ut }) => {
                      (Rt.matches = Rt.matches || rn),
                        (Rt.breakpoints[Ut] = rn);
                    }),
                    Rt
                  );
                })
              )
            );
          }
          _registerQuery(T) {
            if (this._queries.has(T)) return this._queries.get(T);
            const Q = this._mediaMatcher.matchMedia(T),
              ke = {
                observable: new ce.y((ut) => {
                  const Rt = (rn) => this._zone.run(() => ut.next(rn));
                  return (
                    Q.addListener(Rt),
                    () => {
                      Q.removeListener(Rt);
                    }
                  );
                }).pipe(
                  (0, Ee.O)(Q),
                  (0, Ie.U)(({ matches: ut }) => ({ query: T, matches: ut })),
                  (0, xe.R)(this._destroySubject)
                ),
                mql: Q,
              };
            return this._queries.set(T, ke), ke;
          }
        }
        return (
          (j.ɵfac = function (T) {
            return new (T || j)(D.LFG(z), D.LFG(D.R0b));
          }),
          (j.ɵprov = D.Yz7({ token: j, factory: j.ɵfac, providedIn: 'root' })),
          j
        );
      })();
      function je(j) {
        return j
          .map((N) => N.split(','))
          .reduce((N, T) => N.concat(T))
          .map((N) => N.trim());
      }
      let nr = (() => {
        class j {
          constructor(T) {
            this._platform = T;
          }
          isDisabled(T) {
            return T.hasAttribute('disabled');
          }
          isVisible(T) {
            return (
              (function Sn(j) {
                return !!(
                  j.offsetWidth ||
                  j.offsetHeight ||
                  ('function' == typeof j.getClientRects &&
                    j.getClientRects().length)
                );
              })(T) && 'visible' === getComputedStyle(T).visibility
            );
          }
          isTabbable(T) {
            if (!this._platform.isBrowser) return !1;
            const Q = (function kn(j) {
              try {
                return j.frameElement;
              } catch {
                return null;
              }
            })(
              (function it(j) {
                return (
                  (j.ownerDocument && j.ownerDocument.defaultView) || window
                );
              })(T)
            );
            if (Q && (-1 === Gt(Q) || !this.isVisible(Q))) return !1;
            let ge = T.nodeName.toLowerCase(),
              ke = Gt(T);
            return T.hasAttribute('contenteditable')
              ? -1 !== ke
              : !(
                  'iframe' === ge ||
                  'object' === ge ||
                  (this._platform.WEBKIT &&
                    this._platform.IOS &&
                    !(function In(j) {
                      let N = j.nodeName.toLowerCase(),
                        T = 'input' === N && j.type;
                      return (
                        'text' === T ||
                        'password' === T ||
                        'select' === N ||
                        'textarea' === N
                      );
                    })(T))
                ) &&
                  ('audio' === ge
                    ? !!T.hasAttribute('controls') && -1 !== ke
                    : 'video' === ge
                    ? -1 !== ke &&
                      (null !== ke ||
                        this._platform.FIREFOX ||
                        T.hasAttribute('controls'))
                    : T.tabIndex >= 0);
          }
          isFocusable(T, Q) {
            return (
              (function sn(j) {
                return (
                  !(function vn(j) {
                    return (
                      (function Qe(j) {
                        return 'input' == j.nodeName.toLowerCase();
                      })(j) && 'hidden' == j.type
                    );
                  })(j) &&
                  ((function jn(j) {
                    let N = j.nodeName.toLowerCase();
                    return (
                      'input' === N ||
                      'select' === N ||
                      'button' === N ||
                      'textarea' === N
                    );
                  })(j) ||
                    (function En(j) {
                      return (
                        (function rt(j) {
                          return 'a' == j.nodeName.toLowerCase();
                        })(j) && j.hasAttribute('href')
                      );
                    })(j) ||
                    j.hasAttribute('contenteditable') ||
                    vt(j))
                );
              })(T) &&
              !this.isDisabled(T) &&
              (Q?.ignoreVisibility || this.isVisible(T))
            );
          }
        }
        return (
          (j.ɵfac = function (T) {
            return new (T || j)(D.LFG(P.t4));
          }),
          (j.ɵprov = D.Yz7({ token: j, factory: j.ɵfac, providedIn: 'root' })),
          j
        );
      })();
      function vt(j) {
        if (!j.hasAttribute('tabindex') || void 0 === j.tabIndex) return !1;
        let N = j.getAttribute('tabindex');
        return !(!N || isNaN(parseInt(N, 10)));
      }
      function Gt(j) {
        if (!vt(j)) return null;
        const N = parseInt(j.getAttribute('tabindex') || '', 10);
        return isNaN(N) ? -1 : N;
      }
      class an {
        get enabled() {
          return this._enabled;
        }
        set enabled(N) {
          (this._enabled = N),
            this._startAnchor &&
              this._endAnchor &&
              (this._toggleAnchorTabIndex(N, this._startAnchor),
              this._toggleAnchorTabIndex(N, this._endAnchor));
        }
        constructor(N, T, Q, ge, ke = !1) {
          (this._element = N),
            (this._checker = T),
            (this._ngZone = Q),
            (this._document = ge),
            (this._hasAttached = !1),
            (this.startAnchorListener = () => this.focusLastTabbableElement()),
            (this.endAnchorListener = () => this.focusFirstTabbableElement()),
            (this._enabled = !0),
            ke || this.attachAnchors();
        }
        destroy() {
          const N = this._startAnchor,
            T = this._endAnchor;
          N &&
            (N.removeEventListener('focus', this.startAnchorListener),
            N.remove()),
            T &&
              (T.removeEventListener('focus', this.endAnchorListener),
              T.remove()),
            (this._startAnchor = this._endAnchor = null),
            (this._hasAttached = !1);
        }
        attachAnchors() {
          return (
            !!this._hasAttached ||
            (this._ngZone.runOutsideAngular(() => {
              this._startAnchor ||
                ((this._startAnchor = this._createAnchor()),
                this._startAnchor.addEventListener(
                  'focus',
                  this.startAnchorListener
                )),
                this._endAnchor ||
                  ((this._endAnchor = this._createAnchor()),
                  this._endAnchor.addEventListener(
                    'focus',
                    this.endAnchorListener
                  ));
            }),
            this._element.parentNode &&
              (this._element.parentNode.insertBefore(
                this._startAnchor,
                this._element
              ),
              this._element.parentNode.insertBefore(
                this._endAnchor,
                this._element.nextSibling
              ),
              (this._hasAttached = !0)),
            this._hasAttached)
          );
        }
        focusInitialElementWhenReady(N) {
          return new Promise((T) => {
            this._executeOnStable(() => T(this.focusInitialElement(N)));
          });
        }
        focusFirstTabbableElementWhenReady(N) {
          return new Promise((T) => {
            this._executeOnStable(() => T(this.focusFirstTabbableElement(N)));
          });
        }
        focusLastTabbableElementWhenReady(N) {
          return new Promise((T) => {
            this._executeOnStable(() => T(this.focusLastTabbableElement(N)));
          });
        }
        _getRegionBoundary(N) {
          const T = this._element.querySelectorAll(
            `[cdk-focus-region-${N}], [cdkFocusRegion${N}], [cdk-focus-${N}]`
          );
          return 'start' == N
            ? T.length
              ? T[0]
              : this._getFirstTabbableElement(this._element)
            : T.length
            ? T[T.length - 1]
            : this._getLastTabbableElement(this._element);
        }
        focusInitialElement(N) {
          const T = this._element.querySelector(
            '[cdk-focus-initial], [cdkFocusInitial]'
          );
          if (T) {
            if (!this._checker.isFocusable(T)) {
              const Q = this._getFirstTabbableElement(T);
              return Q?.focus(N), !!Q;
            }
            return T.focus(N), !0;
          }
          return this.focusFirstTabbableElement(N);
        }
        focusFirstTabbableElement(N) {
          const T = this._getRegionBoundary('start');
          return T && T.focus(N), !!T;
        }
        focusLastTabbableElement(N) {
          const T = this._getRegionBoundary('end');
          return T && T.focus(N), !!T;
        }
        hasAttached() {
          return this._hasAttached;
        }
        _getFirstTabbableElement(N) {
          if (this._checker.isFocusable(N) && this._checker.isTabbable(N))
            return N;
          const T = N.children;
          for (let Q = 0; Q < T.length; Q++) {
            const ge =
              T[Q].nodeType === this._document.ELEMENT_NODE
                ? this._getFirstTabbableElement(T[Q])
                : null;
            if (ge) return ge;
          }
          return null;
        }
        _getLastTabbableElement(N) {
          if (this._checker.isFocusable(N) && this._checker.isTabbable(N))
            return N;
          const T = N.children;
          for (let Q = T.length - 1; Q >= 0; Q--) {
            const ge =
              T[Q].nodeType === this._document.ELEMENT_NODE
                ? this._getLastTabbableElement(T[Q])
                : null;
            if (ge) return ge;
          }
          return null;
        }
        _createAnchor() {
          const N = this._document.createElement('div');
          return (
            this._toggleAnchorTabIndex(this._enabled, N),
            N.classList.add('cdk-visually-hidden'),
            N.classList.add('cdk-focus-trap-anchor'),
            N.setAttribute('aria-hidden', 'true'),
            N
          );
        }
        _toggleAnchorTabIndex(N, T) {
          N ? T.setAttribute('tabindex', '0') : T.removeAttribute('tabindex');
        }
        toggleAnchors(N) {
          this._startAnchor &&
            this._endAnchor &&
            (this._toggleAnchorTabIndex(N, this._startAnchor),
            this._toggleAnchorTabIndex(N, this._endAnchor));
        }
        _executeOnStable(N) {
          this._ngZone.isStable
            ? N()
            : this._ngZone.onStable.pipe((0, Te.q)(1)).subscribe(N);
        }
      }
      let Lr = (() => {
        class j {
          constructor(T, Q, ge) {
            (this._checker = T), (this._ngZone = Q), (this._document = ge);
          }
          create(T, Q = !1) {
            return new an(T, this._checker, this._ngZone, this._document, Q);
          }
        }
        return (
          (j.ɵfac = function (T) {
            return new (T || j)(D.LFG(nr), D.LFG(D.R0b), D.LFG(p.K0));
          }),
          (j.ɵprov = D.Yz7({ token: j, factory: j.ɵfac, providedIn: 'root' })),
          j
        );
      })();
      function Tn(j) {
        return 0 === j.buttons || (0 === j.offsetX && 0 === j.offsetY);
      }
      function qn(j) {
        const N =
          (j.touches && j.touches[0]) ||
          (j.changedTouches && j.changedTouches[0]);
        return !(
          !N ||
          -1 !== N.identifier ||
          (null != N.radiusX && 1 !== N.radiusX) ||
          (null != N.radiusY && 1 !== N.radiusY)
        );
      }
      const hn = new D.OlP('cdk-input-modality-detector-options'),
        pr = { ignoreKeys: [ee.zL, ee.jx, ee.b2, ee.MW, ee.JU] },
        wn = (0, P.i$)({ passive: !0, capture: !0 });
      let tn = (() => {
        class j {
          get mostRecentModality() {
            return this._modality.value;
          }
          constructor(T, Q, ge, ke) {
            (this._platform = T),
              (this._mostRecentTarget = null),
              (this._modality = new J.X(null)),
              (this._lastTouchMs = 0),
              (this._onKeydown = (ut) => {
                this._options?.ignoreKeys?.some((Rt) => Rt === ut.keyCode) ||
                  (this._modality.next('keyboard'),
                  (this._mostRecentTarget = (0, P.sA)(ut)));
              }),
              (this._onMousedown = (ut) => {
                Date.now() - this._lastTouchMs < 650 ||
                  (this._modality.next(Tn(ut) ? 'keyboard' : 'mouse'),
                  (this._mostRecentTarget = (0, P.sA)(ut)));
              }),
              (this._onTouchstart = (ut) => {
                qn(ut)
                  ? this._modality.next('keyboard')
                  : ((this._lastTouchMs = Date.now()),
                    this._modality.next('touch'),
                    (this._mostRecentTarget = (0, P.sA)(ut)));
              }),
              (this._options = { ...pr, ...ke }),
              (this.modalityDetected = this._modality.pipe($(1))),
              (this.modalityChanged = this.modalityDetected.pipe(
                (function Le(j, N = oe.y) {
                  return (
                    (j = j ?? et),
                    (0, le.e)((T, Q) => {
                      let ge,
                        ke = !0;
                      T.subscribe(
                        (0, Ve.x)(Q, (ut) => {
                          const Rt = N(ut);
                          (ke || !j(ge, Rt)) &&
                            ((ke = !1), (ge = Rt), Q.next(ut));
                        })
                      );
                    })
                  );
                })()
              )),
              T.isBrowser &&
                Q.runOutsideAngular(() => {
                  ge.addEventListener('keydown', this._onKeydown, wn),
                    ge.addEventListener('mousedown', this._onMousedown, wn),
                    ge.addEventListener('touchstart', this._onTouchstart, wn);
                });
          }
          ngOnDestroy() {
            this._modality.complete(),
              this._platform.isBrowser &&
                (document.removeEventListener('keydown', this._onKeydown, wn),
                document.removeEventListener(
                  'mousedown',
                  this._onMousedown,
                  wn
                ),
                document.removeEventListener(
                  'touchstart',
                  this._onTouchstart,
                  wn
                ));
          }
        }
        return (
          (j.ɵfac = function (T) {
            return new (T || j)(
              D.LFG(P.t4),
              D.LFG(D.R0b),
              D.LFG(p.K0),
              D.LFG(hn, 8)
            );
          }),
          (j.ɵprov = D.Yz7({ token: j, factory: j.ɵfac, providedIn: 'root' })),
          j
        );
      })();
      const pe = new D.OlP('cdk-focus-monitor-default-options'),
        Re = (0, P.i$)({ passive: !0, capture: !0 });
      let U = (() => {
        class j {
          constructor(T, Q, ge, ke, ut) {
            (this._ngZone = T),
              (this._platform = Q),
              (this._inputModalityDetector = ge),
              (this._origin = null),
              (this._windowFocused = !1),
              (this._originFromTouchInteraction = !1),
              (this._elementInfo = new Map()),
              (this._monitoredElementCount = 0),
              (this._rootNodeFocusListenerCount = new Map()),
              (this._windowFocusListener = () => {
                (this._windowFocused = !0),
                  (this._windowFocusTimeoutId = window.setTimeout(
                    () => (this._windowFocused = !1)
                  ));
              }),
              (this._stopInputModalityDetector = new Y.x()),
              (this._rootNodeFocusAndBlurListener = (Rt) => {
                for (let Ut = (0, P.sA)(Rt); Ut; Ut = Ut.parentElement)
                  'focus' === Rt.type
                    ? this._onFocus(Rt, Ut)
                    : this._onBlur(Rt, Ut);
              }),
              (this._document = ke),
              (this._detectionMode = ut?.detectionMode || 0);
          }
          monitor(T, Q = !1) {
            const ge = (0, Xe.fI)(T);
            if (!this._platform.isBrowser || 1 !== ge.nodeType)
              return (0, H.of)(null);
            const ke = (0, P.kV)(ge) || this._getDocument(),
              ut = this._elementInfo.get(ge);
            if (ut) return Q && (ut.checkChildren = !0), ut.subject;
            const Rt = { checkChildren: Q, subject: new Y.x(), rootNode: ke };
            return (
              this._elementInfo.set(ge, Rt),
              this._registerGlobalListeners(Rt),
              Rt.subject
            );
          }
          stopMonitoring(T) {
            const Q = (0, Xe.fI)(T),
              ge = this._elementInfo.get(Q);
            ge &&
              (ge.subject.complete(),
              this._setClasses(Q),
              this._elementInfo.delete(Q),
              this._removeGlobalListeners(ge));
          }
          focusVia(T, Q, ge) {
            const ke = (0, Xe.fI)(T);
            ke === this._getDocument().activeElement
              ? this._getClosestElementsInfo(ke).forEach(([Rt, rn]) =>
                  this._originChanged(Rt, Q, rn)
                )
              : (this._setOrigin(Q),
                'function' == typeof ke.focus && ke.focus(ge));
          }
          ngOnDestroy() {
            this._elementInfo.forEach((T, Q) => this.stopMonitoring(Q));
          }
          _getDocument() {
            return this._document || document;
          }
          _getWindow() {
            return this._getDocument().defaultView || window;
          }
          _getFocusOrigin(T) {
            return this._origin
              ? this._originFromTouchInteraction
                ? this._shouldBeAttributedToTouch(T)
                  ? 'touch'
                  : 'program'
                : this._origin
              : this._windowFocused && this._lastFocusOrigin
              ? this._lastFocusOrigin
              : T && this._isLastInteractionFromInputLabel(T)
              ? 'mouse'
              : 'program';
          }
          _shouldBeAttributedToTouch(T) {
            return (
              1 === this._detectionMode ||
              !!T?.contains(this._inputModalityDetector._mostRecentTarget)
            );
          }
          _setClasses(T, Q) {
            T.classList.toggle('cdk-focused', !!Q),
              T.classList.toggle('cdk-touch-focused', 'touch' === Q),
              T.classList.toggle('cdk-keyboard-focused', 'keyboard' === Q),
              T.classList.toggle('cdk-mouse-focused', 'mouse' === Q),
              T.classList.toggle('cdk-program-focused', 'program' === Q);
          }
          _setOrigin(T, Q = !1) {
            this._ngZone.runOutsideAngular(() => {
              (this._origin = T),
                (this._originFromTouchInteraction = 'touch' === T && Q),
                0 === this._detectionMode &&
                  (clearTimeout(this._originTimeoutId),
                  (this._originTimeoutId = setTimeout(
                    () => (this._origin = null),
                    this._originFromTouchInteraction ? 650 : 1
                  )));
            });
          }
          _onFocus(T, Q) {
            const ge = this._elementInfo.get(Q),
              ke = (0, P.sA)(T);
            !ge ||
              (!ge.checkChildren && Q !== ke) ||
              this._originChanged(Q, this._getFocusOrigin(ke), ge);
          }
          _onBlur(T, Q) {
            const ge = this._elementInfo.get(Q);
            !ge ||
              (ge.checkChildren &&
                T.relatedTarget instanceof Node &&
                Q.contains(T.relatedTarget)) ||
              (this._setClasses(Q), this._emitOrigin(ge, null));
          }
          _emitOrigin(T, Q) {
            T.subject.observers.length &&
              this._ngZone.run(() => T.subject.next(Q));
          }
          _registerGlobalListeners(T) {
            if (!this._platform.isBrowser) return;
            const Q = T.rootNode,
              ge = this._rootNodeFocusListenerCount.get(Q) || 0;
            ge ||
              this._ngZone.runOutsideAngular(() => {
                Q.addEventListener(
                  'focus',
                  this._rootNodeFocusAndBlurListener,
                  Re
                ),
                  Q.addEventListener(
                    'blur',
                    this._rootNodeFocusAndBlurListener,
                    Re
                  );
              }),
              this._rootNodeFocusListenerCount.set(Q, ge + 1),
              1 == ++this._monitoredElementCount &&
                (this._ngZone.runOutsideAngular(() => {
                  this._getWindow().addEventListener(
                    'focus',
                    this._windowFocusListener
                  );
                }),
                this._inputModalityDetector.modalityDetected
                  .pipe((0, xe.R)(this._stopInputModalityDetector))
                  .subscribe((ke) => {
                    this._setOrigin(ke, !0);
                  }));
          }
          _removeGlobalListeners(T) {
            const Q = T.rootNode;
            if (this._rootNodeFocusListenerCount.has(Q)) {
              const ge = this._rootNodeFocusListenerCount.get(Q);
              ge > 1
                ? this._rootNodeFocusListenerCount.set(Q, ge - 1)
                : (Q.removeEventListener(
                    'focus',
                    this._rootNodeFocusAndBlurListener,
                    Re
                  ),
                  Q.removeEventListener(
                    'blur',
                    this._rootNodeFocusAndBlurListener,
                    Re
                  ),
                  this._rootNodeFocusListenerCount.delete(Q));
            }
            --this._monitoredElementCount ||
              (this._getWindow().removeEventListener(
                'focus',
                this._windowFocusListener
              ),
              this._stopInputModalityDetector.next(),
              clearTimeout(this._windowFocusTimeoutId),
              clearTimeout(this._originTimeoutId));
          }
          _originChanged(T, Q, ge) {
            this._setClasses(T, Q),
              this._emitOrigin(ge, Q),
              (this._lastFocusOrigin = Q);
          }
          _getClosestElementsInfo(T) {
            const Q = [];
            return (
              this._elementInfo.forEach((ge, ke) => {
                (ke === T || (ge.checkChildren && ke.contains(T))) &&
                  Q.push([ke, ge]);
              }),
              Q
            );
          }
          _isLastInteractionFromInputLabel(T) {
            const { _mostRecentTarget: Q, mostRecentModality: ge } =
              this._inputModalityDetector;
            if (
              'mouse' !== ge ||
              !Q ||
              Q === T ||
              ('INPUT' !== T.nodeName && 'TEXTAREA' !== T.nodeName) ||
              T.disabled
            )
              return !1;
            const ke = T.labels;
            if (ke)
              for (let ut = 0; ut < ke.length; ut++)
                if (ke[ut].contains(Q)) return !0;
            return !1;
          }
        }
        return (
          (j.ɵfac = function (T) {
            return new (T || j)(
              D.LFG(D.R0b),
              D.LFG(P.t4),
              D.LFG(tn),
              D.LFG(p.K0, 8),
              D.LFG(pe, 8)
            );
          }),
          (j.ɵprov = D.Yz7({ token: j, factory: j.ɵfac, providedIn: 'root' })),
          j
        );
      })();
      const B = 'cdk-high-contrast-black-on-white',
        Ce = 'cdk-high-contrast-white-on-black',
        be = 'cdk-high-contrast-active';
      let We = (() => {
          class j {
            constructor(T, Q) {
              (this._platform = T),
                (this._document = Q),
                (this._breakpointSubscription = (0, D.f3M)(Me)
                  .observe('(forced-colors: active)')
                  .subscribe(() => {
                    this._hasCheckedHighContrastMode &&
                      ((this._hasCheckedHighContrastMode = !1),
                      this._applyBodyHighContrastModeCssClasses());
                  }));
            }
            getHighContrastMode() {
              if (!this._platform.isBrowser) return 0;
              const T = this._document.createElement('div');
              (T.style.backgroundColor = 'rgb(1,2,3)'),
                (T.style.position = 'absolute'),
                this._document.body.appendChild(T);
              const Q = this._document.defaultView || window,
                ge = Q && Q.getComputedStyle ? Q.getComputedStyle(T) : null,
                ke = ((ge && ge.backgroundColor) || '').replace(/ /g, '');
              switch ((T.remove(), ke)) {
                case 'rgb(0,0,0)':
                case 'rgb(45,50,54)':
                case 'rgb(32,32,32)':
                  return 2;
                case 'rgb(255,255,255)':
                case 'rgb(255,250,239)':
                  return 1;
              }
              return 0;
            }
            ngOnDestroy() {
              this._breakpointSubscription.unsubscribe();
            }
            _applyBodyHighContrastModeCssClasses() {
              if (
                !this._hasCheckedHighContrastMode &&
                this._platform.isBrowser &&
                this._document.body
              ) {
                const T = this._document.body.classList;
                T.remove(be, B, Ce), (this._hasCheckedHighContrastMode = !0);
                const Q = this.getHighContrastMode();
                1 === Q ? T.add(be, B) : 2 === Q && T.add(be, Ce);
              }
            }
          }
          return (
            (j.ɵfac = function (T) {
              return new (T || j)(D.LFG(P.t4), D.LFG(p.K0));
            }),
            (j.ɵprov = D.Yz7({
              token: j,
              factory: j.ɵfac,
              providedIn: 'root',
            })),
            j
          );
        })(),
        $e = (() => {
          class j {
            constructor(T) {
              T._applyBodyHighContrastModeCssClasses();
            }
          }
          return (
            (j.ɵfac = function (T) {
              return new (T || j)(D.LFG(We));
            }),
            (j.ɵmod = D.oAB({ type: j })),
            (j.ɵinj = D.cJS({ imports: [ue] })),
            j
          );
        })();
    },
    8930: (Je, me, C) => {
      C.d(me, { Is: () => ee, vT: () => de });
      var p = C(9523),
        D = C(4755);
      const P = new p.OlP('cdk-dir-doc', {
          providedIn: 'root',
          factory: function J() {
            return (0, p.f3M)(D.K0);
          },
        }),
        Y =
          /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
      let ee = (() => {
          class $ {
            constructor(le) {
              (this.value = 'ltr'),
                (this.change = new p.vpe()),
                le &&
                  (this.value = (function H($) {
                    const oe = $?.toLowerCase() || '';
                    return 'auto' === oe &&
                      typeof navigator < 'u' &&
                      navigator?.language
                      ? Y.test(navigator.language)
                        ? 'rtl'
                        : 'ltr'
                      : 'rtl' === oe
                      ? 'rtl'
                      : 'ltr';
                  })(
                    (le.body ? le.body.dir : null) ||
                      (le.documentElement ? le.documentElement.dir : null) ||
                      'ltr'
                  ));
            }
            ngOnDestroy() {
              this.change.complete();
            }
          }
          return (
            ($.ɵfac = function (le) {
              return new (le || $)(p.LFG(P, 8));
            }),
            ($.ɵprov = p.Yz7({
              token: $,
              factory: $.ɵfac,
              providedIn: 'root',
            })),
            $
          );
        })(),
        de = (() => {
          class $ {}
          return (
            ($.ɵfac = function (le) {
              return new (le || $)();
            }),
            ($.ɵmod = p.oAB({ type: $ })),
            ($.ɵinj = p.cJS({})),
            $
          );
        })();
    },
    1692: (Je, me, C) => {
      C.d(me, { Eq: () => Y, HM: () => H, fI: () => ee, su: () => P });
      var p = C(9523);
      function P(de, $ = 0) {
        return (function J(de) {
          return !isNaN(parseFloat(de)) && !isNaN(Number(de));
        })(de)
          ? Number(de)
          : $;
      }
      function Y(de) {
        return Array.isArray(de) ? de : [de];
      }
      function H(de) {
        return null == de ? '' : 'string' == typeof de ? de : `${de}px`;
      }
      function ee(de) {
        return de instanceof p.SBq ? de.nativeElement : de;
      }
    },
    3223: (Je, me, C) => {
      C.d(me, {
        Kt: () => pt,
        LL: () => xe,
        Su: () => ye,
        Vq: () => ce,
        ib: () => Le,
        zj: () => Xe,
      });
      var p = C(4922),
        D = C(6275),
        P = C(2966),
        J = C(8023),
        Y = C(4755),
        H = C(9523),
        ee = C(2840),
        Te = C(7579),
        de = C(9770),
        $ = C(9646),
        oe = C(8930),
        le = C(8675);
      function Ve(Ie, Ee) {}
      class Le {
        constructor() {
          (this.role = 'dialog'),
            (this.panelClass = ''),
            (this.hasBackdrop = !0),
            (this.backdropClass = ''),
            (this.disableClose = !1),
            (this.width = ''),
            (this.height = ''),
            (this.data = null),
            (this.ariaDescribedBy = null),
            (this.ariaLabelledBy = null),
            (this.ariaLabel = null),
            (this.ariaModal = !0),
            (this.autoFocus = 'first-tabbable'),
            (this.restoreFocus = !0),
            (this.closeOnNavigation = !0),
            (this.closeOnDestroy = !0),
            (this.closeOnOverlayDetachments = !0);
        }
      }
      let xe = (() => {
        class Ie extends J.en {
          constructor(te, Ne, De, z, W, ae, Me, je) {
            super(),
              (this._elementRef = te),
              (this._focusTrapFactory = Ne),
              (this._config = z),
              (this._interactivityChecker = W),
              (this._ngZone = ae),
              (this._overlayRef = Me),
              (this._focusMonitor = je),
              (this._elementFocusedBeforeDialogWasOpened = null),
              (this._closeInteractionType = null),
              (this.attachDomPortal = (Ue) => {
                this._portalOutlet.hasAttached();
                const ot = this._portalOutlet.attachDomPortal(Ue);
                return this._contentAttached(), ot;
              }),
              (this._ariaLabelledBy = this._config.ariaLabelledBy || null),
              (this._document = De);
          }
          _contentAttached() {
            this._initializeFocusTrap(),
              this._handleBackdropClicks(),
              this._captureInitialFocus();
          }
          _captureInitialFocus() {
            this._trapFocus();
          }
          ngOnDestroy() {
            this._restoreFocus();
          }
          attachComponentPortal(te) {
            this._portalOutlet.hasAttached();
            const Ne = this._portalOutlet.attachComponentPortal(te);
            return this._contentAttached(), Ne;
          }
          attachTemplatePortal(te) {
            this._portalOutlet.hasAttached();
            const Ne = this._portalOutlet.attachTemplatePortal(te);
            return this._contentAttached(), Ne;
          }
          _recaptureFocus() {
            this._containsFocus() || this._trapFocus();
          }
          _forceFocus(te, Ne) {
            this._interactivityChecker.isFocusable(te) ||
              ((te.tabIndex = -1),
              this._ngZone.runOutsideAngular(() => {
                const De = () => {
                  te.removeEventListener('blur', De),
                    te.removeEventListener('mousedown', De),
                    te.removeAttribute('tabindex');
                };
                te.addEventListener('blur', De),
                  te.addEventListener('mousedown', De);
              })),
              te.focus(Ne);
          }
          _focusByCssSelector(te, Ne) {
            let De = this._elementRef.nativeElement.querySelector(te);
            De && this._forceFocus(De, Ne);
          }
          _trapFocus() {
            const te = this._elementRef.nativeElement;
            switch (this._config.autoFocus) {
              case !1:
              case 'dialog':
                this._containsFocus() || te.focus();
                break;
              case !0:
              case 'first-tabbable':
                this._focusTrap.focusInitialElementWhenReady().then((Ne) => {
                  Ne || this._focusDialogContainer();
                });
                break;
              case 'first-heading':
                this._focusByCssSelector(
                  'h1, h2, h3, h4, h5, h6, [role="heading"]'
                );
                break;
              default:
                this._focusByCssSelector(this._config.autoFocus);
            }
          }
          _restoreFocus() {
            const te = this._config.restoreFocus;
            let Ne = null;
            if (
              ('string' == typeof te
                ? (Ne = this._document.querySelector(te))
                : 'boolean' == typeof te
                ? (Ne = te ? this._elementFocusedBeforeDialogWasOpened : null)
                : te && (Ne = te),
              this._config.restoreFocus && Ne && 'function' == typeof Ne.focus)
            ) {
              const De = (0, P.ht)(),
                z = this._elementRef.nativeElement;
              (!De ||
                De === this._document.body ||
                De === z ||
                z.contains(De)) &&
                (this._focusMonitor
                  ? (this._focusMonitor.focusVia(
                      Ne,
                      this._closeInteractionType
                    ),
                    (this._closeInteractionType = null))
                  : Ne.focus());
            }
            this._focusTrap && this._focusTrap.destroy();
          }
          _focusDialogContainer() {
            this._elementRef.nativeElement.focus &&
              this._elementRef.nativeElement.focus();
          }
          _containsFocus() {
            const te = this._elementRef.nativeElement,
              Ne = (0, P.ht)();
            return te === Ne || te.contains(Ne);
          }
          _initializeFocusTrap() {
            (this._focusTrap = this._focusTrapFactory.create(
              this._elementRef.nativeElement
            )),
              this._document &&
                (this._elementFocusedBeforeDialogWasOpened = (0, P.ht)());
          }
          _handleBackdropClicks() {
            this._overlayRef.backdropClick().subscribe(() => {
              this._config.disableClose && this._recaptureFocus();
            });
          }
        }
        return (
          (Ie.ɵfac = function (te) {
            return new (te || Ie)(
              H.Y36(H.SBq),
              H.Y36(p.qV),
              H.Y36(Y.K0, 8),
              H.Y36(Le),
              H.Y36(p.ic),
              H.Y36(H.R0b),
              H.Y36(D.Iu),
              H.Y36(p.tE)
            );
          }),
          (Ie.ɵcmp = H.Xpm({
            type: Ie,
            selectors: [['cdk-dialog-container']],
            viewQuery: function (te, Ne) {
              if ((1 & te && H.Gf(J.Pl, 7), 2 & te)) {
                let De;
                H.iGM((De = H.CRH())) && (Ne._portalOutlet = De.first);
              }
            },
            hostAttrs: ['tabindex', '-1', 1, 'cdk-dialog-container'],
            hostVars: 6,
            hostBindings: function (te, Ne) {
              2 & te &&
                H.uIk('id', Ne._config.id || null)('role', Ne._config.role)(
                  'aria-modal',
                  Ne._config.ariaModal
                )(
                  'aria-labelledby',
                  Ne._config.ariaLabel ? null : Ne._ariaLabelledBy
                )('aria-label', Ne._config.ariaLabel)(
                  'aria-describedby',
                  Ne._config.ariaDescribedBy || null
                );
            },
            features: [H.qOj],
            decls: 1,
            vars: 0,
            consts: [['cdkPortalOutlet', '']],
            template: function (te, Ne) {
              1 & te && H.YNc(0, Ve, 0, 0, 'ng-template', 0);
            },
            dependencies: [J.Pl],
            styles: [
              '.cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}',
            ],
            encapsulation: 2,
          })),
          Ie
        );
      })();
      class Xe {
        constructor(Ee, te) {
          (this.overlayRef = Ee),
            (this.config = te),
            (this.closed = new Te.x()),
            (this.disableClose = te.disableClose),
            (this.backdropClick = Ee.backdropClick()),
            (this.keydownEvents = Ee.keydownEvents()),
            (this.outsidePointerEvents = Ee.outsidePointerEvents()),
            (this.id = te.id),
            this.keydownEvents.subscribe((Ne) => {
              Ne.keyCode === ee.hY &&
                !this.disableClose &&
                !(0, ee.Vb)(Ne) &&
                (Ne.preventDefault(),
                this.close(void 0, { focusOrigin: 'keyboard' }));
            }),
            this.backdropClick.subscribe(() => {
              this.disableClose || this.close(void 0, { focusOrigin: 'mouse' });
            }),
            (this._detachSubscription = Ee.detachments().subscribe(() => {
              !1 !== te.closeOnOverlayDetachments && this.close();
            }));
        }
        close(Ee, te) {
          if (this.containerInstance) {
            const Ne = this.closed;
            (this.containerInstance._closeInteractionType =
              te?.focusOrigin || 'program'),
              this._detachSubscription.unsubscribe(),
              this.overlayRef.dispose(),
              Ne.next(Ee),
              Ne.complete(),
              (this.componentInstance = this.containerInstance = null);
          }
        }
        updatePosition() {
          return this.overlayRef.updatePosition(), this;
        }
        updateSize(Ee = '', te = '') {
          return this.overlayRef.updateSize({ width: Ee, height: te }), this;
        }
        addPanelClass(Ee) {
          return this.overlayRef.addPanelClass(Ee), this;
        }
        removePanelClass(Ee) {
          return this.overlayRef.removePanelClass(Ee), this;
        }
      }
      const Ye = new H.OlP('DialogScrollStrategy'),
        pt = new H.OlP('DialogData'),
        qe = new H.OlP('DefaultDialogConfig'),
        ne = {
          provide: Ye,
          deps: [D.aV],
          useFactory: function ue(Ie) {
            return () => Ie.scrollStrategies.block();
          },
        };
      let se = 0,
        ce = (() => {
          class Ie {
            get openDialogs() {
              return this._parentDialog
                ? this._parentDialog.openDialogs
                : this._openDialogsAtThisLevel;
            }
            get afterOpened() {
              return this._parentDialog
                ? this._parentDialog.afterOpened
                : this._afterOpenedAtThisLevel;
            }
            constructor(te, Ne, De, z, W, ae) {
              (this._overlay = te),
                (this._injector = Ne),
                (this._defaultOptions = De),
                (this._parentDialog = z),
                (this._overlayContainer = W),
                (this._openDialogsAtThisLevel = []),
                (this._afterAllClosedAtThisLevel = new Te.x()),
                (this._afterOpenedAtThisLevel = new Te.x()),
                (this._ariaHiddenElements = new Map()),
                (this.afterAllClosed = (0, de.P)(() =>
                  this.openDialogs.length
                    ? this._getAfterAllClosed()
                    : this._getAfterAllClosed().pipe((0, le.O)(void 0))
                )),
                (this._scrollStrategy = ae);
            }
            open(te, Ne) {
              ((Ne = { ...(this._defaultOptions || new Le()), ...Ne }).id =
                Ne.id || 'cdk-dialog-' + se++),
                Ne.id && this.getDialogById(Ne.id);
              const z = this._getOverlayConfig(Ne),
                W = this._overlay.create(z),
                ae = new Xe(W, Ne),
                Me = this._attachContainer(W, ae, Ne);
              return (
                (ae.containerInstance = Me),
                this._attachDialogContent(te, ae, Me, Ne),
                this.openDialogs.length ||
                  this._hideNonDialogContentFromAssistiveTechnology(),
                this.openDialogs.push(ae),
                ae.closed.subscribe(() => this._removeOpenDialog(ae, !0)),
                this.afterOpened.next(ae),
                ae
              );
            }
            closeAll() {
              _e(this.openDialogs, (te) => te.close());
            }
            getDialogById(te) {
              return this.openDialogs.find((Ne) => Ne.id === te);
            }
            ngOnDestroy() {
              _e(this._openDialogsAtThisLevel, (te) => {
                !1 === te.config.closeOnDestroy &&
                  this._removeOpenDialog(te, !1);
              }),
                _e(this._openDialogsAtThisLevel, (te) => te.close()),
                this._afterAllClosedAtThisLevel.complete(),
                this._afterOpenedAtThisLevel.complete(),
                (this._openDialogsAtThisLevel = []);
            }
            _getOverlayConfig(te) {
              const Ne = new D.X_({
                positionStrategy:
                  te.positionStrategy ||
                  this._overlay
                    .position()
                    .global()
                    .centerHorizontally()
                    .centerVertically(),
                scrollStrategy: te.scrollStrategy || this._scrollStrategy(),
                panelClass: te.panelClass,
                hasBackdrop: te.hasBackdrop,
                direction: te.direction,
                minWidth: te.minWidth,
                minHeight: te.minHeight,
                maxWidth: te.maxWidth,
                maxHeight: te.maxHeight,
                width: te.width,
                height: te.height,
                disposeOnNavigation: te.closeOnNavigation,
              });
              return (
                te.backdropClass && (Ne.backdropClass = te.backdropClass), Ne
              );
            }
            _attachContainer(te, Ne, De) {
              const z = De.injector || De.viewContainerRef?.injector,
                W = [
                  { provide: Le, useValue: De },
                  { provide: Xe, useValue: Ne },
                  { provide: D.Iu, useValue: te },
                ];
              let ae;
              De.container
                ? 'function' == typeof De.container
                  ? (ae = De.container)
                  : ((ae = De.container.type),
                    W.push(...De.container.providers(De)))
                : (ae = xe);
              const Me = new J.C5(
                ae,
                De.viewContainerRef,
                H.zs3.create({ parent: z || this._injector, providers: W }),
                De.componentFactoryResolver
              );
              return te.attach(Me).instance;
            }
            _attachDialogContent(te, Ne, De, z) {
              if (te instanceof H.Rgc) {
                const W = this._createInjector(z, Ne, De, void 0);
                let ae = { $implicit: z.data, dialogRef: Ne };
                z.templateContext &&
                  (ae = {
                    ...ae,
                    ...('function' == typeof z.templateContext
                      ? z.templateContext()
                      : z.templateContext),
                  }),
                  De.attachTemplatePortal(new J.UE(te, null, ae, W));
              } else {
                const W = this._createInjector(z, Ne, De, this._injector),
                  ae = De.attachComponentPortal(
                    new J.C5(
                      te,
                      z.viewContainerRef,
                      W,
                      z.componentFactoryResolver
                    )
                  );
                Ne.componentInstance = ae.instance;
              }
            }
            _createInjector(te, Ne, De, z) {
              const W = te.injector || te.viewContainerRef?.injector,
                ae = [
                  { provide: pt, useValue: te.data },
                  { provide: Xe, useValue: Ne },
                ];
              return (
                te.providers &&
                  ('function' == typeof te.providers
                    ? ae.push(...te.providers(Ne, te, De))
                    : ae.push(...te.providers)),
                te.direction &&
                  (!W || !W.get(oe.Is, null, { optional: !0 })) &&
                  ae.push({
                    provide: oe.Is,
                    useValue: { value: te.direction, change: (0, $.of)() },
                  }),
                H.zs3.create({ parent: W || z, providers: ae })
              );
            }
            _removeOpenDialog(te, Ne) {
              const De = this.openDialogs.indexOf(te);
              De > -1 &&
                (this.openDialogs.splice(De, 1),
                this.openDialogs.length ||
                  (this._ariaHiddenElements.forEach((z, W) => {
                    z
                      ? W.setAttribute('aria-hidden', z)
                      : W.removeAttribute('aria-hidden');
                  }),
                  this._ariaHiddenElements.clear(),
                  Ne && this._getAfterAllClosed().next()));
            }
            _hideNonDialogContentFromAssistiveTechnology() {
              const te = this._overlayContainer.getContainerElement();
              if (te.parentElement) {
                const Ne = te.parentElement.children;
                for (let De = Ne.length - 1; De > -1; De--) {
                  const z = Ne[De];
                  z !== te &&
                    'SCRIPT' !== z.nodeName &&
                    'STYLE' !== z.nodeName &&
                    !z.hasAttribute('aria-live') &&
                    (this._ariaHiddenElements.set(
                      z,
                      z.getAttribute('aria-hidden')
                    ),
                    z.setAttribute('aria-hidden', 'true'));
                }
              }
            }
            _getAfterAllClosed() {
              const te = this._parentDialog;
              return te
                ? te._getAfterAllClosed()
                : this._afterAllClosedAtThisLevel;
            }
          }
          return (
            (Ie.ɵfac = function (te) {
              return new (te || Ie)(
                H.LFG(D.aV),
                H.LFG(H.zs3),
                H.LFG(qe, 8),
                H.LFG(Ie, 12),
                H.LFG(D.Xj),
                H.LFG(Ye)
              );
            }),
            (Ie.ɵprov = H.Yz7({ token: Ie, factory: Ie.ɵfac })),
            Ie
          );
        })();
      function _e(Ie, Ee) {
        let te = Ie.length;
        for (; te--; ) Ee(Ie[te]);
      }
      let ye = (() => {
        class Ie {}
        return (
          (Ie.ɵfac = function (te) {
            return new (te || Ie)();
          }),
          (Ie.ɵmod = H.oAB({ type: Ie })),
          (Ie.ɵinj = H.cJS({
            providers: [ce, ne],
            imports: [D.U8, J.eL, p.rt, J.eL],
          })),
          Ie
        );
      })();
    },
    2840: (Je, me, C) => {
      C.d(me, {
        JU: () => H,
        MW: () => it,
        Vb: () => F,
        b2: () => b,
        hY: () => oe,
        jx: () => ee,
        zL: () => Te,
      });
      const H = 16,
        ee = 17,
        Te = 18,
        oe = 27,
        it = 91,
        b = 224;
      function F(V, ...fe) {
        return fe.length
          ? fe.some((Fe) => V[Fe])
          : V.altKey || V.shiftKey || V.ctrlKey || V.metaKey;
      }
    },
    6275: (Je, me, C) => {
      C.d(me, {
        aV: () => Wt,
        X_: () => X,
        Xj: () => We,
        U8: () => Gr,
        Iu: () => $e,
      });
      var p = C(1692),
        D = C(9523),
        P = C(7579),
        J = C(9646),
        Y = C(9751),
        H = C(8421),
        ee = C(5577),
        Te = C(1144),
        de = C(576),
        $ = C(3268);
      const oe = ['addListener', 'removeListener'],
        le = ['addEventListener', 'removeEventListener'],
        Ve = ['on', 'off'];
      function Le(K, y, b, F) {
        if (((0, de.m)(b) && ((F = b), (b = void 0)), F))
          return Le(K, y, b).pipe((0, $.Z)(F));
        const [V, fe] = (function Ye(K) {
          return (
            (0, de.m)(K.addEventListener) && (0, de.m)(K.removeEventListener)
          );
        })(K)
          ? le.map((Fe) => (nt) => K[Fe](y, nt, b))
          : (function xe(K) {
              return (0, de.m)(K.addListener) && (0, de.m)(K.removeListener);
            })(K)
          ? oe.map(et(K, y))
          : (function Xe(K) {
              return (0, de.m)(K.on) && (0, de.m)(K.off);
            })(K)
          ? Ve.map(et(K, y))
          : [];
        if (!V && (0, Te.z)(K))
          return (0, ee.z)((Fe) => Le(Fe, y, b))((0, H.Xf)(K));
        if (!V) throw new TypeError('Invalid event target');
        return new Y.y((Fe) => {
          const nt = (...gt) => Fe.next(1 < gt.length ? gt : gt[0]);
          return V(nt), () => fe(nt);
        });
      }
      function et(K, y) {
        return (b) => (F) => K[b](y, F);
      }
      var pt = C(4408),
        qe = C(727);
      const ue = {
        schedule(K) {
          let y = requestAnimationFrame,
            b = cancelAnimationFrame;
          const { delegate: F } = ue;
          F && ((y = F.requestAnimationFrame), (b = F.cancelAnimationFrame));
          const V = y((fe) => {
            (b = void 0), K(fe);
          });
          return new qe.w0(() => b?.(V));
        },
        requestAnimationFrame(...K) {
          const { delegate: y } = ue;
          return (y?.requestAnimationFrame || requestAnimationFrame)(...K);
        },
        cancelAnimationFrame(...K) {
          const { delegate: y } = ue;
          return (y?.cancelAnimationFrame || cancelAnimationFrame)(...K);
        },
        delegate: void 0,
      };
      var se = C(640);
      new (class ce extends se.v {
        flush(y) {
          this._active = !0;
          const b = this._scheduled;
          this._scheduled = void 0;
          const { actions: F } = this;
          let V;
          y = y || F.shift();
          do {
            if ((V = y.execute(y.state, y.delay))) break;
          } while ((y = F[0]) && y.id === b && F.shift());
          if (((this._active = !1), V)) {
            for (; (y = F[0]) && y.id === b && F.shift(); ) y.unsubscribe();
            throw V;
          }
        }
      })(
        class ne extends pt.o {
          constructor(y, b) {
            super(y, b), (this.scheduler = y), (this.work = b);
          }
          requestAsyncId(y, b, F = 0) {
            return null !== F && F > 0
              ? super.requestAsyncId(y, b, F)
              : (y.actions.push(this),
                y._scheduled ||
                  (y._scheduled = ue.requestAnimationFrame(() =>
                    y.flush(void 0)
                  )));
          }
          recycleAsyncId(y, b, F = 0) {
            var V;
            if (null != F ? F > 0 : this.delay > 0)
              return super.recycleAsyncId(y, b, F);
            const { actions: fe } = y;
            null != b &&
              (null === (V = fe[fe.length - 1]) || void 0 === V
                ? void 0
                : V.id) !== b &&
              (ue.cancelAnimationFrame(b), (y._scheduled = void 0));
          }
        }
      );
      let Ee,
        Ie = 1;
      const te = {};
      function Ne(K) {
        return K in te && (delete te[K], !0);
      }
      const De = {
          setImmediate(K) {
            const y = Ie++;
            return (
              (te[y] = !0),
              Ee || (Ee = Promise.resolve()),
              Ee.then(() => Ne(y) && K()),
              y
            );
          },
          clearImmediate(K) {
            Ne(K);
          },
        },
        { setImmediate: W, clearImmediate: ae } = De,
        Me = {
          setImmediate(...K) {
            const { delegate: y } = Me;
            return (y?.setImmediate || W)(...K);
          },
          clearImmediate(K) {
            const { delegate: y } = Me;
            return (y?.clearImmediate || ae)(K);
          },
          delegate: void 0,
        };
      new (class Ue extends se.v {
        flush(y) {
          this._active = !0;
          const b = this._scheduled;
          this._scheduled = void 0;
          const { actions: F } = this;
          let V;
          y = y || F.shift();
          do {
            if ((V = y.execute(y.state, y.delay))) break;
          } while ((y = F[0]) && y.id === b && F.shift());
          if (((this._active = !1), V)) {
            for (; (y = F[0]) && y.id === b && F.shift(); ) y.unsubscribe();
            throw V;
          }
        }
      })(
        class je extends pt.o {
          constructor(y, b) {
            super(y, b), (this.scheduler = y), (this.work = b);
          }
          requestAsyncId(y, b, F = 0) {
            return null !== F && F > 0
              ? super.requestAsyncId(y, b, F)
              : (y.actions.push(this),
                y._scheduled ||
                  (y._scheduled = Me.setImmediate(y.flush.bind(y, void 0))));
          }
          recycleAsyncId(y, b, F = 0) {
            var V;
            if (null != F ? F > 0 : this.delay > 0)
              return super.recycleAsyncId(y, b, F);
            const { actions: fe } = y;
            null != b &&
              (null === (V = fe[fe.length - 1]) || void 0 === V
                ? void 0
                : V.id) !== b &&
              (Me.clearImmediate(b), (y._scheduled = void 0));
          }
        }
      );
      var Pt = C(4986),
        ht = C(4482),
        St = C(5403),
        qt = C(5963);
      function st(K, y = Pt.z) {
        return (function ct(K) {
          return (0, ht.e)((y, b) => {
            let F = !1,
              V = null,
              fe = null,
              Fe = !1;
            const nt = () => {
                if ((fe?.unsubscribe(), (fe = null), F)) {
                  F = !1;
                  const yt = V;
                  (V = null), b.next(yt);
                }
                Fe && b.complete();
              },
              gt = () => {
                (fe = null), Fe && b.complete();
              };
            y.subscribe(
              (0, St.x)(
                b,
                (yt) => {
                  (F = !0),
                    (V = yt),
                    fe ||
                      (0, H.Xf)(K(yt)).subscribe((fe = (0, St.x)(b, nt, gt)));
                },
                () => {
                  (Fe = !0), (!F || !fe || fe.closed) && b.complete();
                }
              )
            );
          });
        })(() => (0, qt.H)(K, y));
      }
      var cn = C(9300),
        It = C(2966),
        zt = C(4755),
        dn = C(8930);
      let vn = (() => {
          class K {
            constructor(b, F, V) {
              (this._ngZone = b),
                (this._platform = F),
                (this._scrolled = new P.x()),
                (this._globalSubscription = null),
                (this._scrolledCount = 0),
                (this.scrollContainers = new Map()),
                (this._document = V);
            }
            register(b) {
              this.scrollContainers.has(b) ||
                this.scrollContainers.set(
                  b,
                  b.elementScrolled().subscribe(() => this._scrolled.next(b))
                );
            }
            deregister(b) {
              const F = this.scrollContainers.get(b);
              F && (F.unsubscribe(), this.scrollContainers.delete(b));
            }
            scrolled(b = 20) {
              return this._platform.isBrowser
                ? new Y.y((F) => {
                    this._globalSubscription || this._addGlobalListener();
                    const V =
                      b > 0
                        ? this._scrolled.pipe(st(b)).subscribe(F)
                        : this._scrolled.subscribe(F);
                    return (
                      this._scrolledCount++,
                      () => {
                        V.unsubscribe(),
                          this._scrolledCount--,
                          this._scrolledCount || this._removeGlobalListener();
                      }
                    );
                  })
                : (0, J.of)();
            }
            ngOnDestroy() {
              this._removeGlobalListener(),
                this.scrollContainers.forEach((b, F) => this.deregister(F)),
                this._scrolled.complete();
            }
            ancestorScrolled(b, F) {
              const V = this.getAncestorScrollContainers(b);
              return this.scrolled(F).pipe(
                (0, cn.h)((fe) => !fe || V.indexOf(fe) > -1)
              );
            }
            getAncestorScrollContainers(b) {
              const F = [];
              return (
                this.scrollContainers.forEach((V, fe) => {
                  this._scrollableContainsElement(fe, b) && F.push(fe);
                }),
                F
              );
            }
            _getWindow() {
              return this._document.defaultView || window;
            }
            _scrollableContainsElement(b, F) {
              let V = (0, p.fI)(F),
                fe = b.getElementRef().nativeElement;
              do {
                if (V == fe) return !0;
              } while ((V = V.parentElement));
              return !1;
            }
            _addGlobalListener() {
              this._globalSubscription = this._ngZone.runOutsideAngular(() =>
                Le(this._getWindow().document, 'scroll').subscribe(() =>
                  this._scrolled.next()
                )
              );
            }
            _removeGlobalListener() {
              this._globalSubscription &&
                (this._globalSubscription.unsubscribe(),
                (this._globalSubscription = null));
            }
          }
          return (
            (K.ɵfac = function (b) {
              return new (b || K)(D.LFG(D.R0b), D.LFG(It.t4), D.LFG(zt.K0, 8));
            }),
            (K.ɵprov = D.Yz7({
              token: K,
              factory: K.ɵfac,
              providedIn: 'root',
            })),
            K
          );
        })(),
        rt = (() => {
          class K {
            constructor(b, F, V) {
              (this._platform = b),
                (this._change = new P.x()),
                (this._changeListener = (fe) => {
                  this._change.next(fe);
                }),
                (this._document = V),
                F.runOutsideAngular(() => {
                  if (b.isBrowser) {
                    const fe = this._getWindow();
                    fe.addEventListener('resize', this._changeListener),
                      fe.addEventListener(
                        'orientationchange',
                        this._changeListener
                      );
                  }
                  this.change().subscribe(() => (this._viewportSize = null));
                });
            }
            ngOnDestroy() {
              if (this._platform.isBrowser) {
                const b = this._getWindow();
                b.removeEventListener('resize', this._changeListener),
                  b.removeEventListener(
                    'orientationchange',
                    this._changeListener
                  );
              }
              this._change.complete();
            }
            getViewportSize() {
              this._viewportSize || this._updateViewportSize();
              const b = {
                width: this._viewportSize.width,
                height: this._viewportSize.height,
              };
              return this._platform.isBrowser || (this._viewportSize = null), b;
            }
            getViewportRect() {
              const b = this.getViewportScrollPosition(),
                { width: F, height: V } = this.getViewportSize();
              return {
                top: b.top,
                left: b.left,
                bottom: b.top + V,
                right: b.left + F,
                height: V,
                width: F,
              };
            }
            getViewportScrollPosition() {
              if (!this._platform.isBrowser) return { top: 0, left: 0 };
              const b = this._document,
                F = this._getWindow(),
                V = b.documentElement,
                fe = V.getBoundingClientRect();
              return {
                top:
                  -fe.top || b.body.scrollTop || F.scrollY || V.scrollTop || 0,
                left:
                  -fe.left ||
                  b.body.scrollLeft ||
                  F.scrollX ||
                  V.scrollLeft ||
                  0,
              };
            }
            change(b = 20) {
              return b > 0 ? this._change.pipe(st(b)) : this._change;
            }
            _getWindow() {
              return this._document.defaultView || window;
            }
            _updateViewportSize() {
              const b = this._getWindow();
              this._viewportSize = this._platform.isBrowser
                ? { width: b.innerWidth, height: b.innerHeight }
                : { width: 0, height: 0 };
            }
          }
          return (
            (K.ɵfac = function (b) {
              return new (b || K)(D.LFG(It.t4), D.LFG(D.R0b), D.LFG(zt.K0, 8));
            }),
            (K.ɵprov = D.Yz7({
              token: K,
              factory: K.ɵfac,
              providedIn: 'root',
            })),
            K
          );
        })(),
        wt = (() => {
          class K {}
          return (
            (K.ɵfac = function (b) {
              return new (b || K)();
            }),
            (K.ɵmod = D.oAB({ type: K })),
            (K.ɵinj = D.cJS({})),
            K
          );
        })(),
        Vn = (() => {
          class K {}
          return (
            (K.ɵfac = function (b) {
              return new (b || K)();
            }),
            (K.ɵmod = D.oAB({ type: K })),
            (K.ɵinj = D.cJS({ imports: [dn.vT, wt, dn.vT, wt] })),
            K
          );
        })();
      var fr = C(5698),
        Qn = C(2722),
        Tn = C(8023),
        qn = C(6451);
      const hn = (0, It.Mq)();
      class pr {
        constructor(y, b) {
          (this._viewportRuler = y),
            (this._previousHTMLStyles = { top: '', left: '' }),
            (this._isEnabled = !1),
            (this._document = b);
        }
        attach() {}
        enable() {
          if (this._canBeEnabled()) {
            const y = this._document.documentElement;
            (this._previousScrollPosition =
              this._viewportRuler.getViewportScrollPosition()),
              (this._previousHTMLStyles.left = y.style.left || ''),
              (this._previousHTMLStyles.top = y.style.top || ''),
              (y.style.left = (0, p.HM)(-this._previousScrollPosition.left)),
              (y.style.top = (0, p.HM)(-this._previousScrollPosition.top)),
              y.classList.add('cdk-global-scrollblock'),
              (this._isEnabled = !0);
          }
        }
        disable() {
          if (this._isEnabled) {
            const y = this._document.documentElement,
              F = y.style,
              V = this._document.body.style,
              fe = F.scrollBehavior || '',
              Fe = V.scrollBehavior || '';
            (this._isEnabled = !1),
              (F.left = this._previousHTMLStyles.left),
              (F.top = this._previousHTMLStyles.top),
              y.classList.remove('cdk-global-scrollblock'),
              hn && (F.scrollBehavior = V.scrollBehavior = 'auto'),
              window.scroll(
                this._previousScrollPosition.left,
                this._previousScrollPosition.top
              ),
              hn && ((F.scrollBehavior = fe), (V.scrollBehavior = Fe));
          }
        }
        _canBeEnabled() {
          if (
            this._document.documentElement.classList.contains(
              'cdk-global-scrollblock'
            ) ||
            this._isEnabled
          )
            return !1;
          const b = this._document.body,
            F = this._viewportRuler.getViewportSize();
          return b.scrollHeight > F.height || b.scrollWidth > F.width;
        }
      }
      class wn {
        constructor(y, b, F, V) {
          (this._scrollDispatcher = y),
            (this._ngZone = b),
            (this._viewportRuler = F),
            (this._config = V),
            (this._scrollSubscription = null),
            (this._detach = () => {
              this.disable(),
                this._overlayRef.hasAttached() &&
                  this._ngZone.run(() => this._overlayRef.detach());
            });
        }
        attach(y) {
          this._overlayRef = y;
        }
        enable() {
          if (this._scrollSubscription) return;
          const y = this._scrollDispatcher
            .scrolled(0)
            .pipe(
              (0, cn.h)(
                (b) =>
                  !b ||
                  !this._overlayRef.overlayElement.contains(
                    b.getElementRef().nativeElement
                  )
              )
            );
          this._config && this._config.threshold && this._config.threshold > 1
            ? ((this._initialScrollPosition =
                this._viewportRuler.getViewportScrollPosition().top),
              (this._scrollSubscription = y.subscribe(() => {
                const b = this._viewportRuler.getViewportScrollPosition().top;
                Math.abs(b - this._initialScrollPosition) >
                this._config.threshold
                  ? this._detach()
                  : this._overlayRef.updatePosition();
              })))
            : (this._scrollSubscription = y.subscribe(this._detach));
        }
        disable() {
          this._scrollSubscription &&
            (this._scrollSubscription.unsubscribe(),
            (this._scrollSubscription = null));
        }
        detach() {
          this.disable(), (this._overlayRef = null);
        }
      }
      class tn {
        enable() {}
        disable() {}
        attach() {}
      }
      function Jn(K, y) {
        return y.some(
          (b) =>
            K.bottom < b.top ||
            K.top > b.bottom ||
            K.right < b.left ||
            K.left > b.right
        );
      }
      function At(K, y) {
        return y.some(
          (b) =>
            K.top < b.top ||
            K.bottom > b.bottom ||
            K.left < b.left ||
            K.right > b.right
        );
      }
      class rr {
        constructor(y, b, F, V) {
          (this._scrollDispatcher = y),
            (this._viewportRuler = b),
            (this._ngZone = F),
            (this._config = V),
            (this._scrollSubscription = null);
        }
        attach(y) {
          this._overlayRef = y;
        }
        enable() {
          this._scrollSubscription ||
            (this._scrollSubscription = this._scrollDispatcher
              .scrolled(this._config ? this._config.scrollThrottle : 0)
              .subscribe(() => {
                if (
                  (this._overlayRef.updatePosition(),
                  this._config && this._config.autoClose)
                ) {
                  const b =
                      this._overlayRef.overlayElement.getBoundingClientRect(),
                    { width: F, height: V } =
                      this._viewportRuler.getViewportSize();
                  Jn(b, [
                    {
                      width: F,
                      height: V,
                      bottom: V,
                      right: F,
                      top: 0,
                      left: 0,
                    },
                  ]) &&
                    (this.disable(),
                    this._ngZone.run(() => this._overlayRef.detach()));
                }
              }));
        }
        disable() {
          this._scrollSubscription &&
            (this._scrollSubscription.unsubscribe(),
            (this._scrollSubscription = null));
        }
        detach() {
          this.disable(), (this._overlayRef = null);
        }
      }
      let we = (() => {
        class K {
          constructor(b, F, V, fe) {
            (this._scrollDispatcher = b),
              (this._viewportRuler = F),
              (this._ngZone = V),
              (this.noop = () => new tn()),
              (this.close = (Fe) =>
                new wn(
                  this._scrollDispatcher,
                  this._ngZone,
                  this._viewportRuler,
                  Fe
                )),
              (this.block = () => new pr(this._viewportRuler, this._document)),
              (this.reposition = (Fe) =>
                new rr(
                  this._scrollDispatcher,
                  this._viewportRuler,
                  this._ngZone,
                  Fe
                )),
              (this._document = fe);
          }
        }
        return (
          (K.ɵfac = function (b) {
            return new (b || K)(
              D.LFG(vn),
              D.LFG(rt),
              D.LFG(D.R0b),
              D.LFG(zt.K0)
            );
          }),
          (K.ɵprov = D.Yz7({ token: K, factory: K.ɵfac, providedIn: 'root' })),
          K
        );
      })();
      class X {
        constructor(y) {
          if (
            ((this.scrollStrategy = new tn()),
            (this.panelClass = ''),
            (this.hasBackdrop = !1),
            (this.backdropClass = 'cdk-overlay-dark-backdrop'),
            (this.disposeOnNavigation = !1),
            y)
          ) {
            const b = Object.keys(y);
            for (const F of b) void 0 !== y[F] && (this[F] = y[F]);
          }
        }
      }
      class Re {
        constructor(y, b) {
          (this.connectionPair = y), (this.scrollableViewProperties = b);
        }
      }
      let B = (() => {
          class K {
            constructor(b) {
              (this._attachedOverlays = []), (this._document = b);
            }
            ngOnDestroy() {
              this.detach();
            }
            add(b) {
              this.remove(b), this._attachedOverlays.push(b);
            }
            remove(b) {
              const F = this._attachedOverlays.indexOf(b);
              F > -1 && this._attachedOverlays.splice(F, 1),
                0 === this._attachedOverlays.length && this.detach();
            }
          }
          return (
            (K.ɵfac = function (b) {
              return new (b || K)(D.LFG(zt.K0));
            }),
            (K.ɵprov = D.Yz7({
              token: K,
              factory: K.ɵfac,
              providedIn: 'root',
            })),
            K
          );
        })(),
        Ce = (() => {
          class K extends B {
            constructor(b, F) {
              super(b),
                (this._ngZone = F),
                (this._keydownListener = (V) => {
                  const fe = this._attachedOverlays;
                  for (let Fe = fe.length - 1; Fe > -1; Fe--)
                    if (fe[Fe]._keydownEvents.observers.length > 0) {
                      const nt = fe[Fe]._keydownEvents;
                      this._ngZone
                        ? this._ngZone.run(() => nt.next(V))
                        : nt.next(V);
                      break;
                    }
                });
            }
            add(b) {
              super.add(b),
                this._isAttached ||
                  (this._ngZone
                    ? this._ngZone.runOutsideAngular(() =>
                        this._document.body.addEventListener(
                          'keydown',
                          this._keydownListener
                        )
                      )
                    : this._document.body.addEventListener(
                        'keydown',
                        this._keydownListener
                      ),
                  (this._isAttached = !0));
            }
            detach() {
              this._isAttached &&
                (this._document.body.removeEventListener(
                  'keydown',
                  this._keydownListener
                ),
                (this._isAttached = !1));
            }
          }
          return (
            (K.ɵfac = function (b) {
              return new (b || K)(D.LFG(zt.K0), D.LFG(D.R0b, 8));
            }),
            (K.ɵprov = D.Yz7({
              token: K,
              factory: K.ɵfac,
              providedIn: 'root',
            })),
            K
          );
        })(),
        be = (() => {
          class K extends B {
            constructor(b, F, V) {
              super(b),
                (this._platform = F),
                (this._ngZone = V),
                (this._cursorStyleIsSet = !1),
                (this._pointerDownListener = (fe) => {
                  this._pointerDownEventTarget = (0, It.sA)(fe);
                }),
                (this._clickListener = (fe) => {
                  const Fe = (0, It.sA)(fe),
                    nt =
                      'click' === fe.type && this._pointerDownEventTarget
                        ? this._pointerDownEventTarget
                        : Fe;
                  this._pointerDownEventTarget = null;
                  const gt = this._attachedOverlays.slice();
                  for (let yt = gt.length - 1; yt > -1; yt--) {
                    const Dt = gt[yt];
                    if (
                      Dt._outsidePointerEvents.observers.length < 1 ||
                      !Dt.hasAttached()
                    )
                      continue;
                    if (
                      Dt.overlayElement.contains(Fe) ||
                      Dt.overlayElement.contains(nt)
                    )
                      break;
                    const $t = Dt._outsidePointerEvents;
                    this._ngZone
                      ? this._ngZone.run(() => $t.next(fe))
                      : $t.next(fe);
                  }
                });
            }
            add(b) {
              if ((super.add(b), !this._isAttached)) {
                const F = this._document.body;
                this._ngZone
                  ? this._ngZone.runOutsideAngular(() =>
                      this._addEventListeners(F)
                    )
                  : this._addEventListeners(F),
                  this._platform.IOS &&
                    !this._cursorStyleIsSet &&
                    ((this._cursorOriginalValue = F.style.cursor),
                    (F.style.cursor = 'pointer'),
                    (this._cursorStyleIsSet = !0)),
                  (this._isAttached = !0);
              }
            }
            detach() {
              if (this._isAttached) {
                const b = this._document.body;
                b.removeEventListener(
                  'pointerdown',
                  this._pointerDownListener,
                  !0
                ),
                  b.removeEventListener('click', this._clickListener, !0),
                  b.removeEventListener('auxclick', this._clickListener, !0),
                  b.removeEventListener('contextmenu', this._clickListener, !0),
                  this._platform.IOS &&
                    this._cursorStyleIsSet &&
                    ((b.style.cursor = this._cursorOriginalValue),
                    (this._cursorStyleIsSet = !1)),
                  (this._isAttached = !1);
              }
            }
            _addEventListeners(b) {
              b.addEventListener('pointerdown', this._pointerDownListener, !0),
                b.addEventListener('click', this._clickListener, !0),
                b.addEventListener('auxclick', this._clickListener, !0),
                b.addEventListener('contextmenu', this._clickListener, !0);
            }
          }
          return (
            (K.ɵfac = function (b) {
              return new (b || K)(D.LFG(zt.K0), D.LFG(It.t4), D.LFG(D.R0b, 8));
            }),
            (K.ɵprov = D.Yz7({
              token: K,
              factory: K.ɵfac,
              providedIn: 'root',
            })),
            K
          );
        })(),
        We = (() => {
          class K {
            constructor(b, F) {
              (this._platform = F), (this._document = b);
            }
            ngOnDestroy() {
              this._containerElement?.remove();
            }
            getContainerElement() {
              return (
                this._containerElement || this._createContainer(),
                this._containerElement
              );
            }
            _createContainer() {
              const b = 'cdk-overlay-container';
              if (this._platform.isBrowser || (0, It.Oy)()) {
                const V = this._document.querySelectorAll(
                  `.${b}[platform="server"], .${b}[platform="test"]`
                );
                for (let fe = 0; fe < V.length; fe++) V[fe].remove();
              }
              const F = this._document.createElement('div');
              F.classList.add(b),
                (0, It.Oy)()
                  ? F.setAttribute('platform', 'test')
                  : this._platform.isBrowser ||
                    F.setAttribute('platform', 'server'),
                this._document.body.appendChild(F),
                (this._containerElement = F);
            }
          }
          return (
            (K.ɵfac = function (b) {
              return new (b || K)(D.LFG(zt.K0), D.LFG(It.t4));
            }),
            (K.ɵprov = D.Yz7({
              token: K,
              factory: K.ɵfac,
              providedIn: 'root',
            })),
            K
          );
        })();
      class $e {
        constructor(y, b, F, V, fe, Fe, nt, gt, yt, Dt = !1) {
          (this._portalOutlet = y),
            (this._host = b),
            (this._pane = F),
            (this._config = V),
            (this._ngZone = fe),
            (this._keyboardDispatcher = Fe),
            (this._document = nt),
            (this._location = gt),
            (this._outsideClickDispatcher = yt),
            (this._animationsDisabled = Dt),
            (this._backdropElement = null),
            (this._backdropClick = new P.x()),
            (this._attachments = new P.x()),
            (this._detachments = new P.x()),
            (this._locationChanges = qe.w0.EMPTY),
            (this._backdropClickHandler = ($t) => this._backdropClick.next($t)),
            (this._backdropTransitionendHandler = ($t) => {
              this._disposeBackdrop($t.target);
            }),
            (this._keydownEvents = new P.x()),
            (this._outsidePointerEvents = new P.x()),
            V.scrollStrategy &&
              ((this._scrollStrategy = V.scrollStrategy),
              this._scrollStrategy.attach(this)),
            (this._positionStrategy = V.positionStrategy);
        }
        get overlayElement() {
          return this._pane;
        }
        get backdropElement() {
          return this._backdropElement;
        }
        get hostElement() {
          return this._host;
        }
        attach(y) {
          !this._host.parentElement &&
            this._previousHostParent &&
            this._previousHostParent.appendChild(this._host);
          const b = this._portalOutlet.attach(y);
          return (
            this._positionStrategy && this._positionStrategy.attach(this),
            this._updateStackingOrder(),
            this._updateElementSize(),
            this._updateElementDirection(),
            this._scrollStrategy && this._scrollStrategy.enable(),
            this._ngZone.onStable.pipe((0, fr.q)(1)).subscribe(() => {
              this.hasAttached() && this.updatePosition();
            }),
            this._togglePointerEvents(!0),
            this._config.hasBackdrop && this._attachBackdrop(),
            this._config.panelClass &&
              this._toggleClasses(this._pane, this._config.panelClass, !0),
            this._attachments.next(),
            this._keyboardDispatcher.add(this),
            this._config.disposeOnNavigation &&
              (this._locationChanges = this._location.subscribe(() =>
                this.dispose()
              )),
            this._outsideClickDispatcher.add(this),
            'function' == typeof b?.onDestroy &&
              b.onDestroy(() => {
                this.hasAttached() &&
                  this._ngZone.runOutsideAngular(() =>
                    Promise.resolve().then(() => this.detach())
                  );
              }),
            b
          );
        }
        detach() {
          if (!this.hasAttached()) return;
          this.detachBackdrop(),
            this._togglePointerEvents(!1),
            this._positionStrategy &&
              this._positionStrategy.detach &&
              this._positionStrategy.detach(),
            this._scrollStrategy && this._scrollStrategy.disable();
          const y = this._portalOutlet.detach();
          return (
            this._detachments.next(),
            this._keyboardDispatcher.remove(this),
            this._detachContentWhenStable(),
            this._locationChanges.unsubscribe(),
            this._outsideClickDispatcher.remove(this),
            y
          );
        }
        dispose() {
          const y = this.hasAttached();
          this._positionStrategy && this._positionStrategy.dispose(),
            this._disposeScrollStrategy(),
            this._disposeBackdrop(this._backdropElement),
            this._locationChanges.unsubscribe(),
            this._keyboardDispatcher.remove(this),
            this._portalOutlet.dispose(),
            this._attachments.complete(),
            this._backdropClick.complete(),
            this._keydownEvents.complete(),
            this._outsidePointerEvents.complete(),
            this._outsideClickDispatcher.remove(this),
            this._host?.remove(),
            (this._previousHostParent = this._pane = this._host = null),
            y && this._detachments.next(),
            this._detachments.complete();
        }
        hasAttached() {
          return this._portalOutlet.hasAttached();
        }
        backdropClick() {
          return this._backdropClick;
        }
        attachments() {
          return this._attachments;
        }
        detachments() {
          return this._detachments;
        }
        keydownEvents() {
          return this._keydownEvents;
        }
        outsidePointerEvents() {
          return this._outsidePointerEvents;
        }
        getConfig() {
          return this._config;
        }
        updatePosition() {
          this._positionStrategy && this._positionStrategy.apply();
        }
        updatePositionStrategy(y) {
          y !== this._positionStrategy &&
            (this._positionStrategy && this._positionStrategy.dispose(),
            (this._positionStrategy = y),
            this.hasAttached() && (y.attach(this), this.updatePosition()));
        }
        updateSize(y) {
          (this._config = { ...this._config, ...y }), this._updateElementSize();
        }
        setDirection(y) {
          (this._config = { ...this._config, direction: y }),
            this._updateElementDirection();
        }
        addPanelClass(y) {
          this._pane && this._toggleClasses(this._pane, y, !0);
        }
        removePanelClass(y) {
          this._pane && this._toggleClasses(this._pane, y, !1);
        }
        getDirection() {
          const y = this._config.direction;
          return y ? ('string' == typeof y ? y : y.value) : 'ltr';
        }
        updateScrollStrategy(y) {
          y !== this._scrollStrategy &&
            (this._disposeScrollStrategy(),
            (this._scrollStrategy = y),
            this.hasAttached() && (y.attach(this), y.enable()));
        }
        _updateElementDirection() {
          this._host.setAttribute('dir', this.getDirection());
        }
        _updateElementSize() {
          if (!this._pane) return;
          const y = this._pane.style;
          (y.width = (0, p.HM)(this._config.width)),
            (y.height = (0, p.HM)(this._config.height)),
            (y.minWidth = (0, p.HM)(this._config.minWidth)),
            (y.minHeight = (0, p.HM)(this._config.minHeight)),
            (y.maxWidth = (0, p.HM)(this._config.maxWidth)),
            (y.maxHeight = (0, p.HM)(this._config.maxHeight));
        }
        _togglePointerEvents(y) {
          this._pane.style.pointerEvents = y ? '' : 'none';
        }
        _attachBackdrop() {
          const y = 'cdk-overlay-backdrop-showing';
          (this._backdropElement = this._document.createElement('div')),
            this._backdropElement.classList.add('cdk-overlay-backdrop'),
            this._animationsDisabled &&
              this._backdropElement.classList.add(
                'cdk-overlay-backdrop-noop-animation'
              ),
            this._config.backdropClass &&
              this._toggleClasses(
                this._backdropElement,
                this._config.backdropClass,
                !0
              ),
            this._host.parentElement.insertBefore(
              this._backdropElement,
              this._host
            ),
            this._backdropElement.addEventListener(
              'click',
              this._backdropClickHandler
            ),
            !this._animationsDisabled && typeof requestAnimationFrame < 'u'
              ? this._ngZone.runOutsideAngular(() => {
                  requestAnimationFrame(() => {
                    this._backdropElement &&
                      this._backdropElement.classList.add(y);
                  });
                })
              : this._backdropElement.classList.add(y);
        }
        _updateStackingOrder() {
          this._host.nextSibling &&
            this._host.parentNode.appendChild(this._host);
        }
        detachBackdrop() {
          const y = this._backdropElement;
          if (y) {
            if (this._animationsDisabled) return void this._disposeBackdrop(y);
            y.classList.remove('cdk-overlay-backdrop-showing'),
              this._ngZone.runOutsideAngular(() => {
                y.addEventListener(
                  'transitionend',
                  this._backdropTransitionendHandler
                );
              }),
              (y.style.pointerEvents = 'none'),
              (this._backdropTimeout = this._ngZone.runOutsideAngular(() =>
                setTimeout(() => {
                  this._disposeBackdrop(y);
                }, 500)
              ));
          }
        }
        _toggleClasses(y, b, F) {
          const V = (0, p.Eq)(b || []).filter((fe) => !!fe);
          V.length && (F ? y.classList.add(...V) : y.classList.remove(...V));
        }
        _detachContentWhenStable() {
          this._ngZone.runOutsideAngular(() => {
            const y = this._ngZone.onStable
              .pipe((0, Qn.R)((0, qn.T)(this._attachments, this._detachments)))
              .subscribe(() => {
                (!this._pane ||
                  !this._host ||
                  0 === this._pane.children.length) &&
                  (this._pane &&
                    this._config.panelClass &&
                    this._toggleClasses(
                      this._pane,
                      this._config.panelClass,
                      !1
                    ),
                  this._host &&
                    this._host.parentElement &&
                    ((this._previousHostParent = this._host.parentElement),
                    this._host.remove()),
                  y.unsubscribe());
              });
          });
        }
        _disposeScrollStrategy() {
          const y = this._scrollStrategy;
          y && (y.disable(), y.detach && y.detach());
        }
        _disposeBackdrop(y) {
          y &&
            (y.removeEventListener('click', this._backdropClickHandler),
            y.removeEventListener(
              'transitionend',
              this._backdropTransitionendHandler
            ),
            y.remove(),
            this._backdropElement === y && (this._backdropElement = null)),
            this._backdropTimeout &&
              (clearTimeout(this._backdropTimeout),
              (this._backdropTimeout = void 0));
        }
      }
      const j = 'cdk-overlay-connected-position-bounding-box',
        N = /([A-Za-z%]+)$/;
      class T {
        get positions() {
          return this._preferredPositions;
        }
        constructor(y, b, F, V, fe) {
          (this._viewportRuler = b),
            (this._document = F),
            (this._platform = V),
            (this._overlayContainer = fe),
            (this._lastBoundingBoxSize = { width: 0, height: 0 }),
            (this._isPushed = !1),
            (this._canPush = !0),
            (this._growAfterOpen = !1),
            (this._hasFlexibleDimensions = !0),
            (this._positionLocked = !1),
            (this._viewportMargin = 0),
            (this._scrollables = []),
            (this._preferredPositions = []),
            (this._positionChanges = new P.x()),
            (this._resizeSubscription = qe.w0.EMPTY),
            (this._offsetX = 0),
            (this._offsetY = 0),
            (this._appliedPanelClasses = []),
            (this.positionChanges = this._positionChanges),
            this.setOrigin(y);
        }
        attach(y) {
          this._validatePositions(),
            y.hostElement.classList.add(j),
            (this._overlayRef = y),
            (this._boundingBox = y.hostElement),
            (this._pane = y.overlayElement),
            (this._isDisposed = !1),
            (this._isInitialRender = !0),
            (this._lastPosition = null),
            this._resizeSubscription.unsubscribe(),
            (this._resizeSubscription = this._viewportRuler
              .change()
              .subscribe(() => {
                (this._isInitialRender = !0), this.apply();
              }));
        }
        apply() {
          if (this._isDisposed || !this._platform.isBrowser) return;
          if (
            !this._isInitialRender &&
            this._positionLocked &&
            this._lastPosition
          )
            return void this.reapplyLastPosition();
          this._clearPanelClasses(),
            this._resetOverlayElementStyles(),
            this._resetBoundingBoxStyles(),
            (this._viewportRect = this._getNarrowedViewportRect()),
            (this._originRect = this._getOriginRect()),
            (this._overlayRect = this._pane.getBoundingClientRect()),
            (this._containerRect = this._overlayContainer
              .getContainerElement()
              .getBoundingClientRect());
          const y = this._originRect,
            b = this._overlayRect,
            F = this._viewportRect,
            V = this._containerRect,
            fe = [];
          let Fe;
          for (let nt of this._preferredPositions) {
            let gt = this._getOriginPoint(y, V, nt),
              yt = this._getOverlayPoint(gt, b, nt),
              Dt = this._getOverlayFit(yt, b, F, nt);
            if (Dt.isCompletelyWithinViewport)
              return (this._isPushed = !1), void this._applyPosition(nt, gt);
            this._canFitWithFlexibleDimensions(Dt, yt, F)
              ? fe.push({
                  position: nt,
                  origin: gt,
                  overlayRect: b,
                  boundingBoxRect: this._calculateBoundingBoxRect(gt, nt),
                })
              : (!Fe || Fe.overlayFit.visibleArea < Dt.visibleArea) &&
                (Fe = {
                  overlayFit: Dt,
                  overlayPoint: yt,
                  originPoint: gt,
                  position: nt,
                  overlayRect: b,
                });
          }
          if (fe.length) {
            let nt = null,
              gt = -1;
            for (const yt of fe) {
              const Dt =
                yt.boundingBoxRect.width *
                yt.boundingBoxRect.height *
                (yt.position.weight || 1);
              Dt > gt && ((gt = Dt), (nt = yt));
            }
            return (
              (this._isPushed = !1),
              void this._applyPosition(nt.position, nt.origin)
            );
          }
          if (this._canPush)
            return (
              (this._isPushed = !0),
              void this._applyPosition(Fe.position, Fe.originPoint)
            );
          this._applyPosition(Fe.position, Fe.originPoint);
        }
        detach() {
          this._clearPanelClasses(),
            (this._lastPosition = null),
            (this._previousPushAmount = null),
            this._resizeSubscription.unsubscribe();
        }
        dispose() {
          this._isDisposed ||
            (this._boundingBox &&
              Q(this._boundingBox.style, {
                top: '',
                left: '',
                right: '',
                bottom: '',
                height: '',
                width: '',
                alignItems: '',
                justifyContent: '',
              }),
            this._pane && this._resetOverlayElementStyles(),
            this._overlayRef &&
              this._overlayRef.hostElement.classList.remove(j),
            this.detach(),
            this._positionChanges.complete(),
            (this._overlayRef = this._boundingBox = null),
            (this._isDisposed = !0));
        }
        reapplyLastPosition() {
          if (this._isDisposed || !this._platform.isBrowser) return;
          const y = this._lastPosition;
          if (y) {
            (this._originRect = this._getOriginRect()),
              (this._overlayRect = this._pane.getBoundingClientRect()),
              (this._viewportRect = this._getNarrowedViewportRect()),
              (this._containerRect = this._overlayContainer
                .getContainerElement()
                .getBoundingClientRect());
            const b = this._getOriginPoint(
              this._originRect,
              this._containerRect,
              y
            );
            this._applyPosition(y, b);
          } else this.apply();
        }
        withScrollableContainers(y) {
          return (this._scrollables = y), this;
        }
        withPositions(y) {
          return (
            (this._preferredPositions = y),
            -1 === y.indexOf(this._lastPosition) && (this._lastPosition = null),
            this._validatePositions(),
            this
          );
        }
        withViewportMargin(y) {
          return (this._viewportMargin = y), this;
        }
        withFlexibleDimensions(y = !0) {
          return (this._hasFlexibleDimensions = y), this;
        }
        withGrowAfterOpen(y = !0) {
          return (this._growAfterOpen = y), this;
        }
        withPush(y = !0) {
          return (this._canPush = y), this;
        }
        withLockedPosition(y = !0) {
          return (this._positionLocked = y), this;
        }
        setOrigin(y) {
          return (this._origin = y), this;
        }
        withDefaultOffsetX(y) {
          return (this._offsetX = y), this;
        }
        withDefaultOffsetY(y) {
          return (this._offsetY = y), this;
        }
        withTransformOriginOn(y) {
          return (this._transformOriginSelector = y), this;
        }
        _getOriginPoint(y, b, F) {
          let V, fe;
          if ('center' == F.originX) V = y.left + y.width / 2;
          else {
            const Fe = this._isRtl() ? y.right : y.left,
              nt = this._isRtl() ? y.left : y.right;
            V = 'start' == F.originX ? Fe : nt;
          }
          return (
            b.left < 0 && (V -= b.left),
            (fe =
              'center' == F.originY
                ? y.top + y.height / 2
                : 'top' == F.originY
                ? y.top
                : y.bottom),
            b.top < 0 && (fe -= b.top),
            { x: V, y: fe }
          );
        }
        _getOverlayPoint(y, b, F) {
          let V, fe;
          return (
            (V =
              'center' == F.overlayX
                ? -b.width / 2
                : 'start' === F.overlayX
                ? this._isRtl()
                  ? -b.width
                  : 0
                : this._isRtl()
                ? 0
                : -b.width),
            (fe =
              'center' == F.overlayY
                ? -b.height / 2
                : 'top' == F.overlayY
                ? 0
                : -b.height),
            { x: y.x + V, y: y.y + fe }
          );
        }
        _getOverlayFit(y, b, F, V) {
          const fe = ke(b);
          let { x: Fe, y: nt } = y,
            gt = this._getOffset(V, 'x'),
            yt = this._getOffset(V, 'y');
          gt && (Fe += gt), yt && (nt += yt);
          let or = 0 - nt,
            xn = nt + fe.height - F.height,
            Bn = this._subtractOverflows(
              fe.width,
              0 - Fe,
              Fe + fe.width - F.width
            ),
            _t = this._subtractOverflows(fe.height, or, xn),
            pn = Bn * _t;
          return {
            visibleArea: pn,
            isCompletelyWithinViewport: fe.width * fe.height === pn,
            fitsInViewportVertically: _t === fe.height,
            fitsInViewportHorizontally: Bn == fe.width,
          };
        }
        _canFitWithFlexibleDimensions(y, b, F) {
          if (this._hasFlexibleDimensions) {
            const V = F.bottom - b.y,
              fe = F.right - b.x,
              Fe = ge(this._overlayRef.getConfig().minHeight),
              nt = ge(this._overlayRef.getConfig().minWidth);
            return (
              (y.fitsInViewportVertically || (null != Fe && Fe <= V)) &&
              (y.fitsInViewportHorizontally || (null != nt && nt <= fe))
            );
          }
          return !1;
        }
        _pushOverlayOnScreen(y, b, F) {
          if (this._previousPushAmount && this._positionLocked)
            return {
              x: y.x + this._previousPushAmount.x,
              y: y.y + this._previousPushAmount.y,
            };
          const V = ke(b),
            fe = this._viewportRect,
            Fe = Math.max(y.x + V.width - fe.width, 0),
            nt = Math.max(y.y + V.height - fe.height, 0),
            gt = Math.max(fe.top - F.top - y.y, 0),
            yt = Math.max(fe.left - F.left - y.x, 0);
          let Dt = 0,
            $t = 0;
          return (
            (Dt =
              V.width <= fe.width
                ? yt || -Fe
                : y.x < this._viewportMargin
                ? fe.left - F.left - y.x
                : 0),
            ($t =
              V.height <= fe.height
                ? gt || -nt
                : y.y < this._viewportMargin
                ? fe.top - F.top - y.y
                : 0),
            (this._previousPushAmount = { x: Dt, y: $t }),
            { x: y.x + Dt, y: y.y + $t }
          );
        }
        _applyPosition(y, b) {
          if (
            (this._setTransformOrigin(y),
            this._setOverlayElementStyles(b, y),
            this._setBoundingBoxStyles(b, y),
            y.panelClass && this._addPanelClasses(y.panelClass),
            (this._lastPosition = y),
            this._positionChanges.observers.length)
          ) {
            const F = this._getScrollVisibility(),
              V = new Re(y, F);
            this._positionChanges.next(V);
          }
          this._isInitialRender = !1;
        }
        _setTransformOrigin(y) {
          if (!this._transformOriginSelector) return;
          const b = this._boundingBox.querySelectorAll(
            this._transformOriginSelector
          );
          let F,
            V = y.overlayY;
          F =
            'center' === y.overlayX
              ? 'center'
              : this._isRtl()
              ? 'start' === y.overlayX
                ? 'right'
                : 'left'
              : 'start' === y.overlayX
              ? 'left'
              : 'right';
          for (let fe = 0; fe < b.length; fe++)
            b[fe].style.transformOrigin = `${F} ${V}`;
        }
        _calculateBoundingBoxRect(y, b) {
          const F = this._viewportRect,
            V = this._isRtl();
          let fe, Fe, nt, Dt, $t, or;
          if ('top' === b.overlayY)
            (Fe = y.y), (fe = F.height - Fe + this._viewportMargin);
          else if ('bottom' === b.overlayY)
            (nt = F.height - y.y + 2 * this._viewportMargin),
              (fe = F.height - nt + this._viewportMargin);
          else {
            const xn = Math.min(F.bottom - y.y + F.top, y.y),
              Bn = this._lastBoundingBoxSize.height;
            (fe = 2 * xn),
              (Fe = y.y - xn),
              fe > Bn &&
                !this._isInitialRender &&
                !this._growAfterOpen &&
                (Fe = y.y - Bn / 2);
          }
          if (('end' === b.overlayX && !V) || ('start' === b.overlayX && V))
            (or = F.width - y.x + this._viewportMargin),
              (Dt = y.x - this._viewportMargin);
          else if (
            ('start' === b.overlayX && !V) ||
            ('end' === b.overlayX && V)
          )
            ($t = y.x), (Dt = F.right - y.x);
          else {
            const xn = Math.min(F.right - y.x + F.left, y.x),
              Bn = this._lastBoundingBoxSize.width;
            (Dt = 2 * xn),
              ($t = y.x - xn),
              Dt > Bn &&
                !this._isInitialRender &&
                !this._growAfterOpen &&
                ($t = y.x - Bn / 2);
          }
          return {
            top: Fe,
            left: $t,
            bottom: nt,
            right: or,
            width: Dt,
            height: fe,
          };
        }
        _setBoundingBoxStyles(y, b) {
          const F = this._calculateBoundingBoxRect(y, b);
          !this._isInitialRender &&
            !this._growAfterOpen &&
            ((F.height = Math.min(F.height, this._lastBoundingBoxSize.height)),
            (F.width = Math.min(F.width, this._lastBoundingBoxSize.width)));
          const V = {};
          if (this._hasExactPosition())
            (V.top = V.left = '0'),
              (V.bottom = V.right = V.maxHeight = V.maxWidth = ''),
              (V.width = V.height = '100%');
          else {
            const fe = this._overlayRef.getConfig().maxHeight,
              Fe = this._overlayRef.getConfig().maxWidth;
            (V.height = (0, p.HM)(F.height)),
              (V.top = (0, p.HM)(F.top)),
              (V.bottom = (0, p.HM)(F.bottom)),
              (V.width = (0, p.HM)(F.width)),
              (V.left = (0, p.HM)(F.left)),
              (V.right = (0, p.HM)(F.right)),
              (V.alignItems =
                'center' === b.overlayX
                  ? 'center'
                  : 'end' === b.overlayX
                  ? 'flex-end'
                  : 'flex-start'),
              (V.justifyContent =
                'center' === b.overlayY
                  ? 'center'
                  : 'bottom' === b.overlayY
                  ? 'flex-end'
                  : 'flex-start'),
              fe && (V.maxHeight = (0, p.HM)(fe)),
              Fe && (V.maxWidth = (0, p.HM)(Fe));
          }
          (this._lastBoundingBoxSize = F), Q(this._boundingBox.style, V);
        }
        _resetBoundingBoxStyles() {
          Q(this._boundingBox.style, {
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            height: '',
            width: '',
            alignItems: '',
            justifyContent: '',
          });
        }
        _resetOverlayElementStyles() {
          Q(this._pane.style, {
            top: '',
            left: '',
            bottom: '',
            right: '',
            position: '',
            transform: '',
          });
        }
        _setOverlayElementStyles(y, b) {
          const F = {},
            V = this._hasExactPosition(),
            fe = this._hasFlexibleDimensions,
            Fe = this._overlayRef.getConfig();
          if (V) {
            const Dt = this._viewportRuler.getViewportScrollPosition();
            Q(F, this._getExactOverlayY(b, y, Dt)),
              Q(F, this._getExactOverlayX(b, y, Dt));
          } else F.position = 'static';
          let nt = '',
            gt = this._getOffset(b, 'x'),
            yt = this._getOffset(b, 'y');
          gt && (nt += `translateX(${gt}px) `),
            yt && (nt += `translateY(${yt}px)`),
            (F.transform = nt.trim()),
            Fe.maxHeight &&
              (V
                ? (F.maxHeight = (0, p.HM)(Fe.maxHeight))
                : fe && (F.maxHeight = '')),
            Fe.maxWidth &&
              (V
                ? (F.maxWidth = (0, p.HM)(Fe.maxWidth))
                : fe && (F.maxWidth = '')),
            Q(this._pane.style, F);
        }
        _getExactOverlayY(y, b, F) {
          let V = { top: '', bottom: '' },
            fe = this._getOverlayPoint(b, this._overlayRect, y);
          return (
            this._isPushed &&
              (fe = this._pushOverlayOnScreen(fe, this._overlayRect, F)),
            'bottom' === y.overlayY
              ? (V.bottom =
                  this._document.documentElement.clientHeight -
                  (fe.y + this._overlayRect.height) +
                  'px')
              : (V.top = (0, p.HM)(fe.y)),
            V
          );
        }
        _getExactOverlayX(y, b, F) {
          let Fe,
            V = { left: '', right: '' },
            fe = this._getOverlayPoint(b, this._overlayRect, y);
          return (
            this._isPushed &&
              (fe = this._pushOverlayOnScreen(fe, this._overlayRect, F)),
            (Fe = this._isRtl()
              ? 'end' === y.overlayX
                ? 'left'
                : 'right'
              : 'end' === y.overlayX
              ? 'right'
              : 'left'),
            'right' === Fe
              ? (V.right =
                  this._document.documentElement.clientWidth -
                  (fe.x + this._overlayRect.width) +
                  'px')
              : (V.left = (0, p.HM)(fe.x)),
            V
          );
        }
        _getScrollVisibility() {
          const y = this._getOriginRect(),
            b = this._pane.getBoundingClientRect(),
            F = this._scrollables.map((V) =>
              V.getElementRef().nativeElement.getBoundingClientRect()
            );
          return {
            isOriginClipped: At(y, F),
            isOriginOutsideView: Jn(y, F),
            isOverlayClipped: At(b, F),
            isOverlayOutsideView: Jn(b, F),
          };
        }
        _subtractOverflows(y, ...b) {
          return b.reduce((F, V) => F - Math.max(V, 0), y);
        }
        _getNarrowedViewportRect() {
          const y = this._document.documentElement.clientWidth,
            b = this._document.documentElement.clientHeight,
            F = this._viewportRuler.getViewportScrollPosition();
          return {
            top: F.top + this._viewportMargin,
            left: F.left + this._viewportMargin,
            right: F.left + y - this._viewportMargin,
            bottom: F.top + b - this._viewportMargin,
            width: y - 2 * this._viewportMargin,
            height: b - 2 * this._viewportMargin,
          };
        }
        _isRtl() {
          return 'rtl' === this._overlayRef.getDirection();
        }
        _hasExactPosition() {
          return !this._hasFlexibleDimensions || this._isPushed;
        }
        _getOffset(y, b) {
          return 'x' === b
            ? null == y.offsetX
              ? this._offsetX
              : y.offsetX
            : null == y.offsetY
            ? this._offsetY
            : y.offsetY;
        }
        _validatePositions() {}
        _addPanelClasses(y) {
          this._pane &&
            (0, p.Eq)(y).forEach((b) => {
              '' !== b &&
                -1 === this._appliedPanelClasses.indexOf(b) &&
                (this._appliedPanelClasses.push(b),
                this._pane.classList.add(b));
            });
        }
        _clearPanelClasses() {
          this._pane &&
            (this._appliedPanelClasses.forEach((y) => {
              this._pane.classList.remove(y);
            }),
            (this._appliedPanelClasses = []));
        }
        _getOriginRect() {
          const y = this._origin;
          if (y instanceof D.SBq)
            return y.nativeElement.getBoundingClientRect();
          if (y instanceof Element) return y.getBoundingClientRect();
          const b = y.width || 0,
            F = y.height || 0;
          return {
            top: y.y,
            bottom: y.y + F,
            left: y.x,
            right: y.x + b,
            height: F,
            width: b,
          };
        }
      }
      function Q(K, y) {
        for (let b in y) y.hasOwnProperty(b) && (K[b] = y[b]);
        return K;
      }
      function ge(K) {
        if ('number' != typeof K && null != K) {
          const [y, b] = K.split(N);
          return b && 'px' !== b ? null : parseFloat(y);
        }
        return K || null;
      }
      function ke(K) {
        return {
          top: Math.floor(K.top),
          right: Math.floor(K.right),
          bottom: Math.floor(K.bottom),
          left: Math.floor(K.left),
          width: Math.floor(K.width),
          height: Math.floor(K.height),
        };
      }
      const rn = 'cdk-global-overlay-wrapper';
      class Ut {
        constructor() {
          (this._cssPosition = 'static'),
            (this._topOffset = ''),
            (this._bottomOffset = ''),
            (this._alignItems = ''),
            (this._xPosition = ''),
            (this._xOffset = ''),
            (this._width = ''),
            (this._height = ''),
            (this._isDisposed = !1);
        }
        attach(y) {
          const b = y.getConfig();
          (this._overlayRef = y),
            this._width && !b.width && y.updateSize({ width: this._width }),
            this._height && !b.height && y.updateSize({ height: this._height }),
            y.hostElement.classList.add(rn),
            (this._isDisposed = !1);
        }
        top(y = '') {
          return (
            (this._bottomOffset = ''),
            (this._topOffset = y),
            (this._alignItems = 'flex-start'),
            this
          );
        }
        left(y = '') {
          return (this._xOffset = y), (this._xPosition = 'left'), this;
        }
        bottom(y = '') {
          return (
            (this._topOffset = ''),
            (this._bottomOffset = y),
            (this._alignItems = 'flex-end'),
            this
          );
        }
        right(y = '') {
          return (this._xOffset = y), (this._xPosition = 'right'), this;
        }
        start(y = '') {
          return (this._xOffset = y), (this._xPosition = 'start'), this;
        }
        end(y = '') {
          return (this._xOffset = y), (this._xPosition = 'end'), this;
        }
        width(y = '') {
          return (
            this._overlayRef
              ? this._overlayRef.updateSize({ width: y })
              : (this._width = y),
            this
          );
        }
        height(y = '') {
          return (
            this._overlayRef
              ? this._overlayRef.updateSize({ height: y })
              : (this._height = y),
            this
          );
        }
        centerHorizontally(y = '') {
          return this.left(y), (this._xPosition = 'center'), this;
        }
        centerVertically(y = '') {
          return this.top(y), (this._alignItems = 'center'), this;
        }
        apply() {
          if (!this._overlayRef || !this._overlayRef.hasAttached()) return;
          const y = this._overlayRef.overlayElement.style,
            b = this._overlayRef.hostElement.style,
            F = this._overlayRef.getConfig(),
            { width: V, height: fe, maxWidth: Fe, maxHeight: nt } = F,
            gt = !(
              ('100%' !== V && '100vw' !== V) ||
              (Fe && '100%' !== Fe && '100vw' !== Fe)
            ),
            yt = !(
              ('100%' !== fe && '100vh' !== fe) ||
              (nt && '100%' !== nt && '100vh' !== nt)
            ),
            Dt = this._xPosition,
            $t = this._xOffset,
            or = 'rtl' === this._overlayRef.getConfig().direction;
          let xn = '',
            Bn = '',
            _t = '';
          gt
            ? (_t = 'flex-start')
            : 'center' === Dt
            ? ((_t = 'center'), or ? (Bn = $t) : (xn = $t))
            : or
            ? 'left' === Dt || 'end' === Dt
              ? ((_t = 'flex-end'), (xn = $t))
              : ('right' === Dt || 'start' === Dt) &&
                ((_t = 'flex-start'), (Bn = $t))
            : 'left' === Dt || 'start' === Dt
            ? ((_t = 'flex-start'), (xn = $t))
            : ('right' === Dt || 'end' === Dt) &&
              ((_t = 'flex-end'), (Bn = $t)),
            (y.position = this._cssPosition),
            (y.marginLeft = gt ? '0' : xn),
            (y.marginTop = yt ? '0' : this._topOffset),
            (y.marginBottom = this._bottomOffset),
            (y.marginRight = gt ? '0' : Bn),
            (b.justifyContent = _t),
            (b.alignItems = yt ? 'flex-start' : this._alignItems);
        }
        dispose() {
          if (this._isDisposed || !this._overlayRef) return;
          const y = this._overlayRef.overlayElement.style,
            b = this._overlayRef.hostElement,
            F = b.style;
          b.classList.remove(rn),
            (F.justifyContent =
              F.alignItems =
              y.marginTop =
              y.marginBottom =
              y.marginLeft =
              y.marginRight =
              y.position =
                ''),
            (this._overlayRef = null),
            (this._isDisposed = !0);
        }
      }
      let _n = (() => {
          class K {
            constructor(b, F, V, fe) {
              (this._viewportRuler = b),
                (this._document = F),
                (this._platform = V),
                (this._overlayContainer = fe);
            }
            global() {
              return new Ut();
            }
            flexibleConnectedTo(b) {
              return new T(
                b,
                this._viewportRuler,
                this._document,
                this._platform,
                this._overlayContainer
              );
            }
          }
          return (
            (K.ɵfac = function (b) {
              return new (b || K)(
                D.LFG(rt),
                D.LFG(zt.K0),
                D.LFG(It.t4),
                D.LFG(We)
              );
            }),
            (K.ɵprov = D.Yz7({
              token: K,
              factory: K.ɵfac,
              providedIn: 'root',
            })),
            K
          );
        })(),
        Ht = 0,
        Wt = (() => {
          class K {
            constructor(b, F, V, fe, Fe, nt, gt, yt, Dt, $t, or, xn) {
              (this.scrollStrategies = b),
                (this._overlayContainer = F),
                (this._componentFactoryResolver = V),
                (this._positionBuilder = fe),
                (this._keyboardDispatcher = Fe),
                (this._injector = nt),
                (this._ngZone = gt),
                (this._document = yt),
                (this._directionality = Dt),
                (this._location = $t),
                (this._outsideClickDispatcher = or),
                (this._animationsModuleType = xn);
            }
            create(b) {
              const F = this._createHostElement(),
                V = this._createPaneElement(F),
                fe = this._createPortalOutlet(V),
                Fe = new X(b);
              return (
                (Fe.direction = Fe.direction || this._directionality.value),
                new $e(
                  fe,
                  F,
                  V,
                  Fe,
                  this._ngZone,
                  this._keyboardDispatcher,
                  this._document,
                  this._location,
                  this._outsideClickDispatcher,
                  'NoopAnimations' === this._animationsModuleType
                )
              );
            }
            position() {
              return this._positionBuilder;
            }
            _createPaneElement(b) {
              const F = this._document.createElement('div');
              return (
                (F.id = 'cdk-overlay-' + Ht++),
                F.classList.add('cdk-overlay-pane'),
                b.appendChild(F),
                F
              );
            }
            _createHostElement() {
              const b = this._document.createElement('div');
              return (
                this._overlayContainer.getContainerElement().appendChild(b), b
              );
            }
            _createPortalOutlet(b) {
              return (
                this._appRef || (this._appRef = this._injector.get(D.z2F)),
                new Tn.u0(
                  b,
                  this._componentFactoryResolver,
                  this._appRef,
                  this._injector,
                  this._document
                )
              );
            }
          }
          return (
            (K.ɵfac = function (b) {
              return new (b || K)(
                D.LFG(we),
                D.LFG(We),
                D.LFG(D._Vd),
                D.LFG(_n),
                D.LFG(Ce),
                D.LFG(D.zs3),
                D.LFG(D.R0b),
                D.LFG(zt.K0),
                D.LFG(dn.Is),
                D.LFG(zt.Ye),
                D.LFG(be),
                D.LFG(D.QbO, 8)
              );
            }),
            (K.ɵprov = D.Yz7({
              token: K,
              factory: K.ɵfac,
              providedIn: 'root',
            })),
            K
          );
        })();
      const mr = {
        provide: new D.OlP('cdk-connected-overlay-scroll-strategy'),
        deps: [Wt],
        useFactory: function gr(K) {
          return () => K.scrollStrategies.reposition();
        },
      };
      let Gr = (() => {
        class K {}
        return (
          (K.ɵfac = function (b) {
            return new (b || K)();
          }),
          (K.ɵmod = D.oAB({ type: K })),
          (K.ɵinj = D.cJS({
            providers: [Wt, mr],
            imports: [dn.vT, Tn.eL, Vn, Vn],
          })),
          K
        );
      })();
    },
    2966: (Je, me, C) => {
      C.d(me, {
        Mq: () => Le,
        Oy: () => ue,
        ht: () => pt,
        i$: () => oe,
        kV: () => Ye,
        sA: () => qe,
        t4: () => J,
      });
      var p = C(9523),
        D = C(4755);
      let P;
      try {
        P = typeof Intl < 'u' && Intl.v8BreakIterator;
      } catch {
        P = !1;
      }
      let de,
        Ve,
        xe,
        J = (() => {
          class ne {
            constructor(ce) {
              (this._platformId = ce),
                (this.isBrowser = this._platformId
                  ? (0, D.NF)(this._platformId)
                  : 'object' == typeof document && !!document),
                (this.EDGE =
                  this.isBrowser && /(edge)/i.test(navigator.userAgent)),
                (this.TRIDENT =
                  this.isBrowser &&
                  /(msie|trident)/i.test(navigator.userAgent)),
                (this.BLINK =
                  this.isBrowser &&
                  !(!window.chrome && !P) &&
                  typeof CSS < 'u' &&
                  !this.EDGE &&
                  !this.TRIDENT),
                (this.WEBKIT =
                  this.isBrowser &&
                  /AppleWebKit/i.test(navigator.userAgent) &&
                  !this.BLINK &&
                  !this.EDGE &&
                  !this.TRIDENT),
                (this.IOS =
                  this.isBrowser &&
                  /iPad|iPhone|iPod/.test(navigator.userAgent) &&
                  !('MSStream' in window)),
                (this.FIREFOX =
                  this.isBrowser &&
                  /(firefox|minefield)/i.test(navigator.userAgent)),
                (this.ANDROID =
                  this.isBrowser &&
                  /android/i.test(navigator.userAgent) &&
                  !this.TRIDENT),
                (this.SAFARI =
                  this.isBrowser &&
                  /safari/i.test(navigator.userAgent) &&
                  this.WEBKIT);
            }
          }
          return (
            (ne.ɵfac = function (ce) {
              return new (ce || ne)(p.LFG(p.Lbi));
            }),
            (ne.ɵprov = p.Yz7({
              token: ne,
              factory: ne.ɵfac,
              providedIn: 'root',
            })),
            ne
          );
        })();
      function oe(ne) {
        return (function $() {
          if (null == de && typeof window < 'u')
            try {
              window.addEventListener(
                'test',
                null,
                Object.defineProperty({}, 'passive', { get: () => (de = !0) })
              );
            } finally {
              de = de || !1;
            }
          return de;
        })()
          ? ne
          : !!ne.capture;
      }
      function Le() {
        if (null == Ve) {
          if (
            'object' != typeof document ||
            !document ||
            'function' != typeof Element ||
            !Element
          )
            return (Ve = !1), Ve;
          if ('scrollBehavior' in document.documentElement.style) Ve = !0;
          else {
            const ne = Element.prototype.scrollTo;
            Ve = !!ne && !/\{\s*\[native code\]\s*\}/.test(ne.toString());
          }
        }
        return Ve;
      }
      function Ye(ne) {
        if (
          (function Xe() {
            if (null == xe) {
              const ne = typeof document < 'u' ? document.head : null;
              xe = !(!ne || (!ne.createShadowRoot && !ne.attachShadow));
            }
            return xe;
          })()
        ) {
          const se = ne.getRootNode ? ne.getRootNode() : null;
          if (typeof ShadowRoot < 'u' && ShadowRoot && se instanceof ShadowRoot)
            return se;
        }
        return null;
      }
      function pt() {
        let ne =
          typeof document < 'u' && document ? document.activeElement : null;
        for (; ne && ne.shadowRoot; ) {
          const se = ne.shadowRoot.activeElement;
          if (se === ne) break;
          ne = se;
        }
        return ne;
      }
      function qe(ne) {
        return ne.composedPath ? ne.composedPath()[0] : ne.target;
      }
      function ue() {
        return (
          (typeof __karma__ < 'u' && !!__karma__) ||
          (typeof jasmine < 'u' && !!jasmine) ||
          (typeof jest < 'u' && !!jest) ||
          (typeof Mocha < 'u' && !!Mocha)
        );
      }
    },
    8023: (Je, me, C) => {
      C.d(me, {
        C5: () => $,
        Pl: () => pt,
        UE: () => oe,
        eL: () => ue,
        en: () => Ve,
        u0: () => et,
      });
      var p = C(9523),
        D = C(4755);
      class de {
        attach(ce) {
          return (this._attachedHost = ce), ce.attach(this);
        }
        detach() {
          let ce = this._attachedHost;
          null != ce && ((this._attachedHost = null), ce.detach());
        }
        get isAttached() {
          return null != this._attachedHost;
        }
        setAttachedHost(ce) {
          this._attachedHost = ce;
        }
      }
      class $ extends de {
        constructor(ce, _e, ye, Ie, Ee) {
          super(),
            (this.component = ce),
            (this.viewContainerRef = _e),
            (this.injector = ye),
            (this.componentFactoryResolver = Ie),
            (this.projectableNodes = Ee);
        }
      }
      class oe extends de {
        constructor(ce, _e, ye, Ie) {
          super(),
            (this.templateRef = ce),
            (this.viewContainerRef = _e),
            (this.context = ye),
            (this.injector = Ie);
        }
        get origin() {
          return this.templateRef.elementRef;
        }
        attach(ce, _e = this.context) {
          return (this.context = _e), super.attach(ce);
        }
        detach() {
          return (this.context = void 0), super.detach();
        }
      }
      class le extends de {
        constructor(ce) {
          super(), (this.element = ce instanceof p.SBq ? ce.nativeElement : ce);
        }
      }
      class Ve {
        constructor() {
          (this._isDisposed = !1), (this.attachDomPortal = null);
        }
        hasAttached() {
          return !!this._attachedPortal;
        }
        attach(ce) {
          return ce instanceof $
            ? ((this._attachedPortal = ce), this.attachComponentPortal(ce))
            : ce instanceof oe
            ? ((this._attachedPortal = ce), this.attachTemplatePortal(ce))
            : this.attachDomPortal && ce instanceof le
            ? ((this._attachedPortal = ce), this.attachDomPortal(ce))
            : void 0;
        }
        detach() {
          this._attachedPortal &&
            (this._attachedPortal.setAttachedHost(null),
            (this._attachedPortal = null)),
            this._invokeDisposeFn();
        }
        dispose() {
          this.hasAttached() && this.detach(),
            this._invokeDisposeFn(),
            (this._isDisposed = !0);
        }
        setDisposeFn(ce) {
          this._disposeFn = ce;
        }
        _invokeDisposeFn() {
          this._disposeFn && (this._disposeFn(), (this._disposeFn = null));
        }
      }
      class et extends Ve {
        constructor(ce, _e, ye, Ie, Ee) {
          super(),
            (this.outletElement = ce),
            (this._componentFactoryResolver = _e),
            (this._appRef = ye),
            (this._defaultInjector = Ie),
            (this.attachDomPortal = (te) => {
              const Ne = te.element,
                De = this._document.createComment('dom-portal');
              Ne.parentNode.insertBefore(De, Ne),
                this.outletElement.appendChild(Ne),
                (this._attachedPortal = te),
                super.setDisposeFn(() => {
                  De.parentNode && De.parentNode.replaceChild(Ne, De);
                });
            }),
            (this._document = Ee);
        }
        attachComponentPortal(ce) {
          const ye = (
            ce.componentFactoryResolver || this._componentFactoryResolver
          ).resolveComponentFactory(ce.component);
          let Ie;
          return (
            ce.viewContainerRef
              ? ((Ie = ce.viewContainerRef.createComponent(
                  ye,
                  ce.viewContainerRef.length,
                  ce.injector || ce.viewContainerRef.injector,
                  ce.projectableNodes || void 0
                )),
                this.setDisposeFn(() => Ie.destroy()))
              : ((Ie = ye.create(
                  ce.injector || this._defaultInjector || p.zs3.NULL
                )),
                this._appRef.attachView(Ie.hostView),
                this.setDisposeFn(() => {
                  this._appRef.viewCount > 0 &&
                    this._appRef.detachView(Ie.hostView),
                    Ie.destroy();
                })),
            this.outletElement.appendChild(this._getComponentRootNode(Ie)),
            (this._attachedPortal = ce),
            Ie
          );
        }
        attachTemplatePortal(ce) {
          let _e = ce.viewContainerRef,
            ye = _e.createEmbeddedView(ce.templateRef, ce.context, {
              injector: ce.injector,
            });
          return (
            ye.rootNodes.forEach((Ie) => this.outletElement.appendChild(Ie)),
            ye.detectChanges(),
            this.setDisposeFn(() => {
              let Ie = _e.indexOf(ye);
              -1 !== Ie && _e.remove(Ie);
            }),
            (this._attachedPortal = ce),
            ye
          );
        }
        dispose() {
          super.dispose(), this.outletElement.remove();
        }
        _getComponentRootNode(ce) {
          return ce.hostView.rootNodes[0];
        }
      }
      let pt = (() => {
          class se extends Ve {
            constructor(_e, ye, Ie) {
              super(),
                (this._componentFactoryResolver = _e),
                (this._viewContainerRef = ye),
                (this._isInitialized = !1),
                (this.attached = new p.vpe()),
                (this.attachDomPortal = (Ee) => {
                  const te = Ee.element,
                    Ne = this._document.createComment('dom-portal');
                  Ee.setAttachedHost(this),
                    te.parentNode.insertBefore(Ne, te),
                    this._getRootNode().appendChild(te),
                    (this._attachedPortal = Ee),
                    super.setDisposeFn(() => {
                      Ne.parentNode && Ne.parentNode.replaceChild(te, Ne);
                    });
                }),
                (this._document = Ie);
            }
            get portal() {
              return this._attachedPortal;
            }
            set portal(_e) {
              (this.hasAttached() && !_e && !this._isInitialized) ||
                (this.hasAttached() && super.detach(),
                _e && super.attach(_e),
                (this._attachedPortal = _e || null));
            }
            get attachedRef() {
              return this._attachedRef;
            }
            ngOnInit() {
              this._isInitialized = !0;
            }
            ngOnDestroy() {
              super.dispose(),
                (this._attachedRef = this._attachedPortal = null);
            }
            attachComponentPortal(_e) {
              _e.setAttachedHost(this);
              const ye =
                  null != _e.viewContainerRef
                    ? _e.viewContainerRef
                    : this._viewContainerRef,
                Ee = (
                  _e.componentFactoryResolver || this._componentFactoryResolver
                ).resolveComponentFactory(_e.component),
                te = ye.createComponent(
                  Ee,
                  ye.length,
                  _e.injector || ye.injector,
                  _e.projectableNodes || void 0
                );
              return (
                ye !== this._viewContainerRef &&
                  this._getRootNode().appendChild(te.hostView.rootNodes[0]),
                super.setDisposeFn(() => te.destroy()),
                (this._attachedPortal = _e),
                (this._attachedRef = te),
                this.attached.emit(te),
                te
              );
            }
            attachTemplatePortal(_e) {
              _e.setAttachedHost(this);
              const ye = this._viewContainerRef.createEmbeddedView(
                _e.templateRef,
                _e.context,
                { injector: _e.injector }
              );
              return (
                super.setDisposeFn(() => this._viewContainerRef.clear()),
                (this._attachedPortal = _e),
                (this._attachedRef = ye),
                this.attached.emit(ye),
                ye
              );
            }
            _getRootNode() {
              const _e = this._viewContainerRef.element.nativeElement;
              return _e.nodeType === _e.ELEMENT_NODE ? _e : _e.parentNode;
            }
          }
          return (
            (se.ɵfac = function (_e) {
              return new (_e || se)(p.Y36(p._Vd), p.Y36(p.s_b), p.Y36(D.K0));
            }),
            (se.ɵdir = p.lG2({
              type: se,
              selectors: [['', 'cdkPortalOutlet', '']],
              inputs: { portal: ['cdkPortalOutlet', 'portal'] },
              outputs: { attached: 'attached' },
              exportAs: ['cdkPortalOutlet'],
              features: [p.qOj],
            })),
            se
          );
        })(),
        ue = (() => {
          class se {}
          return (
            (se.ɵfac = function (_e) {
              return new (_e || se)();
            }),
            (se.ɵmod = p.oAB({ type: se })),
            (se.ɵinj = p.cJS({})),
            se
          );
        })();
    },
    4755: (Je, me, C) => {
      C.d(me, {
        Do: () => xe,
        EM: () => ro,
        HT: () => J,
        JF: () => Nn,
        K0: () => H,
        Mx: () => Kn,
        NF: () => hi,
        O5: () => b,
        Ov: () => I,
        PM: () => fi,
        S$: () => Ve,
        Ts: () => br,
        V_: () => Te,
        Ye: () => Xe,
        b0: () => et,
        bD: () => Sr,
        ez: () => Mr,
        mk: () => yn,
        q: () => P,
        sg: () => kr,
        uU: () => Ft,
        w_: () => Y,
      });
      var p = C(9523);
      let D = null;
      function P() {
        return D;
      }
      function J(f) {
        D || (D = f);
      }
      class Y {}
      const H = new p.OlP('DocumentToken');
      let ee = (() => {
        class f {
          historyGo(g) {
            throw new Error('Not implemented');
          }
        }
        return (
          (f.ɵfac = function (g) {
            return new (g || f)();
          }),
          (f.ɵprov = p.Yz7({
            token: f,
            factory: function () {
              return (0, p.f3M)(de);
            },
            providedIn: 'platform',
          })),
          f
        );
      })();
      const Te = new p.OlP('Location Initialized');
      let de = (() => {
        class f extends ee {
          constructor() {
            super(),
              (this._doc = (0, p.f3M)(H)),
              (this._location = window.location),
              (this._history = window.history);
          }
          getBaseHrefFromDOM() {
            return P().getBaseHref(this._doc);
          }
          onPopState(g) {
            const w = P().getGlobalEventTarget(this._doc, 'window');
            return (
              w.addEventListener('popstate', g, !1),
              () => w.removeEventListener('popstate', g)
            );
          }
          onHashChange(g) {
            const w = P().getGlobalEventTarget(this._doc, 'window');
            return (
              w.addEventListener('hashchange', g, !1),
              () => w.removeEventListener('hashchange', g)
            );
          }
          get href() {
            return this._location.href;
          }
          get protocol() {
            return this._location.protocol;
          }
          get hostname() {
            return this._location.hostname;
          }
          get port() {
            return this._location.port;
          }
          get pathname() {
            return this._location.pathname;
          }
          get search() {
            return this._location.search;
          }
          get hash() {
            return this._location.hash;
          }
          set pathname(g) {
            this._location.pathname = g;
          }
          pushState(g, w, L) {
            this._history.pushState(g, w, L);
          }
          replaceState(g, w, L) {
            this._history.replaceState(g, w, L);
          }
          forward() {
            this._history.forward();
          }
          back() {
            this._history.back();
          }
          historyGo(g = 0) {
            this._history.go(g);
          }
          getState() {
            return this._history.state;
          }
        }
        return (
          (f.ɵfac = function (g) {
            return new (g || f)();
          }),
          (f.ɵprov = p.Yz7({
            token: f,
            factory: function () {
              return new f();
            },
            providedIn: 'platform',
          })),
          f
        );
      })();
      function $(f, _) {
        if (0 == f.length) return _;
        if (0 == _.length) return f;
        let g = 0;
        return (
          f.endsWith('/') && g++,
          _.startsWith('/') && g++,
          2 == g ? f + _.substring(1) : 1 == g ? f + _ : f + '/' + _
        );
      }
      function oe(f) {
        const _ = f.match(/#|\?|$/),
          g = (_ && _.index) || f.length;
        return f.slice(0, g - ('/' === f[g - 1] ? 1 : 0)) + f.slice(g);
      }
      function le(f) {
        return f && '?' !== f[0] ? '?' + f : f;
      }
      let Ve = (() => {
        class f {
          historyGo(g) {
            throw new Error('Not implemented');
          }
        }
        return (
          (f.ɵfac = function (g) {
            return new (g || f)();
          }),
          (f.ɵprov = p.Yz7({
            token: f,
            factory: function () {
              return (0, p.f3M)(et);
            },
            providedIn: 'root',
          })),
          f
        );
      })();
      const Le = new p.OlP('appBaseHref');
      let et = (() => {
          class f extends Ve {
            constructor(g, w) {
              super(),
                (this._platformLocation = g),
                (this._removeListenerFns = []),
                (this._baseHref =
                  w ??
                  this._platformLocation.getBaseHrefFromDOM() ??
                  (0, p.f3M)(H).location?.origin ??
                  '');
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(g) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(g),
                this._platformLocation.onHashChange(g)
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(g) {
              return $(this._baseHref, g);
            }
            path(g = !1) {
              const w =
                  this._platformLocation.pathname +
                  le(this._platformLocation.search),
                L = this._platformLocation.hash;
              return L && g ? `${w}${L}` : w;
            }
            pushState(g, w, L, ve) {
              const Se = this.prepareExternalUrl(L + le(ve));
              this._platformLocation.pushState(g, w, Se);
            }
            replaceState(g, w, L, ve) {
              const Se = this.prepareExternalUrl(L + le(ve));
              this._platformLocation.replaceState(g, w, Se);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            getState() {
              return this._platformLocation.getState();
            }
            historyGo(g = 0) {
              this._platformLocation.historyGo?.(g);
            }
          }
          return (
            (f.ɵfac = function (g) {
              return new (g || f)(p.LFG(ee), p.LFG(Le, 8));
            }),
            (f.ɵprov = p.Yz7({
              token: f,
              factory: f.ɵfac,
              providedIn: 'root',
            })),
            f
          );
        })(),
        xe = (() => {
          class f extends Ve {
            constructor(g, w) {
              super(),
                (this._platformLocation = g),
                (this._baseHref = ''),
                (this._removeListenerFns = []),
                null != w && (this._baseHref = w);
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(g) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(g),
                this._platformLocation.onHashChange(g)
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            path(g = !1) {
              let w = this._platformLocation.hash;
              return null == w && (w = '#'), w.length > 0 ? w.substring(1) : w;
            }
            prepareExternalUrl(g) {
              const w = $(this._baseHref, g);
              return w.length > 0 ? '#' + w : w;
            }
            pushState(g, w, L, ve) {
              let Se = this.prepareExternalUrl(L + le(ve));
              0 == Se.length && (Se = this._platformLocation.pathname),
                this._platformLocation.pushState(g, w, Se);
            }
            replaceState(g, w, L, ve) {
              let Se = this.prepareExternalUrl(L + le(ve));
              0 == Se.length && (Se = this._platformLocation.pathname),
                this._platformLocation.replaceState(g, w, Se);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            getState() {
              return this._platformLocation.getState();
            }
            historyGo(g = 0) {
              this._platformLocation.historyGo?.(g);
            }
          }
          return (
            (f.ɵfac = function (g) {
              return new (g || f)(p.LFG(ee), p.LFG(Le, 8));
            }),
            (f.ɵprov = p.Yz7({ token: f, factory: f.ɵfac })),
            f
          );
        })(),
        Xe = (() => {
          class f {
            constructor(g) {
              (this._subject = new p.vpe()),
                (this._urlChangeListeners = []),
                (this._urlChangeSubscription = null),
                (this._locationStrategy = g);
              const w = this._locationStrategy.getBaseHref();
              (this._basePath = (function ue(f) {
                if (new RegExp('^(https?:)?//').test(f)) {
                  const [, g] = f.split(/\/\/[^\/]+/);
                  return g;
                }
                return f;
              })(oe(qe(w)))),
                this._locationStrategy.onPopState((L) => {
                  this._subject.emit({
                    url: this.path(!0),
                    pop: !0,
                    state: L.state,
                    type: L.type,
                  });
                });
            }
            ngOnDestroy() {
              this._urlChangeSubscription?.unsubscribe(),
                (this._urlChangeListeners = []);
            }
            path(g = !1) {
              return this.normalize(this._locationStrategy.path(g));
            }
            getState() {
              return this._locationStrategy.getState();
            }
            isCurrentPathEqualTo(g, w = '') {
              return this.path() == this.normalize(g + le(w));
            }
            normalize(g) {
              return f.stripTrailingSlash(
                (function pt(f, _) {
                  if (!f || !_.startsWith(f)) return _;
                  const g = _.substring(f.length);
                  return '' === g || ['/', ';', '?', '#'].includes(g[0])
                    ? g
                    : _;
                })(this._basePath, qe(g))
              );
            }
            prepareExternalUrl(g) {
              return (
                g && '/' !== g[0] && (g = '/' + g),
                this._locationStrategy.prepareExternalUrl(g)
              );
            }
            go(g, w = '', L = null) {
              this._locationStrategy.pushState(L, '', g, w),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(g + le(w)),
                  L
                );
            }
            replaceState(g, w = '', L = null) {
              this._locationStrategy.replaceState(L, '', g, w),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(g + le(w)),
                  L
                );
            }
            forward() {
              this._locationStrategy.forward();
            }
            back() {
              this._locationStrategy.back();
            }
            historyGo(g = 0) {
              this._locationStrategy.historyGo?.(g);
            }
            onUrlChange(g) {
              return (
                this._urlChangeListeners.push(g),
                this._urlChangeSubscription ||
                  (this._urlChangeSubscription = this.subscribe((w) => {
                    this._notifyUrlChangeListeners(w.url, w.state);
                  })),
                () => {
                  const w = this._urlChangeListeners.indexOf(g);
                  this._urlChangeListeners.splice(w, 1),
                    0 === this._urlChangeListeners.length &&
                      (this._urlChangeSubscription?.unsubscribe(),
                      (this._urlChangeSubscription = null));
                }
              );
            }
            _notifyUrlChangeListeners(g = '', w) {
              this._urlChangeListeners.forEach((L) => L(g, w));
            }
            subscribe(g, w, L) {
              return this._subject.subscribe({
                next: g,
                error: w,
                complete: L,
              });
            }
          }
          return (
            (f.normalizeQueryParams = le),
            (f.joinWithSlash = $),
            (f.stripTrailingSlash = oe),
            (f.ɵfac = function (g) {
              return new (g || f)(p.LFG(Ve));
            }),
            (f.ɵprov = p.Yz7({
              token: f,
              factory: function () {
                return (function Ye() {
                  return new Xe((0, p.LFG)(Ve));
                })();
              },
              providedIn: 'root',
            })),
            f
          );
        })();
      function qe(f) {
        return f.replace(/\/index.html$/, '');
      }
      var _e = (() => (
          ((_e = _e || {})[(_e.Format = 0)] = 'Format'),
          (_e[(_e.Standalone = 1)] = 'Standalone'),
          _e
        ))(),
        ye = (() => (
          ((ye = ye || {})[(ye.Narrow = 0)] = 'Narrow'),
          (ye[(ye.Abbreviated = 1)] = 'Abbreviated'),
          (ye[(ye.Wide = 2)] = 'Wide'),
          (ye[(ye.Short = 3)] = 'Short'),
          ye
        ))(),
        Ie = (() => (
          ((Ie = Ie || {})[(Ie.Short = 0)] = 'Short'),
          (Ie[(Ie.Medium = 1)] = 'Medium'),
          (Ie[(Ie.Long = 2)] = 'Long'),
          (Ie[(Ie.Full = 3)] = 'Full'),
          Ie
        ))(),
        Ee = (() => (
          ((Ee = Ee || {})[(Ee.Decimal = 0)] = 'Decimal'),
          (Ee[(Ee.Group = 1)] = 'Group'),
          (Ee[(Ee.List = 2)] = 'List'),
          (Ee[(Ee.PercentSign = 3)] = 'PercentSign'),
          (Ee[(Ee.PlusSign = 4)] = 'PlusSign'),
          (Ee[(Ee.MinusSign = 5)] = 'MinusSign'),
          (Ee[(Ee.Exponential = 6)] = 'Exponential'),
          (Ee[(Ee.SuperscriptingExponent = 7)] = 'SuperscriptingExponent'),
          (Ee[(Ee.PerMille = 8)] = 'PerMille'),
          (Ee[(Ee.Infinity = 9)] = 'Infinity'),
          (Ee[(Ee.NaN = 10)] = 'NaN'),
          (Ee[(Ee.TimeSeparator = 11)] = 'TimeSeparator'),
          (Ee[(Ee.CurrencyDecimal = 12)] = 'CurrencyDecimal'),
          (Ee[(Ee.CurrencyGroup = 13)] = 'CurrencyGroup'),
          Ee
        ))();
      function Ue(f, _) {
        return Kt((0, p.cg1)(f)[p.wAp.DateFormat], _);
      }
      function ot(f, _) {
        return Kt((0, p.cg1)(f)[p.wAp.TimeFormat], _);
      }
      function Tt(f, _) {
        return Kt((0, p.cg1)(f)[p.wAp.DateTimeFormat], _);
      }
      function Pt(f, _) {
        const g = (0, p.cg1)(f),
          w = g[p.wAp.NumberSymbols][_];
        if (typeof w > 'u') {
          if (_ === Ee.CurrencyDecimal)
            return g[p.wAp.NumberSymbols][Ee.Decimal];
          if (_ === Ee.CurrencyGroup) return g[p.wAp.NumberSymbols][Ee.Group];
        }
        return w;
      }
      function It(f) {
        if (!f[p.wAp.ExtraData])
          throw new Error(
            `Missing extra locale data for the locale "${
              f[p.wAp.LocaleId]
            }". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`
          );
      }
      function Kt(f, _) {
        for (let g = _; g > -1; g--) if (typeof f[g] < 'u') return f[g];
        throw new Error('Locale data API: locale data undefined');
      }
      function Xn(f) {
        const [_, g] = f.split(':');
        return { hours: +_, minutes: +g };
      }
      const jn =
          /^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
        vn = {},
        En =
          /((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;
      var Qe = (() => (
          ((Qe = Qe || {})[(Qe.Short = 0)] = 'Short'),
          (Qe[(Qe.ShortGMT = 1)] = 'ShortGMT'),
          (Qe[(Qe.Long = 2)] = 'Long'),
          (Qe[(Qe.Extended = 3)] = 'Extended'),
          Qe
        ))(),
        rt = (() => (
          ((rt = rt || {})[(rt.FullYear = 0)] = 'FullYear'),
          (rt[(rt.Month = 1)] = 'Month'),
          (rt[(rt.Date = 2)] = 'Date'),
          (rt[(rt.Hours = 3)] = 'Hours'),
          (rt[(rt.Minutes = 4)] = 'Minutes'),
          (rt[(rt.Seconds = 5)] = 'Seconds'),
          (rt[(rt.FractionalSeconds = 6)] = 'FractionalSeconds'),
          (rt[(rt.Day = 7)] = 'Day'),
          rt
        ))(),
        vt = (() => (
          ((vt = vt || {})[(vt.DayPeriods = 0)] = 'DayPeriods'),
          (vt[(vt.Days = 1)] = 'Days'),
          (vt[(vt.Months = 2)] = 'Months'),
          (vt[(vt.Eras = 3)] = 'Eras'),
          vt
        ))();
      function Gt(f, _, g, w) {
        let L = (function we(f) {
          if (k(f)) return f;
          if ('number' == typeof f && !isNaN(f)) return new Date(f);
          if ('string' == typeof f) {
            if (((f = f.trim()), /^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(f))) {
              const [L, ve = 1, Se = 1] = f.split('-').map((at) => +at);
              return In(L, ve - 1, Se);
            }
            const g = parseFloat(f);
            if (!isNaN(f - g)) return new Date(g);
            let w;
            if ((w = f.match(jn)))
              return (function X(f) {
                const _ = new Date(0);
                let g = 0,
                  w = 0;
                const L = f[8] ? _.setUTCFullYear : _.setFullYear,
                  ve = f[8] ? _.setUTCHours : _.setHours;
                f[9] &&
                  ((g = Number(f[9] + f[10])), (w = Number(f[9] + f[11]))),
                  L.call(_, Number(f[1]), Number(f[2]) - 1, Number(f[3]));
                const Se = Number(f[4] || 0) - g,
                  at = Number(f[5] || 0) - w,
                  Jt = Number(f[6] || 0),
                  Xt = Math.floor(1e3 * parseFloat('0.' + (f[7] || 0)));
                return ve.call(_, Se, at, Jt, Xt), _;
              })(w);
          }
          const _ = new Date(f);
          if (!k(_)) throw new Error(`Unable to convert "${f}" into a date`);
          return _;
        })(f);
        _ = sn(g, _) || _;
        let at,
          Se = [];
        for (; _; ) {
          if (((at = En.exec(_)), !at)) {
            Se.push(_);
            break;
          }
          {
            Se = Se.concat(at.slice(1));
            const kt = Se.pop();
            if (!kt) break;
            _ = kt;
          }
        }
        let Jt = L.getTimezoneOffset();
        w &&
          ((Jt = Jn(w, Jt)),
          (L = (function rr(f, _, g) {
            const w = g ? -1 : 1,
              L = f.getTimezoneOffset();
            return (function At(f, _) {
              return (
                (f = new Date(f.getTime())).setMinutes(f.getMinutes() + _), f
              );
            })(f, w * (Jn(_, L) - L));
          })(L, w, !0)));
        let Xt = '';
        return (
          Se.forEach((kt) => {
            const xt = (function tn(f) {
              if (wn[f]) return wn[f];
              let _;
              switch (f) {
                case 'G':
                case 'GG':
                case 'GGG':
                  _ = wt(vt.Eras, ye.Abbreviated);
                  break;
                case 'GGGG':
                  _ = wt(vt.Eras, ye.Wide);
                  break;
                case 'GGGGG':
                  _ = wt(vt.Eras, ye.Narrow);
                  break;
                case 'y':
                  _ = Vt(rt.FullYear, 1, 0, !1, !0);
                  break;
                case 'yy':
                  _ = Vt(rt.FullYear, 2, 0, !0, !0);
                  break;
                case 'yyy':
                  _ = Vt(rt.FullYear, 3, 0, !1, !0);
                  break;
                case 'yyyy':
                  _ = Vt(rt.FullYear, 4, 0, !1, !0);
                  break;
                case 'Y':
                  _ = fn(1);
                  break;
                case 'YY':
                  _ = fn(2, !0);
                  break;
                case 'YYY':
                  _ = fn(3);
                  break;
                case 'YYYY':
                  _ = fn(4);
                  break;
                case 'M':
                case 'L':
                  _ = Vt(rt.Month, 1, 1);
                  break;
                case 'MM':
                case 'LL':
                  _ = Vt(rt.Month, 2, 1);
                  break;
                case 'MMM':
                  _ = wt(vt.Months, ye.Abbreviated);
                  break;
                case 'MMMM':
                  _ = wt(vt.Months, ye.Wide);
                  break;
                case 'MMMMM':
                  _ = wt(vt.Months, ye.Narrow);
                  break;
                case 'LLL':
                  _ = wt(vt.Months, ye.Abbreviated, _e.Standalone);
                  break;
                case 'LLLL':
                  _ = wt(vt.Months, ye.Wide, _e.Standalone);
                  break;
                case 'LLLLL':
                  _ = wt(vt.Months, ye.Narrow, _e.Standalone);
                  break;
                case 'w':
                  _ = pr(1);
                  break;
                case 'ww':
                  _ = pr(2);
                  break;
                case 'W':
                  _ = pr(1, !0);
                  break;
                case 'd':
                  _ = Vt(rt.Date, 1);
                  break;
                case 'dd':
                  _ = Vt(rt.Date, 2);
                  break;
                case 'c':
                case 'cc':
                  _ = Vt(rt.Day, 1);
                  break;
                case 'ccc':
                  _ = wt(vt.Days, ye.Abbreviated, _e.Standalone);
                  break;
                case 'cccc':
                  _ = wt(vt.Days, ye.Wide, _e.Standalone);
                  break;
                case 'ccccc':
                  _ = wt(vt.Days, ye.Narrow, _e.Standalone);
                  break;
                case 'cccccc':
                  _ = wt(vt.Days, ye.Short, _e.Standalone);
                  break;
                case 'E':
                case 'EE':
                case 'EEE':
                  _ = wt(vt.Days, ye.Abbreviated);
                  break;
                case 'EEEE':
                  _ = wt(vt.Days, ye.Wide);
                  break;
                case 'EEEEE':
                  _ = wt(vt.Days, ye.Narrow);
                  break;
                case 'EEEEEE':
                  _ = wt(vt.Days, ye.Short);
                  break;
                case 'a':
                case 'aa':
                case 'aaa':
                  _ = wt(vt.DayPeriods, ye.Abbreviated);
                  break;
                case 'aaaa':
                  _ = wt(vt.DayPeriods, ye.Wide);
                  break;
                case 'aaaaa':
                  _ = wt(vt.DayPeriods, ye.Narrow);
                  break;
                case 'b':
                case 'bb':
                case 'bbb':
                  _ = wt(vt.DayPeriods, ye.Abbreviated, _e.Standalone, !0);
                  break;
                case 'bbbb':
                  _ = wt(vt.DayPeriods, ye.Wide, _e.Standalone, !0);
                  break;
                case 'bbbbb':
                  _ = wt(vt.DayPeriods, ye.Narrow, _e.Standalone, !0);
                  break;
                case 'B':
                case 'BB':
                case 'BBB':
                  _ = wt(vt.DayPeriods, ye.Abbreviated, _e.Format, !0);
                  break;
                case 'BBBB':
                  _ = wt(vt.DayPeriods, ye.Wide, _e.Format, !0);
                  break;
                case 'BBBBB':
                  _ = wt(vt.DayPeriods, ye.Narrow, _e.Format, !0);
                  break;
                case 'h':
                  _ = Vt(rt.Hours, 1, -12);
                  break;
                case 'hh':
                  _ = Vt(rt.Hours, 2, -12);
                  break;
                case 'H':
                  _ = Vt(rt.Hours, 1);
                  break;
                case 'HH':
                  _ = Vt(rt.Hours, 2);
                  break;
                case 'm':
                  _ = Vt(rt.Minutes, 1);
                  break;
                case 'mm':
                  _ = Vt(rt.Minutes, 2);
                  break;
                case 's':
                  _ = Vt(rt.Seconds, 1);
                  break;
                case 'ss':
                  _ = Vt(rt.Seconds, 2);
                  break;
                case 'S':
                  _ = Vt(rt.FractionalSeconds, 1);
                  break;
                case 'SS':
                  _ = Vt(rt.FractionalSeconds, 2);
                  break;
                case 'SSS':
                  _ = Vt(rt.FractionalSeconds, 3);
                  break;
                case 'Z':
                case 'ZZ':
                case 'ZZZ':
                  _ = fr(Qe.Short);
                  break;
                case 'ZZZZZ':
                  _ = fr(Qe.Extended);
                  break;
                case 'O':
                case 'OO':
                case 'OOO':
                case 'z':
                case 'zz':
                case 'zzz':
                  _ = fr(Qe.ShortGMT);
                  break;
                case 'OOOO':
                case 'ZZZZ':
                case 'zzzz':
                  _ = fr(Qe.Long);
                  break;
                default:
                  return null;
              }
              return (wn[f] = _), _;
            })(kt);
            Xt += xt
              ? xt(L, g, Jt)
              : "''" === kt
              ? "'"
              : kt.replace(/(^'|'$)/g, '').replace(/''/g, "'");
          }),
          Xt
        );
      }
      function In(f, _, g) {
        const w = new Date(0);
        return w.setFullYear(f, _, g), w.setHours(0, 0, 0), w;
      }
      function sn(f, _) {
        const g = (function Ne(f) {
          return (0, p.cg1)(f)[p.wAp.LocaleId];
        })(f);
        if (((vn[g] = vn[g] || {}), vn[g][_])) return vn[g][_];
        let w = '';
        switch (_) {
          case 'shortDate':
            w = Ue(f, Ie.Short);
            break;
          case 'mediumDate':
            w = Ue(f, Ie.Medium);
            break;
          case 'longDate':
            w = Ue(f, Ie.Long);
            break;
          case 'fullDate':
            w = Ue(f, Ie.Full);
            break;
          case 'shortTime':
            w = ot(f, Ie.Short);
            break;
          case 'mediumTime':
            w = ot(f, Ie.Medium);
            break;
          case 'longTime':
            w = ot(f, Ie.Long);
            break;
          case 'fullTime':
            w = ot(f, Ie.Full);
            break;
          case 'short':
            const L = sn(f, 'shortTime'),
              ve = sn(f, 'shortDate');
            w = it(Tt(f, Ie.Short), [L, ve]);
            break;
          case 'medium':
            const Se = sn(f, 'mediumTime'),
              at = sn(f, 'mediumDate');
            w = it(Tt(f, Ie.Medium), [Se, at]);
            break;
          case 'long':
            const Jt = sn(f, 'longTime'),
              Xt = sn(f, 'longDate');
            w = it(Tt(f, Ie.Long), [Jt, Xt]);
            break;
          case 'full':
            const kt = sn(f, 'fullTime'),
              xt = sn(f, 'fullDate');
            w = it(Tt(f, Ie.Full), [kt, xt]);
        }
        return w && (vn[g][_] = w), w;
      }
      function it(f, _) {
        return (
          _ &&
            (f = f.replace(/\{([^}]+)}/g, function (g, w) {
              return null != _ && w in _ ? _[w] : g;
            })),
          f
        );
      }
      function an(f, _, g = '-', w, L) {
        let ve = '';
        (f < 0 || (L && f <= 0)) && (L ? (f = 1 - f) : ((f = -f), (ve = g)));
        let Se = String(f);
        for (; Se.length < _; ) Se = '0' + Se;
        return w && (Se = Se.slice(Se.length - _)), ve + Se;
      }
      function Vt(f, _, g = 0, w = !1, L = !1) {
        return function (ve, Se) {
          let at = (function Bt(f, _) {
            switch (f) {
              case rt.FullYear:
                return _.getFullYear();
              case rt.Month:
                return _.getMonth();
              case rt.Date:
                return _.getDate();
              case rt.Hours:
                return _.getHours();
              case rt.Minutes:
                return _.getMinutes();
              case rt.Seconds:
                return _.getSeconds();
              case rt.FractionalSeconds:
                return _.getMilliseconds();
              case rt.Day:
                return _.getDay();
              default:
                throw new Error(`Unknown DateType value "${f}".`);
            }
          })(f, ve);
          if (((g > 0 || at > -g) && (at += g), f === rt.Hours))
            0 === at && -12 === g && (at = 12);
          else if (f === rt.FractionalSeconds)
            return (function Lr(f, _) {
              return an(f, 3).substring(0, _);
            })(at, _);
          const Jt = Pt(Se, Ee.MinusSign);
          return an(at, _, Jt, w, L);
        };
      }
      function wt(f, _, g = _e.Format, w = !1) {
        return function (L, ve) {
          return (function Vn(f, _, g, w, L, ve) {
            switch (g) {
              case vt.Months:
                return (function W(f, _, g) {
                  const w = (0, p.cg1)(f),
                    ve = Kt(
                      [w[p.wAp.MonthsFormat], w[p.wAp.MonthsStandalone]],
                      _
                    );
                  return Kt(ve, g);
                })(_, L, w)[f.getMonth()];
              case vt.Days:
                return (function z(f, _, g) {
                  const w = (0, p.cg1)(f),
                    ve = Kt([w[p.wAp.DaysFormat], w[p.wAp.DaysStandalone]], _);
                  return Kt(ve, g);
                })(_, L, w)[f.getDay()];
              case vt.DayPeriods:
                const Se = f.getHours(),
                  at = f.getMinutes();
                if (ve) {
                  const Xt = (function zt(f) {
                      const _ = (0, p.cg1)(f);
                      return (
                        It(_),
                        (_[p.wAp.ExtraData][2] || []).map((w) =>
                          'string' == typeof w ? Xn(w) : [Xn(w[0]), Xn(w[1])]
                        )
                      );
                    })(_),
                    kt = (function dn(f, _, g) {
                      const w = (0, p.cg1)(f);
                      It(w);
                      const ve =
                        Kt([w[p.wAp.ExtraData][0], w[p.wAp.ExtraData][1]], _) ||
                        [];
                      return Kt(ve, g) || [];
                    })(_, L, w),
                    xt = Xt.findIndex((mn) => {
                      if (Array.isArray(mn)) {
                        const [Ze, Dn] = mn,
                          Kr = Se >= Ze.hours && at >= Ze.minutes,
                          xr =
                            Se < Dn.hours ||
                            (Se === Dn.hours && at < Dn.minutes);
                        if (Ze.hours < Dn.hours) {
                          if (Kr && xr) return !0;
                        } else if (Kr || xr) return !0;
                      } else if (mn.hours === Se && mn.minutes === at)
                        return !0;
                      return !1;
                    });
                  if (-1 !== xt) return kt[xt];
                }
                return (function De(f, _, g) {
                  const w = (0, p.cg1)(f),
                    ve = Kt(
                      [
                        w[p.wAp.DayPeriodsFormat],
                        w[p.wAp.DayPeriodsStandalone],
                      ],
                      _
                    );
                  return Kt(ve, g);
                })(_, L, w)[Se < 12 ? 0 : 1];
              case vt.Eras:
                return (function ae(f, _) {
                  return Kt((0, p.cg1)(f)[p.wAp.Eras], _);
                })(_, w)[f.getFullYear() <= 0 ? 0 : 1];
              default:
                throw new Error(`unexpected translation type ${g}`);
            }
          })(L, ve, f, _, g, w);
        };
      }
      function fr(f) {
        return function (_, g, w) {
          const L = -1 * w,
            ve = Pt(g, Ee.MinusSign),
            Se = L > 0 ? Math.floor(L / 60) : Math.ceil(L / 60);
          switch (f) {
            case Qe.Short:
              return (
                (L >= 0 ? '+' : '') +
                an(Se, 2, ve) +
                an(Math.abs(L % 60), 2, ve)
              );
            case Qe.ShortGMT:
              return 'GMT' + (L >= 0 ? '+' : '') + an(Se, 1, ve);
            case Qe.Long:
              return (
                'GMT' +
                (L >= 0 ? '+' : '') +
                an(Se, 2, ve) +
                ':' +
                an(Math.abs(L % 60), 2, ve)
              );
            case Qe.Extended:
              return 0 === w
                ? 'Z'
                : (L >= 0 ? '+' : '') +
                    an(Se, 2, ve) +
                    ':' +
                    an(Math.abs(L % 60), 2, ve);
            default:
              throw new Error(`Unknown zone width "${f}"`);
          }
        };
      }
      const Qn = 0,
        Tn = 4;
      function hn(f) {
        return In(
          f.getFullYear(),
          f.getMonth(),
          f.getDate() + (Tn - f.getDay())
        );
      }
      function pr(f, _ = !1) {
        return function (g, w) {
          let L;
          if (_) {
            const ve = new Date(g.getFullYear(), g.getMonth(), 1).getDay() - 1,
              Se = g.getDate();
            L = 1 + Math.floor((Se + ve) / 7);
          } else {
            const ve = hn(g),
              Se = (function qn(f) {
                const _ = In(f, Qn, 1).getDay();
                return In(f, 0, 1 + (_ <= Tn ? Tn : Tn + 7) - _);
              })(ve.getFullYear()),
              at = ve.getTime() - Se.getTime();
            L = 1 + Math.round(at / 6048e5);
          }
          return an(L, f, Pt(w, Ee.MinusSign));
        };
      }
      function fn(f, _ = !1) {
        return function (g, w) {
          return an(hn(g).getFullYear(), f, Pt(w, Ee.MinusSign), _);
        };
      }
      const wn = {};
      function Jn(f, _) {
        f = f.replace(/:/g, '');
        const g = Date.parse('Jan 01, 1970 00:00:00 ' + f) / 6e4;
        return isNaN(g) ? _ : g;
      }
      function k(f) {
        return f instanceof Date && !isNaN(f.valueOf());
      }
      function Kn(f, _) {
        _ = encodeURIComponent(_);
        for (const g of f.split(';')) {
          const w = g.indexOf('='),
            [L, ve] = -1 == w ? [g, ''] : [g.slice(0, w), g.slice(w + 1)];
          if (L.trim() === _) return decodeURIComponent(ve);
        }
        return null;
      }
      const ir = /\s+/,
        on = [];
      let yn = (() => {
        class f {
          constructor(g, w, L, ve) {
            (this._iterableDiffers = g),
              (this._keyValueDiffers = w),
              (this._ngEl = L),
              (this._renderer = ve),
              (this.initialClasses = on),
              (this.stateMap = new Map());
          }
          set klass(g) {
            this.initialClasses = null != g ? g.trim().split(ir) : on;
          }
          set ngClass(g) {
            this.rawClass = 'string' == typeof g ? g.trim().split(ir) : g;
          }
          ngDoCheck() {
            for (const w of this.initialClasses) this._updateState(w, !0);
            const g = this.rawClass;
            if (Array.isArray(g) || g instanceof Set)
              for (const w of g) this._updateState(w, !0);
            else if (null != g)
              for (const w of Object.keys(g)) this._updateState(w, !!g[w]);
            this._applyStateDiff();
          }
          _updateState(g, w) {
            const L = this.stateMap.get(g);
            void 0 !== L
              ? (L.enabled !== w && ((L.changed = !0), (L.enabled = w)),
                (L.touched = !0))
              : this.stateMap.set(g, { enabled: w, changed: !0, touched: !0 });
          }
          _applyStateDiff() {
            for (const g of this.stateMap) {
              const w = g[0],
                L = g[1];
              L.changed
                ? (this._toggleClass(w, L.enabled), (L.changed = !1))
                : L.touched ||
                  (L.enabled && this._toggleClass(w, !1),
                  this.stateMap.delete(w)),
                (L.touched = !1);
            }
          }
          _toggleClass(g, w) {
            (g = g.trim()).length > 0 &&
              g.split(ir).forEach((L) => {
                w
                  ? this._renderer.addClass(this._ngEl.nativeElement, L)
                  : this._renderer.removeClass(this._ngEl.nativeElement, L);
              });
          }
        }
        return (
          (f.ɵfac = function (g) {
            return new (g || f)(
              p.Y36(p.ZZ4),
              p.Y36(p.aQg),
              p.Y36(p.SBq),
              p.Y36(p.Qsj)
            );
          }),
          (f.ɵdir = p.lG2({
            type: f,
            selectors: [['', 'ngClass', '']],
            inputs: { klass: ['class', 'klass'], ngClass: 'ngClass' },
            standalone: !0,
          })),
          f
        );
      })();
      class Gr {
        constructor(_, g, w, L) {
          (this.$implicit = _),
            (this.ngForOf = g),
            (this.index = w),
            (this.count = L);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      let kr = (() => {
        class f {
          set ngForOf(g) {
            (this._ngForOf = g), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(g) {
            this._trackByFn = g;
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          constructor(g, w, L) {
            (this._viewContainer = g),
              (this._template = w),
              (this._differs = L),
              (this._ngForOf = null),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForTemplate(g) {
            g && (this._template = g);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const g = this._ngForOf;
              !this._differ &&
                g &&
                (this._differ = this._differs
                  .find(g)
                  .create(this.ngForTrackBy));
            }
            if (this._differ) {
              const g = this._differ.diff(this._ngForOf);
              g && this._applyChanges(g);
            }
          }
          _applyChanges(g) {
            const w = this._viewContainer;
            g.forEachOperation((L, ve, Se) => {
              if (null == L.previousIndex)
                w.createEmbeddedView(
                  this._template,
                  new Gr(L.item, this._ngForOf, -1, -1),
                  null === Se ? void 0 : Se
                );
              else if (null == Se) w.remove(null === ve ? void 0 : ve);
              else if (null !== ve) {
                const at = w.get(ve);
                w.move(at, Se), K(at, L);
              }
            });
            for (let L = 0, ve = w.length; L < ve; L++) {
              const at = w.get(L).context;
              (at.index = L), (at.count = ve), (at.ngForOf = this._ngForOf);
            }
            g.forEachIdentityChange((L) => {
              K(w.get(L.currentIndex), L);
            });
          }
          static ngTemplateContextGuard(g, w) {
            return !0;
          }
        }
        return (
          (f.ɵfac = function (g) {
            return new (g || f)(p.Y36(p.s_b), p.Y36(p.Rgc), p.Y36(p.ZZ4));
          }),
          (f.ɵdir = p.lG2({
            type: f,
            selectors: [['', 'ngFor', '', 'ngForOf', '']],
            inputs: {
              ngForOf: 'ngForOf',
              ngForTrackBy: 'ngForTrackBy',
              ngForTemplate: 'ngForTemplate',
            },
            standalone: !0,
          })),
          f
        );
      })();
      function K(f, _) {
        f.context.$implicit = _.item;
      }
      let b = (() => {
        class f {
          constructor(g, w) {
            (this._viewContainer = g),
              (this._context = new F()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = w);
          }
          set ngIf(g) {
            (this._context.$implicit = this._context.ngIf = g),
              this._updateView();
          }
          set ngIfThen(g) {
            V('ngIfThen', g),
              (this._thenTemplateRef = g),
              (this._thenViewRef = null),
              this._updateView();
          }
          set ngIfElse(g) {
            V('ngIfElse', g),
              (this._elseTemplateRef = g),
              (this._elseViewRef = null),
              this._updateView();
          }
          _updateView() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef &&
                  (this._thenViewRef = this._viewContainer.createEmbeddedView(
                    this._thenTemplateRef,
                    this._context
                  )))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef = this._viewContainer.createEmbeddedView(
                    this._elseTemplateRef,
                    this._context
                  )));
          }
          static ngTemplateContextGuard(g, w) {
            return !0;
          }
        }
        return (
          (f.ɵfac = function (g) {
            return new (g || f)(p.Y36(p.s_b), p.Y36(p.Rgc));
          }),
          (f.ɵdir = p.lG2({
            type: f,
            selectors: [['', 'ngIf', '']],
            inputs: {
              ngIf: 'ngIf',
              ngIfThen: 'ngIfThen',
              ngIfElse: 'ngIfElse',
            },
            standalone: !0,
          })),
          f
        );
      })();
      class F {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function V(f, _) {
        if (_ && !_.createEmbeddedView)
          throw new Error(
            `${f} must be a TemplateRef, but received '${(0, p.AaK)(_)}'.`
          );
      }
      function _t(f, _) {
        return new p.vHH(2100, !1);
      }
      class pn {
        createSubscription(_, g) {
          return _.subscribe({
            next: g,
            error: (w) => {
              throw w;
            },
          });
        }
        dispose(_) {
          _.unsubscribe();
        }
      }
      class Pn {
        createSubscription(_, g) {
          return _.then(g, (w) => {
            throw w;
          });
        }
        dispose(_) {}
      }
      const Br = new Pn(),
        re = new pn();
      let I = (() => {
        class f {
          constructor(g) {
            (this._latestValue = null),
              (this._subscription = null),
              (this._obj = null),
              (this._strategy = null),
              (this._ref = g);
          }
          ngOnDestroy() {
            this._subscription && this._dispose(), (this._ref = null);
          }
          transform(g) {
            return this._obj
              ? g !== this._obj
                ? (this._dispose(), this.transform(g))
                : this._latestValue
              : (g && this._subscribe(g), this._latestValue);
          }
          _subscribe(g) {
            (this._obj = g),
              (this._strategy = this._selectStrategy(g)),
              (this._subscription = this._strategy.createSubscription(g, (w) =>
                this._updateLatestValue(g, w)
              ));
          }
          _selectStrategy(g) {
            if ((0, p.QGY)(g)) return Br;
            if ((0, p.F4k)(g)) return re;
            throw _t();
          }
          _dispose() {
            this._strategy.dispose(this._subscription),
              (this._latestValue = null),
              (this._subscription = null),
              (this._obj = null);
          }
          _updateLatestValue(g, w) {
            g === this._obj &&
              ((this._latestValue = w), this._ref.markForCheck());
          }
        }
        return (
          (f.ɵfac = function (g) {
            return new (g || f)(p.Y36(p.sBO, 16));
          }),
          (f.ɵpipe = p.Yjl({
            name: 'async',
            type: f,
            pure: !1,
            standalone: !0,
          })),
          f
        );
      })();
      const Ge = new p.OlP('DATE_PIPE_DEFAULT_TIMEZONE'),
        mt = new p.OlP('DATE_PIPE_DEFAULT_OPTIONS');
      let Ft = (() => {
          class f {
            constructor(g, w, L) {
              (this.locale = g),
                (this.defaultTimezone = w),
                (this.defaultOptions = L);
            }
            transform(g, w, L, ve) {
              if (null == g || '' === g || g != g) return null;
              try {
                return Gt(
                  g,
                  w ?? this.defaultOptions?.dateFormat ?? 'mediumDate',
                  ve || this.locale,
                  L ??
                    this.defaultOptions?.timezone ??
                    this.defaultTimezone ??
                    void 0
                );
              } catch (Se) {
                throw _t();
              }
            }
          }
          return (
            (f.ɵfac = function (g) {
              return new (g || f)(
                p.Y36(p.soG, 16),
                p.Y36(Ge, 24),
                p.Y36(mt, 24)
              );
            }),
            (f.ɵpipe = p.Yjl({
              name: 'date',
              type: f,
              pure: !0,
              standalone: !0,
            })),
            f
          );
        })(),
        br = (() => {
          class f {
            transform(g) {
              return JSON.stringify(g, null, 2);
            }
          }
          return (
            (f.ɵfac = function (g) {
              return new (g || f)();
            }),
            (f.ɵpipe = p.Yjl({
              name: 'json',
              type: f,
              pure: !1,
              standalone: !0,
            })),
            f
          );
        })(),
        Mr = (() => {
          class f {}
          return (
            (f.ɵfac = function (g) {
              return new (g || f)();
            }),
            (f.ɵmod = p.oAB({ type: f })),
            (f.ɵinj = p.cJS({})),
            f
          );
        })();
      const Sr = 'browser',
        no = 'server';
      function hi(f) {
        return f === Sr;
      }
      function fi(f) {
        return f === no;
      }
      let ro = (() => {
        class f {}
        return (
          (f.ɵprov = (0, p.Yz7)({
            token: f,
            providedIn: 'root',
            factory: () => new Tr((0, p.LFG)(H), window),
          })),
          f
        );
      })();
      class Tr {
        constructor(_, g) {
          (this.document = _), (this.window = g), (this.offset = () => [0, 0]);
        }
        setOffset(_) {
          this.offset = Array.isArray(_) ? () => _ : _;
        }
        getScrollPosition() {
          return this.supportsScrolling()
            ? [this.window.pageXOffset, this.window.pageYOffset]
            : [0, 0];
        }
        scrollToPosition(_) {
          this.supportsScrolling() && this.window.scrollTo(_[0], _[1]);
        }
        scrollToAnchor(_) {
          if (!this.supportsScrolling()) return;
          const g = (function pi(f, _) {
            const g = f.getElementById(_) || f.getElementsByName(_)[0];
            if (g) return g;
            if (
              'function' == typeof f.createTreeWalker &&
              f.body &&
              'function' == typeof f.body.attachShadow
            ) {
              const w = f.createTreeWalker(f.body, NodeFilter.SHOW_ELEMENT);
              let L = w.currentNode;
              for (; L; ) {
                const ve = L.shadowRoot;
                if (ve) {
                  const Se =
                    ve.getElementById(_) || ve.querySelector(`[name="${_}"]`);
                  if (Se) return Se;
                }
                L = w.nextNode();
              }
            }
            return null;
          })(this.document, _);
          g && (this.scrollToElement(g), g.focus());
        }
        setHistoryScrollRestoration(_) {
          if (this.supportScrollRestoration()) {
            const g = this.window.history;
            g && g.scrollRestoration && (g.scrollRestoration = _);
          }
        }
        scrollToElement(_) {
          const g = _.getBoundingClientRect(),
            w = g.left + this.window.pageXOffset,
            L = g.top + this.window.pageYOffset,
            ve = this.offset();
          this.window.scrollTo(w - ve[0], L - ve[1]);
        }
        supportScrollRestoration() {
          try {
            if (!this.supportsScrolling()) return !1;
            const _ =
              wi(this.window.history) ||
              wi(Object.getPrototypeOf(this.window.history));
            return !(!_ || (!_.writable && !_.set));
          } catch {
            return !1;
          }
        }
        supportsScrolling() {
          try {
            return (
              !!this.window &&
              !!this.window.scrollTo &&
              'pageXOffset' in this.window
            );
          } catch {
            return !1;
          }
        }
      }
      function wi(f) {
        return Object.getOwnPropertyDescriptor(f, 'scrollRestoration');
      }
      class Nn {}
    },
    3144: (Je, me, C) => {
      C.d(me, { eN: () => Me, h_: () => Vn });
      var p = C(9523),
        D = C(9646),
        P = C(2076),
        J = C(9751),
        Y = C(4351),
        H = C(9300),
        ee = C(4004),
        Te = C(3900),
        de = C(4755);
      class $ {}
      class oe {}
      class le {
        constructor(O) {
          (this.normalizedNames = new Map()),
            (this.lazyUpdate = null),
            O
              ? (this.lazyInit =
                  'string' == typeof O
                    ? () => {
                        (this.headers = new Map()),
                          O.split('\n').forEach((B) => {
                            const Ce = B.indexOf(':');
                            if (Ce > 0) {
                              const be = B.slice(0, Ce),
                                We = be.toLowerCase(),
                                $e = B.slice(Ce + 1).trim();
                              this.maybeSetNormalizedName(be, We),
                                this.headers.has(We)
                                  ? this.headers.get(We).push($e)
                                  : this.headers.set(We, [$e]);
                            }
                          });
                      }
                    : () => {
                        (this.headers = new Map()),
                          Object.entries(O).forEach(([B, Ce]) => {
                            let be;
                            if (
                              ((be =
                                'string' == typeof Ce
                                  ? [Ce]
                                  : 'number' == typeof Ce
                                  ? [Ce.toString()]
                                  : Ce.map((We) => We.toString())),
                              be.length > 0)
                            ) {
                              const We = B.toLowerCase();
                              this.headers.set(We, be),
                                this.maybeSetNormalizedName(B, We);
                            }
                          });
                      })
              : (this.headers = new Map());
        }
        has(O) {
          return this.init(), this.headers.has(O.toLowerCase());
        }
        get(O) {
          this.init();
          const B = this.headers.get(O.toLowerCase());
          return B && B.length > 0 ? B[0] : null;
        }
        keys() {
          return this.init(), Array.from(this.normalizedNames.values());
        }
        getAll(O) {
          return this.init(), this.headers.get(O.toLowerCase()) || null;
        }
        append(O, B) {
          return this.clone({ name: O, value: B, op: 'a' });
        }
        set(O, B) {
          return this.clone({ name: O, value: B, op: 's' });
        }
        delete(O, B) {
          return this.clone({ name: O, value: B, op: 'd' });
        }
        maybeSetNormalizedName(O, B) {
          this.normalizedNames.has(B) || this.normalizedNames.set(B, O);
        }
        init() {
          this.lazyInit &&
            (this.lazyInit instanceof le
              ? this.copyFrom(this.lazyInit)
              : this.lazyInit(),
            (this.lazyInit = null),
            this.lazyUpdate &&
              (this.lazyUpdate.forEach((O) => this.applyUpdate(O)),
              (this.lazyUpdate = null)));
        }
        copyFrom(O) {
          O.init(),
            Array.from(O.headers.keys()).forEach((B) => {
              this.headers.set(B, O.headers.get(B)),
                this.normalizedNames.set(B, O.normalizedNames.get(B));
            });
        }
        clone(O) {
          const B = new le();
          return (
            (B.lazyInit =
              this.lazyInit && this.lazyInit instanceof le
                ? this.lazyInit
                : this),
            (B.lazyUpdate = (this.lazyUpdate || []).concat([O])),
            B
          );
        }
        applyUpdate(O) {
          const B = O.name.toLowerCase();
          switch (O.op) {
            case 'a':
            case 's':
              let Ce = O.value;
              if (('string' == typeof Ce && (Ce = [Ce]), 0 === Ce.length))
                return;
              this.maybeSetNormalizedName(O.name, B);
              const be = ('a' === O.op ? this.headers.get(B) : void 0) || [];
              be.push(...Ce), this.headers.set(B, be);
              break;
            case 'd':
              const We = O.value;
              if (We) {
                let $e = this.headers.get(B);
                if (!$e) return;
                ($e = $e.filter((j) => -1 === We.indexOf(j))),
                  0 === $e.length
                    ? (this.headers.delete(B), this.normalizedNames.delete(B))
                    : this.headers.set(B, $e);
              } else this.headers.delete(B), this.normalizedNames.delete(B);
          }
        }
        forEach(O) {
          this.init(),
            Array.from(this.normalizedNames.keys()).forEach((B) =>
              O(this.normalizedNames.get(B), this.headers.get(B))
            );
        }
      }
      class Le {
        encodeKey(O) {
          return Ye(O);
        }
        encodeValue(O) {
          return Ye(O);
        }
        decodeKey(O) {
          return decodeURIComponent(O);
        }
        decodeValue(O) {
          return decodeURIComponent(O);
        }
      }
      const xe = /%(\d[a-f0-9])/gi,
        Xe = {
          40: '@',
          '3A': ':',
          24: '$',
          '2C': ',',
          '3B': ';',
          '3D': '=',
          '3F': '?',
          '2F': '/',
        };
      function Ye(U) {
        return encodeURIComponent(U).replace(xe, (O, B) => Xe[B] ?? O);
      }
      function pt(U) {
        return `${U}`;
      }
      class qe {
        constructor(O = {}) {
          if (
            ((this.updates = null),
            (this.cloneFrom = null),
            (this.encoder = O.encoder || new Le()),
            O.fromString)
          ) {
            if (O.fromObject)
              throw new Error('Cannot specify both fromString and fromObject.');
            this.map = (function et(U, O) {
              const B = new Map();
              return (
                U.length > 0 &&
                  U.replace(/^\?/, '')
                    .split('&')
                    .forEach((be) => {
                      const We = be.indexOf('='),
                        [$e, j] =
                          -1 == We
                            ? [O.decodeKey(be), '']
                            : [
                                O.decodeKey(be.slice(0, We)),
                                O.decodeValue(be.slice(We + 1)),
                              ],
                        N = B.get($e) || [];
                      N.push(j), B.set($e, N);
                    }),
                B
              );
            })(O.fromString, this.encoder);
          } else
            O.fromObject
              ? ((this.map = new Map()),
                Object.keys(O.fromObject).forEach((B) => {
                  const Ce = O.fromObject[B],
                    be = Array.isArray(Ce) ? Ce.map(pt) : [pt(Ce)];
                  this.map.set(B, be);
                }))
              : (this.map = null);
        }
        has(O) {
          return this.init(), this.map.has(O);
        }
        get(O) {
          this.init();
          const B = this.map.get(O);
          return B ? B[0] : null;
        }
        getAll(O) {
          return this.init(), this.map.get(O) || null;
        }
        keys() {
          return this.init(), Array.from(this.map.keys());
        }
        append(O, B) {
          return this.clone({ param: O, value: B, op: 'a' });
        }
        appendAll(O) {
          const B = [];
          return (
            Object.keys(O).forEach((Ce) => {
              const be = O[Ce];
              Array.isArray(be)
                ? be.forEach((We) => {
                    B.push({ param: Ce, value: We, op: 'a' });
                  })
                : B.push({ param: Ce, value: be, op: 'a' });
            }),
            this.clone(B)
          );
        }
        set(O, B) {
          return this.clone({ param: O, value: B, op: 's' });
        }
        delete(O, B) {
          return this.clone({ param: O, value: B, op: 'd' });
        }
        toString() {
          return (
            this.init(),
            this.keys()
              .map((O) => {
                const B = this.encoder.encodeKey(O);
                return this.map
                  .get(O)
                  .map((Ce) => B + '=' + this.encoder.encodeValue(Ce))
                  .join('&');
              })
              .filter((O) => '' !== O)
              .join('&')
          );
        }
        clone(O) {
          const B = new qe({ encoder: this.encoder });
          return (
            (B.cloneFrom = this.cloneFrom || this),
            (B.updates = (this.updates || []).concat(O)),
            B
          );
        }
        init() {
          null === this.map && (this.map = new Map()),
            null !== this.cloneFrom &&
              (this.cloneFrom.init(),
              this.cloneFrom
                .keys()
                .forEach((O) => this.map.set(O, this.cloneFrom.map.get(O))),
              this.updates.forEach((O) => {
                switch (O.op) {
                  case 'a':
                  case 's':
                    const B =
                      ('a' === O.op ? this.map.get(O.param) : void 0) || [];
                    B.push(pt(O.value)), this.map.set(O.param, B);
                    break;
                  case 'd':
                    if (void 0 === O.value) {
                      this.map.delete(O.param);
                      break;
                    }
                    {
                      let Ce = this.map.get(O.param) || [];
                      const be = Ce.indexOf(pt(O.value));
                      -1 !== be && Ce.splice(be, 1),
                        Ce.length > 0
                          ? this.map.set(O.param, Ce)
                          : this.map.delete(O.param);
                    }
                }
              }),
              (this.cloneFrom = this.updates = null));
        }
      }
      class ne {
        constructor() {
          this.map = new Map();
        }
        set(O, B) {
          return this.map.set(O, B), this;
        }
        get(O) {
          return (
            this.map.has(O) || this.map.set(O, O.defaultValue()),
            this.map.get(O)
          );
        }
        delete(O) {
          return this.map.delete(O), this;
        }
        has(O) {
          return this.map.has(O);
        }
        keys() {
          return this.map.keys();
        }
      }
      function ce(U) {
        return typeof ArrayBuffer < 'u' && U instanceof ArrayBuffer;
      }
      function _e(U) {
        return typeof Blob < 'u' && U instanceof Blob;
      }
      function ye(U) {
        return typeof FormData < 'u' && U instanceof FormData;
      }
      class Ee {
        constructor(O, B, Ce, be) {
          let We;
          if (
            ((this.url = B),
            (this.body = null),
            (this.reportProgress = !1),
            (this.withCredentials = !1),
            (this.responseType = 'json'),
            (this.method = O.toUpperCase()),
            (function se(U) {
              switch (U) {
                case 'DELETE':
                case 'GET':
                case 'HEAD':
                case 'OPTIONS':
                case 'JSONP':
                  return !1;
                default:
                  return !0;
              }
            })(this.method) || be
              ? ((this.body = void 0 !== Ce ? Ce : null), (We = be))
              : (We = Ce),
            We &&
              ((this.reportProgress = !!We.reportProgress),
              (this.withCredentials = !!We.withCredentials),
              We.responseType && (this.responseType = We.responseType),
              We.headers && (this.headers = We.headers),
              We.context && (this.context = We.context),
              We.params && (this.params = We.params)),
            this.headers || (this.headers = new le()),
            this.context || (this.context = new ne()),
            this.params)
          ) {
            const $e = this.params.toString();
            if (0 === $e.length) this.urlWithParams = B;
            else {
              const j = B.indexOf('?');
              this.urlWithParams =
                B + (-1 === j ? '?' : j < B.length - 1 ? '&' : '') + $e;
            }
          } else (this.params = new qe()), (this.urlWithParams = B);
        }
        serializeBody() {
          return null === this.body
            ? null
            : ce(this.body) ||
              _e(this.body) ||
              ye(this.body) ||
              (function Ie(U) {
                return (
                  typeof URLSearchParams < 'u' && U instanceof URLSearchParams
                );
              })(this.body) ||
              'string' == typeof this.body
            ? this.body
            : this.body instanceof qe
            ? this.body.toString()
            : 'object' == typeof this.body ||
              'boolean' == typeof this.body ||
              Array.isArray(this.body)
            ? JSON.stringify(this.body)
            : this.body.toString();
        }
        detectContentTypeHeader() {
          return null === this.body || ye(this.body)
            ? null
            : _e(this.body)
            ? this.body.type || null
            : ce(this.body)
            ? null
            : 'string' == typeof this.body
            ? 'text/plain'
            : this.body instanceof qe
            ? 'application/x-www-form-urlencoded;charset=UTF-8'
            : 'object' == typeof this.body ||
              'number' == typeof this.body ||
              'boolean' == typeof this.body
            ? 'application/json'
            : null;
        }
        clone(O = {}) {
          const B = O.method || this.method,
            Ce = O.url || this.url,
            be = O.responseType || this.responseType,
            We = void 0 !== O.body ? O.body : this.body,
            $e =
              void 0 !== O.withCredentials
                ? O.withCredentials
                : this.withCredentials,
            j =
              void 0 !== O.reportProgress
                ? O.reportProgress
                : this.reportProgress;
          let N = O.headers || this.headers,
            T = O.params || this.params;
          const Q = O.context ?? this.context;
          return (
            void 0 !== O.setHeaders &&
              (N = Object.keys(O.setHeaders).reduce(
                (ge, ke) => ge.set(ke, O.setHeaders[ke]),
                N
              )),
            O.setParams &&
              (T = Object.keys(O.setParams).reduce(
                (ge, ke) => ge.set(ke, O.setParams[ke]),
                T
              )),
            new Ee(B, Ce, We, {
              params: T,
              headers: N,
              context: Q,
              reportProgress: j,
              responseType: be,
              withCredentials: $e,
            })
          );
        }
      }
      var te = (() => (
        ((te = te || {})[(te.Sent = 0)] = 'Sent'),
        (te[(te.UploadProgress = 1)] = 'UploadProgress'),
        (te[(te.ResponseHeader = 2)] = 'ResponseHeader'),
        (te[(te.DownloadProgress = 3)] = 'DownloadProgress'),
        (te[(te.Response = 4)] = 'Response'),
        (te[(te.User = 5)] = 'User'),
        te
      ))();
      class Ne {
        constructor(O, B = 200, Ce = 'OK') {
          (this.headers = O.headers || new le()),
            (this.status = void 0 !== O.status ? O.status : B),
            (this.statusText = O.statusText || Ce),
            (this.url = O.url || null),
            (this.ok = this.status >= 200 && this.status < 300);
        }
      }
      class De extends Ne {
        constructor(O = {}) {
          super(O), (this.type = te.ResponseHeader);
        }
        clone(O = {}) {
          return new De({
            headers: O.headers || this.headers,
            status: void 0 !== O.status ? O.status : this.status,
            statusText: O.statusText || this.statusText,
            url: O.url || this.url || void 0,
          });
        }
      }
      class z extends Ne {
        constructor(O = {}) {
          super(O),
            (this.type = te.Response),
            (this.body = void 0 !== O.body ? O.body : null);
        }
        clone(O = {}) {
          return new z({
            body: void 0 !== O.body ? O.body : this.body,
            headers: O.headers || this.headers,
            status: void 0 !== O.status ? O.status : this.status,
            statusText: O.statusText || this.statusText,
            url: O.url || this.url || void 0,
          });
        }
      }
      class W extends Ne {
        constructor(O) {
          super(O, 0, 'Unknown Error'),
            (this.name = 'HttpErrorResponse'),
            (this.ok = !1),
            (this.message =
              this.status >= 200 && this.status < 300
                ? `Http failure during parsing for ${O.url || '(unknown url)'}`
                : `Http failure response for ${O.url || '(unknown url)'}: ${
                    O.status
                  } ${O.statusText}`),
            (this.error = O.error || null);
        }
      }
      function ae(U, O) {
        return {
          body: O,
          headers: U.headers,
          context: U.context,
          observe: U.observe,
          params: U.params,
          reportProgress: U.reportProgress,
          responseType: U.responseType,
          withCredentials: U.withCredentials,
        };
      }
      let Me = (() => {
        class U {
          constructor(B) {
            this.handler = B;
          }
          request(B, Ce, be = {}) {
            let We;
            if (B instanceof Ee) We = B;
            else {
              let N, T;
              (N = be.headers instanceof le ? be.headers : new le(be.headers)),
                be.params &&
                  (T =
                    be.params instanceof qe
                      ? be.params
                      : new qe({ fromObject: be.params })),
                (We = new Ee(B, Ce, void 0 !== be.body ? be.body : null, {
                  headers: N,
                  context: be.context,
                  params: T,
                  reportProgress: be.reportProgress,
                  responseType: be.responseType || 'json',
                  withCredentials: be.withCredentials,
                }));
            }
            const $e = (0, D.of)(We).pipe(
              (0, Y.b)((N) => this.handler.handle(N))
            );
            if (B instanceof Ee || 'events' === be.observe) return $e;
            const j = $e.pipe((0, H.h)((N) => N instanceof z));
            switch (be.observe || 'body') {
              case 'body':
                switch (We.responseType) {
                  case 'arraybuffer':
                    return j.pipe(
                      (0, ee.U)((N) => {
                        if (null !== N.body && !(N.body instanceof ArrayBuffer))
                          throw new Error('Response is not an ArrayBuffer.');
                        return N.body;
                      })
                    );
                  case 'blob':
                    return j.pipe(
                      (0, ee.U)((N) => {
                        if (null !== N.body && !(N.body instanceof Blob))
                          throw new Error('Response is not a Blob.');
                        return N.body;
                      })
                    );
                  case 'text':
                    return j.pipe(
                      (0, ee.U)((N) => {
                        if (null !== N.body && 'string' != typeof N.body)
                          throw new Error('Response is not a string.');
                        return N.body;
                      })
                    );
                  default:
                    return j.pipe((0, ee.U)((N) => N.body));
                }
              case 'response':
                return j;
              default:
                throw new Error(
                  `Unreachable: unhandled observe type ${be.observe}}`
                );
            }
          }
          delete(B, Ce = {}) {
            return this.request('DELETE', B, Ce);
          }
          get(B, Ce = {}) {
            return this.request('GET', B, Ce);
          }
          head(B, Ce = {}) {
            return this.request('HEAD', B, Ce);
          }
          jsonp(B, Ce) {
            return this.request('JSONP', B, {
              params: new qe().append(Ce, 'JSONP_CALLBACK'),
              observe: 'body',
              responseType: 'json',
            });
          }
          options(B, Ce = {}) {
            return this.request('OPTIONS', B, Ce);
          }
          patch(B, Ce, be = {}) {
            return this.request('PATCH', B, ae(be, Ce));
          }
          post(B, Ce, be = {}) {
            return this.request('POST', B, ae(be, Ce));
          }
          put(B, Ce, be = {}) {
            return this.request('PUT', B, ae(be, Ce));
          }
        }
        return (
          (U.ɵfac = function (B) {
            return new (B || U)(p.LFG($));
          }),
          (U.ɵprov = p.Yz7({ token: U, factory: U.ɵfac })),
          U
        );
      })();
      function je(U, O) {
        return O(U);
      }
      const Pt = new p.OlP(''),
        ht = new p.OlP('');
      let ct = (() => {
        class U extends $ {
          constructor(B, Ce) {
            super(),
              (this.backend = B),
              (this.injector = Ce),
              (this.chain = null);
          }
          handle(B) {
            if (null === this.chain) {
              const Ce = Array.from(
                new Set([
                  ...this.injector.get(Pt),
                  ...this.injector.get(ht, []),
                ])
              );
              this.chain = Ce.reduceRight(
                (be, We) =>
                  (function ot(U, O, B) {
                    return (Ce, be) =>
                      B.runInContext(() => O(Ce, (We) => U(We, be)));
                  })(be, We, this.injector),
                je
              );
            }
            return this.chain(B, (Ce) => this.backend.handle(Ce));
          }
        }
        return (
          (U.ɵfac = function (B) {
            return new (B || U)(p.LFG(oe), p.LFG(p.lqb));
          }),
          (U.ɵprov = p.Yz7({ token: U, factory: U.ɵfac })),
          U
        );
      })();
      const Sn = /^\)\]\}',?\n/;
      let vn = (() => {
        class U {
          constructor(B) {
            this.xhrFactory = B;
          }
          handle(B) {
            if ('JSONP' === B.method)
              throw new Error(
                'Attempted to construct Jsonp request without HttpClientJsonpModule installed.'
              );
            const Ce = this.xhrFactory;
            return (
              Ce.ɵloadImpl ? (0, P.D)(Ce.ɵloadImpl()) : (0, D.of)(null)
            ).pipe(
              (0, Te.w)(
                () =>
                  new J.y((We) => {
                    const $e = Ce.build();
                    if (
                      ($e.open(B.method, B.urlWithParams),
                      B.withCredentials && ($e.withCredentials = !0),
                      B.headers.forEach((Ht, Wt) =>
                        $e.setRequestHeader(Ht, Wt.join(','))
                      ),
                      B.headers.has('Accept') ||
                        $e.setRequestHeader(
                          'Accept',
                          'application/json, text/plain, */*'
                        ),
                      !B.headers.has('Content-Type'))
                    ) {
                      const Ht = B.detectContentTypeHeader();
                      null !== Ht && $e.setRequestHeader('Content-Type', Ht);
                    }
                    if (B.responseType) {
                      const Ht = B.responseType.toLowerCase();
                      $e.responseType = 'json' !== Ht ? Ht : 'text';
                    }
                    const j = B.serializeBody();
                    let N = null;
                    const T = () => {
                        if (null !== N) return N;
                        const Ht = $e.statusText || 'OK',
                          Wt = new le($e.getAllResponseHeaders()),
                          Kn =
                            (function jn(U) {
                              return 'responseURL' in U && U.responseURL
                                ? U.responseURL
                                : /^X-Request-URL:/m.test(
                                    U.getAllResponseHeaders()
                                  )
                                ? U.getResponseHeader('X-Request-URL')
                                : null;
                            })($e) || B.url;
                        return (
                          (N = new De({
                            headers: Wt,
                            status: $e.status,
                            statusText: Ht,
                            url: Kn,
                          })),
                          N
                        );
                      },
                      Q = () => {
                        let {
                            headers: Ht,
                            status: Wt,
                            statusText: Kn,
                            url: ir,
                          } = T(),
                          on = null;
                        204 !== Wt &&
                          (on =
                            typeof $e.response > 'u'
                              ? $e.responseText
                              : $e.response),
                          0 === Wt && (Wt = on ? 200 : 0);
                        let yn = Wt >= 200 && Wt < 300;
                        if (
                          'json' === B.responseType &&
                          'string' == typeof on
                        ) {
                          const gr = on;
                          on = on.replace(Sn, '');
                          try {
                            on = '' !== on ? JSON.parse(on) : null;
                          } catch (mr) {
                            (on = gr),
                              yn && ((yn = !1), (on = { error: mr, text: on }));
                          }
                        }
                        yn
                          ? (We.next(
                              new z({
                                body: on,
                                headers: Ht,
                                status: Wt,
                                statusText: Kn,
                                url: ir || void 0,
                              })
                            ),
                            We.complete())
                          : We.error(
                              new W({
                                error: on,
                                headers: Ht,
                                status: Wt,
                                statusText: Kn,
                                url: ir || void 0,
                              })
                            );
                      },
                      ge = (Ht) => {
                        const { url: Wt } = T(),
                          Kn = new W({
                            error: Ht,
                            status: $e.status || 0,
                            statusText: $e.statusText || 'Unknown Error',
                            url: Wt || void 0,
                          });
                        We.error(Kn);
                      };
                    let ke = !1;
                    const ut = (Ht) => {
                        ke || (We.next(T()), (ke = !0));
                        let Wt = {
                          type: te.DownloadProgress,
                          loaded: Ht.loaded,
                        };
                        Ht.lengthComputable && (Wt.total = Ht.total),
                          'text' === B.responseType &&
                            $e.responseText &&
                            (Wt.partialText = $e.responseText),
                          We.next(Wt);
                      },
                      Rt = (Ht) => {
                        let Wt = { type: te.UploadProgress, loaded: Ht.loaded };
                        Ht.lengthComputable && (Wt.total = Ht.total),
                          We.next(Wt);
                      };
                    let rn;
                    $e.addEventListener('load', Q),
                      $e.addEventListener('error', ge),
                      $e.addEventListener('timeout', ge),
                      $e.addEventListener('abort', ge),
                      B.reportProgress &&
                        ($e.addEventListener('progress', ut),
                        null !== j &&
                          $e.upload &&
                          $e.upload.addEventListener('progress', Rt));
                    const Ut = () => {
                        rn ??= (function Qe() {
                          const U = setTimeout(() => {}, En);
                          return () => clearTimeout(U);
                        })();
                      },
                      _n = () => {
                        rn?.();
                      };
                    return (
                      $e.addEventListener('loadstart', Ut),
                      $e.addEventListener('loadend', _n),
                      $e.send(j),
                      We.next({ type: te.Sent }),
                      () => {
                        $e.removeEventListener('loadstart', Ut),
                          $e.removeEventListener('loadend', _n),
                          $e.removeEventListener('error', ge),
                          $e.removeEventListener('abort', ge),
                          $e.removeEventListener('load', Q),
                          $e.removeEventListener('timeout', ge),
                          rn?.(),
                          B.reportProgress &&
                            ($e.removeEventListener('progress', ut),
                            null !== j &&
                              $e.upload &&
                              $e.upload.removeEventListener('progress', Rt)),
                          $e.readyState !== $e.DONE && $e.abort();
                      }
                    );
                  })
              )
            );
          }
        }
        return (
          (U.ɵfac = function (B) {
            return new (B || U)(p.LFG(de.JF));
          }),
          (U.ɵprov = p.Yz7({ token: U, factory: U.ɵfac })),
          U
        );
      })();
      const En = 2147483647,
        rt = new p.OlP('XSRF_ENABLED'),
        Gt = new p.OlP('XSRF_COOKIE_NAME', {
          providedIn: 'root',
          factory: () => 'XSRF-TOKEN',
        }),
        sn = new p.OlP('XSRF_HEADER_NAME', {
          providedIn: 'root',
          factory: () => 'X-XSRF-TOKEN',
        });
      class it {}
      let an = (() => {
        class U {
          constructor(B, Ce, be) {
            (this.doc = B),
              (this.platform = Ce),
              (this.cookieName = be),
              (this.lastCookieString = ''),
              (this.lastToken = null),
              (this.parseCount = 0);
          }
          getToken() {
            if ('server' === this.platform) return null;
            const B = this.doc.cookie || '';
            return (
              B !== this.lastCookieString &&
                (this.parseCount++,
                (this.lastToken = (0, de.Mx)(B, this.cookieName)),
                (this.lastCookieString = B)),
              this.lastToken
            );
          }
        }
        return (
          (U.ɵfac = function (B) {
            return new (B || U)(p.LFG(de.K0), p.LFG(p.Lbi), p.LFG(Gt));
          }),
          (U.ɵprov = p.Yz7({ token: U, factory: U.ɵfac })),
          U
        );
      })();
      function Lr(U, O) {
        const B = U.url.toLowerCase();
        if (
          !(0, p.f3M)(rt) ||
          'GET' === U.method ||
          'HEAD' === U.method ||
          B.startsWith('http://') ||
          B.startsWith('https://')
        )
          return O(U);
        const Ce = (0, p.f3M)(it).getToken(),
          be = (0, p.f3M)(sn);
        return (
          null != Ce &&
            !U.headers.has(be) &&
            (U = U.clone({ headers: U.headers.set(be, Ce) })),
          O(U)
        );
      }
      function Vn(...U) {
        const O = [
          Me,
          vn,
          ct,
          { provide: $, useExisting: ct },
          { provide: oe, useExisting: vn },
          { provide: Pt, useValue: Lr, multi: !0 },
          { provide: rt, useValue: !0 },
          { provide: it, useClass: an },
        ];
        for (const B of U) O.push(...B.ɵproviders);
        return (0, p.MR2)(O);
      }
    },
    9523: (Je, me, C) => {
      C.d(me, {
        QbO: () => ry,
        tb: () => rd,
        AFp: () => Bh,
        ip1: () => Mm,
        z2F: () => Go,
        Ojb: () => iy,
        sBO: () => H0,
        Sil: () => v0,
        _Vd: () => Is,
        EJc: () => g0,
        Xts: () => Es,
        SBq: () => Ts,
        lqb: () => Qi,
        qLn: () => So,
        vpe: () => di,
        XFs: () => Qe,
        OlP: () => en,
        zs3: () => Li,
        ZZ4: () => cd,
        aQg: () => ud,
        soG: () => Cl,
        YKP: () => Mg,
        h0i: () => Uo,
        PXZ: () => O0,
        R0b: () => dr,
        FiY: () => Oa,
        Lbi: () => Rc,
        g9A: () => Hh,
        Qsj: () => _y,
        FYo: () => Yh,
        JOm: () => si,
        tp0: () => Ra,
        Rgc: () => Ws,
        dDg: () => S0,
        eoX: () => Lm,
        GfV: () => Zh,
        s_b: () => yl,
        ifc: () => B,
        MMx: () => Ig,
        Lck: () => nE,
        Gpc: () => et,
        RIp: () => xh,
        f3M: () => At,
        $WT: () => Br,
        MR2: () => bc,
        qFp: () => uw,
        c2e: () => Sm,
        zSh: () => Sc,
        HDt: () => lv,
        wAp: () => bt,
        vHH: () => ue,
        lri: () => Fm,
        rWj: () => Nm,
        D6c: () => lw,
        cg1: () => Iu,
        kL8: () => Xp,
        dqk: () => it,
        iPO: () => P0,
        Z0I: () => Kt,
        eJc: () => Wu,
        QGY: () => mu,
        F4k: () => ep,
        RDi: () => M_,
        AaK: () => le,
        qOj: () => nu,
        TTD: () => uo,
        _Bn: () => wg,
        jDz: () => Tg,
        xp6: () => sf,
        uIk: () => ou,
        ekj: () => bu,
        Suo: () => im,
        Xpm: () => Fe,
        lG2: () => xn,
        Yz7: () => It,
        cJS: () => dn,
        oAB: () => Dt,
        Yjl: () => Bn,
        Y36: () => To,
        _UZ: () => fu,
        qZA: () => ul,
        TgZ: () => cl,
        EpF: () => Jf,
        n5z: () => Rd,
        Ikx: () => Su,
        LFG: () => tn,
        $8M: () => Yl,
        $Z: () => ff,
        NdJ: () => vu,
        CRH: () => om,
        oxw: () => op,
        ALo: () => $g,
        lcZ: () => zg,
        xi3: () => Gg,
        Hsn: () => ap,
        F$t: () => sp,
        Q6J: () => du,
        DdM: () => Ng,
        VKq: () => Lg,
        WLB: () => kg,
        iGM: () => nm,
        KtG: () => es,
        CHM: () => ho,
        P3R: () => Th,
        YNc: () => Yf,
        _uU: () => Rp,
        Oqu: () => wu,
        hij: () => fl,
        AsE: () => Mu,
        Gf: () => rm,
      });
      var p = C(7579),
        D = C(727),
        P = C(9751),
        J = C(6451),
        Y = C(8421),
        H = C(930),
        ee = C(4482);
      function de(e, t, ...n) {
        if (!0 === t) return void e();
        if (!1 === t) return;
        const r = new H.Hp({
          next: () => {
            r.unsubscribe(), e();
          },
        });
        return t(...n).subscribe(r);
      }
      function $(e) {
        for (let t in e) if (e[t] === $) return t;
        throw Error('Could not find renamed property on target object.');
      }
      function oe(e, t) {
        for (const n in t)
          t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
      }
      function le(e) {
        if ('string' == typeof e) return e;
        if (Array.isArray(e)) return '[' + e.map(le).join(', ') + ']';
        if (null == e) return '' + e;
        if (e.overriddenName) return `${e.overriddenName}`;
        if (e.name) return `${e.name}`;
        const t = e.toString();
        if (null == t) return '' + t;
        const n = t.indexOf('\n');
        return -1 === n ? t : t.substring(0, n);
      }
      function Ve(e, t) {
        return null == e || '' === e
          ? null === t
            ? ''
            : t
          : null == t || '' === t
          ? e
          : e + ' ' + t;
      }
      const Le = $({ __forward_ref__: $ });
      function et(e) {
        return (
          (e.__forward_ref__ = et),
          (e.toString = function () {
            return le(this());
          }),
          e
        );
      }
      function xe(e) {
        return Xe(e) ? e() : e;
      }
      function Xe(e) {
        return (
          'function' == typeof e &&
          e.hasOwnProperty(Le) &&
          e.__forward_ref__ === et
        );
      }
      function Ye(e) {
        return e && !!e.ɵproviders;
      }
      const qe = 'https://g.co/ng/security#xss';
      class ue extends Error {
        constructor(t, n) {
          super(
            (function ne(e, t) {
              return `NG0${Math.abs(e)}${t ? ': ' + t : ''}`;
            })(t, n)
          ),
            (this.code = t);
        }
      }
      function se(e) {
        return 'string' == typeof e ? e : null == e ? '' : String(e);
      }
      function Ee(e, t) {
        throw new ue(-201, !1);
      }
      function St(e, t) {
        null == e &&
          (function ct(e, t, n, r) {
            throw new Error(
              `ASSERTION ERROR: ${e}` +
                (null == r ? '' : ` [Expected=> ${n} ${r} ${t} <=Actual]`)
            );
          })(t, e, null, '!=');
      }
      function It(e) {
        return {
          token: e.token,
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0,
        };
      }
      function dn(e) {
        return { providers: e.providers || [], imports: e.imports || [] };
      }
      function hr(e) {
        return Xn(e, Sn) || Xn(e, vn);
      }
      function Kt(e) {
        return null !== hr(e);
      }
      function Xn(e, t) {
        return e.hasOwnProperty(t) ? e[t] : null;
      }
      function kn(e) {
        return e && (e.hasOwnProperty(jn) || e.hasOwnProperty(En))
          ? e[jn]
          : null;
      }
      const Sn = $({ ɵprov: $ }),
        jn = $({ ɵinj: $ }),
        vn = $({ ngInjectableDef: $ }),
        En = $({ ngInjectorDef: $ });
      var Qe = (() => (
        ((Qe = Qe || {})[(Qe.Default = 0)] = 'Default'),
        (Qe[(Qe.Host = 1)] = 'Host'),
        (Qe[(Qe.Self = 2)] = 'Self'),
        (Qe[(Qe.SkipSelf = 4)] = 'SkipSelf'),
        (Qe[(Qe.Optional = 8)] = 'Optional'),
        Qe
      ))();
      let rt;
      function Gt(e) {
        const t = rt;
        return (rt = e), t;
      }
      function In(e, t, n) {
        const r = hr(e);
        return r && 'root' == r.providedIn
          ? void 0 === r.value
            ? (r.value = r.factory())
            : r.value
          : n & Qe.Optional
          ? null
          : void 0 !== t
          ? t
          : void Ee(le(e));
      }
      const it = (() =>
          (typeof globalThis < 'u' && globalThis) ||
          (typeof global < 'u' && global) ||
          (typeof window < 'u' && window) ||
          (typeof self < 'u' &&
            typeof WorkerGlobalScope < 'u' &&
            self instanceof WorkerGlobalScope &&
            self))(),
        Bt = {},
        wt = '__NG_DI_FLAG__',
        Vn = 'ngTempTokenPath',
        Qn = /\n/gm,
        qn = '__source';
      let hn;
      function fn(e) {
        const t = hn;
        return (hn = e), t;
      }
      function wn(e, t = Qe.Default) {
        if (void 0 === hn) throw new ue(-203, !1);
        return null === hn
          ? In(e, void 0, t)
          : hn.get(e, t & Qe.Optional ? null : void 0, t);
      }
      function tn(e, t = Qe.Default) {
        return (
          (function vt() {
            return rt;
          })() || wn
        )(xe(e), t);
      }
      function At(e, t = Qe.Default) {
        return tn(e, rr(t));
      }
      function rr(e) {
        return typeof e > 'u' || 'number' == typeof e
          ? e
          : 0 |
              (e.optional && 8) |
              (e.host && 1) |
              (e.self && 2) |
              (e.skipSelf && 4);
      }
      function we(e) {
        const t = [];
        for (let n = 0; n < e.length; n++) {
          const r = xe(e[n]);
          if (Array.isArray(r)) {
            if (0 === r.length) throw new ue(900, !1);
            let i,
              o = Qe.Default;
            for (let s = 0; s < r.length; s++) {
              const c = r[s],
                d = k(c);
              'number' == typeof d
                ? -1 === d
                  ? (i = c.token)
                  : (o |= d)
                : (i = c);
            }
            t.push(tn(i, o));
          } else t.push(tn(r));
        }
        return t;
      }
      function X(e, t) {
        return (e[wt] = t), (e.prototype[wt] = t), e;
      }
      function k(e) {
        return e[wt];
      }
      function U(e) {
        return { toString: e }.toString();
      }
      var O = (() => (
          ((O = O || {})[(O.OnPush = 0)] = 'OnPush'),
          (O[(O.Default = 1)] = 'Default'),
          O
        ))(),
        B = (() => {
          return (
            ((e = B || (B = {}))[(e.Emulated = 0)] = 'Emulated'),
            (e[(e.None = 2)] = 'None'),
            (e[(e.ShadowDom = 3)] = 'ShadowDom'),
            B
          );
          var e;
        })();
      const Ce = {},
        be = [],
        We = $({ ɵcmp: $ }),
        $e = $({ ɵdir: $ }),
        j = $({ ɵpipe: $ }),
        N = $({ ɵmod: $ }),
        T = $({ ɵfac: $ }),
        Q = $({ __NG_ELEMENT_ID__: $ }),
        ge = $({ __NG_ENV_ID__: $ });
      function ke(e, t, n) {
        let r = e.length;
        for (;;) {
          const i = e.indexOf(t, n);
          if (-1 === i) return i;
          if (0 === i || e.charCodeAt(i - 1) <= 32) {
            const o = t.length;
            if (i + o === r || e.charCodeAt(i + o) <= 32) return i;
          }
          n = i + 1;
        }
      }
      function ut(e, t, n) {
        let r = 0;
        for (; r < n.length; ) {
          const i = n[r];
          if ('number' == typeof i) {
            if (0 !== i) break;
            r++;
            const o = n[r++],
              s = n[r++],
              c = n[r++];
            e.setAttribute(t, s, c, o);
          } else {
            const o = i,
              s = n[++r];
            rn(o) ? e.setProperty(t, o, s) : e.setAttribute(t, o, s), r++;
          }
        }
        return r;
      }
      function Rt(e) {
        return 3 === e || 4 === e || 6 === e;
      }
      function rn(e) {
        return 64 === e.charCodeAt(0);
      }
      function Ut(e, t) {
        if (null !== t && 0 !== t.length)
          if (null === e || 0 === e.length) e = t.slice();
          else {
            let n = -1;
            for (let r = 0; r < t.length; r++) {
              const i = t[r];
              'number' == typeof i
                ? (n = i)
                : 0 === n ||
                  _n(e, n, i, null, -1 === n || 2 === n ? t[++r] : null);
            }
          }
        return e;
      }
      function _n(e, t, n, r, i) {
        let o = 0,
          s = e.length;
        if (-1 === t) s = -1;
        else
          for (; o < e.length; ) {
            const c = e[o++];
            if ('number' == typeof c) {
              if (c === t) {
                s = -1;
                break;
              }
              if (c > t) {
                s = o - 1;
                break;
              }
            }
          }
        for (; o < e.length; ) {
          const c = e[o];
          if ('number' == typeof c) break;
          if (c === n) {
            if (null === r) return void (null !== i && (e[o + 1] = i));
            if (r === e[o + 1]) return void (e[o + 2] = i);
          }
          o++, null !== r && o++, null !== i && o++;
        }
        -1 !== s && (e.splice(s, 0, t), (o = s + 1)),
          e.splice(o++, 0, n),
          null !== r && e.splice(o++, 0, r),
          null !== i && e.splice(o++, 0, i);
      }
      const Ht = 'ng-template';
      function Wt(e, t, n) {
        let r = 0,
          i = !0;
        for (; r < e.length; ) {
          let o = e[r++];
          if ('string' == typeof o && i) {
            const s = e[r++];
            if (n && 'class' === o && -1 !== ke(s.toLowerCase(), t, 0))
              return !0;
          } else {
            if (1 === o) {
              for (; r < e.length && 'string' == typeof (o = e[r++]); )
                if (o.toLowerCase() === t) return !0;
              return !1;
            }
            'number' == typeof o && (i = !1);
          }
        }
        return !1;
      }
      function Kn(e) {
        return 4 === e.type && e.value !== Ht;
      }
      function ir(e, t, n) {
        return t === (4 !== e.type || n ? e.value : Ht);
      }
      function on(e, t, n) {
        let r = 4;
        const i = e.attrs || [],
          o = (function kr(e) {
            for (let t = 0; t < e.length; t++) if (Rt(e[t])) return t;
            return e.length;
          })(i);
        let s = !1;
        for (let c = 0; c < t.length; c++) {
          const d = t[c];
          if ('number' != typeof d) {
            if (!s)
              if (4 & r) {
                if (
                  ((r = 2 | (1 & r)),
                  ('' !== d && !ir(e, d, n)) || ('' === d && 1 === t.length))
                ) {
                  if (yn(r)) return !1;
                  s = !0;
                }
              } else {
                const m = 8 & r ? d : t[++c];
                if (8 & r && null !== e.attrs) {
                  if (!Wt(e.attrs, m, n)) {
                    if (yn(r)) return !1;
                    s = !0;
                  }
                  continue;
                }
                const R = gr(8 & r ? 'class' : d, i, Kn(e), n);
                if (-1 === R) {
                  if (yn(r)) return !1;
                  s = !0;
                  continue;
                }
                if ('' !== m) {
                  let G;
                  G = R > o ? '' : i[R + 1].toLowerCase();
                  const ie = 8 & r ? G : null;
                  if ((ie && -1 !== ke(ie, m, 0)) || (2 & r && m !== G)) {
                    if (yn(r)) return !1;
                    s = !0;
                  }
                }
              }
          } else {
            if (!s && !yn(r) && !yn(d)) return !1;
            if (s && yn(d)) continue;
            (s = !1), (r = d | (1 & r));
          }
        }
        return yn(r) || s;
      }
      function yn(e) {
        return 0 == (1 & e);
      }
      function gr(e, t, n, r) {
        if (null === t) return -1;
        let i = 0;
        if (r || !n) {
          let o = !1;
          for (; i < t.length; ) {
            const s = t[i];
            if (s === e) return i;
            if (3 === s || 6 === s) o = !0;
            else {
              if (1 === s || 2 === s) {
                let c = t[++i];
                for (; 'string' == typeof c; ) c = t[++i];
                continue;
              }
              if (4 === s) break;
              if (0 === s) {
                i += 4;
                continue;
              }
            }
            i += o ? 1 : 2;
          }
          return -1;
        }
        return (function K(e, t) {
          let n = e.indexOf(4);
          if (n > -1)
            for (n++; n < e.length; ) {
              const r = e[n];
              if ('number' == typeof r) return -1;
              if (r === t) return n;
              n++;
            }
          return -1;
        })(t, e);
      }
      function mr(e, t, n = !1) {
        for (let r = 0; r < t.length; r++) if (on(e, t[r], n)) return !0;
        return !1;
      }
      function y(e, t) {
        e: for (let n = 0; n < t.length; n++) {
          const r = t[n];
          if (e.length === r.length) {
            for (let i = 0; i < e.length; i++) if (e[i] !== r[i]) continue e;
            return !0;
          }
        }
        return !1;
      }
      function b(e, t) {
        return e ? ':not(' + t.trim() + ')' : t;
      }
      function F(e) {
        let t = e[0],
          n = 1,
          r = 2,
          i = '',
          o = !1;
        for (; n < e.length; ) {
          let s = e[n];
          if ('string' == typeof s)
            if (2 & r) {
              const c = e[++n];
              i += '[' + s + (c.length > 0 ? '="' + c + '"' : '') + ']';
            } else 8 & r ? (i += '.' + s) : 4 & r && (i += ' ' + s);
          else
            '' !== i && !yn(s) && ((t += b(o, i)), (i = '')),
              (r = s),
              (o = o || !yn(r));
          n++;
        }
        return '' !== i && (t += b(o, i)), t;
      }
      function Fe(e) {
        return U(() => {
          const t = I(e),
            n = {
              ...t,
              decls: e.decls,
              vars: e.vars,
              template: e.template,
              consts: e.consts || null,
              ngContentSelectors: e.ngContentSelectors,
              onPush: e.changeDetection === O.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              dependencies: (t.standalone && e.dependencies) || null,
              getStandaloneInjector: null,
              data: e.data || {},
              encapsulation: e.encapsulation || B.Emulated,
              styles: e.styles || be,
              _: null,
              schemas: e.schemas || null,
              tView: null,
              id: '',
            };
          x(n);
          const r = e.dependencies;
          return (
            (n.directiveDefs = he(r, !1)),
            (n.pipeDefs = he(r, !0)),
            (n.id = (function Mt(e) {
              let t = 0;
              const n = [
                e.selectors,
                e.ngContentSelectors,
                e.hostVars,
                e.hostAttrs,
                e.consts,
                e.vars,
                e.decls,
                e.encapsulation,
                e.standalone,
                e.exportAs,
                JSON.stringify(e.inputs),
                JSON.stringify(e.outputs),
                Object.getOwnPropertyNames(e.type.prototype),
                !!e.contentQueries,
                !!e.viewQuery,
              ].join('|');
              for (const i of n) t = (Math.imul(31, t) + i.charCodeAt(0)) << 0;
              return (t += 2147483648), 'c' + t;
            })(n)),
            n
          );
        });
      }
      function gt(e) {
        return _t(e) || pn(e);
      }
      function yt(e) {
        return null !== e;
      }
      function Dt(e) {
        return U(() => ({
          type: e.type,
          bootstrap: e.bootstrap || be,
          declarations: e.declarations || be,
          imports: e.imports || be,
          exports: e.exports || be,
          transitiveCompileScopes: null,
          schemas: e.schemas || null,
          id: e.id || null,
        }));
      }
      function or(e, t) {
        if (null == e) return Ce;
        const n = {};
        for (const r in e)
          if (e.hasOwnProperty(r)) {
            let i = e[r],
              o = i;
            Array.isArray(i) && ((o = i[1]), (i = i[0])),
              (n[i] = r),
              t && (t[i] = o);
          }
        return n;
      }
      function xn(e) {
        return U(() => {
          const t = I(e);
          return x(t), t;
        });
      }
      function Bn(e) {
        return {
          type: e.type,
          name: e.name,
          factory: null,
          pure: !1 !== e.pure,
          standalone: !0 === e.standalone,
          onDestroy: e.type.prototype.ngOnDestroy || null,
        };
      }
      function _t(e) {
        return e[We] || null;
      }
      function pn(e) {
        return e[$e] || null;
      }
      function Pn(e) {
        return e[j] || null;
      }
      function Br(e) {
        const t = _t(e) || pn(e) || Pn(e);
        return null !== t && t.standalone;
      }
      function re(e, t) {
        const n = e[N] || null;
        if (!n && !0 === t)
          throw new Error(`Type ${le(e)} does not have '\u0275mod' property.`);
        return n;
      }
      function I(e) {
        const t = {};
        return {
          type: e.type,
          providersResolver: null,
          factory: null,
          hostBindings: e.hostBindings || null,
          hostVars: e.hostVars || 0,
          hostAttrs: e.hostAttrs || null,
          contentQueries: e.contentQueries || null,
          declaredInputs: t,
          exportAs: e.exportAs || null,
          standalone: !0 === e.standalone,
          selectors: e.selectors || be,
          viewQuery: e.viewQuery || null,
          features: e.features || null,
          setInput: null,
          findHostDirectiveDefs: null,
          hostDirectives: null,
          inputs: or(e.inputs, t),
          outputs: or(e.outputs),
        };
      }
      function x(e) {
        e.features?.forEach((t) => t(e));
      }
      function he(e, t) {
        if (!e) return null;
        const n = t ? Pn : gt;
        return () =>
          ('function' == typeof e ? e() : e).map((r) => n(r)).filter(yt);
      }
      const dt = 0,
        Ge = 1,
        mt = 2,
        Ft = 3,
        Yt = 4,
        Fn = 5,
        Mn = 6,
        br = 7,
        Zt = 8,
        Un = 9,
        er = 10,
        Ct = 11,
        Er = 12,
        Ei = 13,
        wr = 14,
        un = 15,
        Wr = 16,
        ni = 17,
        Mr = 18,
        Sr = 19,
        no = 20,
        Hr = 21,
        vr = 22,
        hi = 23,
        fi = 24,
        Nt = 25,
        Hi = 1,
        ro = 2,
        Tr = 7,
        wi = 8,
        pi = 9,
        Nn = 11;
      function $n(e) {
        return Array.isArray(e) && 'object' == typeof e[Hi];
      }
      function tr(e) {
        return Array.isArray(e) && !0 === e[Hi];
      }
      function gi(e) {
        return 0 != (4 & e.flags);
      }
      function Ln(e) {
        return e.componentOffset > -1;
      }
      function Mi(e) {
        return 1 == (1 & e.flags);
      }
      function An(e) {
        return !!e.template;
      }
      function io(e) {
        return 0 != (512 & e[mt]);
      }
      function Ar(e, t) {
        return e.hasOwnProperty(T) ? e[T] : null;
      }
      let Yo =
          it.WeakRef ??
          class ra {
            constructor(t) {
              this.ref = t;
            }
            deref() {
              return this.ref;
            }
          },
        oa = 0,
        _r = null,
        vi = !1;
      function On(e) {
        const t = _r;
        return (_r = e), t;
      }
      class Yr {
        constructor() {
          (this.id = oa++),
            (this.ref = (function ia(e) {
              return new Yo(e);
            })(this)),
            (this.producers = new Map()),
            (this.consumers = new Map()),
            (this.trackingVersion = 0),
            (this.valueVersion = 0);
        }
        consumerPollProducersForChange() {
          for (const [t, n] of this.producers) {
            const r = n.producerNode.deref();
            if (void 0 !== r && n.atTrackingVersion === this.trackingVersion) {
              if (r.producerPollStatus(n.seenValueVersion)) return !0;
            } else this.producers.delete(t), r?.consumers.delete(this.id);
          }
          return !1;
        }
        producerMayHaveChanged() {
          const t = vi;
          vi = !0;
          try {
            for (const [n, r] of this.consumers) {
              const i = r.consumerNode.deref();
              void 0 !== i && i.trackingVersion === r.atTrackingVersion
                ? i.onConsumerDependencyMayHaveChanged()
                : (this.consumers.delete(n), i?.producers.delete(this.id));
            }
          } finally {
            vi = t;
          }
        }
        producerAccessed() {
          if (vi) throw new Error('');
          if (null === _r) return;
          let t = _r.producers.get(this.id);
          void 0 === t
            ? ((t = {
                consumerNode: _r.ref,
                producerNode: this.ref,
                seenValueVersion: this.valueVersion,
                atTrackingVersion: _r.trackingVersion,
              }),
              _r.producers.set(this.id, t),
              this.consumers.set(_r.id, t))
            : ((t.seenValueVersion = this.valueVersion),
              (t.atTrackingVersion = _r.trackingVersion));
        }
        get hasProducers() {
          return this.producers.size > 0;
        }
        get producerUpdatesAllowed() {
          return !1 !== _r?.consumerAllowSignalWrites;
        }
        producerPollStatus(t) {
          return (
            this.valueVersion !== t ||
            (this.onProducerUpdateValueVersion(), this.valueVersion !== t)
          );
        }
      }
      let $i = null;
      const xi = () => {};
      class aa extends Yr {
        constructor(t, n, r) {
          super(),
            (this.watch = t),
            (this.schedule = n),
            (this.dirty = !1),
            (this.cleanupFn = xi),
            (this.registerOnCleanup = (i) => {
              this.cleanupFn = i;
            }),
            (this.consumerAllowSignalWrites = r);
        }
        notify() {
          this.dirty || this.schedule(this), (this.dirty = !0);
        }
        onConsumerDependencyMayHaveChanged() {
          this.notify();
        }
        onProducerUpdateValueVersion() {}
        run() {
          if (
            ((this.dirty = !1),
            0 !== this.trackingVersion &&
              !this.consumerPollProducersForChange())
          )
            return;
          const t = On(this);
          this.trackingVersion++;
          try {
            this.cleanupFn(),
              (this.cleanupFn = xi),
              this.watch(this.registerOnCleanup);
          } finally {
            On(t);
          }
        }
        cleanup() {
          this.cleanupFn();
        }
      }
      class la {
        constructor(t, n, r) {
          (this.previousValue = t),
            (this.currentValue = n),
            (this.firstChange = r);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function uo() {
        return Zo;
      }
      function Zo(e) {
        return e.type.prototype.ngOnChanges && (e.setInput = ca), Ko;
      }
      function Ko() {
        const e = Xo(this),
          t = e?.current;
        if (t) {
          const n = e.previous;
          if (n === Ce) e.previous = t;
          else for (let r in t) n[r] = t[r];
          (e.current = null), this.ngOnChanges(t);
        }
      }
      function ca(e, t, n, r) {
        const i = this.declaredInputs[n],
          o =
            Xo(e) ||
            (function Qo(e, t) {
              return (e[Gi] = t);
            })(e, { previous: Ce, current: null }),
          s = o.current || (o.current = {}),
          c = o.previous,
          d = c[i];
        (s[i] = new la(d && d.currentValue, t, c === Ce)), (e[r] = t);
      }
      uo.ngInherit = !0;
      const Gi = '__ngSimpleChanges__';
      function Xo(e) {
        return e[Gi] || null;
      }
      const Or = function (e, t, n) {};
      function ln(e) {
        for (; Array.isArray(e); ) e = e[dt];
        return e;
      }
      function Pi(e, t) {
        return ln(t[e]);
      }
      function zn(e, t) {
        return ln(t[e.index]);
      }
      function f(e, t) {
        return e.data[t];
      }
      function _(e, t) {
        return e[t];
      }
      function g(e, t) {
        const n = t[e];
        return $n(n) ? n : n[dt];
      }
      function L(e) {
        return 128 == (128 & e[mt]);
      }
      function Se(e, t) {
        return null == t ? null : e[t];
      }
      function at(e) {
        e[ni] = 0;
      }
      function Jt(e) {
        1024 & e[mt] || ((e[mt] |= 1024), kt(e, 1));
      }
      function Xt(e) {
        1024 & e[mt] && ((e[mt] &= -1025), kt(e, -1));
      }
      function kt(e, t) {
        let n = e[Ft];
        if (null === n) return;
        n[Fn] += t;
        let r = n;
        for (
          n = n[Ft];
          null !== n && ((1 === t && 1 === r[Fn]) || (-1 === t && 0 === r[Fn]));

        )
          (n[Fn] += t), (r = n), (n = n[Ft]);
      }
      const Ze = {
        lFrame: Da(null),
        bindingsEnabled: !0,
        skipHydrationRootTNode: null,
      };
      function Cn() {
        return Ze.bindingsEnabled;
      }
      function sr() {
        return null !== Ze.skipHydrationRootTNode;
      }
      function Be() {
        return Ze.lFrame.lView;
      }
      function jt() {
        return Ze.lFrame.tView;
      }
      function ho(e) {
        return (Ze.lFrame.contextLView = e), e[Zt];
      }
      function es(e) {
        return (Ze.lFrame.contextLView = null), e;
      }
      function Gn() {
        let e = ts();
        for (; null !== e && 64 === e.type; ) e = e.parent;
        return e;
      }
      function ts() {
        return Ze.lFrame.currentTNode;
      }
      function jr(e, t) {
        const n = Ze.lFrame;
        (n.currentTNode = e), (n.isParent = t);
      }
      function fa() {
        return Ze.lFrame.isParent;
      }
      function pa() {
        Ze.lFrame.isParent = !1;
      }
      function Wn() {
        const e = Ze.lFrame;
        let t = e.bindingRootIndex;
        return (
          -1 === t && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t
        );
      }
      function Yi() {
        return Ze.lFrame.bindingIndex++;
      }
      function Vr(e) {
        const t = Ze.lFrame,
          n = t.bindingIndex;
        return (t.bindingIndex = t.bindingIndex + e), n;
      }
      function md(e, t) {
        const n = Ze.lFrame;
        (n.bindingIndex = n.bindingRootIndex = e), rs(t);
      }
      function rs(e) {
        Ze.lFrame.currentDirectiveIndex = e;
      }
      function is() {
        return Ze.lFrame.currentQueryIndex;
      }
      function os(e) {
        Ze.lFrame.currentQueryIndex = e;
      }
      function Hl(e) {
        const t = e[Ge];
        return 2 === t.type ? t.declTNode : 1 === t.type ? e[Mn] : null;
      }
      function _a(e, t, n) {
        if (n & Qe.SkipSelf) {
          let i = t,
            o = e;
          for (
            ;
            !((i = i.parent),
            null !== i ||
              n & Qe.Host ||
              ((i = Hl(o)), null === i || ((o = o[wr]), 10 & i.type)));

          );
          if (null === i) return !1;
          (t = i), (e = o);
        }
        const r = (Ze.lFrame = ya());
        return (r.currentTNode = t), (r.lView = e), !0;
      }
      function ss(e) {
        const t = ya(),
          n = e[Ge];
        (Ze.lFrame = t),
          (t.currentTNode = n.firstChild),
          (t.lView = e),
          (t.tView = n),
          (t.contextLView = e),
          (t.bindingIndex = n.bindingStartIndex),
          (t.inI18n = !1);
      }
      function ya() {
        const e = Ze.lFrame,
          t = null === e ? null : e.child;
        return null === t ? Da(e) : t;
      }
      function Da(e) {
        const t = {
          currentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: -1,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: e,
          child: null,
          inI18n: !1,
        };
        return null !== e && (e.child = t), t;
      }
      function Ca() {
        const e = Ze.lFrame;
        return (
          (Ze.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e
        );
      }
      const ba = Ca;
      function fo() {
        const e = Ca();
        (e.isParent = !0),
          (e.tView = null),
          (e.selectedIndex = -1),
          (e.contextLView = null),
          (e.elementDepthCount = 0),
          (e.currentDirectiveIndex = -1),
          (e.currentNamespace = null),
          (e.bindingRootIndex = -1),
          (e.bindingIndex = -1),
          (e.currentQueryIndex = 0);
      }
      function ar() {
        return Ze.lFrame.selectedIndex;
      }
      function Fi(e) {
        Ze.lFrame.selectedIndex = e;
      }
      function bn() {
        const e = Ze.lFrame;
        return f(e.tView, e.selectedIndex);
      }
      let h = !0;
      function v() {
        return h;
      }
      function M(e) {
        h = e;
      }
      function q(e, t) {
        for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
          const o = e.data[n].type.prototype,
            {
              ngAfterContentInit: s,
              ngAfterContentChecked: c,
              ngAfterViewInit: d,
              ngAfterViewChecked: m,
              ngOnDestroy: E,
            } = o;
          s && (e.contentHooks ??= []).push(-n, s),
            c &&
              ((e.contentHooks ??= []).push(n, c),
              (e.contentCheckHooks ??= []).push(n, c)),
            d && (e.viewHooks ??= []).push(-n, d),
            m &&
              ((e.viewHooks ??= []).push(n, m),
              (e.viewCheckHooks ??= []).push(n, m)),
            null != E && (e.destroyHooks ??= []).push(n, E);
        }
      }
      function Oe(e, t, n) {
        Qt(e, t, 3, n);
      }
      function tt(e, t, n, r) {
        (3 & e[mt]) === n && Qt(e, t, n, r);
      }
      function ft(e, t) {
        let n = e[mt];
        (3 & n) === t && ((n &= 4095), (n += 1), (e[mt] = n));
      }
      function Qt(e, t, n, r) {
        const o = r ?? -1,
          s = t.length - 1;
        let c = 0;
        for (let d = void 0 !== r ? 65535 & e[ni] : 0; d < s; d++)
          if ('number' == typeof t[d + 1]) {
            if (((c = t[d]), null != r && c >= r)) break;
          } else
            t[d] < 0 && (e[ni] += 65536),
              (c < o || -1 == o) &&
                (as(e, n, t, d), (e[ni] = (4294901760 & e[ni]) + d + 2)),
              d++;
      }
      function lr(e, t) {
        Or(4, e, t);
        const n = On(null);
        try {
          t.call(e);
        } finally {
          On(n), Or(5, e, t);
        }
      }
      function as(e, t, n, r) {
        const i = n[r] < 0,
          o = n[r + 1],
          c = e[i ? -n[r] : n[r]];
        i
          ? e[mt] >> 12 < e[ni] >> 16 &&
            (3 & e[mt]) === t &&
            ((e[mt] += 4096), lr(c, o))
          : lr(c, o);
      }
      const Ur = -1;
      class Qr {
        constructor(t, n, r) {
          (this.factory = t),
            (this.resolving = !1),
            (this.canSeeViewProviders = n),
            (this.injectImpl = r);
        }
      }
      function Cd(e) {
        return e !== Ur;
      }
      function Ea(e) {
        return 32767 & e;
      }
      function wa(e, t) {
        let n = (function fv(e) {
            return e >> 16;
          })(e),
          r = t;
        for (; n > 0; ) (r = r[wr]), n--;
        return r;
      }
      let Ul = !0;
      function Ma(e) {
        const t = Ul;
        return (Ul = e), t;
      }
      const bd = 255,
        Ed = 5;
      let pv = 0;
      const oi = {};
      function Sa(e, t) {
        const n = wd(e, t);
        if (-1 !== n) return n;
        const r = t[Ge];
        r.firstCreatePass &&
          ((e.injectorIndex = t.length),
          $l(r.data, e),
          $l(t, null),
          $l(r.blueprint, null));
        const i = zl(e, t),
          o = e.injectorIndex;
        if (Cd(i)) {
          const s = Ea(i),
            c = wa(i, t),
            d = c[Ge].data;
          for (let m = 0; m < 8; m++) t[o + m] = c[s + m] | d[s + m];
        }
        return (t[o + 8] = i), o;
      }
      function $l(e, t) {
        e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
      }
      function wd(e, t) {
        return -1 === e.injectorIndex ||
          (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
          null === t[e.injectorIndex + 8]
          ? -1
          : e.injectorIndex;
      }
      function zl(e, t) {
        if (e.parent && -1 !== e.parent.injectorIndex)
          return e.parent.injectorIndex;
        let n = 0,
          r = null,
          i = t;
        for (; null !== i; ) {
          if (((r = xd(i)), null === r)) return Ur;
          if ((n++, (i = i[wr]), -1 !== r.injectorIndex))
            return r.injectorIndex | (n << 16);
        }
        return Ur;
      }
      function Gl(e, t, n) {
        !(function gv(e, t, n) {
          let r;
          'string' == typeof n
            ? (r = n.charCodeAt(0) || 0)
            : n.hasOwnProperty(Q) && (r = n[Q]),
            null == r && (r = n[Q] = pv++);
          const i = r & bd;
          t.data[e + (i >> Ed)] |= 1 << i;
        })(e, t, n);
      }
      function Md(e, t, n) {
        if (n & Qe.Optional || void 0 !== e) return e;
        Ee();
      }
      function Sd(e, t, n, r) {
        if (
          (n & Qe.Optional && void 0 === r && (r = null),
          !(n & (Qe.Self | Qe.Host)))
        ) {
          const i = e[Un],
            o = Gt(void 0);
          try {
            return i ? i.get(t, r, n & Qe.Optional) : In(t, r, n & Qe.Optional);
          } finally {
            Gt(o);
          }
        }
        return Md(r, 0, n);
      }
      function Id(e, t, n, r = Qe.Default, i) {
        if (null !== e) {
          if (2048 & t[mt]) {
            const s = (function Dv(e, t, n, r, i) {
              let o = e,
                s = t;
              for (
                ;
                null !== o && null !== s && 2048 & s[mt] && !(512 & s[mt]);

              ) {
                const c = Td(o, s, n, r | Qe.Self, oi);
                if (c !== oi) return c;
                let d = o.parent;
                if (!d) {
                  const m = s[no];
                  if (m) {
                    const E = m.get(n, oi, r);
                    if (E !== oi) return E;
                  }
                  (d = xd(s)), (s = s[wr]);
                }
                o = d;
              }
              return i;
            })(e, t, n, r, oi);
            if (s !== oi) return s;
          }
          const o = Td(e, t, n, r, oi);
          if (o !== oi) return o;
        }
        return Sd(t, n, r, i);
      }
      function Td(e, t, n, r, i) {
        const o = (function _v(e) {
          if ('string' == typeof e) return e.charCodeAt(0) || 0;
          const t = e.hasOwnProperty(Q) ? e[Q] : void 0;
          return 'number' == typeof t ? (t >= 0 ? t & bd : yv) : t;
        })(n);
        if ('function' == typeof o) {
          if (!_a(t, e, r)) return r & Qe.Host ? Md(i, 0, r) : Sd(t, n, r, i);
          try {
            const s = o(r);
            if (null != s || r & Qe.Optional) return s;
            Ee();
          } finally {
            ba();
          }
        } else if ('number' == typeof o) {
          let s = null,
            c = wd(e, t),
            d = Ur,
            m = r & Qe.Host ? t[un][Mn] : null;
          for (
            (-1 === c || r & Qe.SkipSelf) &&
            ((d = -1 === c ? zl(e, t) : t[c + 8]),
            d !== Ur && Od(r, !1)
              ? ((s = t[Ge]), (c = Ea(d)), (t = wa(d, t)))
              : (c = -1));
            -1 !== c;

          ) {
            const E = t[Ge];
            if (Ad(o, c, E.data)) {
              const R = vv(c, t, n, s, r, m);
              if (R !== oi) return R;
            }
            (d = t[c + 8]),
              d !== Ur && Od(r, t[Ge].data[c + 8] === m) && Ad(o, c, t)
                ? ((s = E), (c = Ea(d)), (t = wa(d, t)))
                : (c = -1);
          }
        }
        return i;
      }
      function vv(e, t, n, r, i, o) {
        const s = t[Ge],
          c = s.data[e + 8],
          E = Ia(
            c,
            s,
            n,
            null == r ? Ln(c) && Ul : r != s && 0 != (3 & c.type),
            i & Qe.Host && o === c
          );
        return null !== E ? Zi(t, s, E, c) : oi;
      }
      function Ia(e, t, n, r, i) {
        const o = e.providerIndexes,
          s = t.data,
          c = 1048575 & o,
          d = e.directiveStart,
          E = o >> 20,
          G = i ? c + E : e.directiveEnd;
        for (let ie = r ? c : c + E; ie < G; ie++) {
          const Ae = s[ie];
          if ((ie < d && n === Ae) || (ie >= d && Ae.type === n)) return ie;
        }
        if (i) {
          const ie = s[d];
          if (ie && An(ie) && ie.type === n) return d;
        }
        return null;
      }
      function Zi(e, t, n, r) {
        let i = e[n];
        const o = t.data;
        if (
          (function ls(e) {
            return e instanceof Qr;
          })(i)
        ) {
          const s = i;
          s.resolving &&
            (function _e(e, t) {
              const n = t ? `. Dependency path: ${t.join(' > ')} > ${e}` : '';
              throw new ue(
                -200,
                `Circular dependency in DI detected for ${e}${n}`
              );
            })(
              (function ce(e) {
                return 'function' == typeof e
                  ? e.name || e.toString()
                  : 'object' == typeof e &&
                    null != e &&
                    'function' == typeof e.type
                  ? e.type.name || e.type.toString()
                  : se(e);
              })(o[n])
            );
          const c = Ma(s.canSeeViewProviders);
          s.resolving = !0;
          const d = s.injectImpl ? Gt(s.injectImpl) : null;
          _a(e, r, Qe.Default);
          try {
            (i = e[n] = s.factory(void 0, o, e, r)),
              t.firstCreatePass &&
                n >= r.directiveStart &&
                (function S(e, t, n) {
                  const {
                    ngOnChanges: r,
                    ngOnInit: i,
                    ngDoCheck: o,
                  } = t.type.prototype;
                  if (r) {
                    const s = Zo(t);
                    (n.preOrderHooks ??= []).push(e, s),
                      (n.preOrderCheckHooks ??= []).push(e, s);
                  }
                  i && (n.preOrderHooks ??= []).push(0 - e, i),
                    o &&
                      ((n.preOrderHooks ??= []).push(e, o),
                      (n.preOrderCheckHooks ??= []).push(e, o));
                })(n, o[n], t);
          } finally {
            null !== d && Gt(d), Ma(c), (s.resolving = !1), ba();
          }
        }
        return i;
      }
      function Ad(e, t, n) {
        return !!(n[t + (e >> Ed)] & (1 << e));
      }
      function Od(e, t) {
        return !(e & Qe.Self || (e & Qe.Host && t));
      }
      class po {
        constructor(t, n) {
          (this._tNode = t), (this._lView = n);
        }
        get(t, n, r) {
          return Id(this._tNode, this._lView, t, rr(r), n);
        }
      }
      function yv() {
        return new po(Gn(), Be());
      }
      function Rd(e) {
        return U(() => {
          const t = e.prototype.constructor,
            n = t[T] || Wl(t),
            r = Object.prototype;
          let i = Object.getPrototypeOf(e.prototype).constructor;
          for (; i && i !== r; ) {
            const o = i[T] || Wl(i);
            if (o && o !== n) return o;
            i = Object.getPrototypeOf(i);
          }
          return (o) => new o();
        });
      }
      function Wl(e) {
        return Xe(e)
          ? () => {
              const t = Wl(xe(e));
              return t && t();
            }
          : Ar(e);
      }
      function xd(e) {
        const t = e[Ge],
          n = t.type;
        return 2 === n ? t.declTNode : 1 === n ? e[Mn] : null;
      }
      function Yl(e) {
        return (function mv(e, t) {
          if ('class' === t) return e.classes;
          if ('style' === t) return e.styles;
          const n = e.attrs;
          if (n) {
            const r = n.length;
            let i = 0;
            for (; i < r; ) {
              const o = n[i];
              if (Rt(o)) break;
              if (0 === o) i += 2;
              else if ('number' == typeof o)
                for (i++; i < r && 'string' == typeof n[i]; ) i++;
              else {
                if (o === t) return n[i + 1];
                i += 2;
              }
            }
          }
          return null;
        })(Gn(), e);
      }
      const mo = '__parameters__';
      function _o(e, t, n) {
        return U(() => {
          const r = (function Zl(e) {
            return function (...n) {
              if (e) {
                const r = e(...n);
                for (const i in r) this[i] = r[i];
              }
            };
          })(t);
          function i(...o) {
            if (this instanceof i) return r.apply(this, o), this;
            const s = new i(...o);
            return (c.annotation = s), c;
            function c(d, m, E) {
              const R = d.hasOwnProperty(mo)
                ? d[mo]
                : Object.defineProperty(d, mo, { value: [] })[mo];
              for (; R.length <= E; ) R.push(null);
              return (R[E] = R[E] || []).push(s), d;
            }
          }
          return (
            n && (i.prototype = Object.create(n.prototype)),
            (i.prototype.ngMetadataName = e),
            (i.annotationCls = i),
            i
          );
        });
      }
      function hs(e, t) {
        e.forEach((n) => (Array.isArray(n) ? hs(n, t) : t(n)));
      }
      function Fd(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function Ta(e, t) {
        return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
      }
      function fs(e, t) {
        const n = [];
        for (let r = 0; r < e; r++) n.push(t);
        return n;
      }
      function Fr(e, t, n) {
        let r = yo(e, t);
        return (
          r >= 0
            ? (e[1 | r] = n)
            : ((r = ~r),
              (function Mv(e, t, n, r) {
                let i = e.length;
                if (i == t) e.push(n, r);
                else if (1 === i) e.push(r, e[0]), (e[0] = n);
                else {
                  for (i--, e.push(e[i - 1], e[i]); i > t; )
                    (e[i] = e[i - 2]), i--;
                  (e[t] = n), (e[t + 1] = r);
                }
              })(e, r, t, n)),
          r
        );
      }
      function Kl(e, t) {
        const n = yo(e, t);
        if (n >= 0) return e[1 | n];
      }
      function yo(e, t) {
        return (function Nd(e, t, n) {
          let r = 0,
            i = e.length >> n;
          for (; i !== r; ) {
            const o = r + ((i - r) >> 1),
              s = e[o << n];
            if (t === s) return o << n;
            s > t ? (i = o) : (r = o + 1);
          }
          return ~(i << n);
        })(e, t, 1);
      }
      const Oa = X(_o('Optional'), 8),
        Ra = X(_o('SkipSelf'), 4);
      function Na(e) {
        return 128 == (128 & e.flags);
      }
      var si = (() => (
        ((si = si || {})[(si.Important = 1)] = 'Important'),
        (si[(si.DashCase = 2)] = 'DashCase'),
        si
      ))();
      const tc = new Map();
      let Kv = 0;
      const rc = '__ngContext__';
      function cr(e, t) {
        $n(t)
          ? ((e[rc] = t[Sr]),
            (function Qv(e) {
              tc.set(e[Sr], e);
            })(t))
          : (e[rc] = t);
      }
      let ic;
      function oc(e, t) {
        return ic(e, t);
      }
      function ms(e) {
        const t = e[Ft];
        return tr(t) ? t[Ft] : t;
      }
      function sc(e) {
        return eh(e[Er]);
      }
      function ac(e) {
        return eh(e[Yt]);
      }
      function eh(e) {
        for (; null !== e && !tr(e); ) e = e[Yt];
        return e;
      }
      function bo(e, t, n, r, i) {
        if (null != r) {
          let o,
            s = !1;
          tr(r) ? (o = r) : $n(r) && ((s = !0), (r = r[dt]));
          const c = ln(r);
          0 === e && null !== n
            ? null == i
              ? oh(t, n, c)
              : Ki(t, n, c, i || null, !0)
            : 1 === e && null !== n
            ? Ki(t, n, c, i || null, !0)
            : 2 === e
            ? (function Va(e, t, n) {
                const r = Ha(e, t);
                r &&
                  (function m_(e, t, n, r) {
                    e.removeChild(t, n, r);
                  })(e, r, t, n);
              })(t, c, s)
            : 3 === e && t.destroyNode(c),
            null != o &&
              (function y_(e, t, n, r, i) {
                const o = n[Tr];
                o !== ln(n) && bo(t, e, r, o, i);
                for (let c = Nn; c < n.length; c++) {
                  const d = n[c];
                  _s(d[Ge], d, e, t, r, o);
                }
              })(t, e, o, n, i);
        }
      }
      function Ba(e, t, n) {
        return e.createElement(t, n);
      }
      function nh(e, t) {
        const n = e[pi],
          r = n.indexOf(t);
        Xt(t), n.splice(r, 1);
      }
      function cc(e, t) {
        if (e.length <= Nn) return;
        const n = Nn + t,
          r = e[n];
        if (r) {
          const i = r[Wr];
          null !== i && i !== e && nh(i, r), t > 0 && (e[n - 1][Yt] = r[Yt]);
          const o = Ta(e, Nn + t);
          !(function l_(e, t) {
            _s(e, t, t[Ct], 2, null, null), (t[dt] = null), (t[Mn] = null);
          })(r[Ge], r);
          const s = o[Mr];
          null !== s && s.detachView(o[Ge]),
            (r[Ft] = null),
            (r[Yt] = null),
            (r[mt] &= -129);
        }
        return r;
      }
      function rh(e, t) {
        if (!(256 & t[mt])) {
          const n = t[Ct];
          t[hi]?.destroy(),
            t[fi]?.destroy(),
            n.destroyNode && _s(e, t, n, 3, null, null),
            (function d_(e) {
              let t = e[Er];
              if (!t) return uc(e[Ge], e);
              for (; t; ) {
                let n = null;
                if ($n(t)) n = t[Er];
                else {
                  const r = t[Nn];
                  r && (n = r);
                }
                if (!n) {
                  for (; t && !t[Yt] && t !== e; )
                    $n(t) && uc(t[Ge], t), (t = t[Ft]);
                  null === t && (t = e),
                    $n(t) && uc(t[Ge], t),
                    (n = t && t[Yt]);
                }
                t = n;
              }
            })(t);
        }
      }
      function uc(e, t) {
        if (!(256 & t[mt])) {
          (t[mt] &= -129),
            (t[mt] |= 256),
            (function g_(e, t) {
              let n;
              if (null != e && null != (n = e.destroyHooks))
                for (let r = 0; r < n.length; r += 2) {
                  const i = t[n[r]];
                  if (!(i instanceof Qr)) {
                    const o = n[r + 1];
                    if (Array.isArray(o))
                      for (let s = 0; s < o.length; s += 2) {
                        const c = i[o[s]],
                          d = o[s + 1];
                        Or(4, c, d);
                        try {
                          d.call(c);
                        } finally {
                          Or(5, c, d);
                        }
                      }
                    else {
                      Or(4, i, o);
                      try {
                        o.call(i);
                      } finally {
                        Or(5, i, o);
                      }
                    }
                  }
                }
            })(e, t),
            (function p_(e, t) {
              const n = e.cleanup,
                r = t[br];
              if (null !== n)
                for (let o = 0; o < n.length - 1; o += 2)
                  if ('string' == typeof n[o]) {
                    const s = n[o + 3];
                    s >= 0 ? r[s]() : r[-s].unsubscribe(), (o += 2);
                  } else n[o].call(r[n[o + 1]]);
              null !== r && (t[br] = null);
              const i = t[Hr];
              if (null !== i) {
                t[Hr] = null;
                for (let o = 0; o < i.length; o++) (0, i[o])();
              }
            })(e, t),
            1 === t[Ge].type && t[Ct].destroy();
          const n = t[Wr];
          if (null !== n && tr(t[Ft])) {
            n !== t[Ft] && nh(n, t);
            const r = t[Mr];
            null !== r && r.detachView(e);
          }
          !(function qv(e) {
            tc.delete(e[Sr]);
          })(t);
        }
      }
      function dc(e, t, n) {
        return (function ih(e, t, n) {
          let r = t;
          for (; null !== r && 40 & r.type; ) r = (t = r).parent;
          if (null === r) return n[dt];
          {
            const { componentOffset: i } = r;
            if (i > -1) {
              const { encapsulation: o } = e.data[r.directiveStart + i];
              if (o === B.None || o === B.Emulated) return null;
            }
            return zn(r, n);
          }
        })(e, t.parent, n);
      }
      function Ki(e, t, n, r, i) {
        e.insertBefore(t, n, r, i);
      }
      function oh(e, t, n) {
        e.appendChild(t, n);
      }
      function sh(e, t, n, r, i) {
        null !== r ? Ki(e, t, n, r, i) : oh(e, t, n);
      }
      function Ha(e, t) {
        return e.parentNode(t);
      }
      function ah(e, t, n) {
        return ch(e, t, n);
      }
      let hc,
        mc,
        $a,
        ch = function lh(e, t, n) {
          return 40 & e.type ? zn(e, n) : null;
        };
      function ja(e, t, n, r) {
        const i = dc(e, r, t),
          o = t[Ct],
          c = ah(r.parent || t[Mn], r, t);
        if (null != i)
          if (Array.isArray(n))
            for (let d = 0; d < n.length; d++) sh(o, i, n[d], c, !1);
          else sh(o, i, n, c, !1);
        void 0 !== hc && hc(o, r, t, n, i);
      }
      function vs(e, t) {
        if (null !== t) {
          const n = t.type;
          if (3 & n) return zn(t, e);
          if (4 & n) return fc(-1, e[t.index]);
          if (8 & n) {
            const r = t.child;
            if (null !== r) return vs(e, r);
            {
              const i = e[t.index];
              return tr(i) ? fc(-1, i) : ln(i);
            }
          }
          if (32 & n) return oc(t, e)() || ln(e[t.index]);
          {
            const r = dh(e, t);
            return null !== r
              ? Array.isArray(r)
                ? r[0]
                : vs(ms(e[un]), r)
              : vs(e, t.next);
          }
        }
        return null;
      }
      function dh(e, t) {
        return null !== t ? e[un][Mn].projection[t.projection] : null;
      }
      function fc(e, t) {
        const n = Nn + e + 1;
        if (n < t.length) {
          const r = t[n],
            i = r[Ge].firstChild;
          if (null !== i) return vs(r, i);
        }
        return t[Tr];
      }
      function pc(e, t, n, r, i, o, s) {
        for (; null != n; ) {
          const c = r[n.index],
            d = n.type;
          if (
            (s && 0 === t && (c && cr(ln(c), r), (n.flags |= 2)),
            32 != (32 & n.flags))
          )
            if (8 & d) pc(e, t, n.child, r, i, o, !1), bo(t, e, i, c, o);
            else if (32 & d) {
              const m = oc(n, r);
              let E;
              for (; (E = m()); ) bo(t, e, i, E, o);
              bo(t, e, i, c, o);
            } else 16 & d ? fh(e, t, r, n, i, o) : bo(t, e, i, c, o);
          n = s ? n.projectionNext : n.next;
        }
      }
      function _s(e, t, n, r, i, o) {
        pc(n, r, e.firstChild, t, i, o, !1);
      }
      function fh(e, t, n, r, i, o) {
        const s = n[un],
          d = s[Mn].projection[r.projection];
        if (Array.isArray(d))
          for (let m = 0; m < d.length; m++) bo(t, e, i, d[m], o);
        else {
          let m = d;
          const E = s[Ft];
          Na(r) && (m.flags |= 128), pc(e, t, m, E, i, o, !0);
        }
      }
      function ph(e, t, n) {
        '' === n
          ? e.removeAttribute(t, 'class')
          : e.setAttribute(t, 'class', n);
      }
      function gh(e, t, n) {
        const { mergedAttrs: r, classes: i, styles: o } = n;
        null !== r && ut(e, t, r),
          null !== i && ph(e, t, i),
          null !== o &&
            (function C_(e, t, n) {
              e.setAttribute(t, 'style', n);
            })(e, t, o);
      }
      function M_(e) {
        mc = e;
      }
      function _h(e) {
        return (
          (function vc() {
            if (void 0 === $a && (($a = null), it.trustedTypes))
              try {
                $a = it.trustedTypes.createPolicy('angular#unsafe-bypass', {
                  createHTML: (e) => e,
                  createScript: (e) => e,
                  createScriptURL: (e) => e,
                });
              } catch {}
            return $a;
          })()?.createScriptURL(e) || e
        );
      }
      class yh {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${qe})`;
        }
      }
      function Ni(e) {
        return e instanceof yh ? e.changingThisBreaksApplicationSecurity : e;
      }
      function Ds(e, t) {
        const n = (function R_(e) {
          return (e instanceof yh && e.getTypeName()) || null;
        })(e);
        if (null != n && n !== t) {
          if ('ResourceURL' === n && 'URL' === t) return !0;
          throw new Error(`Required a safe ${t}, got a ${n} (see ${qe})`);
        }
        return n === t;
      }
      const N_ = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
      var Hn = (() => (
        ((Hn = Hn || {})[(Hn.NONE = 0)] = 'NONE'),
        (Hn[(Hn.HTML = 1)] = 'HTML'),
        (Hn[(Hn.STYLE = 2)] = 'STYLE'),
        (Hn[(Hn.SCRIPT = 3)] = 'SCRIPT'),
        (Hn[(Hn.URL = 4)] = 'URL'),
        (Hn[(Hn.RESOURCE_URL = 5)] = 'RESOURCE_URL'),
        Hn
      ))();
      function Sh(e) {
        const t = bs();
        return t
          ? t.sanitize(Hn.URL, e) || ''
          : Ds(e, 'URL')
          ? Ni(e)
          : (function _c(e) {
              return (e = String(e)).match(N_) ? e : 'unsafe:' + e;
            })(se(e));
      }
      function Ih(e) {
        const t = bs();
        if (t) return _h(t.sanitize(Hn.RESOURCE_URL, e) || '');
        if (Ds(e, 'ResourceURL')) return _h(Ni(e));
        throw new ue(904, !1);
      }
      function Th(e, t, n) {
        return (function Y_(e, t) {
          return ('src' === t &&
            ('embed' === e ||
              'frame' === e ||
              'iframe' === e ||
              'media' === e ||
              'script' === e)) ||
            ('href' === t && ('base' === e || 'link' === e))
            ? Ih
            : Sh;
        })(
          t,
          n
        )(e);
      }
      function bs() {
        const e = Be();
        return e && e[er].sanitizer;
      }
      class en {
        constructor(t, n) {
          (this._desc = t),
            (this.ngMetadataName = 'InjectionToken'),
            (this.ɵprov = void 0),
            'number' == typeof n
              ? (this.__NG_ELEMENT_ID__ = n)
              : void 0 !== n &&
                (this.ɵprov = It({
                  token: this,
                  providedIn: n.providedIn || 'root',
                  factory: n.factory,
                }));
        }
        get multi() {
          return this;
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      const Es = new en('ENVIRONMENT_INITIALIZER'),
        Ah = new en('INJECTOR', -1),
        Oh = new en('INJECTOR_DEF_TYPES');
      class Rh {
        get(t, n = Bt) {
          if (n === Bt) {
            const r = new Error(`NullInjectorError: No provider for ${le(t)}!`);
            throw ((r.name = 'NullInjectorError'), r);
          }
          return n;
        }
      }
      function bc(e) {
        return { ɵproviders: e };
      }
      function xh(...e) {
        return { ɵproviders: Ph(0, e), ɵfromNgModule: !0 };
      }
      function Ph(e, ...t) {
        const n = [],
          r = new Set();
        let i;
        return (
          hs(t, (o) => {
            const s = o;
            Ec(s, n, [], r) && ((i ||= []), i.push(s));
          }),
          void 0 !== i && Fh(i, n),
          n
        );
      }
      function Fh(e, t) {
        for (let n = 0; n < e.length; n++) {
          const { providers: i } = e[n];
          wc(i, (o) => {
            t.push(o);
          });
        }
      }
      function Ec(e, t, n, r) {
        if (!(e = xe(e))) return !1;
        let i = null,
          o = kn(e);
        const s = !o && _t(e);
        if (o || s) {
          if (s && !s.standalone) return !1;
          i = e;
        } else {
          const d = e.ngModule;
          if (((o = kn(d)), !o)) return !1;
          i = d;
        }
        const c = r.has(i);
        if (s) {
          if (c) return !1;
          if ((r.add(i), s.dependencies)) {
            const d =
              'function' == typeof s.dependencies
                ? s.dependencies()
                : s.dependencies;
            for (const m of d) Ec(m, t, n, r);
          }
        } else {
          if (!o) return !1;
          {
            if (null != o.imports && !c) {
              let m;
              r.add(i);
              try {
                hs(o.imports, (E) => {
                  Ec(E, t, n, r) && ((m ||= []), m.push(E));
                });
              } finally {
              }
              void 0 !== m && Fh(m, t);
            }
            if (!c) {
              const m = Ar(i) || (() => new i());
              t.push(
                { provide: i, useFactory: m, deps: be },
                { provide: Oh, useValue: i, multi: !0 },
                { provide: Es, useValue: () => tn(i), multi: !0 }
              );
            }
            const d = o.providers;
            null == d ||
              c ||
              wc(d, (E) => {
                t.push(E);
              });
          }
        }
        return i !== e && void 0 !== e.providers;
      }
      function wc(e, t) {
        for (let n of e)
          Ye(n) && (n = n.ɵproviders), Array.isArray(n) ? wc(n, t) : t(n);
      }
      const Z_ = $({ provide: String, useValue: $ });
      function Mc(e) {
        return null !== e && 'object' == typeof e && Z_ in e;
      }
      function Xi(e) {
        return 'function' == typeof e;
      }
      const Sc = new en('Set Injector scope.'),
        Ga = {},
        X_ = {};
      let Ic;
      function Wa() {
        return void 0 === Ic && (Ic = new Rh()), Ic;
      }
      class Qi {}
      class Tc extends Qi {
        get destroyed() {
          return this._destroyed;
        }
        constructor(t, n, r, i) {
          super(),
            (this.parent = n),
            (this.source = r),
            (this.scopes = i),
            (this.records = new Map()),
            (this._ngOnDestroyHooks = new Set()),
            (this._onDestroyHooks = []),
            (this._destroyed = !1),
            Oc(t, (s) => this.processProvider(s)),
            this.records.set(Ah, wo(void 0, this)),
            i.has('environment') && this.records.set(Qi, wo(void 0, this));
          const o = this.records.get(Sc);
          null != o && 'string' == typeof o.value && this.scopes.add(o.value),
            (this.injectorDefTypes = new Set(this.get(Oh.multi, be, Qe.Self)));
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          try {
            for (const n of this._ngOnDestroyHooks) n.ngOnDestroy();
            const t = this._onDestroyHooks;
            this._onDestroyHooks = [];
            for (const n of t) n();
          } finally {
            this.records.clear(),
              this._ngOnDestroyHooks.clear(),
              this.injectorDefTypes.clear();
          }
        }
        onDestroy(t) {
          return (
            this.assertNotDestroyed(),
            this._onDestroyHooks.push(t),
            () => this.removeOnDestroy(t)
          );
        }
        runInContext(t) {
          this.assertNotDestroyed();
          const n = fn(this),
            r = Gt(void 0);
          try {
            return t();
          } finally {
            fn(n), Gt(r);
          }
        }
        get(t, n = Bt, r = Qe.Default) {
          if ((this.assertNotDestroyed(), t.hasOwnProperty(ge)))
            return t[ge](this);
          r = rr(r);
          const i = fn(this),
            o = Gt(void 0);
          try {
            if (!(r & Qe.SkipSelf)) {
              let c = this.records.get(t);
              if (void 0 === c) {
                const d =
                  (function ty(e) {
                    return (
                      'function' == typeof e ||
                      ('object' == typeof e && e instanceof en)
                    );
                  })(t) && hr(t);
                (c = d && this.injectableDefInScope(d) ? wo(Ac(t), Ga) : null),
                  this.records.set(t, c);
              }
              if (null != c) return this.hydrate(t, c);
            }
            return (r & Qe.Self ? Wa() : this.parent).get(
              t,
              (n = r & Qe.Optional && n === Bt ? null : n)
            );
          } catch (s) {
            if ('NullInjectorError' === s.name) {
              if (((s[Vn] = s[Vn] || []).unshift(le(t)), i)) throw s;
              return (function pe(e, t, n, r) {
                const i = e[Vn];
                throw (
                  (t[qn] && i.unshift(t[qn]),
                  (e.message = (function Re(e, t, n, r = null) {
                    e =
                      e && '\n' === e.charAt(0) && '\u0275' == e.charAt(1)
                        ? e.slice(2)
                        : e;
                    let i = le(t);
                    if (Array.isArray(t)) i = t.map(le).join(' -> ');
                    else if ('object' == typeof t) {
                      let o = [];
                      for (let s in t)
                        if (t.hasOwnProperty(s)) {
                          let c = t[s];
                          o.push(
                            s +
                              ':' +
                              ('string' == typeof c ? JSON.stringify(c) : le(c))
                          );
                        }
                      i = `{${o.join(', ')}}`;
                    }
                    return `${n}${r ? '(' + r + ')' : ''}[${i}]: ${e.replace(
                      Qn,
                      '\n  '
                    )}`;
                  })('\n' + e.message, i, n, r)),
                  (e.ngTokenPath = i),
                  (e[Vn] = null),
                  e)
                );
              })(s, t, 'R3InjectorError', this.source);
            }
            throw s;
          } finally {
            Gt(o), fn(i);
          }
        }
        resolveInjectorInitializers() {
          const t = fn(this),
            n = Gt(void 0);
          try {
            const r = this.get(Es.multi, be, Qe.Self);
            for (const i of r) i();
          } finally {
            fn(t), Gt(n);
          }
        }
        toString() {
          const t = [],
            n = this.records;
          for (const r of n.keys()) t.push(le(r));
          return `R3Injector[${t.join(', ')}]`;
        }
        assertNotDestroyed() {
          if (this._destroyed) throw new ue(205, !1);
        }
        processProvider(t) {
          let n = Xi((t = xe(t))) ? t : xe(t && t.provide);
          const r = (function q_(e) {
            return Mc(e) ? wo(void 0, e.useValue) : wo(kh(e), Ga);
          })(t);
          if (Xi(t) || !0 !== t.multi) this.records.get(n);
          else {
            let i = this.records.get(n);
            i ||
              ((i = wo(void 0, Ga, !0)),
              (i.factory = () => we(i.multi)),
              this.records.set(n, i)),
              (n = t),
              i.multi.push(t);
          }
          this.records.set(n, r);
        }
        hydrate(t, n) {
          return (
            n.value === Ga && ((n.value = X_), (n.value = n.factory())),
            'object' == typeof n.value &&
              n.value &&
              (function ey(e) {
                return (
                  null !== e &&
                  'object' == typeof e &&
                  'function' == typeof e.ngOnDestroy
                );
              })(n.value) &&
              this._ngOnDestroyHooks.add(n.value),
            n.value
          );
        }
        injectableDefInScope(t) {
          if (!t.providedIn) return !1;
          const n = xe(t.providedIn);
          return 'string' == typeof n
            ? 'any' === n || this.scopes.has(n)
            : this.injectorDefTypes.has(n);
        }
        removeOnDestroy(t) {
          const n = this._onDestroyHooks.indexOf(t);
          -1 !== n && this._onDestroyHooks.splice(n, 1);
        }
      }
      function Ac(e) {
        const t = hr(e),
          n = null !== t ? t.factory : Ar(e);
        if (null !== n) return n;
        if (e instanceof en) throw new ue(204, !1);
        if (e instanceof Function)
          return (function Q_(e) {
            const t = e.length;
            if (t > 0) throw (fs(t, '?'), new ue(204, !1));
            const n = (function nr(e) {
              return (e && (e[Sn] || e[vn])) || null;
            })(e);
            return null !== n ? () => n.factory(e) : () => new e();
          })(e);
        throw new ue(204, !1);
      }
      function kh(e, t, n) {
        let r;
        if (Xi(e)) {
          const i = xe(e);
          return Ar(i) || Ac(i);
        }
        if (Mc(e)) r = () => xe(e.useValue);
        else if (
          (function Lh(e) {
            return !(!e || !e.useFactory);
          })(e)
        )
          r = () => e.useFactory(...we(e.deps || []));
        else if (
          (function Nh(e) {
            return !(!e || !e.useExisting);
          })(e)
        )
          r = () => tn(xe(e.useExisting));
        else {
          const i = xe(e && (e.useClass || e.provide));
          if (
            !(function J_(e) {
              return !!e.deps;
            })(e)
          )
            return Ar(i) || Ac(i);
          r = () => new i(...we(e.deps));
        }
        return r;
      }
      function wo(e, t, n = !1) {
        return { factory: e, value: t, multi: n ? [] : void 0 };
      }
      function Oc(e, t) {
        for (const n of e)
          Array.isArray(n) ? Oc(n, t) : n && Ye(n) ? Oc(n.ɵproviders, t) : t(n);
      }
      const Bh = new en('AppId', { providedIn: 'root', factory: () => ny }),
        ny = 'ng',
        Hh = new en('Platform Initializer'),
        Rc = new en('Platform ID', {
          providedIn: 'platform',
          factory: () => 'unknown',
        }),
        ry = new en('AnimationModuleType'),
        iy = new en('CSP nonce', {
          providedIn: 'root',
          factory: () =>
            (function ys() {
              if (void 0 !== mc) return mc;
              if (typeof document < 'u') return document;
              throw new ue(210, !1);
            })()
              .body?.querySelector('[ngCspNonce]')
              ?.getAttribute('ngCspNonce') || null,
        });
      let Vh = (e, t) => null;
      function Uh(e, t) {
        return Vh(e, t);
      }
      class fy {}
      class Gh {}
      class gy {
        resolveComponentFactory(t) {
          throw (function py(e) {
            const t = Error(`No component factory found for ${le(e)}.`);
            return (t.ngComponent = e), t;
          })(t);
        }
      }
      let Is = (() => {
        class e {}
        return (e.NULL = new gy()), e;
      })();
      function my() {
        return Mo(Gn(), Be());
      }
      function Mo(e, t) {
        return new Ts(zn(e, t));
      }
      let Ts = (() => {
        class e {
          constructor(n) {
            this.nativeElement = n;
          }
        }
        return (e.__NG_ELEMENT_ID__ = my), e;
      })();
      function vy(e) {
        return e instanceof Ts ? e.nativeElement : e;
      }
      class Yh {}
      let _y = (() => {
          class e {}
          return (
            (e.__NG_ELEMENT_ID__ = () =>
              (function yy() {
                const e = Be(),
                  n = g(Gn().index, e);
                return ($n(n) ? n : e)[Ct];
              })()),
            e
          );
        })(),
        Dy = (() => {
          class e {}
          return (
            (e.ɵprov = It({
              token: e,
              providedIn: 'root',
              factory: () => null,
            })),
            e
          );
        })();
      class Zh {
        constructor(t) {
          (this.full = t),
            (this.major = t.split('.')[0]),
            (this.minor = t.split('.')[1]),
            (this.patch = t.split('.').slice(2).join('.'));
        }
      }
      const Cy = new Zh('16.0.2'),
        Uc = {};
      function As(e) {
        for (; e; ) {
          e[mt] |= 64;
          const t = ms(e);
          if (io(e) && !t) return e;
          e = t;
        }
        return null;
      }
      function $c(e) {
        return e.ngOriginalError;
      }
      class So {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const n = this._findOriginalError(t);
          this._console.error('ERROR', t),
            n && this._console.error('ORIGINAL ERROR', n);
        }
        _findOriginalError(t) {
          let n = t && $c(t);
          for (; n && $c(n); ) n = $c(n);
          return n || null;
        }
      }
      const Qh = new en('', { providedIn: 'root', factory: () => !1 });
      function Ci(e) {
        return e instanceof Function ? e() : e;
      }
      class ef extends Yr {
        constructor() {
          super(...arguments),
            (this.consumerAllowSignalWrites = !1),
            (this._lView = null);
        }
        set lView(t) {
          this._lView = t;
        }
        onConsumerDependencyMayHaveChanged() {
          As(this._lView);
        }
        onProducerUpdateValueVersion() {}
        get hasReadASignal() {
          return this.hasProducers;
        }
        runInContext(t, n, r) {
          const i = On(this);
          this.trackingVersion++;
          try {
            t(n, r);
          } finally {
            On(i);
          }
        }
        destroy() {
          this.trackingVersion++;
        }
      }
      let qa = null;
      function tf() {
        return (qa ??= new ef()), qa;
      }
      function nf(e, t) {
        return e[t] ?? tf();
      }
      function rf(e, t) {
        const n = tf();
        n.hasReadASignal && ((e[t] = qa), (n.lView = e), (qa = new ef()));
      }
      const Ot = {};
      function sf(e) {
        af(jt(), Be(), ar() + e, !1);
      }
      function af(e, t, n, r) {
        if (!r)
          if (3 == (3 & t[mt])) {
            const o = e.preOrderCheckHooks;
            null !== o && Oe(t, o, n);
          } else {
            const o = e.preOrderHooks;
            null !== o && tt(t, o, 0, n);
          }
        Fi(n);
      }
      function df(e, t = null, n = null, r) {
        const i = hf(e, t, n, r);
        return i.resolveInjectorInitializers(), i;
      }
      function hf(e, t = null, n = null, r, i = new Set()) {
        const o = [n || be, xh(e)];
        return (
          (r = r || ('object' == typeof e ? void 0 : le(e))),
          new Tc(o, t || Wa(), r || null, i)
        );
      }
      let Li = (() => {
        class e {
          static create(n, r) {
            if (Array.isArray(n)) return df({ name: '' }, r, n, '');
            {
              const i = n.name ?? '';
              return df({ name: i }, n.parent, n.providers, i);
            }
          }
        }
        return (
          (e.THROW_IF_NOT_FOUND = Bt),
          (e.NULL = new Rh()),
          (e.ɵprov = It({
            token: e,
            providedIn: 'any',
            factory: () => tn(Ah),
          })),
          (e.__NG_ELEMENT_ID__ = -1),
          e
        );
      })();
      function To(e, t = Qe.Default) {
        const n = Be();
        return null === n ? tn(e, t) : Id(Gn(), n, xe(e), t);
      }
      function ff() {
        throw new Error('invalid');
      }
      function Ja(e, t, n, r, i, o, s, c, d, m, E) {
        const R = t.blueprint.slice();
        return (
          (R[dt] = i),
          (R[mt] = 140 | r),
          (null !== m || (e && 2048 & e[mt])) && (R[mt] |= 2048),
          at(R),
          (R[Ft] = R[wr] = e),
          (R[Zt] = n),
          (R[er] = s || (e && e[er])),
          (R[Ct] = c || (e && e[Ct])),
          (R[Un] = d || (e && e[Un]) || null),
          (R[Mn] = o),
          (R[Sr] = (function Xv() {
            return Kv++;
          })()),
          (R[vr] = E),
          (R[no] = m),
          (R[un] = 2 == t.type ? e[un] : R),
          R
        );
      }
      function Ao(e, t, n, r, i) {
        let o = e.data[t];
        if (null === o)
          (o = (function zc(e, t, n, r, i) {
            const o = ts(),
              s = fa(),
              d = (e.data[t] = (function Uy(e, t, n, r, i, o) {
                let s = t ? t.injectorIndex : -1,
                  c = 0;
                return (
                  sr() && (c |= 128),
                  {
                    type: n,
                    index: r,
                    insertBeforeIndex: null,
                    injectorIndex: s,
                    directiveStart: -1,
                    directiveEnd: -1,
                    directiveStylingLast: -1,
                    componentOffset: -1,
                    propertyBindings: null,
                    flags: c,
                    providerIndexes: 0,
                    value: i,
                    attrs: o,
                    mergedAttrs: null,
                    localNames: null,
                    initialInputs: void 0,
                    inputs: null,
                    outputs: null,
                    tView: null,
                    next: null,
                    prev: null,
                    projectionNext: null,
                    child: null,
                    parent: t,
                    projection: null,
                    styles: null,
                    stylesWithoutHost: null,
                    residualStyles: void 0,
                    classes: null,
                    classesWithoutHost: null,
                    residualClasses: void 0,
                    classBindings: 0,
                    styleBindings: 0,
                  }
                );
              })(0, s ? o : o && o.parent, n, t, r, i));
            return (
              null === e.firstChild && (e.firstChild = d),
              null !== o &&
                (s
                  ? null == o.child && null !== d.parent && (o.child = d)
                  : null === o.next && ((o.next = d), (d.prev = o))),
              d
            );
          })(e, t, n, r, i)),
            (function ma() {
              return Ze.lFrame.inI18n;
            })() && (o.flags |= 32);
        else if (64 & o.type) {
          (o.type = n), (o.value = r), (o.attrs = i);
          const s = (function Dr() {
            const e = Ze.lFrame,
              t = e.currentTNode;
            return e.isParent ? t : t.parent;
          })();
          o.injectorIndex = null === s ? -1 : s.injectorIndex;
        }
        return jr(o, !0), o;
      }
      function Os(e, t, n, r) {
        if (0 === n) return -1;
        const i = t.length;
        for (let o = 0; o < n; o++)
          t.push(r), e.blueprint.push(r), e.data.push(null);
        return i;
      }
      function pf(e, t, n, r, i) {
        const o = nf(t, hi),
          s = ar(),
          c = 2 & r;
        try {
          if (
            (Fi(-1),
            c && t.length > Nt && af(e, t, Nt, !1),
            Or(c ? 2 : 0, i),
            c)
          )
            o.runInContext(n, r, i);
          else {
            const m = On(null);
            try {
              n(r, i);
            } finally {
              On(m);
            }
          }
        } finally {
          c && null === t[hi] && rf(t, hi), Fi(s), Or(c ? 3 : 1, i);
        }
      }
      function Gc(e, t, n) {
        if (gi(t)) {
          const r = On(null);
          try {
            const o = t.directiveEnd;
            for (let s = t.directiveStart; s < o; s++) {
              const c = e.data[s];
              c.contentQueries && c.contentQueries(1, n[s], s);
            }
          } finally {
            On(r);
          }
        }
      }
      function Wc(e, t, n) {
        Cn() &&
          ((function Ky(e, t, n, r) {
            const i = n.directiveStart,
              o = n.directiveEnd;
            Ln(n) &&
              (function nD(e, t, n) {
                const r = zn(t, e),
                  s = el(
                    e,
                    Ja(
                      e,
                      gf(n),
                      null,
                      n.onPush ? 64 : 16,
                      r,
                      t,
                      null,
                      e[er].rendererFactory.createRenderer(r, n),
                      null,
                      null,
                      null
                    )
                  );
                e[t.index] = s;
              })(t, n, e.data[i + n.componentOffset]),
              e.firstCreatePass || Sa(n, t),
              cr(r, t);
            const s = n.initialInputs;
            for (let c = i; c < o; c++) {
              const d = e.data[c],
                m = Zi(t, e, c, n);
              cr(m, t),
                null !== s && rD(0, c - i, m, d, 0, s),
                An(d) && (g(n.index, t)[Zt] = Zi(t, e, c, n));
            }
          })(e, t, n, zn(n, t)),
          64 == (64 & n.flags) && Df(e, t, n));
      }
      function Yc(e, t, n = zn) {
        const r = t.localNames;
        if (null !== r) {
          let i = t.index + 1;
          for (let o = 0; o < r.length; o += 2) {
            const s = r[o + 1],
              c = -1 === s ? n(t, e) : e[s];
            e[i++] = c;
          }
        }
      }
      function gf(e) {
        const t = e.tView;
        return null === t || t.incompleteFirstPass
          ? (e.tView = Zc(
              1,
              null,
              e.template,
              e.decls,
              e.vars,
              e.directiveDefs,
              e.pipeDefs,
              e.viewQuery,
              e.schemas,
              e.consts,
              e.id
            ))
          : t;
      }
      function Zc(e, t, n, r, i, o, s, c, d, m, E) {
        const R = Nt + r,
          G = R + i,
          ie = (function Ly(e, t) {
            const n = [];
            for (let r = 0; r < t; r++) n.push(r < e ? null : Ot);
            return n;
          })(R, G),
          Ae = 'function' == typeof m ? m() : m;
        return (ie[Ge] = {
          type: e,
          blueprint: ie,
          template: n,
          queries: null,
          viewQuery: c,
          declTNode: t,
          data: ie.slice().fill(null, R),
          bindingStartIndex: R,
          expandoStartIndex: G,
          hostBindingOpCodes: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: 'function' == typeof o ? o() : o,
          pipeRegistry: 'function' == typeof s ? s() : s,
          firstChild: null,
          schemas: d,
          consts: Ae,
          incompleteFirstPass: !1,
          ssrId: E,
        });
      }
      let mf = (e) => null;
      function vf(e, t, n, r) {
        for (let i in e)
          if (e.hasOwnProperty(i)) {
            n = null === n ? {} : n;
            const o = e[i];
            null === r
              ? _f(n, t, i, o)
              : r.hasOwnProperty(i) && _f(n, t, r[i], o);
          }
        return n;
      }
      function _f(e, t, n, r) {
        e.hasOwnProperty(n) ? e[n].push(t, r) : (e[n] = [t, r]);
      }
      function Nr(e, t, n, r, i, o, s, c) {
        const d = zn(t, n);
        let E,
          m = t.inputs;
        !c && null != m && (E = m[r])
          ? (Jc(e, n, E, r, i),
            Ln(t) &&
              (function Gy(e, t) {
                const n = g(t, e);
                16 & n[mt] || (n[mt] |= 64);
              })(n, t.index))
          : 3 & t.type &&
            ((r = (function zy(e) {
              return 'class' === e
                ? 'className'
                : 'for' === e
                ? 'htmlFor'
                : 'formaction' === e
                ? 'formAction'
                : 'innerHtml' === e
                ? 'innerHTML'
                : 'readonly' === e
                ? 'readOnly'
                : 'tabindex' === e
                ? 'tabIndex'
                : e;
            })(r)),
            (i = null != s ? s(i, t.value || '', r) : i),
            o.setProperty(d, r, i));
      }
      function Kc(e, t, n, r) {
        if (Cn()) {
          const i = null === r ? null : { '': -1 },
            o = (function Qy(e, t) {
              const n = e.directiveRegistry;
              let r = null,
                i = null;
              if (n)
                for (let o = 0; o < n.length; o++) {
                  const s = n[o];
                  if (mr(t, s.selectors, !1))
                    if ((r || (r = []), An(s)))
                      if (null !== s.findHostDirectiveDefs) {
                        const c = [];
                        (i = i || new Map()),
                          s.findHostDirectiveDefs(s, c, i),
                          r.unshift(...c, s),
                          Xc(e, t, c.length);
                      } else r.unshift(s), Xc(e, t, 0);
                    else
                      (i = i || new Map()),
                        s.findHostDirectiveDefs?.(s, r, i),
                        r.push(s);
                }
              return null === r ? null : [r, i];
            })(e, n);
          let s, c;
          null === o ? (s = c = null) : ([s, c] = o),
            null !== s && yf(e, t, n, s, i, c),
            i &&
              (function qy(e, t, n) {
                if (t) {
                  const r = (e.localNames = []);
                  for (let i = 0; i < t.length; i += 2) {
                    const o = n[t[i + 1]];
                    if (null == o) throw new ue(-301, !1);
                    r.push(t[i], o);
                  }
                }
              })(n, r, i);
        }
        n.mergedAttrs = Ut(n.mergedAttrs, n.attrs);
      }
      function yf(e, t, n, r, i, o) {
        for (let m = 0; m < r.length; m++) Gl(Sa(n, t), e, r[m].type);
        !(function eD(e, t, n) {
          (e.flags |= 1),
            (e.directiveStart = t),
            (e.directiveEnd = t + n),
            (e.providerIndexes = t);
        })(n, e.data.length, r.length);
        for (let m = 0; m < r.length; m++) {
          const E = r[m];
          E.providersResolver && E.providersResolver(E);
        }
        let s = !1,
          c = !1,
          d = Os(e, t, r.length, null);
        for (let m = 0; m < r.length; m++) {
          const E = r[m];
          (n.mergedAttrs = Ut(n.mergedAttrs, E.hostAttrs)),
            tD(e, n, t, d, E),
            Jy(d, E, i),
            null !== E.contentQueries && (n.flags |= 4),
            (null !== E.hostBindings ||
              null !== E.hostAttrs ||
              0 !== E.hostVars) &&
              (n.flags |= 64);
          const R = E.type.prototype;
          !s &&
            (R.ngOnChanges || R.ngOnInit || R.ngDoCheck) &&
            ((e.preOrderHooks ??= []).push(n.index), (s = !0)),
            !c &&
              (R.ngOnChanges || R.ngDoCheck) &&
              ((e.preOrderCheckHooks ??= []).push(n.index), (c = !0)),
            d++;
        }
        !(function $y(e, t, n) {
          const i = t.directiveEnd,
            o = e.data,
            s = t.attrs,
            c = [];
          let d = null,
            m = null;
          for (let E = t.directiveStart; E < i; E++) {
            const R = o[E],
              G = n ? n.get(R) : null,
              Ae = G ? G.outputs : null;
            (d = vf(R.inputs, E, d, G ? G.inputs : null)),
              (m = vf(R.outputs, E, m, Ae));
            const He = null === d || null === s || Kn(t) ? null : iD(d, E, s);
            c.push(He);
          }
          null !== d &&
            (d.hasOwnProperty('class') && (t.flags |= 8),
            d.hasOwnProperty('style') && (t.flags |= 16)),
            (t.initialInputs = c),
            (t.inputs = d),
            (t.outputs = m);
        })(e, n, o);
      }
      function Df(e, t, n) {
        const r = n.directiveStart,
          i = n.directiveEnd,
          o = n.index,
          s = (function vd() {
            return Ze.lFrame.currentDirectiveIndex;
          })();
        try {
          Fi(o);
          for (let c = r; c < i; c++) {
            const d = e.data[c],
              m = t[c];
            rs(c),
              (null !== d.hostBindings ||
                0 !== d.hostVars ||
                null !== d.hostAttrs) &&
                Xy(d, m);
          }
        } finally {
          Fi(-1), rs(s);
        }
      }
      function Xy(e, t) {
        null !== e.hostBindings && e.hostBindings(1, t);
      }
      function Xc(e, t, n) {
        (t.componentOffset = n), (e.components ??= []).push(t.index);
      }
      function Jy(e, t, n) {
        if (n) {
          if (t.exportAs)
            for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
          An(t) && (n[''] = e);
        }
      }
      function tD(e, t, n, r, i) {
        e.data[r] = i;
        const o = i.factory || (i.factory = Ar(i.type)),
          s = new Qr(o, An(i), To);
        (e.blueprint[r] = s),
          (n[r] = s),
          (function Yy(e, t, n, r, i) {
            const o = i.hostBindings;
            if (o) {
              let s = e.hostBindingOpCodes;
              null === s && (s = e.hostBindingOpCodes = []);
              const c = ~t.index;
              (function Zy(e) {
                let t = e.length;
                for (; t > 0; ) {
                  const n = e[--t];
                  if ('number' == typeof n && n < 0) return n;
                }
                return 0;
              })(s) != c && s.push(c),
                s.push(n, r, o);
            }
          })(e, t, r, Os(e, n, i.hostVars, Ot), i);
      }
      function ai(e, t, n, r, i, o) {
        const s = zn(e, t);
        !(function Qc(e, t, n, r, i, o, s) {
          if (null == o) e.removeAttribute(t, i, n);
          else {
            const c = null == s ? se(o) : s(o, r || '', i);
            e.setAttribute(t, i, c, n);
          }
        })(t[Ct], s, o, e.value, n, r, i);
      }
      function rD(e, t, n, r, i, o) {
        const s = o[t];
        if (null !== s)
          for (let c = 0; c < s.length; ) Cf(r, n, s[c++], s[c++], s[c++]);
      }
      function Cf(e, t, n, r, i) {
        const o = On(null);
        try {
          null !== e.setInput ? e.setInput(t, i, n, r) : (t[r] = i);
        } finally {
          On(o);
        }
      }
      function iD(e, t, n) {
        let r = null,
          i = 0;
        for (; i < n.length; ) {
          const o = n[i];
          if (0 !== o)
            if (5 !== o) {
              if ('number' == typeof o) break;
              if (e.hasOwnProperty(o)) {
                null === r && (r = []);
                const s = e[o];
                for (let c = 0; c < s.length; c += 2)
                  if (s[c] === t) {
                    r.push(o, s[c + 1], n[i + 1]);
                    break;
                  }
              }
              i += 2;
            } else i += 2;
          else i += 4;
        }
        return r;
      }
      function bf(e, t, n, r) {
        return [e, !0, !1, t, null, 0, r, n, null, null, null];
      }
      function Ef(e, t) {
        const n = e.contentQueries;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) {
            const o = n[r + 1];
            if (-1 !== o) {
              const s = e.data[o];
              os(n[r]), s.contentQueries(2, t[o], o);
            }
          }
      }
      function el(e, t) {
        return e[Er] ? (e[Ei][Yt] = t) : (e[Er] = t), (e[Ei] = t), t;
      }
      function qc(e, t, n) {
        os(0);
        const r = On(null);
        try {
          t(e, n);
        } finally {
          On(r);
        }
      }
      function wf(e) {
        return e[br] || (e[br] = []);
      }
      function Mf(e) {
        return e.cleanup || (e.cleanup = []);
      }
      function If(e, t) {
        const n = e[Un],
          r = n ? n.get(So, null) : null;
        r && r.handleError(t);
      }
      function Jc(e, t, n, r, i) {
        for (let o = 0; o < n.length; ) {
          const s = n[o++],
            c = n[o++];
          Cf(e.data[s], t[s], r, c, i);
        }
      }
      function bi(e, t, n) {
        const r = Pi(t, e);
        !(function th(e, t, n) {
          e.setValue(t, n);
        })(e[Ct], r, n);
      }
      function oD(e, t) {
        const n = g(t, e),
          r = n[Ge];
        !(function sD(e, t) {
          for (let n = t.length; n < e.blueprint.length; n++)
            t.push(e.blueprint[n]);
        })(r, n);
        const i = n[dt];
        null !== i && null === n[vr] && (n[vr] = Uh(i, n[Un])), eu(r, n, n[Zt]);
      }
      function eu(e, t, n) {
        ss(t);
        try {
          const r = e.viewQuery;
          null !== r && qc(1, r, n);
          const i = e.template;
          null !== i && pf(e, t, i, 1, n),
            e.firstCreatePass && (e.firstCreatePass = !1),
            e.staticContentQueries && Ef(e, t),
            e.staticViewQueries && qc(2, e.viewQuery, n);
          const o = e.components;
          null !== o &&
            (function aD(e, t) {
              for (let n = 0; n < t.length; n++) oD(e, t[n]);
            })(t, o);
        } catch (r) {
          throw (
            (e.firstCreatePass &&
              ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)),
            r)
          );
        } finally {
          (t[mt] &= -5), fo();
        }
      }
      let Tf = (() => {
        class e {
          constructor() {
            (this.all = new Set()), (this.queue = new Map());
          }
          create(n, r, i) {
            const o = typeof Zone > 'u' ? null : Zone.current,
              s = new aa(
                n,
                (m) => {
                  this.all.has(m) && this.queue.set(m, o);
                },
                i
              );
            let c;
            this.all.add(s), s.notify();
            const d = () => {
              s.cleanup(), c?.(), this.all.delete(s), this.queue.delete(s);
            };
            return (c = r?.onDestroy(d)), { destroy: d };
          }
          flush() {
            if (0 !== this.queue.size)
              for (const [n, r] of this.queue)
                this.queue.delete(n), r ? r.run(() => n.run()) : n.run();
          }
          get isQueueEmpty() {
            return 0 === this.queue.size;
          }
        }
        return (
          (e.ɵprov = It({
            token: e,
            providedIn: 'root',
            factory: () => new e(),
          })),
          e
        );
      })();
      function tl(e, t, n) {
        let r = n ? e.styles : null,
          i = n ? e.classes : null,
          o = 0;
        if (null !== t)
          for (let s = 0; s < t.length; s++) {
            const c = t[s];
            'number' == typeof c
              ? (o = c)
              : 1 == o
              ? (i = Ve(i, c))
              : 2 == o && (r = Ve(r, c + ': ' + t[++s] + ';'));
          }
        n ? (e.styles = r) : (e.stylesWithoutHost = r),
          n ? (e.classes = i) : (e.classesWithoutHost = i);
      }
      function Rs(e, t, n, r, i = !1) {
        for (; null !== n; ) {
          const o = t[n.index];
          if ((null !== o && r.push(ln(o)), tr(o))) {
            for (let c = Nn; c < o.length; c++) {
              const d = o[c],
                m = d[Ge].firstChild;
              null !== m && Rs(d[Ge], d, m, r);
            }
            o[Tr] !== o[dt] && r.push(o[Tr]);
          }
          const s = n.type;
          if (8 & s) Rs(e, t, n.child, r);
          else if (32 & s) {
            const c = oc(n, t);
            let d;
            for (; (d = c()); ) r.push(d);
          } else if (16 & s) {
            const c = dh(t, n);
            if (Array.isArray(c)) r.push(...c);
            else {
              const d = ms(t[un]);
              Rs(d[Ge], d, c, r, !0);
            }
          }
          n = i ? n.projectionNext : n.next;
        }
        return r;
      }
      function nl(e, t, n, r = !0) {
        const i = t[er].rendererFactory;
        i.begin && i.begin();
        try {
          rl(e, t, e.template, n);
        } catch (s) {
          throw (r && If(t, s), s);
        } finally {
          i.end && i.end(), t[er].effectManager?.flush();
        }
      }
      function rl(e, t, n, r) {
        const i = t[mt];
        if (256 != (256 & i)) {
          t[er].effectManager?.flush(), ss(t);
          try {
            at(t),
              (function ga(e) {
                return (Ze.lFrame.bindingIndex = e);
              })(e.bindingStartIndex),
              null !== n && pf(e, t, n, 2, r);
            const s = 3 == (3 & i);
            if (s) {
              const m = e.preOrderCheckHooks;
              null !== m && Oe(t, m, null);
            } else {
              const m = e.preOrderHooks;
              null !== m && tt(t, m, 0, null), ft(t, 0);
            }
            if (
              ((function fD(e) {
                for (let t = sc(e); null !== t; t = ac(t)) {
                  if (!t[ro]) continue;
                  const n = t[pi];
                  for (let r = 0; r < n.length; r++) {
                    Jt(n[r]);
                  }
                }
              })(t),
              (function hD(e) {
                for (let t = sc(e); null !== t; t = ac(t))
                  for (let n = Nn; n < t.length; n++) {
                    const r = t[n],
                      i = r[Ge];
                    L(r) && rl(i, r, i.template, r[Zt]);
                  }
              })(t),
              null !== e.contentQueries && Ef(e, t),
              s)
            ) {
              const m = e.contentCheckHooks;
              null !== m && Oe(t, m);
            } else {
              const m = e.contentHooks;
              null !== m && tt(t, m, 1), ft(t, 1);
            }
            !(function Ny(e, t) {
              const n = e.hostBindingOpCodes;
              if (null === n) return;
              const r = nf(t, fi);
              try {
                for (let i = 0; i < n.length; i++) {
                  const o = n[i];
                  if (o < 0) Fi(~o);
                  else {
                    const s = o,
                      c = n[++i],
                      d = n[++i];
                    md(c, s), r.runInContext(d, 2, t[s]);
                  }
                }
              } finally {
                null === t[fi] && rf(t, fi), Fi(-1);
              }
            })(e, t);
            const c = e.components;
            null !== c &&
              (function gD(e, t) {
                for (let n = 0; n < t.length; n++) pD(e, t[n]);
              })(t, c);
            const d = e.viewQuery;
            if ((null !== d && qc(2, d, r), s)) {
              const m = e.viewCheckHooks;
              null !== m && Oe(t, m);
            } else {
              const m = e.viewHooks;
              null !== m && tt(t, m, 2), ft(t, 2);
            }
            !0 === e.firstUpdatePass && (e.firstUpdatePass = !1),
              (t[mt] &= -73),
              Xt(t);
          } finally {
            fo();
          }
        }
      }
      function pD(e, t) {
        const n = g(t, e);
        if (L(n)) {
          const r = n[Ge];
          80 & n[mt] ? rl(r, n, r.template, n[Zt]) : n[Fn] > 0 && tu(n);
        }
      }
      function tu(e) {
        for (let r = sc(e); null !== r; r = ac(r))
          for (let i = Nn; i < r.length; i++) {
            const o = r[i];
            if (L(o))
              if (1024 & o[mt]) {
                const s = o[Ge];
                rl(s, o, s.template, o[Zt]);
              } else o[Fn] > 0 && tu(o);
          }
        const n = e[Ge].components;
        if (null !== n)
          for (let r = 0; r < n.length; r++) {
            const i = g(n[r], e);
            L(i) && i[Fn] > 0 && tu(i);
          }
      }
      class xs {
        get rootNodes() {
          const t = this._lView,
            n = t[Ge];
          return Rs(n, t, n.firstChild, []);
        }
        constructor(t, n) {
          (this._lView = t),
            (this._cdRefInjectingView = n),
            (this._appRef = null),
            (this._attachedToViewContainer = !1);
        }
        get context() {
          return this._lView[Zt];
        }
        set context(t) {
          this._lView[Zt] = t;
        }
        get destroyed() {
          return 256 == (256 & this._lView[mt]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._attachedToViewContainer) {
            const t = this._lView[Ft];
            if (tr(t)) {
              const n = t[wi],
                r = n ? n.indexOf(this) : -1;
              r > -1 && (cc(t, r), Ta(n, r));
            }
            this._attachedToViewContainer = !1;
          }
          rh(this._lView[Ge], this._lView);
        }
        onDestroy(t) {
          !(function xt(e, t) {
            if (256 == (256 & e[mt])) throw new ue(911, !1);
            null === e[Hr] && (e[Hr] = []), e[Hr].push(t);
          })(this._lView, t);
        }
        markForCheck() {
          As(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[mt] &= -129;
        }
        reattach() {
          this._lView[mt] |= 128;
        }
        detectChanges() {
          nl(this._lView[Ge], this._lView, this.context);
        }
        checkNoChanges() {}
        attachToViewContainerRef() {
          if (this._appRef) throw new ue(902, !1);
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          (this._appRef = null),
            (function u_(e, t) {
              _s(e, t, t[Ct], 2, null, null);
            })(this._lView[Ge], this._lView);
        }
        attachToAppRef(t) {
          if (this._attachedToViewContainer) throw new ue(902, !1);
          this._appRef = t;
        }
      }
      class mD extends xs {
        constructor(t) {
          super(t), (this._view = t);
        }
        detectChanges() {
          const t = this._view;
          nl(t[Ge], t, t[Zt], !1);
        }
        checkNoChanges() {}
        get context() {
          return null;
        }
      }
      class Af extends Is {
        constructor(t) {
          super(), (this.ngModule = t);
        }
        resolveComponentFactory(t) {
          const n = _t(t);
          return new Ps(n, this.ngModule);
        }
      }
      function Of(e) {
        const t = [];
        for (let n in e)
          e.hasOwnProperty(n) && t.push({ propName: e[n], templateName: n });
        return t;
      }
      class _D {
        constructor(t, n) {
          (this.injector = t), (this.parentInjector = n);
        }
        get(t, n, r) {
          r = rr(r);
          const i = this.injector.get(t, Uc, r);
          return i !== Uc || n === Uc ? i : this.parentInjector.get(t, n, r);
        }
      }
      class Ps extends Gh {
        get inputs() {
          return Of(this.componentDef.inputs);
        }
        get outputs() {
          return Of(this.componentDef.outputs);
        }
        constructor(t, n) {
          super(),
            (this.componentDef = t),
            (this.ngModule = n),
            (this.componentType = t.type),
            (this.selector = (function V(e) {
              return e.map(F).join(',');
            })(t.selectors)),
            (this.ngContentSelectors = t.ngContentSelectors
              ? t.ngContentSelectors
              : []),
            (this.isBoundToModule = !!n);
        }
        create(t, n, r, i) {
          let o = (i = i || this.ngModule) instanceof Qi ? i : i?.injector;
          o &&
            null !== this.componentDef.getStandaloneInjector &&
            (o = this.componentDef.getStandaloneInjector(o) || o);
          const s = o ? new _D(t, o) : t,
            c = s.get(Yh, null);
          if (null === c) throw new ue(407, !1);
          const E = {
              rendererFactory: c,
              sanitizer: s.get(Dy, null),
              effectManager: s.get(Tf, null),
            },
            R = c.createRenderer(null, this.componentDef),
            G = this.componentDef.selectors[0][0] || 'div',
            ie = r
              ? (function ky(e, t, n, r) {
                  const o = r.get(Qh, !1) || n === B.ShadowDom,
                    s = e.selectRootElement(t, o);
                  return (
                    (function By(e) {
                      mf(e);
                    })(s),
                    s
                  );
                })(R, r, this.componentDef.encapsulation, s)
              : Ba(
                  R,
                  G,
                  (function vD(e) {
                    const t = e.toLowerCase();
                    return 'svg' === t ? 'svg' : 'math' === t ? 'math' : null;
                  })(G)
                ),
            Ae = this.componentDef.onPush ? 576 : 528,
            He = Zc(0, null, null, 1, 0, null, null, null, null, null, null),
            Ke = Ja(null, He, null, Ae, null, null, E, R, s, null, null);
          let lt, Pe;
          ss(Ke);
          try {
            const Et = this.componentDef;
            let Lt,
              nn = null;
            Et.findHostDirectiveDefs
              ? ((Lt = []),
                (nn = new Map()),
                Et.findHostDirectiveDefs(Et, Lt, nn),
                Lt.push(Et))
              : (Lt = [Et]);
            const ti = (function DD(e, t) {
                const n = e[Ge],
                  r = Nt;
                return (e[r] = t), Ao(n, r, 2, '#host', null);
              })(Ke, ie),
              uv = (function CD(e, t, n, r, i, o, s) {
                const c = i[Ge];
                !(function bD(e, t, n, r) {
                  for (const i of e)
                    t.mergedAttrs = Ut(t.mergedAttrs, i.hostAttrs);
                  null !== t.mergedAttrs &&
                    (tl(t, t.mergedAttrs, !0), null !== n && gh(r, n, t));
                })(r, e, t, s);
                let d = null;
                null !== t && (d = Uh(t, i[Un]));
                const m = o.rendererFactory.createRenderer(t, n),
                  E = Ja(
                    i,
                    gf(n),
                    null,
                    n.onPush ? 64 : 16,
                    i[e.index],
                    e,
                    o,
                    m,
                    null,
                    null,
                    d
                  );
                return (
                  c.firstCreatePass && Xc(c, e, r.length - 1),
                  el(i, E),
                  (i[e.index] = E)
                );
              })(ti, ie, Et, Lt, Ke, E, R);
            (Pe = f(He, Nt)),
              ie &&
                (function wD(e, t, n, r) {
                  if (r) ut(e, n, ['ng-version', Cy.full]);
                  else {
                    const { attrs: i, classes: o } = (function fe(e) {
                      const t = [],
                        n = [];
                      let r = 1,
                        i = 2;
                      for (; r < e.length; ) {
                        let o = e[r];
                        if ('string' == typeof o)
                          2 === i
                            ? '' !== o && t.push(o, e[++r])
                            : 8 === i && n.push(o);
                        else {
                          if (!yn(i)) break;
                          i = o;
                        }
                        r++;
                      }
                      return { attrs: t, classes: n };
                    })(t.selectors[0]);
                    i && ut(e, n, i),
                      o && o.length > 0 && ph(e, n, o.join(' '));
                  }
                })(R, Et, ie, r),
              void 0 !== n &&
                (function MD(e, t, n) {
                  const r = (e.projection = []);
                  for (let i = 0; i < t.length; i++) {
                    const o = n[i];
                    r.push(null != o ? Array.from(o) : null);
                  }
                })(Pe, this.ngContentSelectors, n),
              (lt = (function ED(e, t, n, r, i, o) {
                const s = Gn(),
                  c = i[Ge],
                  d = zn(s, i);
                yf(c, i, s, n, null, r);
                for (let E = 0; E < n.length; E++)
                  cr(Zi(i, c, s.directiveStart + E, s), i);
                Df(c, i, s), d && cr(d, i);
                const m = Zi(i, c, s.directiveStart + s.componentOffset, s);
                if (((e[Zt] = i[Zt] = m), null !== o))
                  for (const E of o) E(m, t);
                return Gc(c, s, e), m;
              })(uv, Et, Lt, nn, Ke, [SD])),
              eu(He, Ke, null);
          } finally {
            fo();
          }
          return new yD(this.componentType, lt, Mo(Pe, Ke), Ke, Pe);
        }
      }
      class yD extends fy {
        constructor(t, n, r, i, o) {
          super(),
            (this.location = r),
            (this._rootLView = i),
            (this._tNode = o),
            (this.previousInputValues = null),
            (this.instance = n),
            (this.hostView = this.changeDetectorRef = new mD(i)),
            (this.componentType = t);
        }
        setInput(t, n) {
          const r = this._tNode.inputs;
          let i;
          if (null !== r && (i = r[t])) {
            if (
              ((this.previousInputValues ??= new Map()),
              this.previousInputValues.has(t) &&
                Object.is(this.previousInputValues.get(t), n))
            )
              return;
            const o = this._rootLView;
            Jc(o[Ge], o, i, t, n),
              this.previousInputValues.set(t, n),
              As(g(this._tNode.index, o));
          }
        }
        get injector() {
          return new po(this._tNode, this._rootLView);
        }
        destroy() {
          this.hostView.destroy();
        }
        onDestroy(t) {
          this.hostView.onDestroy(t);
        }
      }
      function SD() {
        const e = Gn();
        q(Be()[Ge], e);
      }
      function nu(e) {
        let t = (function Rf(e) {
            return Object.getPrototypeOf(e.prototype).constructor;
          })(e.type),
          n = !0;
        const r = [e];
        for (; t; ) {
          let i;
          if (An(e)) i = t.ɵcmp || t.ɵdir;
          else {
            if (t.ɵcmp) throw new ue(903, !1);
            i = t.ɵdir;
          }
          if (i) {
            if (n) {
              r.push(i);
              const s = e;
              (s.inputs = ru(e.inputs)),
                (s.declaredInputs = ru(e.declaredInputs)),
                (s.outputs = ru(e.outputs));
              const c = i.hostBindings;
              c && OD(e, c);
              const d = i.viewQuery,
                m = i.contentQueries;
              if (
                (d && TD(e, d),
                m && AD(e, m),
                oe(e.inputs, i.inputs),
                oe(e.declaredInputs, i.declaredInputs),
                oe(e.outputs, i.outputs),
                An(i) && i.data.animation)
              ) {
                const E = e.data;
                E.animation = (E.animation || []).concat(i.data.animation);
              }
            }
            const o = i.features;
            if (o)
              for (let s = 0; s < o.length; s++) {
                const c = o[s];
                c && c.ngInherit && c(e), c === nu && (n = !1);
              }
          }
          t = Object.getPrototypeOf(t);
        }
        !(function ID(e) {
          let t = 0,
            n = null;
          for (let r = e.length - 1; r >= 0; r--) {
            const i = e[r];
            (i.hostVars = t += i.hostVars),
              (i.hostAttrs = Ut(i.hostAttrs, (n = Ut(n, i.hostAttrs))));
          }
        })(r);
      }
      function ru(e) {
        return e === Ce ? {} : e === be ? [] : e;
      }
      function TD(e, t) {
        const n = e.viewQuery;
        e.viewQuery = n
          ? (r, i) => {
              t(r, i), n(r, i);
            }
          : t;
      }
      function AD(e, t) {
        const n = e.contentQueries;
        e.contentQueries = n
          ? (r, i, o) => {
              t(r, i, o), n(r, i, o);
            }
          : t;
      }
      function OD(e, t) {
        const n = e.hostBindings;
        e.hostBindings = n
          ? (r, i) => {
              t(r, i), n(r, i);
            }
          : t;
      }
      function il(e) {
        return (
          !!iu(e) &&
          (Array.isArray(e) || (!(e instanceof Map) && Symbol.iterator in e))
        );
      }
      function iu(e) {
        return null !== e && ('function' == typeof e || 'object' == typeof e);
      }
      function li(e, t, n) {
        return (e[t] = n);
      }
      function ur(e, t, n) {
        return !Object.is(e[t], n) && ((e[t] = n), !0);
      }
      function qi(e, t, n, r) {
        const i = ur(e, t, n);
        return ur(e, t + 1, r) || i;
      }
      function ou(e, t, n, r) {
        const i = Be();
        return ur(i, Yi(), t) && (jt(), ai(bn(), i, e, t, n, r)), ou;
      }
      function xo(e, t, n, r, i, o) {
        const c = qi(
          e,
          (function Xr() {
            return Ze.lFrame.bindingIndex;
          })(),
          n,
          i
        );
        return Vr(2), c ? t + se(n) + r + se(i) + o : Ot;
      }
      function Yf(e, t, n, r, i, o, s, c) {
        const d = Be(),
          m = jt(),
          E = e + Nt,
          R = m.firstCreatePass
            ? (function tC(e, t, n, r, i, o, s, c, d) {
                const m = t.consts,
                  E = Ao(t, e, 4, s || null, Se(m, c));
                Kc(t, n, E, Se(m, d)), q(t, E);
                const R = (E.tView = Zc(
                  2,
                  E,
                  r,
                  i,
                  o,
                  t.directiveRegistry,
                  t.pipeRegistry,
                  null,
                  t.schemas,
                  m,
                  null
                ));
                return (
                  null !== t.queries &&
                    (t.queries.template(t, E),
                    (R.queries = t.queries.embeddedTView(E))),
                  E
                );
              })(E, m, d, t, n, r, i, o, s)
            : m.data[E];
        jr(R, !1);
        const G = Zf(m, d, R, e);
        v() && ja(m, d, G, R),
          cr(G, d),
          el(d, (d[E] = bf(G, d, G, R))),
          Mi(R) && Wc(m, d, R),
          null != s && Yc(d, R, c);
      }
      let Zf = function Kf(e, t, n, r) {
        return M(!0), t[Ct].createComment('');
      };
      function du(e, t, n) {
        const r = Be();
        return ur(r, Yi(), t) && Nr(jt(), bn(), r, e, t, r[Ct], n, !1), du;
      }
      function hu(e, t, n, r, i) {
        const s = i ? 'class' : 'style';
        Jc(e, n, t.inputs[s], s, r);
      }
      function cl(e, t, n, r) {
        const i = Be(),
          o = jt(),
          s = Nt + e,
          c = i[Ct],
          d = o.firstCreatePass
            ? (function sC(e, t, n, r, i, o) {
                const s = t.consts,
                  d = Ao(t, e, 2, r, Se(s, i));
                return (
                  Kc(t, n, d, Se(s, o)),
                  null !== d.attrs && tl(d, d.attrs, !1),
                  null !== d.mergedAttrs && tl(d, d.mergedAttrs, !0),
                  null !== t.queries && t.queries.elementStart(t, d),
                  d
                );
              })(s, o, i, t, n, r)
            : o.data[s],
          m = Xf(o, i, d, c, t, e);
        i[s] = m;
        const E = Mi(d);
        return (
          jr(d, !0),
          gh(c, m, d),
          32 != (32 & d.flags) && v() && ja(o, i, m, d),
          0 ===
            (function xr() {
              return Ze.lFrame.elementDepthCount;
            })() && cr(m, i),
          (function ii() {
            Ze.lFrame.elementDepthCount++;
          })(),
          E && (Wc(o, i, d), Gc(o, d, i)),
          null !== r && Yc(i, d),
          cl
        );
      }
      function ul() {
        let e = Gn();
        fa() ? pa() : ((e = e.parent), jr(e, !1));
        const t = e;
        (function Pr(e) {
          return Ze.skipHydrationRootTNode === e;
        })(t) &&
          (function Ll() {
            Ze.skipHydrationRootTNode = null;
          })(),
          (function yr() {
            Ze.lFrame.elementDepthCount--;
          })();
        const n = jt();
        return (
          n.firstCreatePass && (q(n, e), gi(e) && n.queries.elementEnd(e)),
          null != t.classesWithoutHost &&
            (function dv(e) {
              return 0 != (8 & e.flags);
            })(t) &&
            hu(n, t, Be(), t.classesWithoutHost, !0),
          null != t.stylesWithoutHost &&
            (function hv(e) {
              return 0 != (16 & e.flags);
            })(t) &&
            hu(n, t, Be(), t.stylesWithoutHost, !1),
          ul
        );
      }
      function fu(e, t, n, r) {
        return cl(e, t, n, r), ul(), fu;
      }
      let Xf = (e, t, n, r, i, o) => (
        M(!0),
        Ba(
          r,
          i,
          (function a() {
            return Ze.lFrame.currentNamespace;
          })()
        )
      );
      function Jf() {
        return Be();
      }
      function mu(e) {
        return !!e && 'function' == typeof e.then;
      }
      function ep(e) {
        return !!e && 'function' == typeof e.subscribe;
      }
      function vu(e, t, n, r) {
        const i = Be(),
          o = jt(),
          s = Gn();
        return (
          (function np(e, t, n, r, i, o, s) {
            const c = Mi(r),
              m = e.firstCreatePass && Mf(e),
              E = t[Zt],
              R = wf(t);
            let G = !0;
            if (3 & r.type || s) {
              const He = zn(r, t),
                Ke = s ? s(He) : He,
                lt = R.length,
                Pe = s ? (Lt) => s(ln(Lt[r.index])) : r.index;
              let Et = null;
              if (
                (!s &&
                  c &&
                  (Et = (function hC(e, t, n, r) {
                    const i = e.cleanup;
                    if (null != i)
                      for (let o = 0; o < i.length - 1; o += 2) {
                        const s = i[o];
                        if (s === n && i[o + 1] === r) {
                          const c = t[br],
                            d = i[o + 2];
                          return c.length > d ? c[d] : null;
                        }
                        'string' == typeof s && (o += 2);
                      }
                    return null;
                  })(e, t, i, r.index)),
                null !== Et)
              )
                ((Et.__ngLastListenerFn__ || Et).__ngNextListenerFn__ = o),
                  (Et.__ngLastListenerFn__ = o),
                  (G = !1);
              else {
                o = ip(r, t, E, o, !1);
                const Lt = n.listen(Ke, i, o);
                R.push(o, Lt), m && m.push(i, Pe, lt, lt + 1);
              }
            } else o = ip(r, t, E, o, !1);
            const ie = r.outputs;
            let Ae;
            if (G && null !== ie && (Ae = ie[i])) {
              const He = Ae.length;
              if (He)
                for (let Ke = 0; Ke < He; Ke += 2) {
                  const nn = t[Ae[Ke]][Ae[Ke + 1]].subscribe(o),
                    ti = R.length;
                  R.push(o, nn), m && m.push(i, r.index, ti, -(ti + 1));
                }
            }
          })(o, i, i[Ct], s, e, t, r),
          vu
        );
      }
      function rp(e, t, n, r) {
        try {
          return Or(6, t, n), !1 !== n(r);
        } catch (i) {
          return If(e, i), !1;
        } finally {
          Or(7, t, n);
        }
      }
      function ip(e, t, n, r, i) {
        return function o(s) {
          if (s === Function) return r;
          As(e.componentOffset > -1 ? g(e.index, t) : t);
          let d = rp(t, n, r, s),
            m = o.__ngNextListenerFn__;
          for (; m; ) (d = rp(t, n, m, s) && d), (m = m.__ngNextListenerFn__);
          return i && !1 === d && s.preventDefault(), d;
        };
      }
      function op(e = 1) {
        return (function jl(e) {
          return (Ze.lFrame.contextLView = (function _d(e, t) {
            for (; e > 0; ) (t = t[wr]), e--;
            return t;
          })(e, Ze.lFrame.contextLView))[Zt];
        })(e);
      }
      function fC(e, t) {
        let n = null;
        const r = (function Gr(e) {
          const t = e.attrs;
          if (null != t) {
            const n = t.indexOf(5);
            if (!(1 & n)) return t[n + 1];
          }
          return null;
        })(e);
        for (let i = 0; i < t.length; i++) {
          const o = t[i];
          if ('*' !== o) {
            if (null === r ? mr(e, o, !0) : y(r, o)) return i;
          } else n = i;
        }
        return n;
      }
      function sp(e) {
        const t = Be()[un][Mn];
        if (!t.projection) {
          const r = (t.projection = fs(e ? e.length : 1, null)),
            i = r.slice();
          let o = t.child;
          for (; null !== o; ) {
            const s = e ? fC(o, e) : 0;
            null !== s &&
              (i[s] ? (i[s].projectionNext = o) : (r[s] = o), (i[s] = o)),
              (o = o.next);
          }
        }
      }
      function ap(e, t = 0, n) {
        const r = Be(),
          i = jt(),
          o = Ao(i, Nt + e, 16, null, n || null);
        null === o.projection && (o.projection = t),
          pa(),
          (!r[vr] || sr()) &&
            32 != (32 & o.flags) &&
            (function __(e, t, n) {
              fh(t[Ct], 0, t, n, dc(e, n, t), ah(n.parent || t[Mn], n, t));
            })(i, r, o);
      }
      function dl(e, t) {
        return (e << 17) | (t << 2);
      }
      function ki(e) {
        return (e >> 17) & 32767;
      }
      function yu(e) {
        return 2 | e;
      }
      function Ji(e) {
        return (131068 & e) >> 2;
      }
      function Du(e, t) {
        return (-131069 & e) | (t << 2);
      }
      function Cu(e) {
        return 1 | e;
      }
      function vp(e, t, n, r, i) {
        const o = e[n + 1],
          s = null === t;
        let c = r ? ki(o) : Ji(o),
          d = !1;
        for (; 0 !== c && (!1 === d || s); ) {
          const E = e[c + 1];
          yC(e[c], t) && ((d = !0), (e[c + 1] = r ? Cu(E) : yu(E))),
            (c = r ? ki(E) : Ji(E));
        }
        d && (e[n + 1] = r ? yu(o) : Cu(o));
      }
      function yC(e, t) {
        return (
          null === e ||
          null == t ||
          (Array.isArray(e) ? e[1] : e) === t ||
          (!(!Array.isArray(e) || 'string' != typeof t) && yo(e, t) >= 0)
        );
      }
      function bu(e, t) {
        return (
          (function qr(e, t, n, r) {
            const i = Be(),
              o = jt(),
              s = Vr(2);
            o.firstUpdatePass &&
              (function Sp(e, t, n, r) {
                const i = e.data;
                if (null === i[n + 1]) {
                  const o = i[ar()],
                    s = (function Mp(e, t) {
                      return t >= e.expandoStartIndex;
                    })(e, n);
                  (function Op(e, t) {
                    return 0 != (e.flags & (t ? 8 : 16));
                  })(o, r) &&
                    null === t &&
                    !s &&
                    (t = !1),
                    (t = (function TC(e, t, n, r) {
                      const i = (function va(e) {
                        const t = Ze.lFrame.currentDirectiveIndex;
                        return -1 === t ? null : e[t];
                      })(e);
                      let o = r ? t.residualClasses : t.residualStyles;
                      if (null === i)
                        0 === (r ? t.classBindings : t.styleBindings) &&
                          ((n = Bs((n = Eu(null, e, t, n, r)), t.attrs, r)),
                          (o = null));
                      else {
                        const s = t.directiveStylingLast;
                        if (-1 === s || e[s] !== i)
                          if (((n = Eu(i, e, t, n, r)), null === o)) {
                            let d = (function AC(e, t, n) {
                              const r = n ? t.classBindings : t.styleBindings;
                              if (0 !== Ji(r)) return e[ki(r)];
                            })(e, t, r);
                            void 0 !== d &&
                              Array.isArray(d) &&
                              ((d = Eu(null, e, t, d[1], r)),
                              (d = Bs(d, t.attrs, r)),
                              (function OC(e, t, n, r) {
                                e[ki(n ? t.classBindings : t.styleBindings)] =
                                  r;
                              })(e, t, r, d));
                          } else
                            o = (function RC(e, t, n) {
                              let r;
                              const i = t.directiveEnd;
                              for (
                                let o = 1 + t.directiveStylingLast;
                                o < i;
                                o++
                              )
                                r = Bs(r, e[o].hostAttrs, n);
                              return Bs(r, t.attrs, n);
                            })(e, t, r);
                      }
                      return (
                        void 0 !== o &&
                          (r
                            ? (t.residualClasses = o)
                            : (t.residualStyles = o)),
                        n
                      );
                    })(i, o, t, r)),
                    (function vC(e, t, n, r, i, o) {
                      let s = o ? t.classBindings : t.styleBindings,
                        c = ki(s),
                        d = Ji(s);
                      e[r] = n;
                      let E,
                        m = !1;
                      if (
                        (Array.isArray(n)
                          ? ((E = n[1]),
                            (null === E || yo(n, E) > 0) && (m = !0))
                          : (E = n),
                        i)
                      )
                        if (0 !== d) {
                          const G = ki(e[c + 1]);
                          (e[r + 1] = dl(G, c)),
                            0 !== G && (e[G + 1] = Du(e[G + 1], r)),
                            (e[c + 1] = (function gC(e, t) {
                              return (131071 & e) | (t << 17);
                            })(e[c + 1], r));
                        } else
                          (e[r + 1] = dl(c, 0)),
                            0 !== c && (e[c + 1] = Du(e[c + 1], r)),
                            (c = r);
                      else
                        (e[r + 1] = dl(d, 0)),
                          0 === c ? (c = r) : (e[d + 1] = Du(e[d + 1], r)),
                          (d = r);
                      m && (e[r + 1] = yu(e[r + 1])),
                        vp(e, E, r, !0),
                        vp(e, E, r, !1),
                        (function _C(e, t, n, r, i) {
                          const o = i ? e.residualClasses : e.residualStyles;
                          null != o &&
                            'string' == typeof t &&
                            yo(o, t) >= 0 &&
                            (n[r + 1] = Cu(n[r + 1]));
                        })(t, E, e, r, o),
                        (s = dl(c, d)),
                        o ? (t.classBindings = s) : (t.styleBindings = s);
                    })(i, o, t, n, s, r);
                }
              })(o, e, s, r),
              t !== Ot &&
                ur(i, s, t) &&
                (function Tp(e, t, n, r, i, o, s, c) {
                  if (!(3 & t.type)) return;
                  const d = e.data,
                    m = d[c + 1],
                    E = (function mC(e) {
                      return 1 == (1 & e);
                    })(m)
                      ? Ap(d, t, n, i, Ji(m), s)
                      : void 0;
                  hl(E) ||
                    (hl(o) ||
                      ((function pC(e) {
                        return 2 == (2 & e);
                      })(m) &&
                        (o = Ap(d, null, n, i, c, s))),
                    (function D_(e, t, n, r, i) {
                      if (t) i ? e.addClass(n, r) : e.removeClass(n, r);
                      else {
                        let o = -1 === r.indexOf('-') ? void 0 : si.DashCase;
                        null == i
                          ? e.removeStyle(n, r, o)
                          : ('string' == typeof i &&
                              i.endsWith('!important') &&
                              ((i = i.slice(0, -10)), (o |= si.Important)),
                            e.setStyle(n, r, i, o));
                      }
                    })(r, s, Pi(ar(), n), i, o));
                })(
                  o,
                  o.data[ar()],
                  i,
                  i[Ct],
                  e,
                  (i[s + 1] = (function NC(e, t) {
                    return (
                      null == e ||
                        '' === e ||
                        ('string' == typeof t
                          ? (e += t)
                          : 'object' == typeof e && (e = le(Ni(e)))),
                      e
                    );
                  })(t, n)),
                  r,
                  s
                );
          })(e, t, null, !0),
          bu
        );
      }
      function Eu(e, t, n, r, i) {
        let o = null;
        const s = n.directiveEnd;
        let c = n.directiveStylingLast;
        for (
          -1 === c ? (c = n.directiveStart) : c++;
          c < s && ((o = t[c]), (r = Bs(r, o.hostAttrs, i)), o !== e);

        )
          c++;
        return null !== e && (n.directiveStylingLast = c), r;
      }
      function Bs(e, t, n) {
        const r = n ? 1 : 2;
        let i = -1;
        if (null !== t)
          for (let o = 0; o < t.length; o++) {
            const s = t[o];
            'number' == typeof s
              ? (i = s)
              : i === r &&
                (Array.isArray(e) || (e = void 0 === e ? [] : ['', e]),
                Fr(e, s, !!n || t[++o]));
          }
        return void 0 === e ? null : e;
      }
      function Ap(e, t, n, r, i, o) {
        const s = null === t;
        let c;
        for (; i > 0; ) {
          const d = e[i],
            m = Array.isArray(d),
            E = m ? d[1] : d,
            R = null === E;
          let G = n[i + 1];
          G === Ot && (G = R ? be : void 0);
          let ie = R ? Kl(G, r) : E === r ? G : void 0;
          if ((m && !hl(ie) && (ie = Kl(d, r)), hl(ie) && ((c = ie), s)))
            return c;
          const Ae = e[i + 1];
          i = s ? ki(Ae) : Ji(Ae);
        }
        if (null !== t) {
          let d = o ? t.residualClasses : t.residualStyles;
          null != d && (c = Kl(d, r));
        }
        return c;
      }
      function hl(e) {
        return void 0 !== e;
      }
      function Rp(e, t = '') {
        const n = Be(),
          r = jt(),
          i = e + Nt,
          o = r.firstCreatePass ? Ao(r, i, 1, t, null) : r.data[i],
          s = xp(r, n, o, t, e);
        (n[i] = s), v() && ja(r, n, s, o), jr(o, !1);
      }
      let xp = (e, t, n, r, i) => (
        M(!0),
        (function ka(e, t) {
          return e.createText(t);
        })(t[Ct], r)
      );
      function wu(e) {
        return fl('', e, ''), wu;
      }
      function fl(e, t, n) {
        const r = Be(),
          i = (function Ro(e, t, n, r) {
            return ur(e, Yi(), n) ? t + se(n) + r : Ot;
          })(r, e, t, n);
        return i !== Ot && bi(r, ar(), i), fl;
      }
      function Mu(e, t, n, r, i) {
        const o = Be(),
          s = xo(o, e, t, n, r, i);
        return s !== Ot && bi(o, ar(), s), Mu;
      }
      function Su(e, t, n) {
        const r = Be();
        return ur(r, Yi(), t) && Nr(jt(), bn(), r, e, t, r[Ct], n, !0), Su;
      }
      const eo = void 0;
      var rb = [
        'en',
        [['a', 'p'], ['AM', 'PM'], eo],
        [['AM', 'PM'], eo, eo],
        [
          ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ],
          ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        ],
        eo,
        [
          ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
          [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
          [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
        ],
        eo,
        [
          ['B', 'A'],
          ['BC', 'AD'],
          ['Before Christ', 'Anno Domini'],
        ],
        0,
        [6, 0],
        ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
        ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
        ['{1}, {0}', eo, "{1} 'at' {0}", eo],
        [
          '.',
          ',',
          ';',
          '%',
          '+',
          '-',
          'E',
          '\xd7',
          '\u2030',
          '\u221e',
          'NaN',
          ':',
        ],
        ['#,##0.###', '#,##0%', '\xa4#,##0.00', '#E0'],
        'USD',
        '$',
        'US Dollar',
        {},
        'ltr',
        function nb(e) {
          const n = Math.floor(Math.abs(e)),
            r = e.toString().replace(/^[^.]*\.?/, '').length;
          return 1 === n && 0 === r ? 1 : 5;
        },
      ];
      let jo = {};
      function Iu(e) {
        const t = (function ib(e) {
          return e.toLowerCase().replace(/_/g, '-');
        })(e);
        let n = Qp(t);
        if (n) return n;
        const r = t.split('-')[0];
        if (((n = Qp(r)), n)) return n;
        if ('en' === r) return rb;
        throw new ue(701, !1);
      }
      function Xp(e) {
        return Iu(e)[bt.PluralCase];
      }
      function Qp(e) {
        return (
          e in jo ||
            (jo[e] =
              it.ng &&
              it.ng.common &&
              it.ng.common.locales &&
              it.ng.common.locales[e]),
          jo[e]
        );
      }
      var bt = (() => (
        ((bt = bt || {})[(bt.LocaleId = 0)] = 'LocaleId'),
        (bt[(bt.DayPeriodsFormat = 1)] = 'DayPeriodsFormat'),
        (bt[(bt.DayPeriodsStandalone = 2)] = 'DayPeriodsStandalone'),
        (bt[(bt.DaysFormat = 3)] = 'DaysFormat'),
        (bt[(bt.DaysStandalone = 4)] = 'DaysStandalone'),
        (bt[(bt.MonthsFormat = 5)] = 'MonthsFormat'),
        (bt[(bt.MonthsStandalone = 6)] = 'MonthsStandalone'),
        (bt[(bt.Eras = 7)] = 'Eras'),
        (bt[(bt.FirstDayOfWeek = 8)] = 'FirstDayOfWeek'),
        (bt[(bt.WeekendRange = 9)] = 'WeekendRange'),
        (bt[(bt.DateFormat = 10)] = 'DateFormat'),
        (bt[(bt.TimeFormat = 11)] = 'TimeFormat'),
        (bt[(bt.DateTimeFormat = 12)] = 'DateTimeFormat'),
        (bt[(bt.NumberSymbols = 13)] = 'NumberSymbols'),
        (bt[(bt.NumberFormats = 14)] = 'NumberFormats'),
        (bt[(bt.CurrencyCode = 15)] = 'CurrencyCode'),
        (bt[(bt.CurrencySymbol = 16)] = 'CurrencySymbol'),
        (bt[(bt.CurrencyName = 17)] = 'CurrencyName'),
        (bt[(bt.Currencies = 18)] = 'Currencies'),
        (bt[(bt.Directionality = 19)] = 'Directionality'),
        (bt[(bt.PluralCase = 20)] = 'PluralCase'),
        (bt[(bt.ExtraData = 21)] = 'ExtraData'),
        bt
      ))();
      const Vo = 'en-US';
      let qp = Vo;
      function Ou(e, t, n, r, i) {
        if (((e = xe(e)), Array.isArray(e)))
          for (let o = 0; o < e.length; o++) Ou(e[o], t, n, r, i);
        else {
          const o = jt(),
            s = Be();
          let c = Xi(e) ? e : xe(e.provide),
            d = kh(e);
          const m = Gn(),
            E = 1048575 & m.providerIndexes,
            R = m.directiveStart,
            G = m.providerIndexes >> 20;
          if (Xi(e) || !e.multi) {
            const ie = new Qr(d, i, To),
              Ae = xu(c, t, i ? E : E + G, R);
            -1 === Ae
              ? (Gl(Sa(m, s), o, c),
                Ru(o, e, t.length),
                t.push(c),
                m.directiveStart++,
                m.directiveEnd++,
                i && (m.providerIndexes += 1048576),
                n.push(ie),
                s.push(ie))
              : ((n[Ae] = ie), (s[Ae] = ie));
          } else {
            const ie = xu(c, t, E + G, R),
              Ae = xu(c, t, E, E + G),
              Ke = Ae >= 0 && n[Ae];
            if ((i && !Ke) || (!i && !(ie >= 0 && n[ie]))) {
              Gl(Sa(m, s), o, c);
              const lt = (function tE(e, t, n, r, i) {
                const o = new Qr(e, n, To);
                return (
                  (o.multi = []),
                  (o.index = t),
                  (o.componentProviders = 0),
                  Eg(o, i, r && !n),
                  o
                );
              })(i ? eE : Jb, n.length, i, r, d);
              !i && Ke && (n[Ae].providerFactory = lt),
                Ru(o, e, t.length, 0),
                t.push(c),
                m.directiveStart++,
                m.directiveEnd++,
                i && (m.providerIndexes += 1048576),
                n.push(lt),
                s.push(lt);
            } else Ru(o, e, ie > -1 ? ie : Ae, Eg(n[i ? Ae : ie], d, !i && r));
            !i && r && Ke && n[Ae].componentProviders++;
          }
        }
      }
      function Ru(e, t, n, r) {
        const i = Xi(t),
          o = (function K_(e) {
            return !!e.useClass;
          })(t);
        if (i || o) {
          const d = (o ? xe(t.useClass) : t).prototype.ngOnDestroy;
          if (d) {
            const m = e.destroyHooks || (e.destroyHooks = []);
            if (!i && t.multi) {
              const E = m.indexOf(n);
              -1 === E ? m.push(n, [r, d]) : m[E + 1].push(r, d);
            } else m.push(n, d);
          }
        }
      }
      function Eg(e, t, n) {
        return n && e.componentProviders++, e.multi.push(t) - 1;
      }
      function xu(e, t, n, r) {
        for (let i = n; i < r; i++) if (t[i] === e) return i;
        return -1;
      }
      function Jb(e, t, n, r) {
        return Pu(this.multi, []);
      }
      function eE(e, t, n, r) {
        const i = this.multi;
        let o;
        if (this.providerFactory) {
          const s = this.providerFactory.componentProviders,
            c = Zi(n, n[Ge], this.providerFactory.index, r);
          (o = c.slice(0, s)), Pu(i, o);
          for (let d = s; d < c.length; d++) o.push(c[d]);
        } else (o = []), Pu(i, o);
        return o;
      }
      function Pu(e, t) {
        for (let n = 0; n < e.length; n++) t.push((0, e[n])());
        return t;
      }
      function wg(e, t = []) {
        return (n) => {
          n.providersResolver = (r, i) =>
            (function qb(e, t, n) {
              const r = jt();
              if (r.firstCreatePass) {
                const i = An(e);
                Ou(n, r.data, r.blueprint, i, !0),
                  Ou(t, r.data, r.blueprint, i, !1);
              }
            })(r, i ? i(e) : e, t);
        };
      }
      class Uo {}
      class Mg {}
      function nE(e, t) {
        return new Fu(e, t ?? null, []);
      }
      class Fu extends Uo {
        constructor(t, n, r) {
          super(),
            (this._parent = n),
            (this._bootstrapComponents = []),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new Af(this));
          const i = re(t);
          (this._bootstrapComponents = Ci(i.bootstrap)),
            (this._r3Injector = hf(
              t,
              n,
              [
                { provide: Uo, useValue: this },
                { provide: Is, useValue: this.componentFactoryResolver },
                ...r,
              ],
              le(t),
              new Set(['environment'])
            )),
            this._r3Injector.resolveInjectorInitializers(),
            (this.instance = this._r3Injector.get(t));
        }
        get injector() {
          return this._r3Injector;
        }
        destroy() {
          const t = this._r3Injector;
          !t.destroyed && t.destroy(),
            this.destroyCbs.forEach((n) => n()),
            (this.destroyCbs = null);
        }
        onDestroy(t) {
          this.destroyCbs.push(t);
        }
      }
      class Nu extends Mg {
        constructor(t) {
          super(), (this.moduleType = t);
        }
        create(t) {
          return new Fu(this.moduleType, t, []);
        }
      }
      class Sg extends Uo {
        constructor(t) {
          super(),
            (this.componentFactoryResolver = new Af(this)),
            (this.instance = null);
          const n = new Tc(
            [
              ...t.providers,
              { provide: Uo, useValue: this },
              { provide: Is, useValue: this.componentFactoryResolver },
            ],
            t.parent || Wa(),
            t.debugName,
            new Set(['environment'])
          );
          (this.injector = n),
            t.runEnvironmentInitializers && n.resolveInjectorInitializers();
        }
        destroy() {
          this.injector.destroy();
        }
        onDestroy(t) {
          this.injector.onDestroy(t);
        }
      }
      function Ig(e, t, n = null) {
        return new Sg({
          providers: e,
          parent: t,
          debugName: n,
          runEnvironmentInitializers: !0,
        }).injector;
      }
      let iE = (() => {
        class e {
          constructor(n) {
            (this._injector = n), (this.cachedInjectors = new Map());
          }
          getOrCreateStandaloneInjector(n) {
            if (!n.standalone) return null;
            if (!this.cachedInjectors.has(n.id)) {
              const r = Ph(0, n.type),
                i =
                  r.length > 0
                    ? Ig([r], this._injector, `Standalone[${n.type.name}]`)
                    : null;
              this.cachedInjectors.set(n.id, i);
            }
            return this.cachedInjectors.get(n.id);
          }
          ngOnDestroy() {
            try {
              for (const n of this.cachedInjectors.values())
                null !== n && n.destroy();
            } finally {
              this.cachedInjectors.clear();
            }
          }
        }
        return (
          (e.ɵprov = It({
            token: e,
            providedIn: 'environment',
            factory: () => new e(tn(Qi)),
          })),
          e
        );
      })();
      function Tg(e) {
        e.getStandaloneInjector = (t) =>
          t.get(iE).getOrCreateStandaloneInjector(e);
      }
      function Ng(e, t, n) {
        const r = Wn() + e,
          i = Be();
        return i[r] === Ot
          ? li(i, r, n ? t.call(n) : t())
          : (function Fs(e, t) {
              return e[t];
            })(i, r);
      }
      function Lg(e, t, n, r) {
        return Bg(Be(), Wn(), e, t, n, r);
      }
      function kg(e, t, n, r, i) {
        return Hg(Be(), Wn(), e, t, n, r, i);
      }
      function zs(e, t) {
        const n = e[t];
        return n === Ot ? void 0 : n;
      }
      function Bg(e, t, n, r, i, o) {
        const s = t + n;
        return ur(e, s, i)
          ? li(e, s + 1, o ? r.call(o, i) : r(i))
          : zs(e, s + 1);
      }
      function Hg(e, t, n, r, i, o, s) {
        const c = t + n;
        return qi(e, c, i, o)
          ? li(e, c + 2, s ? r.call(s, i, o) : r(i, o))
          : zs(e, c + 2);
      }
      function $g(e, t) {
        const n = jt();
        let r;
        const i = e + Nt;
        n.firstCreatePass
          ? ((r = (function DE(e, t) {
              if (t)
                for (let n = t.length - 1; n >= 0; n--) {
                  const r = t[n];
                  if (e === r.name) return r;
                }
            })(t, n.pipeRegistry)),
            (n.data[i] = r),
            r.onDestroy && (n.destroyHooks ??= []).push(i, r.onDestroy))
          : (r = n.data[i]);
        const o = r.factory || (r.factory = Ar(r.type)),
          s = Gt(To);
        try {
          const c = Ma(!1),
            d = o();
          return (
            Ma(c),
            (function iC(e, t, n, r) {
              n >= e.data.length &&
                ((e.data[n] = null), (e.blueprint[n] = null)),
                (t[n] = r);
            })(n, Be(), i, d),
            d
          );
        } finally {
          Gt(s);
        }
      }
      function zg(e, t, n) {
        const r = e + Nt,
          i = Be(),
          o = _(i, r);
        return Gs(i, r) ? Bg(i, Wn(), t, o.transform, n, o) : o.transform(n);
      }
      function Gg(e, t, n, r) {
        const i = e + Nt,
          o = Be(),
          s = _(o, i);
        return Gs(o, i)
          ? Hg(o, Wn(), t, s.transform, n, r, s)
          : s.transform(n, r);
      }
      function Gs(e, t) {
        return e[Ge].data[t].pure;
      }
      function ku(e) {
        return (t) => {
          setTimeout(e, void 0, t);
        };
      }
      const di = class wE extends p.x {
        constructor(t = !1) {
          super(), (this.__isAsync = t);
        }
        emit(t) {
          super.next(t);
        }
        subscribe(t, n, r) {
          let i = t,
            o = n || (() => null),
            s = r;
          if (t && 'object' == typeof t) {
            const d = t;
            (i = d.next?.bind(d)),
              (o = d.error?.bind(d)),
              (s = d.complete?.bind(d));
          }
          this.__isAsync && ((o = ku(o)), i && (i = ku(i)), s && (s = ku(s)));
          const c = super.subscribe({ next: i, error: o, complete: s });
          return t instanceof D.w0 && t.add(c), c;
        }
      };
      function ME() {
        return this._results[Symbol.iterator]();
      }
      class Bu {
        get changes() {
          return this._changes || (this._changes = new di());
        }
        constructor(t = !1) {
          (this._emitDistinctChangesOnly = t),
            (this.dirty = !0),
            (this._results = []),
            (this._changesDetected = !1),
            (this._changes = null),
            (this.length = 0),
            (this.first = void 0),
            (this.last = void 0);
          const n = Bu.prototype;
          n[Symbol.iterator] || (n[Symbol.iterator] = ME);
        }
        get(t) {
          return this._results[t];
        }
        map(t) {
          return this._results.map(t);
        }
        filter(t) {
          return this._results.filter(t);
        }
        find(t) {
          return this._results.find(t);
        }
        reduce(t, n) {
          return this._results.reduce(t, n);
        }
        forEach(t) {
          this._results.forEach(t);
        }
        some(t) {
          return this._results.some(t);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(t, n) {
          const r = this;
          r.dirty = !1;
          const i = (function $r(e) {
            return e.flat(Number.POSITIVE_INFINITY);
          })(t);
          (this._changesDetected = !(function Ev(e, t, n) {
            if (e.length !== t.length) return !1;
            for (let r = 0; r < e.length; r++) {
              let i = e[r],
                o = t[r];
              if ((n && ((i = n(i)), (o = n(o))), o !== i)) return !1;
            }
            return !0;
          })(r._results, i, n)) &&
            ((r._results = i),
            (r.length = i.length),
            (r.last = i[this.length - 1]),
            (r.first = i[0]));
        }
        notifyOnChanges() {
          this._changes &&
            (this._changesDetected || !this._emitDistinctChangesOnly) &&
            this._changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      let Ws = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = TE), e;
      })();
      const SE = Ws,
        IE = class extends SE {
          constructor(t, n, r) {
            super(),
              (this._declarationLView = t),
              (this._declarationTContainer = n),
              (this.elementRef = r);
          }
          get ssrId() {
            return this._declarationTContainer.tView?.ssrId || null;
          }
          createEmbeddedView(t, n) {
            return this.createEmbeddedViewImpl(t, n, null);
          }
          createEmbeddedViewImpl(t, n, r) {
            const i = this._declarationTContainer.tView,
              o = Ja(
                this._declarationLView,
                i,
                t,
                16,
                null,
                i.declTNode,
                null,
                null,
                null,
                n || null,
                r || null
              );
            o[Wr] = this._declarationLView[this._declarationTContainer.index];
            const c = this._declarationLView[Mr];
            return (
              null !== c && (o[Mr] = c.createEmbeddedView(i)),
              eu(i, o, t),
              new xs(o)
            );
          }
        };
      function TE() {
        return _l(Gn(), Be());
      }
      function _l(e, t) {
        return 4 & e.type ? new IE(t, e, Mo(e, t)) : null;
      }
      let yl = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = NE), e;
      })();
      function NE() {
        return Qg(Gn(), Be());
      }
      const LE = yl,
        Kg = class extends LE {
          constructor(t, n, r) {
            super(),
              (this._lContainer = t),
              (this._hostTNode = n),
              (this._hostLView = r);
          }
          get element() {
            return Mo(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new po(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const t = zl(this._hostTNode, this._hostLView);
            if (Cd(t)) {
              const n = wa(t, this._hostLView),
                r = Ea(t);
              return new po(n[Ge].data[r + 8], n);
            }
            return new po(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(t) {
            const n = Xg(this._lContainer);
            return (null !== n && n[t]) || null;
          }
          get length() {
            return this._lContainer.length - Nn;
          }
          createEmbeddedView(t, n, r) {
            let i, o;
            'number' == typeof r
              ? (i = r)
              : null != r && ((i = r.index), (o = r.injector));
            const c = t.createEmbeddedViewImpl(n || {}, o, null);
            return this.insertImpl(c, i, false), c;
          }
          createComponent(t, n, r, i, o) {
            const s =
              t &&
              !(function ds(e) {
                return 'function' == typeof e;
              })(t);
            let c;
            if (s) c = n;
            else {
              const He = n || {};
              (c = He.index),
                (r = He.injector),
                (i = He.projectableNodes),
                (o = He.environmentInjector || He.ngModuleRef);
            }
            const d = s ? t : new Ps(_t(t)),
              m = r || this.parentInjector;
            if (!o && null == d.ngModule) {
              const Ke = (s ? m : this.parentInjector).get(Qi, null);
              Ke && (o = Ke);
            }
            _t(d.componentType ?? {});
            const ie = d.create(m, i, null, o);
            return this.insertImpl(ie.hostView, c, false), ie;
          }
          insert(t, n) {
            return this.insertImpl(t, n, !1);
          }
          insertImpl(t, n, r) {
            const i = t._lView,
              o = i[Ge];
            if (
              (function ve(e) {
                return tr(e[Ft]);
              })(i)
            ) {
              const d = this.indexOf(t);
              if (-1 !== d) this.detach(d);
              else {
                const m = i[Ft],
                  E = new Kg(m, m[Mn], m[Ft]);
                E.detach(E.indexOf(t));
              }
            }
            const s = this._adjustIndex(n),
              c = this._lContainer;
            if (
              ((function h_(e, t, n, r) {
                const i = Nn + r,
                  o = n.length;
                r > 0 && (n[i - 1][Yt] = t),
                  r < o - Nn
                    ? ((t[Yt] = n[i]), Fd(n, Nn + r, t))
                    : (n.push(t), (t[Yt] = null)),
                  (t[Ft] = n);
                const s = t[Wr];
                null !== s &&
                  n !== s &&
                  (function f_(e, t) {
                    const n = e[pi];
                    t[un] !== t[Ft][Ft][un] && (e[ro] = !0),
                      null === n ? (e[pi] = [t]) : n.push(t);
                  })(s, t);
                const c = t[Mr];
                null !== c && c.insertView(e), (t[mt] |= 128);
              })(o, i, c, s),
              !r)
            ) {
              const d = fc(s, c),
                m = i[Ct],
                E = Ha(m, c[Tr]);
              null !== E &&
                (function c_(e, t, n, r, i, o) {
                  (r[dt] = i), (r[Mn] = t), _s(e, r, n, 1, i, o);
                })(o, c[Mn], m, i, E, d);
            }
            return t.attachToViewContainerRef(), Fd(ju(c), s, t), t;
          }
          move(t, n) {
            return this.insert(t, n);
          }
          indexOf(t) {
            const n = Xg(this._lContainer);
            return null !== n ? n.indexOf(t) : -1;
          }
          remove(t) {
            const n = this._adjustIndex(t, -1),
              r = cc(this._lContainer, n);
            r && (Ta(ju(this._lContainer), n), rh(r[Ge], r));
          }
          detach(t) {
            const n = this._adjustIndex(t, -1),
              r = cc(this._lContainer, n);
            return r && null != Ta(ju(this._lContainer), n) ? new xs(r) : null;
          }
          _adjustIndex(t, n = 0) {
            return t ?? this.length + n;
          }
        };
      function Xg(e) {
        return e[wi];
      }
      function ju(e) {
        return e[wi] || (e[wi] = []);
      }
      function Qg(e, t) {
        let n;
        const r = t[e.index];
        return (
          tr(r)
            ? (n = r)
            : ((n = bf(r, t, null, e)), (t[e.index] = n), el(t, n)),
          qg(n, t, e, r),
          new Kg(n, e, t)
        );
      }
      let qg = function Jg(e, t, n, r) {
        if (e[Tr]) return;
        let i;
        (i =
          8 & n.type
            ? ln(r)
            : (function kE(e, t) {
                const n = e[Ct],
                  r = n.createComment(''),
                  i = zn(t, e);
                return (
                  Ki(
                    n,
                    Ha(n, i),
                    r,
                    (function v_(e, t) {
                      return e.nextSibling(t);
                    })(n, i),
                    !1
                  ),
                  r
                );
              })(t, n)),
          (e[Tr] = i);
      };
      class Vu {
        constructor(t) {
          (this.queryList = t), (this.matches = null);
        }
        clone() {
          return new Vu(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class Uu {
        constructor(t = []) {
          this.queries = t;
        }
        createEmbeddedView(t) {
          const n = t.queries;
          if (null !== n) {
            const r =
                null !== t.contentQueries ? t.contentQueries[0] : n.length,
              i = [];
            for (let o = 0; o < r; o++) {
              const s = n.getByIndex(o);
              i.push(this.queries[s.indexInDeclarationView].clone());
            }
            return new Uu(i);
          }
          return null;
        }
        insertView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        detachView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        dirtyQueriesWithMatches(t) {
          for (let n = 0; n < this.queries.length; n++)
            null !== lm(t, n).matches && this.queries[n].setDirty();
        }
      }
      class em {
        constructor(t, n, r = null) {
          (this.predicate = t), (this.flags = n), (this.read = r);
        }
      }
      class $u {
        constructor(t = []) {
          this.queries = t;
        }
        elementStart(t, n) {
          for (let r = 0; r < this.queries.length; r++)
            this.queries[r].elementStart(t, n);
        }
        elementEnd(t) {
          for (let n = 0; n < this.queries.length; n++)
            this.queries[n].elementEnd(t);
        }
        embeddedTView(t) {
          let n = null;
          for (let r = 0; r < this.length; r++) {
            const i = null !== n ? n.length : 0,
              o = this.getByIndex(r).embeddedTView(t, i);
            o &&
              ((o.indexInDeclarationView = r),
              null !== n ? n.push(o) : (n = [o]));
          }
          return null !== n ? new $u(n) : null;
        }
        template(t, n) {
          for (let r = 0; r < this.queries.length; r++)
            this.queries[r].template(t, n);
        }
        getByIndex(t) {
          return this.queries[t];
        }
        get length() {
          return this.queries.length;
        }
        track(t) {
          this.queries.push(t);
        }
      }
      class zu {
        constructor(t, n = -1) {
          (this.metadata = t),
            (this.matches = null),
            (this.indexInDeclarationView = -1),
            (this.crossesNgTemplate = !1),
            (this._appliesToNextNode = !0),
            (this._declarationNodeIndex = n);
        }
        elementStart(t, n) {
          this.isApplyingToNode(n) && this.matchTNode(t, n);
        }
        elementEnd(t) {
          this._declarationNodeIndex === t.index &&
            (this._appliesToNextNode = !1);
        }
        template(t, n) {
          this.elementStart(t, n);
        }
        embeddedTView(t, n) {
          return this.isApplyingToNode(t)
            ? ((this.crossesNgTemplate = !0),
              this.addMatch(-t.index, n),
              new zu(this.metadata))
            : null;
        }
        isApplyingToNode(t) {
          if (this._appliesToNextNode && 1 != (1 & this.metadata.flags)) {
            const n = this._declarationNodeIndex;
            let r = t.parent;
            for (; null !== r && 8 & r.type && r.index !== n; ) r = r.parent;
            return n === (null !== r ? r.index : -1);
          }
          return this._appliesToNextNode;
        }
        matchTNode(t, n) {
          const r = this.metadata.predicate;
          if (Array.isArray(r))
            for (let i = 0; i < r.length; i++) {
              const o = r[i];
              this.matchTNodeWithReadOption(t, n, jE(n, o)),
                this.matchTNodeWithReadOption(t, n, Ia(n, t, o, !1, !1));
            }
          else
            r === Ws
              ? 4 & n.type && this.matchTNodeWithReadOption(t, n, -1)
              : this.matchTNodeWithReadOption(t, n, Ia(n, t, r, !1, !1));
        }
        matchTNodeWithReadOption(t, n, r) {
          if (null !== r) {
            const i = this.metadata.read;
            if (null !== i)
              if (i === Ts || i === yl || (i === Ws && 4 & n.type))
                this.addMatch(n.index, -2);
              else {
                const o = Ia(n, t, i, !1, !1);
                null !== o && this.addMatch(n.index, o);
              }
            else this.addMatch(n.index, r);
          }
        }
        addMatch(t, n) {
          null === this.matches
            ? (this.matches = [t, n])
            : this.matches.push(t, n);
        }
      }
      function jE(e, t) {
        const n = e.localNames;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) if (n[r] === t) return n[r + 1];
        return null;
      }
      function UE(e, t, n, r) {
        return -1 === n
          ? (function VE(e, t) {
              return 11 & e.type ? Mo(e, t) : 4 & e.type ? _l(e, t) : null;
            })(t, e)
          : -2 === n
          ? (function $E(e, t, n) {
              return n === Ts
                ? Mo(t, e)
                : n === Ws
                ? _l(t, e)
                : n === yl
                ? Qg(t, e)
                : void 0;
            })(e, t, r)
          : Zi(e, e[Ge], n, t);
      }
      function tm(e, t, n, r) {
        const i = t[Mr].queries[r];
        if (null === i.matches) {
          const o = e.data,
            s = n.matches,
            c = [];
          for (let d = 0; d < s.length; d += 2) {
            const m = s[d];
            c.push(m < 0 ? null : UE(t, o[m], s[d + 1], n.metadata.read));
          }
          i.matches = c;
        }
        return i.matches;
      }
      function Gu(e, t, n, r) {
        const i = e.queries.getByIndex(n),
          o = i.matches;
        if (null !== o) {
          const s = tm(e, t, i, n);
          for (let c = 0; c < o.length; c += 2) {
            const d = o[c];
            if (d > 0) r.push(s[c / 2]);
            else {
              const m = o[c + 1],
                E = t[-d];
              for (let R = Nn; R < E.length; R++) {
                const G = E[R];
                G[Wr] === G[Ft] && Gu(G[Ge], G, m, r);
              }
              if (null !== E[pi]) {
                const R = E[pi];
                for (let G = 0; G < R.length; G++) {
                  const ie = R[G];
                  Gu(ie[Ge], ie, m, r);
                }
              }
            }
          }
        }
        return r;
      }
      function nm(e) {
        const t = Be(),
          n = jt(),
          r = is();
        os(r + 1);
        const i = lm(n, r);
        if (
          e.dirty &&
          (function w(e) {
            return 4 == (4 & e[mt]);
          })(t) ===
            (2 == (2 & i.metadata.flags))
        ) {
          if (null === i.matches) e.reset([]);
          else {
            const o = i.crossesNgTemplate ? Gu(n, t, r, []) : tm(n, t, i, r);
            e.reset(o, vy), e.notifyOnChanges();
          }
          return !0;
        }
        return !1;
      }
      function rm(e, t, n) {
        const r = jt();
        r.firstCreatePass &&
          (am(r, new em(e, t, n), -1),
          2 == (2 & t) && (r.staticViewQueries = !0)),
          sm(r, Be(), t);
      }
      function im(e, t, n, r) {
        const i = jt();
        if (i.firstCreatePass) {
          const o = Gn();
          am(i, new em(t, n, r), o.index),
            (function GE(e, t) {
              const n = e.contentQueries || (e.contentQueries = []);
              t !== (n.length ? n[n.length - 1] : -1) &&
                n.push(e.queries.length - 1, t);
            })(i, e),
            2 == (2 & n) && (i.staticContentQueries = !0);
        }
        sm(i, Be(), n);
      }
      function om() {
        return (function zE(e, t) {
          return e[Mr].queries[t].queryList;
        })(Be(), is());
      }
      function sm(e, t, n) {
        const r = new Bu(4 == (4 & n));
        (function Vy(e, t, n, r) {
          const i = wf(t);
          i.push(n), e.firstCreatePass && Mf(e).push(r, i.length - 1);
        })(e, t, r, r.destroy),
          null === t[Mr] && (t[Mr] = new Uu()),
          t[Mr].queries.push(new Vu(r));
      }
      function am(e, t, n) {
        null === e.queries && (e.queries = new $u()),
          e.queries.track(new zu(t, n));
      }
      function lm(e, t) {
        return e.queries.getByIndex(t);
      }
      function Wu(e) {
        return !!re(e);
      }
      const Mm = new en('Application Initializer');
      let Qu = (() => {
          class e {
            constructor() {
              (this.initialized = !1),
                (this.done = !1),
                (this.donePromise = new Promise((n, r) => {
                  (this.resolve = n), (this.reject = r);
                })),
                (this.appInits = At(Mm, { optional: !0 }) ?? []);
            }
            runInitializers() {
              if (this.initialized) return;
              const n = [];
              for (const i of this.appInits) {
                const o = i();
                if (mu(o)) n.push(o);
                else if (ep(o)) {
                  const s = new Promise((c, d) => {
                    o.subscribe({ complete: c, error: d });
                  });
                  n.push(s);
                }
              }
              const r = () => {
                (this.done = !0), this.resolve();
              };
              Promise.all(n)
                .then(() => {
                  r();
                })
                .catch((i) => {
                  this.reject(i);
                }),
                0 === n.length && r(),
                (this.initialized = !0);
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵprov = It({ token: e, factory: e.ɵfac, providedIn: 'root' })),
            e
          );
        })(),
        Sm = (() => {
          class e {
            log(n) {
              console.log(n);
            }
            warn(n) {
              console.warn(n);
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵprov = It({
              token: e,
              factory: e.ɵfac,
              providedIn: 'platform',
            })),
            e
          );
        })();
      const Cl = new en('LocaleId', {
          providedIn: 'root',
          factory: () =>
            At(Cl, Qe.Optional | Qe.SkipSelf) ||
            (function p0() {
              return (typeof $localize < 'u' && $localize.locale) || Vo;
            })(),
        }),
        g0 = new en('DefaultCurrencyCode', {
          providedIn: 'root',
          factory: () => 'USD',
        });
      class m0 {
        constructor(t, n) {
          (this.ngModuleFactory = t), (this.componentFactories = n);
        }
      }
      let v0 = (() => {
        class e {
          compileModuleSync(n) {
            return new Nu(n);
          }
          compileModuleAsync(n) {
            return Promise.resolve(this.compileModuleSync(n));
          }
          compileModuleAndAllComponentsSync(n) {
            const r = this.compileModuleSync(n),
              o = Ci(re(n).declarations).reduce((s, c) => {
                const d = _t(c);
                return d && s.push(new Ps(d)), s;
              }, []);
            return new m0(r, o);
          }
          compileModuleAndAllComponentsAsync(n) {
            return Promise.resolve(this.compileModuleAndAllComponentsSync(n));
          }
          clearCache() {}
          clearCacheFor(n) {}
          getModuleId(n) {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵprov = It({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      const D0 = (() => Promise.resolve(0))();
      function qu(e) {
        typeof Zone > 'u'
          ? D0.then(() => {
              e && e.apply(null, null);
            })
          : Zone.current.scheduleMicroTask('scheduleMicrotask', e);
      }
      function Am(...e) {}
      class dr {
        constructor({
          enableLongStackTrace: t = !1,
          shouldCoalesceEventChangeDetection: n = !1,
          shouldCoalesceRunChangeDetection: r = !1,
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new di(!1)),
            (this.onMicrotaskEmpty = new di(!1)),
            (this.onStable = new di(!1)),
            (this.onError = new di(!1)),
            typeof Zone > 'u')
          )
            throw new ue(908, !1);
          Zone.assertZonePatched();
          const i = this;
          (i._nesting = 0),
            (i._outer = i._inner = Zone.current),
            Zone.TaskTrackingZoneSpec &&
              (i._inner = i._inner.fork(new Zone.TaskTrackingZoneSpec())),
            t &&
              Zone.longStackTraceZoneSpec &&
              (i._inner = i._inner.fork(Zone.longStackTraceZoneSpec)),
            (i.shouldCoalesceEventChangeDetection = !r && n),
            (i.shouldCoalesceRunChangeDetection = r),
            (i.lastRequestAnimationFrameId = -1),
            (i.nativeRequestAnimationFrame = (function C0() {
              let e = it.requestAnimationFrame,
                t = it.cancelAnimationFrame;
              if (typeof Zone < 'u' && e && t) {
                const n = e[Zone.__symbol__('OriginalDelegate')];
                n && (e = n);
                const r = t[Zone.__symbol__('OriginalDelegate')];
                r && (t = r);
              }
              return {
                nativeRequestAnimationFrame: e,
                nativeCancelAnimationFrame: t,
              };
            })().nativeRequestAnimationFrame),
            (function w0(e) {
              const t = () => {
                !(function E0(e) {
                  e.isCheckStableRunning ||
                    -1 !== e.lastRequestAnimationFrameId ||
                    ((e.lastRequestAnimationFrameId =
                      e.nativeRequestAnimationFrame.call(it, () => {
                        e.fakeTopEventTask ||
                          (e.fakeTopEventTask = Zone.root.scheduleEventTask(
                            'fakeTopEventTask',
                            () => {
                              (e.lastRequestAnimationFrameId = -1),
                                ed(e),
                                (e.isCheckStableRunning = !0),
                                Ju(e),
                                (e.isCheckStableRunning = !1);
                            },
                            void 0,
                            () => {},
                            () => {}
                          )),
                          e.fakeTopEventTask.invoke();
                      })),
                    ed(e));
                })(e);
              };
              e._inner = e._inner.fork({
                name: 'angular',
                properties: { isAngularZone: !0 },
                onInvokeTask: (n, r, i, o, s, c) => {
                  try {
                    return Om(e), n.invokeTask(i, o, s, c);
                  } finally {
                    ((e.shouldCoalesceEventChangeDetection &&
                      'eventTask' === o.type) ||
                      e.shouldCoalesceRunChangeDetection) &&
                      t(),
                      Rm(e);
                  }
                },
                onInvoke: (n, r, i, o, s, c, d) => {
                  try {
                    return Om(e), n.invoke(i, o, s, c, d);
                  } finally {
                    e.shouldCoalesceRunChangeDetection && t(), Rm(e);
                  }
                },
                onHasTask: (n, r, i, o) => {
                  n.hasTask(i, o),
                    r === i &&
                      ('microTask' == o.change
                        ? ((e._hasPendingMicrotasks = o.microTask),
                          ed(e),
                          Ju(e))
                        : 'macroTask' == o.change &&
                          (e.hasPendingMacrotasks = o.macroTask));
                },
                onHandleError: (n, r, i, o) => (
                  n.handleError(i, o),
                  e.runOutsideAngular(() => e.onError.emit(o)),
                  !1
                ),
              });
            })(i);
        }
        static isInAngularZone() {
          return typeof Zone < 'u' && !0 === Zone.current.get('isAngularZone');
        }
        static assertInAngularZone() {
          if (!dr.isInAngularZone()) throw new ue(909, !1);
        }
        static assertNotInAngularZone() {
          if (dr.isInAngularZone()) throw new ue(909, !1);
        }
        run(t, n, r) {
          return this._inner.run(t, n, r);
        }
        runTask(t, n, r, i) {
          const o = this._inner,
            s = o.scheduleEventTask('NgZoneEvent: ' + i, t, b0, Am, Am);
          try {
            return o.runTask(s, n, r);
          } finally {
            o.cancelTask(s);
          }
        }
        runGuarded(t, n, r) {
          return this._inner.runGuarded(t, n, r);
        }
        runOutsideAngular(t) {
          return this._outer.run(t);
        }
      }
      const b0 = {};
      function Ju(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
          try {
            e._nesting++, e.onMicrotaskEmpty.emit(null);
          } finally {
            if ((e._nesting--, !e.hasPendingMicrotasks))
              try {
                e.runOutsideAngular(() => e.onStable.emit(null));
              } finally {
                e.isStable = !0;
              }
          }
      }
      function ed(e) {
        e.hasPendingMicrotasks = !!(
          e._hasPendingMicrotasks ||
          ((e.shouldCoalesceEventChangeDetection ||
            e.shouldCoalesceRunChangeDetection) &&
            -1 !== e.lastRequestAnimationFrameId)
        );
      }
      function Om(e) {
        e._nesting++,
          e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function Rm(e) {
        e._nesting--, Ju(e);
      }
      const xm = new en('', { providedIn: 'root', factory: Pm });
      function Pm() {
        const e = At(dr);
        let t = !0;
        const n = new P.y((i) => {
            (t =
              e.isStable && !e.hasPendingMacrotasks && !e.hasPendingMicrotasks),
              e.runOutsideAngular(() => {
                i.next(t), i.complete();
              });
          }),
          r = new P.y((i) => {
            let o;
            e.runOutsideAngular(() => {
              o = e.onStable.subscribe(() => {
                dr.assertNotInAngularZone(),
                  qu(() => {
                    !t &&
                      !e.hasPendingMacrotasks &&
                      !e.hasPendingMicrotasks &&
                      ((t = !0), i.next(!0));
                  });
              });
            });
            const s = e.onUnstable.subscribe(() => {
              dr.assertInAngularZone(),
                t &&
                  ((t = !1),
                  e.runOutsideAngular(() => {
                    i.next(!1);
                  }));
            });
            return () => {
              o.unsubscribe(), s.unsubscribe();
            };
          });
        return (0, J.T)(
          n,
          r.pipe(
            (function Te(e = {}) {
              const {
                connector: t = () => new p.x(),
                resetOnError: n = !0,
                resetOnComplete: r = !0,
                resetOnRefCountZero: i = !0,
              } = e;
              return (o) => {
                let s,
                  c,
                  d,
                  m = 0,
                  E = !1,
                  R = !1;
                const G = () => {
                    c?.unsubscribe(), (c = void 0);
                  },
                  ie = () => {
                    G(), (s = d = void 0), (E = R = !1);
                  },
                  Ae = () => {
                    const He = s;
                    ie(), He?.unsubscribe();
                  };
                return (0, ee.e)((He, Ke) => {
                  m++, !R && !E && G();
                  const lt = (d = d ?? t());
                  Ke.add(() => {
                    m--, 0 === m && !R && !E && (c = de(Ae, i));
                  }),
                    lt.subscribe(Ke),
                    !s &&
                      m > 0 &&
                      ((s = new H.Hp({
                        next: (Pe) => lt.next(Pe),
                        error: (Pe) => {
                          (R = !0), G(), (c = de(ie, n, Pe)), lt.error(Pe);
                        },
                        complete: () => {
                          (E = !0), G(), (c = de(ie, r)), lt.complete();
                        },
                      })),
                      (0, Y.Xf)(He).subscribe(s));
                })(o);
              };
            })()
          )
        );
      }
      const Fm = new en(''),
        Nm = new en('');
      let td,
        S0 = (() => {
          class e {
            constructor(n, r, i) {
              (this._ngZone = n),
                (this.registry = r),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                td ||
                  ((function I0(e) {
                    td = e;
                  })(i),
                  i.addToWindow(r)),
                this._watchAngularEvents(),
                n.run(() => {
                  this.taskTrackingZone =
                    typeof Zone > 'u'
                      ? null
                      : Zone.current.get('TaskTrackingZone');
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  (this._didWork = !0), (this._isZoneStable = !1);
                },
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      dr.assertNotInAngularZone(),
                        qu(() => {
                          (this._isZoneStable = !0),
                            this._runCallbacksIfReady();
                        });
                    },
                  });
                });
            }
            increasePendingRequestCount() {
              return (
                (this._pendingCount += 1),
                (this._didWork = !0),
                this._pendingCount
              );
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error('pending async requests below zero');
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return (
                this._isZoneStable &&
                0 === this._pendingCount &&
                !this._ngZone.hasPendingMacrotasks
              );
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                qu(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let n = this._callbacks.pop();
                    clearTimeout(n.timeoutId), n.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let n = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  (r) =>
                    !r.updateCb ||
                    !r.updateCb(n) ||
                    (clearTimeout(r.timeoutId), !1)
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map((n) => ({
                    source: n.source,
                    creationLocation: n.creationLocation,
                    data: n.data,
                  }))
                : [];
            }
            addCallback(n, r, i) {
              let o = -1;
              r &&
                r > 0 &&
                (o = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter(
                    (s) => s.timeoutId !== o
                  )),
                    n(this._didWork, this.getPendingTasks());
                }, r)),
                this._callbacks.push({ doneCb: n, timeoutId: o, updateCb: i });
            }
            whenStable(n, r, i) {
              if (i && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'
                );
              this.addCallback(n, r, i), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            registerApplication(n) {
              this.registry.registerApplication(n, this);
            }
            unregisterApplication(n) {
              this.registry.unregisterApplication(n);
            }
            findProviders(n, r, i) {
              return [];
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(tn(dr), tn(Lm), tn(Nm));
            }),
            (e.ɵprov = It({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        Lm = (() => {
          class e {
            constructor() {
              this._applications = new Map();
            }
            registerApplication(n, r) {
              this._applications.set(n, r);
            }
            unregisterApplication(n) {
              this._applications.delete(n);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(n) {
              return this._applications.get(n) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(n, r = !0) {
              return td?.findTestabilityInTree(this, n, r) ?? null;
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵprov = It({
              token: e,
              factory: e.ɵfac,
              providedIn: 'platform',
            })),
            e
          );
        })(),
        Bi = null;
      const nd = new en('PlatformDestroyListeners'),
        rd = new en('appBootstrapListener');
      class O0 {
        constructor(t, n) {
          (this.name = t), (this.token = n);
        }
      }
      function P0(e) {
        try {
          const { rootComponent: t, appProviders: n, platformProviders: r } = e,
            i = (function x0(e = []) {
              if (Bi) return Bi;
              const t = (function jm(e = [], t) {
                return Li.create({
                  name: t,
                  providers: [
                    { provide: Sc, useValue: 'platform' },
                    { provide: nd, useValue: new Set([() => (Bi = null)]) },
                    ...e,
                  ],
                });
              })(e);
              return (
                (Bi = t),
                (function Bm() {
                  !(function Oi(e) {
                    $i = e;
                  })(() => {
                    throw new ue(600, !1);
                  });
                })(),
                (function Hm(e) {
                  e.get(Hh, null)?.forEach((n) => n());
                })(t),
                t
              );
            })(r),
            o = [B0(), ...(n || [])],
            c = new Sg({
              providers: o,
              parent: i,
              debugName: '',
              runEnvironmentInitializers: !1,
            }).injector,
            d = c.get(dr);
          return d.run(() => {
            c.resolveInjectorInitializers();
            const m = c.get(So, null);
            let E;
            d.runOutsideAngular(() => {
              E = d.onError.subscribe({
                next: (ie) => {
                  m.handleError(ie);
                },
              });
            });
            const R = () => c.destroy(),
              G = i.get(nd);
            return (
              G.add(R),
              c.onDestroy(() => {
                E.unsubscribe(), G.delete(R);
              }),
              (function $m(e, t, n) {
                try {
                  const r = n();
                  return mu(r)
                    ? r.catch((i) => {
                        throw (t.runOutsideAngular(() => e.handleError(i)), i);
                      })
                    : r;
                } catch (r) {
                  throw (t.runOutsideAngular(() => e.handleError(r)), r);
                }
              })(m, d, () => {
                const ie = c.get(Qu);
                return (
                  ie.runInitializers(),
                  ie.donePromise.then(() => {
                    !(function Jp(e) {
                      St(e, 'Expected localeId to be defined'),
                        'string' == typeof e &&
                          (qp = e.toLowerCase().replace(/_/g, '-'));
                    })(c.get(Cl, Vo) || Vo);
                    const He = c.get(Go);
                    return void 0 !== t && He.bootstrap(t), He;
                  })
                );
              })
            );
          });
        } catch (t) {
          return Promise.reject(t);
        }
      }
      let Go = (() => {
        class e {
          constructor() {
            (this._bootstrapListeners = []),
              (this._runningTick = !1),
              (this._destroyed = !1),
              (this._destroyListeners = []),
              (this._views = []),
              (this.internalErrorHandler = At(Wm)),
              (this.componentTypes = []),
              (this.components = []),
              (this.isStable = At(xm)),
              (this._injector = At(Qi));
          }
          get destroyed() {
            return this._destroyed;
          }
          get injector() {
            return this._injector;
          }
          bootstrap(n, r) {
            const i = n instanceof Gh;
            if (!this._injector.get(Qu).done)
              throw (!i && Br(n), new ue(405, !1));
            let s;
            (s = i ? n : this._injector.get(Is).resolveComponentFactory(n)),
              this.componentTypes.push(s.componentType);
            const c = (function A0(e) {
                return e.isBoundToModule;
              })(s)
                ? void 0
                : this._injector.get(Uo),
              m = s.create(Li.NULL, [], r || s.selector, c),
              E = m.location.nativeElement,
              R = m.injector.get(Fm, null);
            return (
              R?.registerApplication(E),
              m.onDestroy(() => {
                this.detachView(m.hostView),
                  bl(this.components, m),
                  R?.unregisterApplication(E);
              }),
              this._loadComponent(m),
              m
            );
          }
          tick() {
            if (this._runningTick) throw new ue(101, !1);
            try {
              this._runningTick = !0;
              for (let n of this._views) n.detectChanges();
            } catch (n) {
              this.internalErrorHandler(n);
            } finally {
              this._runningTick = !1;
            }
          }
          attachView(n) {
            const r = n;
            this._views.push(r), r.attachToAppRef(this);
          }
          detachView(n) {
            const r = n;
            bl(this._views, r), r.detachFromAppRef();
          }
          _loadComponent(n) {
            this.attachView(n.hostView), this.tick(), this.components.push(n);
            const r = this._injector.get(rd, []);
            r.push(...this._bootstrapListeners), r.forEach((i) => i(n));
          }
          ngOnDestroy() {
            if (!this._destroyed)
              try {
                this._destroyListeners.forEach((n) => n()),
                  this._views.slice().forEach((n) => n.destroy());
              } finally {
                (this._destroyed = !0),
                  (this._views = []),
                  (this._bootstrapListeners = []),
                  (this._destroyListeners = []);
              }
          }
          onDestroy(n) {
            return (
              this._destroyListeners.push(n),
              () => bl(this._destroyListeners, n)
            );
          }
          destroy() {
            if (this._destroyed) throw new ue(406, !1);
            const n = this._injector;
            n.destroy && !n.destroyed && n.destroy();
          }
          get viewCount() {
            return this._views.length;
          }
          warnIfDestroyed() {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵprov = It({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      function bl(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      const Wm = new en('', {
        providedIn: 'root',
        factory: () => At(So).handleError.bind(void 0),
      });
      function L0() {
        const e = At(dr),
          t = At(So);
        return (n) => e.runOutsideAngular(() => t.handleError(n));
      }
      let k0 = (() => {
        class e {
          constructor() {
            (this.zone = At(dr)), (this.applicationRef = At(Go));
          }
          initialize() {
            this._onMicrotaskEmptySubscription ||
              (this._onMicrotaskEmptySubscription =
                this.zone.onMicrotaskEmpty.subscribe({
                  next: () => {
                    this.zone.run(() => {
                      this.applicationRef.tick();
                    });
                  },
                }));
          }
          ngOnDestroy() {
            this._onMicrotaskEmptySubscription?.unsubscribe();
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵprov = It({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      function Ym(e) {
        return [
          { provide: dr, useFactory: e },
          {
            provide: Es,
            multi: !0,
            useFactory: () => {
              const t = At(k0, { optional: !0 });
              return () => t.initialize();
            },
          },
          { provide: Wm, useFactory: L0 },
          { provide: xm, useFactory: Pm },
        ];
      }
      function B0(e) {
        return bc([
          [],
          Ym(
            () =>
              new dr(
                (function Um(e) {
                  return {
                    enableLongStackTrace: !1,
                    shouldCoalesceEventChangeDetection:
                      e?.eventCoalescing ?? !1,
                    shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1,
                  };
                })(e)
              )
          ),
        ]);
      }
      let H0 = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = j0), e;
      })();
      function j0(e) {
        return (function V0(e, t, n) {
          if (Ln(e) && !n) {
            const r = g(e.index, t);
            return new xs(r, r);
          }
          return 47 & e.type ? new xs(t[un], t) : null;
        })(Gn(), Be(), 16 == (16 & e));
      }
      class Qm {
        constructor() {}
        supports(t) {
          return il(t);
        }
        create(t) {
          return new Y0(t);
        }
      }
      const W0 = (e, t) => t;
      class Y0 {
        constructor(t) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = t || W0);
        }
        forEachItem(t) {
          let n;
          for (n = this._itHead; null !== n; n = n._next) t(n);
        }
        forEachOperation(t) {
          let n = this._itHead,
            r = this._removalsHead,
            i = 0,
            o = null;
          for (; n || r; ) {
            const s = !r || (n && n.currentIndex < Jm(r, i, o)) ? n : r,
              c = Jm(s, i, o),
              d = s.currentIndex;
            if (s === r) i--, (r = r._nextRemoved);
            else if (((n = n._next), null == s.previousIndex)) i++;
            else {
              o || (o = []);
              const m = c - i,
                E = d - i;
              if (m != E) {
                for (let G = 0; G < m; G++) {
                  const ie = G < o.length ? o[G] : (o[G] = 0),
                    Ae = ie + G;
                  E <= Ae && Ae < m && (o[G] = ie + 1);
                }
                o[s.previousIndex] = E - m;
              }
            }
            c !== d && t(s, c, d);
          }
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousItHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachMovedItem(t) {
          let n;
          for (n = this._movesHead; null !== n; n = n._nextMoved) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        forEachIdentityChange(t) {
          let n;
          for (
            n = this._identityChangesHead;
            null !== n;
            n = n._nextIdentityChange
          )
            t(n);
        }
        diff(t) {
          if ((null == t && (t = []), !il(t))) throw new ue(900, !1);
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let i,
            o,
            s,
            n = this._itHead,
            r = !1;
          if (Array.isArray(t)) {
            this.length = t.length;
            for (let c = 0; c < this.length; c++)
              (o = t[c]),
                (s = this._trackByFn(c, o)),
                null !== n && Object.is(n.trackById, s)
                  ? (r && (n = this._verifyReinsertion(n, o, s, c)),
                    Object.is(n.item, o) || this._addIdentityChange(n, o))
                  : ((n = this._mismatch(n, o, s, c)), (r = !0)),
                (n = n._next);
          } else
            (i = 0),
              (function kD(e, t) {
                if (Array.isArray(e))
                  for (let n = 0; n < e.length; n++) t(e[n]);
                else {
                  const n = e[Symbol.iterator]();
                  let r;
                  for (; !(r = n.next()).done; ) t(r.value);
                }
              })(t, (c) => {
                (s = this._trackByFn(i, c)),
                  null !== n && Object.is(n.trackById, s)
                    ? (r && (n = this._verifyReinsertion(n, c, s, i)),
                      Object.is(n.item, c) || this._addIdentityChange(n, c))
                    : ((n = this._mismatch(n, c, s, i)), (r = !0)),
                  (n = n._next),
                  i++;
              }),
              (this.length = i);
          return this._truncate(n), (this.collection = t), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              t = this._previousItHead = this._itHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._additionsHead; null !== t; t = t._nextAdded)
              t.previousIndex = t.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null,
                t = this._movesHead;
              null !== t;
              t = t._nextMoved
            )
              t.previousIndex = t.currentIndex;
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(t, n, r, i) {
          let o;
          return (
            null === t ? (o = this._itTail) : ((o = t._prev), this._remove(t)),
            null !==
            (t =
              null === this._unlinkedRecords
                ? null
                : this._unlinkedRecords.get(r, null))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._reinsertAfter(t, o, i))
              : null !==
                (t =
                  null === this._linkedRecords
                    ? null
                    : this._linkedRecords.get(r, i))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._moveAfter(t, o, i))
              : (t = this._addAfter(new Z0(n, r), o, i)),
            t
          );
        }
        _verifyReinsertion(t, n, r, i) {
          let o =
            null === this._unlinkedRecords
              ? null
              : this._unlinkedRecords.get(r, null);
          return (
            null !== o
              ? (t = this._reinsertAfter(o, t._prev, i))
              : t.currentIndex != i &&
                ((t.currentIndex = i), this._addToMoves(t, i)),
            t
          );
        }
        _truncate(t) {
          for (; null !== t; ) {
            const n = t._next;
            this._addToRemovals(this._unlink(t)), (t = n);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail &&
              (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail &&
              (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(t, n, r) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
          const i = t._prevRemoved,
            o = t._nextRemoved;
          return (
            null === i ? (this._removalsHead = o) : (i._nextRemoved = o),
            null === o ? (this._removalsTail = i) : (o._prevRemoved = i),
            this._insertAfter(t, n, r),
            this._addToMoves(t, r),
            t
          );
        }
        _moveAfter(t, n, r) {
          return (
            this._unlink(t),
            this._insertAfter(t, n, r),
            this._addToMoves(t, r),
            t
          );
        }
        _addAfter(t, n, r) {
          return (
            this._insertAfter(t, n, r),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = t)
                : (this._additionsTail._nextAdded = t)),
            t
          );
        }
        _insertAfter(t, n, r) {
          const i = null === n ? this._itHead : n._next;
          return (
            (t._next = i),
            (t._prev = n),
            null === i ? (this._itTail = t) : (i._prev = t),
            null === n ? (this._itHead = t) : (n._next = t),
            null === this._linkedRecords && (this._linkedRecords = new qm()),
            this._linkedRecords.put(t),
            (t.currentIndex = r),
            t
          );
        }
        _remove(t) {
          return this._addToRemovals(this._unlink(t));
        }
        _unlink(t) {
          null !== this._linkedRecords && this._linkedRecords.remove(t);
          const n = t._prev,
            r = t._next;
          return (
            null === n ? (this._itHead = r) : (n._next = r),
            null === r ? (this._itTail = n) : (r._prev = n),
            t
          );
        }
        _addToMoves(t, n) {
          return (
            t.previousIndex === n ||
              (this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = t)
                  : (this._movesTail._nextMoved = t)),
            t
          );
        }
        _addToRemovals(t) {
          return (
            null === this._unlinkedRecords &&
              (this._unlinkedRecords = new qm()),
            this._unlinkedRecords.put(t),
            (t.currentIndex = null),
            (t._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = t),
                (t._prevRemoved = null))
              : ((t._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = t)),
            t
          );
        }
        _addIdentityChange(t, n) {
          return (
            (t.item = n),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = t)
                : (this._identityChangesTail._nextIdentityChange = t)),
            t
          );
        }
      }
      class Z0 {
        constructor(t, n) {
          (this.item = t),
            (this.trackById = n),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class K0 {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(t) {
          null === this._head
            ? ((this._head = this._tail = t),
              (t._nextDup = null),
              (t._prevDup = null))
            : ((this._tail._nextDup = t),
              (t._prevDup = this._tail),
              (t._nextDup = null),
              (this._tail = t));
        }
        get(t, n) {
          let r;
          for (r = this._head; null !== r; r = r._nextDup)
            if (
              (null === n || n <= r.currentIndex) &&
              Object.is(r.trackById, t)
            )
              return r;
          return null;
        }
        remove(t) {
          const n = t._prevDup,
            r = t._nextDup;
          return (
            null === n ? (this._head = r) : (n._nextDup = r),
            null === r ? (this._tail = n) : (r._prevDup = n),
            null === this._head
          );
        }
      }
      class qm {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          const n = t.trackById;
          let r = this.map.get(n);
          r || ((r = new K0()), this.map.set(n, r)), r.add(t);
        }
        get(t, n) {
          const i = this.map.get(t);
          return i ? i.get(t, n) : null;
        }
        remove(t) {
          const n = t.trackById;
          return this.map.get(n).remove(t) && this.map.delete(n), t;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function Jm(e, t, n) {
        const r = e.previousIndex;
        if (null === r) return r;
        let i = 0;
        return n && r < n.length && (i = n[r]), r + t + i;
      }
      class ev {
        constructor() {}
        supports(t) {
          return t instanceof Map || iu(t);
        }
        create() {
          return new X0();
        }
      }
      class X0 {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          );
        }
        forEachItem(t) {
          let n;
          for (n = this._mapHead; null !== n; n = n._next) t(n);
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousMapHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachChangedItem(t) {
          let n;
          for (n = this._changesHead; null !== n; n = n._nextChanged) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        diff(t) {
          if (t) {
            if (!(t instanceof Map || iu(t))) throw new ue(900, !1);
          } else t = new Map();
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let n = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(t, (r, i) => {
              if (n && n.key === i)
                this._maybeAddToChanges(n, r),
                  (this._appendAfter = n),
                  (n = n._next);
              else {
                const o = this._getOrCreateRecordForKey(i, r);
                n = this._insertBeforeOrAppend(n, o);
              }
            }),
            n)
          ) {
            n._prev && (n._prev._next = null), (this._removalsHead = n);
            for (let r = n; null !== r; r = r._nextRemoved)
              r === this._mapHead && (this._mapHead = null),
                this._records.delete(r.key),
                (r._nextRemoved = r._next),
                (r.previousValue = r.currentValue),
                (r.currentValue = null),
                (r._prev = null),
                (r._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(t, n) {
          if (t) {
            const r = t._prev;
            return (
              (n._next = t),
              (n._prev = r),
              (t._prev = n),
              r && (r._next = n),
              t === this._mapHead && (this._mapHead = n),
              (this._appendAfter = t),
              t
            );
          }
          return (
            this._appendAfter
              ? ((this._appendAfter._next = n), (n._prev = this._appendAfter))
              : (this._mapHead = n),
            (this._appendAfter = n),
            null
          );
        }
        _getOrCreateRecordForKey(t, n) {
          if (this._records.has(t)) {
            const i = this._records.get(t);
            this._maybeAddToChanges(i, n);
            const o = i._prev,
              s = i._next;
            return (
              o && (o._next = s),
              s && (s._prev = o),
              (i._next = null),
              (i._prev = null),
              i
            );
          }
          const r = new Q0(t);
          return (
            this._records.set(t, r),
            (r.currentValue = n),
            this._addToAdditions(r),
            r
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              this._previousMapHead = this._mapHead, t = this._previousMapHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._changesHead; null !== t; t = t._nextChanged)
              t.previousValue = t.currentValue;
            for (t = this._additionsHead; null != t; t = t._nextAdded)
              t.previousValue = t.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(t, n) {
          Object.is(n, t.currentValue) ||
            ((t.previousValue = t.currentValue),
            (t.currentValue = n),
            this._addToChanges(t));
        }
        _addToAdditions(t) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = t)
            : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
        }
        _addToChanges(t) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = t)
            : ((this._changesTail._nextChanged = t), (this._changesTail = t));
        }
        _forEach(t, n) {
          t instanceof Map
            ? t.forEach(n)
            : Object.keys(t).forEach((r) => n(t[r], r));
        }
      }
      class Q0 {
        constructor(t) {
          (this.key = t),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      function tv() {
        return new cd([new Qm()]);
      }
      let cd = (() => {
        class e {
          constructor(n) {
            this.factories = n;
          }
          static create(n, r) {
            if (null != r) {
              const i = r.factories.slice();
              n = n.concat(i);
            }
            return new e(n);
          }
          static extend(n) {
            return {
              provide: e,
              useFactory: (r) => e.create(n, r || tv()),
              deps: [[e, new Ra(), new Oa()]],
            };
          }
          find(n) {
            const r = this.factories.find((i) => i.supports(n));
            if (null != r) return r;
            throw new ue(901, !1);
          }
        }
        return (e.ɵprov = It({ token: e, providedIn: 'root', factory: tv })), e;
      })();
      function nv() {
        return new ud([new ev()]);
      }
      let ud = (() => {
          class e {
            constructor(n) {
              this.factories = n;
            }
            static create(n, r) {
              if (r) {
                const i = r.factories.slice();
                n = n.concat(i);
              }
              return new e(n);
            }
            static extend(n) {
              return {
                provide: e,
                useFactory: (r) => e.create(n, r || nv()),
                deps: [[e, new Ra(), new Oa()]],
              };
            }
            find(n) {
              const r = this.factories.find((i) => i.supports(n));
              if (r) return r;
              throw new ue(901, !1);
            }
          }
          return (
            (e.ɵprov = It({ token: e, providedIn: 'root', factory: nv })), e
          );
        })(),
        lv = (() => {
          class e {
            get whenAllTasksComplete() {
              return (
                0 === this.collection.size && this.complete(), this.promise
              );
            }
            constructor() {
              (this.taskId = 0),
                (this.collection = new Set()),
                (this.ngZone = At(dr)),
                (this.completed = !1),
                this.ngZone.runOutsideAngular(() => {
                  this.promise = new Promise((n) => {
                    this.resolve = n;
                  });
                });
            }
            add() {
              if (this.completed) return -1;
              const n = this.taskId++;
              return this.collection.add(n), n;
            }
            remove(n) {
              this.completed ||
                (this.collection.delete(n),
                0 === this.collection.size && this.complete());
            }
            ngOnDestroy() {
              this.complete(), this.collection.clear();
            }
            complete() {
              (this.completed = !0), this.resolve();
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵprov = It({ token: e, factory: e.ɵfac, providedIn: 'root' })),
            e
          );
        })();
      function lw(e) {
        return 'boolean' == typeof e ? e : null != e && 'false' !== e;
      }
      function uw(e) {
        const t = _t(e);
        if (!t) return null;
        const n = new Ps(t);
        return {
          get selector() {
            return n.selector;
          },
          get type() {
            return n.componentType;
          },
          get inputs() {
            return n.inputs;
          },
          get outputs() {
            return n.outputs;
          },
          get ngContentSelectors() {
            return n.ngContentSelectors;
          },
          get isStandalone() {
            return t.standalone;
          },
        };
      }
    },
    4942: (Je, me, C) => {
      C.d(me, { WI: () => y, uw: () => yt, Is: () => pn, so: () => kr });
      var p = C(6275),
        D = C(4755),
        P = C(9523),
        J = C(4922),
        Y = C(3223),
        H = C(1692),
        ee = C(8023),
        Te = C(7579),
        de = C(6451),
        $ = C(9770),
        oe = C(9300),
        le = C(5698),
        Ve = C(8675),
        Le = C(2840),
        et = C(8930),
        Xe = C(2966);
      const Ne = new P.OlP('mat-sanity-checks', {
        providedIn: 'root',
        factory: function te() {
          return !0;
        },
      });
      let De = (() => {
        class re {
          constructor(x, he, ze) {
            (this._sanityChecks = he),
              (this._document = ze),
              (this._hasDoneGlobalChecks = !1),
              x._applyBodyHighContrastModeCssClasses(),
              this._hasDoneGlobalChecks || (this._hasDoneGlobalChecks = !0);
          }
          _checkIsEnabled(x) {
            return (
              !(0, Xe.Oy)() &&
              ('boolean' == typeof this._sanityChecks
                ? this._sanityChecks
                : !!this._sanityChecks[x])
            );
          }
        }
        return (
          (re.ɵfac = function (x) {
            return new (x || re)(P.LFG(J.qm), P.LFG(Ne, 8), P.LFG(D.K0));
          }),
          (re.ɵmod = P.oAB({ type: re })),
          (re.ɵinj = P.cJS({ imports: [et.vT, et.vT] })),
          re
        );
      })();
      class vn {
        constructor(I, x, he, ze = !1) {
          (this._renderer = I),
            (this.element = x),
            (this.config = he),
            (this._animationForciblyDisabledThroughCss = ze),
            (this.state = 3);
        }
        fadeOut() {
          this._renderer.fadeOutRipple(this);
        }
      }
      const En = (0, Xe.i$)({ passive: !0, capture: !0 });
      class Qe {
        constructor() {
          (this._events = new Map()),
            (this._delegateEventHandler = (I) => {
              const x = (0, Xe.sA)(I);
              x &&
                this._events.get(I.type)?.forEach((he, ze) => {
                  (ze === x || ze.contains(x)) &&
                    he.forEach((Mt) => Mt.handleEvent(I));
                });
            });
        }
        addHandler(I, x, he, ze) {
          const Mt = this._events.get(x);
          if (Mt) {
            const dt = Mt.get(he);
            dt ? dt.add(ze) : Mt.set(he, new Set([ze]));
          } else
            this._events.set(x, new Map([[he, new Set([ze])]])),
              I.runOutsideAngular(() => {
                document.addEventListener(x, this._delegateEventHandler, En);
              });
        }
        removeHandler(I, x, he) {
          const ze = this._events.get(I);
          if (!ze) return;
          const Mt = ze.get(x);
          Mt &&
            (Mt.delete(he),
            0 === Mt.size && ze.delete(x),
            0 === ze.size &&
              (this._events.delete(I),
              document.removeEventListener(I, this._delegateEventHandler, En)));
        }
      }
      const rt = { enterDuration: 225, exitDuration: 150 },
        Gt = (0, Xe.i$)({ passive: !0, capture: !0 }),
        In = ['mousedown', 'touchstart'],
        sn = ['mouseup', 'mouseleave', 'touchend', 'touchcancel'];
      class it {
        constructor(I, x, he, ze) {
          (this._target = I),
            (this._ngZone = x),
            (this._platform = ze),
            (this._isPointerDown = !1),
            (this._activeRipples = new Map()),
            (this._pointerUpEventsRegistered = !1),
            ze.isBrowser && (this._containerElement = (0, H.fI)(he));
        }
        fadeInRipple(I, x, he = {}) {
          const ze = (this._containerRect =
              this._containerRect ||
              this._containerElement.getBoundingClientRect()),
            Mt = { ...rt, ...he.animation };
          he.centered &&
            ((I = ze.left + ze.width / 2), (x = ze.top + ze.height / 2));
          const dt =
              he.radius ||
              (function an(re, I, x) {
                const he = Math.max(
                    Math.abs(re - x.left),
                    Math.abs(re - x.right)
                  ),
                  ze = Math.max(Math.abs(I - x.top), Math.abs(I - x.bottom));
                return Math.sqrt(he * he + ze * ze);
              })(I, x, ze),
            Ge = I - ze.left,
            mt = x - ze.top,
            Ft = Mt.enterDuration,
            Yt = document.createElement('div');
          Yt.classList.add('mat-ripple-element'),
            (Yt.style.left = Ge - dt + 'px'),
            (Yt.style.top = mt - dt + 'px'),
            (Yt.style.height = 2 * dt + 'px'),
            (Yt.style.width = 2 * dt + 'px'),
            null != he.color && (Yt.style.backgroundColor = he.color),
            (Yt.style.transitionDuration = `${Ft}ms`),
            this._containerElement.appendChild(Yt);
          const Fn = window.getComputedStyle(Yt),
            br = Fn.transitionDuration,
            Zt =
              'none' === Fn.transitionProperty ||
              '0s' === br ||
              '0s, 0s' === br ||
              (0 === ze.width && 0 === ze.height),
            Un = new vn(this, Yt, he, Zt);
          (Yt.style.transform = 'scale3d(1, 1, 1)'),
            (Un.state = 0),
            he.persistent || (this._mostRecentTransientRipple = Un);
          let er = null;
          return (
            !Zt &&
              (Ft || Mt.exitDuration) &&
              this._ngZone.runOutsideAngular(() => {
                const Ct = () => this._finishRippleTransition(Un),
                  Er = () => this._destroyRipple(Un);
                Yt.addEventListener('transitionend', Ct),
                  Yt.addEventListener('transitioncancel', Er),
                  (er = { onTransitionEnd: Ct, onTransitionCancel: Er });
              }),
            this._activeRipples.set(Un, er),
            (Zt || !Ft) && this._finishRippleTransition(Un),
            Un
          );
        }
        fadeOutRipple(I) {
          if (2 === I.state || 3 === I.state) return;
          const x = I.element,
            he = { ...rt, ...I.config.animation };
          (x.style.transitionDuration = `${he.exitDuration}ms`),
            (x.style.opacity = '0'),
            (I.state = 2),
            (I._animationForciblyDisabledThroughCss || !he.exitDuration) &&
              this._finishRippleTransition(I);
        }
        fadeOutAll() {
          this._getActiveRipples().forEach((I) => I.fadeOut());
        }
        fadeOutAllNonPersistent() {
          this._getActiveRipples().forEach((I) => {
            I.config.persistent || I.fadeOut();
          });
        }
        setupTriggerEvents(I) {
          const x = (0, H.fI)(I);
          !this._platform.isBrowser ||
            !x ||
            x === this._triggerElement ||
            (this._removeTriggerEvents(),
            (this._triggerElement = x),
            In.forEach((he) => {
              it._eventManager.addHandler(this._ngZone, he, x, this);
            }));
        }
        handleEvent(I) {
          'mousedown' === I.type
            ? this._onMousedown(I)
            : 'touchstart' === I.type
            ? this._onTouchStart(I)
            : this._onPointerUp(),
            this._pointerUpEventsRegistered ||
              (this._ngZone.runOutsideAngular(() => {
                sn.forEach((x) => {
                  this._triggerElement.addEventListener(x, this, Gt);
                });
              }),
              (this._pointerUpEventsRegistered = !0));
        }
        _finishRippleTransition(I) {
          0 === I.state
            ? this._startFadeOutTransition(I)
            : 2 === I.state && this._destroyRipple(I);
        }
        _startFadeOutTransition(I) {
          const x = I === this._mostRecentTransientRipple,
            { persistent: he } = I.config;
          (I.state = 1), !he && (!x || !this._isPointerDown) && I.fadeOut();
        }
        _destroyRipple(I) {
          const x = this._activeRipples.get(I) ?? null;
          this._activeRipples.delete(I),
            this._activeRipples.size || (this._containerRect = null),
            I === this._mostRecentTransientRipple &&
              (this._mostRecentTransientRipple = null),
            (I.state = 3),
            null !== x &&
              (I.element.removeEventListener(
                'transitionend',
                x.onTransitionEnd
              ),
              I.element.removeEventListener(
                'transitioncancel',
                x.onTransitionCancel
              )),
            I.element.remove();
        }
        _onMousedown(I) {
          const x = (0, J.X6)(I),
            he =
              this._lastTouchStartEvent &&
              Date.now() < this._lastTouchStartEvent + 800;
          !this._target.rippleDisabled &&
            !x &&
            !he &&
            ((this._isPointerDown = !0),
            this.fadeInRipple(I.clientX, I.clientY, this._target.rippleConfig));
        }
        _onTouchStart(I) {
          if (!this._target.rippleDisabled && !(0, J.yG)(I)) {
            (this._lastTouchStartEvent = Date.now()),
              (this._isPointerDown = !0);
            const x = I.changedTouches;
            for (let he = 0; he < x.length; he++)
              this.fadeInRipple(
                x[he].clientX,
                x[he].clientY,
                this._target.rippleConfig
              );
          }
        }
        _onPointerUp() {
          this._isPointerDown &&
            ((this._isPointerDown = !1),
            this._getActiveRipples().forEach((I) => {
              !I.config.persistent &&
                (1 === I.state ||
                  (I.config.terminateOnPointerUp && 0 === I.state)) &&
                I.fadeOut();
            }));
        }
        _getActiveRipples() {
          return Array.from(this._activeRipples.keys());
        }
        _removeTriggerEvents() {
          const I = this._triggerElement;
          I &&
            (In.forEach((x) => it._eventManager.removeHandler(x, I, this)),
            this._pointerUpEventsRegistered &&
              sn.forEach((x) => I.removeEventListener(x, this, Gt)));
        }
      }
      function Ut(re, I) {}
      it._eventManager = new Qe();
      class _n {
        constructor() {
          (this.role = 'dialog'),
            (this.panelClass = ''),
            (this.hasBackdrop = !0),
            (this.backdropClass = ''),
            (this.disableClose = !1),
            (this.width = ''),
            (this.height = ''),
            (this.maxWidth = '80vw'),
            (this.data = null),
            (this.ariaDescribedBy = null),
            (this.ariaLabelledBy = null),
            (this.ariaLabel = null),
            (this.ariaModal = !0),
            (this.autoFocus = 'first-tabbable'),
            (this.restoreFocus = !0),
            (this.delayFocusTrap = !0),
            (this.closeOnNavigation = !0);
        }
      }
      const Ht = 'mdc-dialog--open',
        Wt = 'mdc-dialog--opening',
        Kn = 'mdc-dialog--closing';
      let yn = (() => {
        class re extends Y.LL {
          constructor(x, he, ze, Mt, dt, Ge, mt, Ft) {
            super(x, he, ze, Mt, dt, Ge, mt, Ft),
              (this._animationStateChanged = new P.vpe());
          }
          _captureInitialFocus() {
            this._config.delayFocusTrap || this._trapFocus();
          }
          _openAnimationDone(x) {
            this._config.delayFocusTrap && this._trapFocus(),
              this._animationStateChanged.next({
                state: 'opened',
                totalTime: x,
              });
          }
        }
        return (
          (re.ɵfac = function (x) {
            return new (x || re)(
              P.Y36(P.SBq),
              P.Y36(J.qV),
              P.Y36(D.K0, 8),
              P.Y36(_n),
              P.Y36(J.ic),
              P.Y36(P.R0b),
              P.Y36(p.Iu),
              P.Y36(J.tE)
            );
          }),
          (re.ɵcmp = P.Xpm({
            type: re,
            selectors: [['ng-component']],
            features: [P.qOj],
            decls: 0,
            vars: 0,
            template: function (x, he) {},
            encapsulation: 2,
          })),
          re
        );
      })();
      const gr = '--mat-dialog-transition-duration';
      function mr(re) {
        return null == re
          ? null
          : 'number' == typeof re
          ? re
          : re.endsWith('ms')
          ? (0, H.su)(re.substring(0, re.length - 2))
          : re.endsWith('s')
          ? 1e3 * (0, H.su)(re.substring(0, re.length - 1))
          : '0' === re
          ? 0
          : null;
      }
      let Gr = (() => {
        class re extends yn {
          constructor(x, he, ze, Mt, dt, Ge, mt, Ft, Yt) {
            super(x, he, ze, Mt, dt, Ge, mt, Yt),
              (this._animationMode = Ft),
              (this._animationsEnabled =
                'NoopAnimations' !== this._animationMode),
              (this._hostElement = this._elementRef.nativeElement),
              (this._openAnimationDuration = this._animationsEnabled
                ? mr(this._config.enterAnimationDuration) ?? 150
                : 0),
              (this._closeAnimationDuration = this._animationsEnabled
                ? mr(this._config.exitAnimationDuration) ?? 75
                : 0),
              (this._animationTimer = null),
              (this._finishDialogOpen = () => {
                this._clearAnimationClasses(),
                  this._openAnimationDone(this._openAnimationDuration);
              }),
              (this._finishDialogClose = () => {
                this._clearAnimationClasses(),
                  this._animationStateChanged.emit({
                    state: 'closed',
                    totalTime: this._closeAnimationDuration,
                  });
              });
          }
          _contentAttached() {
            super._contentAttached(), this._startOpenAnimation();
          }
          ngOnDestroy() {
            super.ngOnDestroy(),
              null !== this._animationTimer &&
                clearTimeout(this._animationTimer);
          }
          _startOpenAnimation() {
            this._animationStateChanged.emit({
              state: 'opening',
              totalTime: this._openAnimationDuration,
            }),
              this._animationsEnabled
                ? (this._hostElement.style.setProperty(
                    gr,
                    `${this._openAnimationDuration}ms`
                  ),
                  this._requestAnimationFrame(() =>
                    this._hostElement.classList.add(Wt, Ht)
                  ),
                  this._waitForAnimationToComplete(
                    this._openAnimationDuration,
                    this._finishDialogOpen
                  ))
                : (this._hostElement.classList.add(Ht),
                  Promise.resolve().then(() => this._finishDialogOpen()));
          }
          _startExitAnimation() {
            this._animationStateChanged.emit({
              state: 'closing',
              totalTime: this._closeAnimationDuration,
            }),
              this._hostElement.classList.remove(Ht),
              this._animationsEnabled
                ? (this._hostElement.style.setProperty(
                    gr,
                    `${this._openAnimationDuration}ms`
                  ),
                  this._requestAnimationFrame(() =>
                    this._hostElement.classList.add(Kn)
                  ),
                  this._waitForAnimationToComplete(
                    this._closeAnimationDuration,
                    this._finishDialogClose
                  ))
                : Promise.resolve().then(() => this._finishDialogClose());
          }
          _clearAnimationClasses() {
            this._hostElement.classList.remove(Wt, Kn);
          }
          _waitForAnimationToComplete(x, he) {
            null !== this._animationTimer && clearTimeout(this._animationTimer),
              (this._animationTimer = setTimeout(he, x));
          }
          _requestAnimationFrame(x) {
            this._ngZone.runOutsideAngular(() => {
              'function' == typeof requestAnimationFrame
                ? requestAnimationFrame(x)
                : x();
            });
          }
        }
        return (
          (re.ɵfac = function (x) {
            return new (x || re)(
              P.Y36(P.SBq),
              P.Y36(J.qV),
              P.Y36(D.K0, 8),
              P.Y36(_n),
              P.Y36(J.ic),
              P.Y36(P.R0b),
              P.Y36(p.Iu),
              P.Y36(P.QbO, 8),
              P.Y36(J.tE)
            );
          }),
          (re.ɵcmp = P.Xpm({
            type: re,
            selectors: [['mat-dialog-container']],
            hostAttrs: [
              'tabindex',
              '-1',
              1,
              'mat-mdc-dialog-container',
              'mdc-dialog',
            ],
            hostVars: 8,
            hostBindings: function (x, he) {
              2 & x &&
                (P.Ikx('id', he._config.id),
                P.uIk('aria-modal', he._config.ariaModal)(
                  'role',
                  he._config.role
                )(
                  'aria-labelledby',
                  he._config.ariaLabel ? null : he._ariaLabelledBy
                )('aria-label', he._config.ariaLabel)(
                  'aria-describedby',
                  he._config.ariaDescribedBy || null
                ),
                P.ekj('_mat-animation-noopable', !he._animationsEnabled));
            },
            features: [P.qOj],
            decls: 3,
            vars: 0,
            consts: [
              [1, 'mdc-dialog__container'],
              [1, 'mat-mdc-dialog-surface', 'mdc-dialog__surface'],
              ['cdkPortalOutlet', ''],
            ],
            template: function (x, he) {
              1 & x &&
                (P.TgZ(0, 'div', 0)(1, 'div', 1),
                P.YNc(2, Ut, 0, 0, 'ng-template', 2),
                P.qZA()());
            },
            dependencies: [ee.Pl],
            styles: [
              '.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:none}@media(max-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 112px)}}@media(max-width: 720px)and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:560px}}@media(max-width: 720px)and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media(max-width: 720px)and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media(max-width: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-height: 400px),(max-width: 600px),(min-width: 720px)and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(min-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;transform:scale(0.8);opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto;outline:0}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-dialog__surface::before{border-color:CanvasText}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.mdc-dialog__surface::before{content:none}}.mdc-dialog__title{display:block;margin-top:0;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid rgba(0,0,0,0);display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}@media screen and (forced-colors: active){.mdc-dialog--fullscreen .mdc-dialog__header{border-bottom-color:CanvasText}}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--fullscreen--titleless .mdc-dialog__close{margin-top:4px}.mdc-dialog--fullscreen--titleless.mdc-dialog--scrollable .mdc-dialog__close{margin-top:0}.mdc-dialog__content{flex-grow:1;box-sizing:border-box;margin:0;overflow:auto}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{transform:none;opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity 150ms linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%;z-index:1}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}.mdc-dialog--no-content-padding .mdc-dialog__content{padding:0}.mdc-dialog--sheet .mdc-dialog__container .mdc-dialog__close{right:12px;top:9px;position:absolute;z-index:1}.mdc-dialog__scrim--removed{pointer-events:none}.mdc-dialog__scrim--removed .mdc-dialog__scrim,.mdc-dialog__scrim--removed .mdc-dialog__surface-scrim{display:none}.mat-mdc-dialog-content{max-height:65vh}.mat-mdc-dialog-container{position:static;display:block}.mat-mdc-dialog-container,.mat-mdc-dialog-container .mdc-dialog__container,.mat-mdc-dialog-container .mdc-dialog__surface{max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mat-mdc-dialog-container .mdc-dialog__surface{display:block;width:100%;height:100%}.mat-mdc-dialog-container{--mdc-dialog-container-elevation-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);--mdc-dialog-container-shadow-color:#000;--mdc-dialog-container-shape:4px;--mdc-dialog-container-elevation: var(--mdc-dialog-container-elevation-shadow);outline:0}.mat-mdc-dialog-container .mdc-dialog__surface{background-color:var(--mdc-dialog-container-color, white)}.mat-mdc-dialog-container .mdc-dialog__surface{box-shadow:var(--mdc-dialog-container-elevation, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}.mat-mdc-dialog-container .mdc-dialog__surface{border-radius:var(--mdc-dialog-container-shape, 4px)}.mat-mdc-dialog-container .mdc-dialog__title{font-family:var(--mdc-dialog-subhead-font, Roboto, sans-serif);line-height:var(--mdc-dialog-subhead-line-height, 1.5rem);font-size:var(--mdc-dialog-subhead-size, 1rem);font-weight:var(--mdc-dialog-subhead-weight, 400);letter-spacing:var(--mdc-dialog-subhead-tracking, 0.03125em)}.mat-mdc-dialog-container .mdc-dialog__title{color:var(--mdc-dialog-subhead-color, rgba(0, 0, 0, 0.87))}.mat-mdc-dialog-container .mdc-dialog__content{font-family:var(--mdc-dialog-supporting-text-font, Roboto, sans-serif);line-height:var(--mdc-dialog-supporting-text-line-height, 1.5rem);font-size:var(--mdc-dialog-supporting-text-size, 1rem);font-weight:var(--mdc-dialog-supporting-text-weight, 400);letter-spacing:var(--mdc-dialog-supporting-text-tracking, 0.03125em)}.mat-mdc-dialog-container .mdc-dialog__content{color:var(--mdc-dialog-supporting-text-color, rgba(0, 0, 0, 0.6))}.mat-mdc-dialog-container .mdc-dialog__container{transition-duration:var(--mat-dialog-transition-duration, 0ms)}.mat-mdc-dialog-container._mat-animation-noopable .mdc-dialog__container{transition:none}.mat-mdc-dialog-content{display:block}.mat-mdc-dialog-actions{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}',
            ],
            encapsulation: 2,
          })),
          re
        );
      })();
      class kr {
        constructor(I, x, he) {
          (this._ref = I),
            (this._containerInstance = he),
            (this._afterOpened = new Te.x()),
            (this._beforeClosed = new Te.x()),
            (this._state = 0),
            (this.disableClose = x.disableClose),
            (this.id = I.id),
            he._animationStateChanged
              .pipe(
                (0, oe.h)((ze) => 'opened' === ze.state),
                (0, le.q)(1)
              )
              .subscribe(() => {
                this._afterOpened.next(), this._afterOpened.complete();
              }),
            he._animationStateChanged
              .pipe(
                (0, oe.h)((ze) => 'closed' === ze.state),
                (0, le.q)(1)
              )
              .subscribe(() => {
                clearTimeout(this._closeFallbackTimeout),
                  this._finishDialogClose();
              }),
            I.overlayRef.detachments().subscribe(() => {
              this._beforeClosed.next(this._result),
                this._beforeClosed.complete(),
                this._finishDialogClose();
            }),
            (0, de.T)(
              this.backdropClick(),
              this.keydownEvents().pipe(
                (0, oe.h)(
                  (ze) =>
                    ze.keyCode === Le.hY &&
                    !this.disableClose &&
                    !(0, Le.Vb)(ze)
                )
              )
            ).subscribe((ze) => {
              this.disableClose ||
                (ze.preventDefault(),
                (function K(re, I, x) {
                  (re._closeInteractionType = I), re.close(x);
                })(this, 'keydown' === ze.type ? 'keyboard' : 'mouse'));
            });
        }
        close(I) {
          (this._result = I),
            this._containerInstance._animationStateChanged
              .pipe(
                (0, oe.h)((x) => 'closing' === x.state),
                (0, le.q)(1)
              )
              .subscribe((x) => {
                this._beforeClosed.next(I),
                  this._beforeClosed.complete(),
                  this._ref.overlayRef.detachBackdrop(),
                  (this._closeFallbackTimeout = setTimeout(
                    () => this._finishDialogClose(),
                    x.totalTime + 100
                  ));
              }),
            (this._state = 1),
            this._containerInstance._startExitAnimation();
        }
        afterOpened() {
          return this._afterOpened;
        }
        afterClosed() {
          return this._ref.closed;
        }
        beforeClosed() {
          return this._beforeClosed;
        }
        backdropClick() {
          return this._ref.backdropClick;
        }
        keydownEvents() {
          return this._ref.keydownEvents;
        }
        updatePosition(I) {
          let x = this._ref.config.positionStrategy;
          return (
            I && (I.left || I.right)
              ? I.left
                ? x.left(I.left)
                : x.right(I.right)
              : x.centerHorizontally(),
            I && (I.top || I.bottom)
              ? I.top
                ? x.top(I.top)
                : x.bottom(I.bottom)
              : x.centerVertically(),
            this._ref.updatePosition(),
            this
          );
        }
        updateSize(I = '', x = '') {
          return this._ref.updateSize(I, x), this;
        }
        addPanelClass(I) {
          return this._ref.addPanelClass(I), this;
        }
        removePanelClass(I) {
          return this._ref.removePanelClass(I), this;
        }
        getState() {
          return this._state;
        }
        _finishDialogClose() {
          (this._state = 2),
            this._ref.close(this._result, {
              focusOrigin: this._closeInteractionType,
            }),
            (this.componentInstance = null);
        }
      }
      const y = new P.OlP('MatMdcDialogData'),
        b = new P.OlP('mat-mdc-dialog-default-options'),
        F = new P.OlP('mat-mdc-dialog-scroll-strategy'),
        fe = {
          provide: F,
          deps: [p.aV],
          useFactory: function V(re) {
            return () => re.scrollStrategies.block();
          },
        };
      let nt = 0,
        gt = (() => {
          class re {
            get openDialogs() {
              return this._parentDialog
                ? this._parentDialog.openDialogs
                : this._openDialogsAtThisLevel;
            }
            get afterOpened() {
              return this._parentDialog
                ? this._parentDialog.afterOpened
                : this._afterOpenedAtThisLevel;
            }
            _getAfterAllClosed() {
              const x = this._parentDialog;
              return x
                ? x._getAfterAllClosed()
                : this._afterAllClosedAtThisLevel;
            }
            constructor(x, he, ze, Mt, dt, Ge, mt, Ft, Yt, Fn) {
              (this._overlay = x),
                (this._defaultOptions = ze),
                (this._parentDialog = Mt),
                (this._dialogRefConstructor = mt),
                (this._dialogContainerType = Ft),
                (this._dialogDataToken = Yt),
                (this._openDialogsAtThisLevel = []),
                (this._afterAllClosedAtThisLevel = new Te.x()),
                (this._afterOpenedAtThisLevel = new Te.x()),
                (this._idPrefix = 'mat-dialog-'),
                (this.dialogConfigClass = _n),
                (this.afterAllClosed = (0, $.P)(() =>
                  this.openDialogs.length
                    ? this._getAfterAllClosed()
                    : this._getAfterAllClosed().pipe((0, Ve.O)(void 0))
                )),
                (this._scrollStrategy = Ge),
                (this._dialog = he.get(Y.Vq));
            }
            open(x, he) {
              let ze;
              ((he = { ...(this._defaultOptions || new _n()), ...he }).id =
                he.id || `${this._idPrefix}${nt++}`),
                (he.scrollStrategy =
                  he.scrollStrategy || this._scrollStrategy());
              const Mt = this._dialog.open(x, {
                ...he,
                positionStrategy: this._overlay
                  .position()
                  .global()
                  .centerHorizontally()
                  .centerVertically(),
                disableClose: !0,
                closeOnDestroy: !1,
                closeOnOverlayDetachments: !1,
                container: {
                  type: this._dialogContainerType,
                  providers: () => [
                    { provide: this.dialogConfigClass, useValue: he },
                    { provide: Y.ib, useValue: he },
                  ],
                },
                templateContext: () => ({ dialogRef: ze }),
                providers: (dt, Ge, mt) => (
                  (ze = new this._dialogRefConstructor(dt, he, mt)),
                  ze.updatePosition(he?.position),
                  [
                    { provide: this._dialogContainerType, useValue: mt },
                    { provide: this._dialogDataToken, useValue: Ge.data },
                    { provide: this._dialogRefConstructor, useValue: ze },
                  ]
                ),
              });
              return (
                (ze.componentInstance = Mt.componentInstance),
                this.openDialogs.push(ze),
                this.afterOpened.next(ze),
                ze.afterClosed().subscribe(() => {
                  const dt = this.openDialogs.indexOf(ze);
                  dt > -1 &&
                    (this.openDialogs.splice(dt, 1),
                    this.openDialogs.length ||
                      this._getAfterAllClosed().next());
                }),
                ze
              );
            }
            closeAll() {
              this._closeDialogs(this.openDialogs);
            }
            getDialogById(x) {
              return this.openDialogs.find((he) => he.id === x);
            }
            ngOnDestroy() {
              this._closeDialogs(this._openDialogsAtThisLevel),
                this._afterAllClosedAtThisLevel.complete(),
                this._afterOpenedAtThisLevel.complete();
            }
            _closeDialogs(x) {
              let he = x.length;
              for (; he--; ) x[he].close();
            }
          }
          return (
            (re.ɵfac = function (x) {
              P.$Z();
            }),
            (re.ɵprov = P.Yz7({ token: re, factory: re.ɵfac })),
            re
          );
        })(),
        yt = (() => {
          class re extends gt {
            constructor(x, he, ze, Mt, dt, Ge, mt, Ft) {
              super(x, he, Mt, Ge, mt, dt, kr, Gr, y, Ft),
                (this._idPrefix = 'mat-mdc-dialog-');
            }
          }
          return (
            (re.ɵfac = function (x) {
              return new (x || re)(
                P.LFG(p.aV),
                P.LFG(P.zs3),
                P.LFG(D.Ye, 8),
                P.LFG(b, 8),
                P.LFG(F),
                P.LFG(re, 12),
                P.LFG(p.Xj),
                P.LFG(P.QbO, 8)
              );
            }),
            (re.ɵprov = P.Yz7({ token: re, factory: re.ɵfac })),
            re
          );
        })(),
        pn = (() => {
          class re {}
          return (
            (re.ɵfac = function (x) {
              return new (x || re)();
            }),
            (re.ɵmod = P.oAB({ type: re })),
            (re.ɵinj = P.cJS({
              providers: [yt, fe],
              imports: [Y.Su, p.U8, ee.eL, De, De],
            })),
            re
          );
        })();
    },
    6550: (Je, me, C) => {
      C.d(me, { Cg: () => Tt, Dx: () => jn });
      var p = C(9523),
        D = C(4755);
      class P extends D.w_ {
        constructor() {
          super(...arguments), (this.supportsDOMEvents = !0);
        }
      }
      class J extends P {
        static makeCurrent() {
          (0, D.HT)(new J());
        }
        onAndCancel(X, k, pe) {
          return (
            X.addEventListener(k, pe),
            () => {
              X.removeEventListener(k, pe);
            }
          );
        }
        dispatchEvent(X, k) {
          X.dispatchEvent(k);
        }
        remove(X) {
          X.parentNode && X.parentNode.removeChild(X);
        }
        createElement(X, k) {
          return (k = k || this.getDefaultDocument()).createElement(X);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument('fakeTitle');
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(X) {
          return X.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(X) {
          return X instanceof DocumentFragment;
        }
        getGlobalEventTarget(X, k) {
          return 'window' === k
            ? window
            : 'document' === k
            ? X
            : 'body' === k
            ? X.body
            : null;
        }
        getBaseHref(X) {
          const k = (function H() {
            return (
              (Y = Y || document.querySelector('base')),
              Y ? Y.getAttribute('href') : null
            );
          })();
          return null == k
            ? null
            : (function Te(we) {
                (ee = ee || document.createElement('a')),
                  ee.setAttribute('href', we);
                const X = ee.pathname;
                return '/' === X.charAt(0) ? X : `/${X}`;
              })(k);
        }
        resetBaseElement() {
          Y = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        getCookie(X) {
          return (0, D.Mx)(document.cookie, X);
        }
      }
      let ee,
        Y = null,
        $ = (() => {
          class we {
            build() {
              return new XMLHttpRequest();
            }
          }
          return (
            (we.ɵfac = function (k) {
              return new (k || we)();
            }),
            (we.ɵprov = p.Yz7({ token: we, factory: we.ɵfac })),
            we
          );
        })();
      const oe = new p.OlP('EventManagerPlugins');
      let le = (() => {
        class we {
          constructor(k, pe) {
            (this._zone = pe),
              (this._eventNameToPlugin = new Map()),
              k.forEach((Re) => {
                Re.manager = this;
              }),
              (this._plugins = k.slice().reverse());
          }
          addEventListener(k, pe, Re) {
            return this._findPluginFor(pe).addEventListener(k, pe, Re);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(k) {
            let pe = this._eventNameToPlugin.get(k);
            if (pe) return pe;
            if (((pe = this._plugins.find((U) => U.supports(k))), !pe))
              throw new p.vHH(5101, !1);
            return this._eventNameToPlugin.set(k, pe), pe;
          }
        }
        return (
          (we.ɵfac = function (k) {
            return new (k || we)(p.LFG(oe), p.LFG(p.R0b));
          }),
          (we.ɵprov = p.Yz7({ token: we, factory: we.ɵfac })),
          we
        );
      })();
      class Ve {
        constructor(X) {
          this._doc = X;
        }
      }
      const Le = 'ng-app-id';
      let et = (() => {
        class we {
          constructor(k, pe, Re, U = {}) {
            (this.doc = k),
              (this.appId = pe),
              (this.nonce = Re),
              (this.platformId = U),
              (this.styleRef = new Map()),
              (this.hostNodes = new Set()),
              (this.styleNodesInDOM = this.collectServerRenderedStyles()),
              (this.platformIsServer = (0, D.PM)(U)),
              this.resetHostNodes();
          }
          addStyles(k) {
            for (const pe of k)
              1 === this.changeUsageCount(pe, 1) && this.onStyleAdded(pe);
          }
          removeStyles(k) {
            for (const pe of k)
              this.changeUsageCount(pe, -1) <= 0 && this.onStyleRemoved(pe);
          }
          ngOnDestroy() {
            const k = this.styleNodesInDOM;
            k && (k.forEach((pe) => pe.remove()), k.clear());
            for (const pe of this.getAllStyles()) this.onStyleRemoved(pe);
            this.resetHostNodes();
          }
          addHost(k) {
            this.hostNodes.add(k);
            for (const pe of this.getAllStyles()) this.addStyleToHost(k, pe);
          }
          removeHost(k) {
            this.hostNodes.delete(k);
          }
          getAllStyles() {
            return this.styleRef.keys();
          }
          onStyleAdded(k) {
            for (const pe of this.hostNodes) this.addStyleToHost(pe, k);
          }
          onStyleRemoved(k) {
            const pe = this.styleRef;
            pe.get(k)?.elements?.forEach((Re) => Re.remove()), pe.delete(k);
          }
          collectServerRenderedStyles() {
            const k = this.doc.head?.querySelectorAll(
              `style[${Le}="${this.appId}"]`
            );
            if (k?.length) {
              const pe = new Map();
              return (
                k.forEach((Re) => {
                  null != Re.textContent && pe.set(Re.textContent, Re);
                }),
                pe
              );
            }
            return null;
          }
          changeUsageCount(k, pe) {
            const Re = this.styleRef;
            if (Re.has(k)) {
              const U = Re.get(k);
              return (U.usage += pe), U.usage;
            }
            return Re.set(k, { usage: pe, elements: [] }), pe;
          }
          getStyleElement(k, pe) {
            const Re = this.styleNodesInDOM,
              U = Re?.get(pe);
            if (U?.parentNode === k)
              return Re.delete(pe), U.removeAttribute(Le), U;
            {
              const O = this.doc.createElement('style');
              return (
                this.nonce && O.setAttribute('nonce', this.nonce),
                (O.textContent = pe),
                this.platformIsServer && O.setAttribute(Le, this.appId),
                O
              );
            }
          }
          addStyleToHost(k, pe) {
            const Re = this.getStyleElement(k, pe);
            k.appendChild(Re);
            const U = this.styleRef,
              O = U.get(pe)?.elements;
            O ? O.push(Re) : U.set(pe, { elements: [Re], usage: 1 });
          }
          resetHostNodes() {
            const k = this.hostNodes;
            k.clear(), k.add(this.doc.head);
          }
        }
        return (
          (we.ɵfac = function (k) {
            return new (k || we)(
              p.LFG(D.K0),
              p.LFG(p.AFp),
              p.LFG(p.Ojb, 8),
              p.LFG(p.Lbi)
            );
          }),
          (we.ɵprov = p.Yz7({ token: we, factory: we.ɵfac })),
          we
        );
      })();
      const xe = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/',
          math: 'http://www.w3.org/1998/MathML/',
        },
        Xe = /%COMP%/g,
        ne = new p.OlP('RemoveStylesOnCompDestory', {
          providedIn: 'root',
          factory: () => !1,
        });
      function _e(we, X) {
        return X.map((k) => k.replace(Xe, we));
      }
      let ye = (() => {
        class we {
          constructor(k, pe, Re, U, O, B, Ce, be = null) {
            (this.eventManager = k),
              (this.sharedStylesHost = pe),
              (this.appId = Re),
              (this.removeStylesOnCompDestory = U),
              (this.doc = O),
              (this.platformId = B),
              (this.ngZone = Ce),
              (this.nonce = be),
              (this.rendererByCompId = new Map()),
              (this.platformIsServer = (0, D.PM)(B)),
              (this.defaultRenderer = new Ie(k, O, Ce, this.platformIsServer));
          }
          createRenderer(k, pe) {
            if (!k || !pe) return this.defaultRenderer;
            this.platformIsServer &&
              pe.encapsulation === p.ifc.ShadowDom &&
              (pe = { ...pe, encapsulation: p.ifc.Emulated });
            const Re = this.getOrCreateRenderer(k, pe);
            return (
              Re instanceof W
                ? Re.applyToHost(k)
                : Re instanceof z && Re.applyStyles(),
              Re
            );
          }
          getOrCreateRenderer(k, pe) {
            const Re = this.rendererByCompId;
            let U = Re.get(pe.id);
            if (!U) {
              const O = this.doc,
                B = this.ngZone,
                Ce = this.eventManager,
                be = this.sharedStylesHost,
                We = this.removeStylesOnCompDestory,
                $e = this.platformIsServer;
              switch (pe.encapsulation) {
                case p.ifc.Emulated:
                  U = new W(Ce, be, pe, this.appId, We, O, B, $e);
                  break;
                case p.ifc.ShadowDom:
                  return new De(Ce, be, k, pe, O, B, this.nonce, $e);
                default:
                  U = new z(Ce, be, pe, We, O, B, $e);
              }
              (U.onDestroy = () => Re.delete(pe.id)), Re.set(pe.id, U);
            }
            return U;
          }
          ngOnDestroy() {
            this.rendererByCompId.clear();
          }
        }
        return (
          (we.ɵfac = function (k) {
            return new (k || we)(
              p.LFG(le),
              p.LFG(et),
              p.LFG(p.AFp),
              p.LFG(ne),
              p.LFG(D.K0),
              p.LFG(p.Lbi),
              p.LFG(p.R0b),
              p.LFG(p.Ojb)
            );
          }),
          (we.ɵprov = p.Yz7({ token: we, factory: we.ɵfac })),
          we
        );
      })();
      class Ie {
        constructor(X, k, pe, Re) {
          (this.eventManager = X),
            (this.doc = k),
            (this.ngZone = pe),
            (this.platformIsServer = Re),
            (this.data = Object.create(null)),
            (this.destroyNode = null);
        }
        destroy() {}
        createElement(X, k) {
          return k
            ? this.doc.createElementNS(xe[k] || k, X)
            : this.doc.createElement(X);
        }
        createComment(X) {
          return this.doc.createComment(X);
        }
        createText(X) {
          return this.doc.createTextNode(X);
        }
        appendChild(X, k) {
          (Ne(X) ? X.content : X).appendChild(k);
        }
        insertBefore(X, k, pe) {
          X && (Ne(X) ? X.content : X).insertBefore(k, pe);
        }
        removeChild(X, k) {
          X && X.removeChild(k);
        }
        selectRootElement(X, k) {
          let pe = 'string' == typeof X ? this.doc.querySelector(X) : X;
          if (!pe) throw new p.vHH(5104, !1);
          return k || (pe.textContent = ''), pe;
        }
        parentNode(X) {
          return X.parentNode;
        }
        nextSibling(X) {
          return X.nextSibling;
        }
        setAttribute(X, k, pe, Re) {
          if (Re) {
            k = Re + ':' + k;
            const U = xe[Re];
            U ? X.setAttributeNS(U, k, pe) : X.setAttribute(k, pe);
          } else X.setAttribute(k, pe);
        }
        removeAttribute(X, k, pe) {
          if (pe) {
            const Re = xe[pe];
            Re ? X.removeAttributeNS(Re, k) : X.removeAttribute(`${pe}:${k}`);
          } else X.removeAttribute(k);
        }
        addClass(X, k) {
          X.classList.add(k);
        }
        removeClass(X, k) {
          X.classList.remove(k);
        }
        setStyle(X, k, pe, Re) {
          Re & (p.JOm.DashCase | p.JOm.Important)
            ? X.style.setProperty(
                k,
                pe,
                Re & p.JOm.Important ? 'important' : ''
              )
            : (X.style[k] = pe);
        }
        removeStyle(X, k, pe) {
          pe & p.JOm.DashCase ? X.style.removeProperty(k) : (X.style[k] = '');
        }
        setProperty(X, k, pe) {
          X[k] = pe;
        }
        setValue(X, k) {
          X.nodeValue = k;
        }
        listen(X, k, pe) {
          if (
            'string' == typeof X &&
            !(X = (0, D.q)().getGlobalEventTarget(this.doc, X))
          )
            throw new Error(`Unsupported event target ${X} for event ${k}`);
          return this.eventManager.addEventListener(
            X,
            k,
            this.decoratePreventDefault(pe)
          );
        }
        decoratePreventDefault(X) {
          return (k) => {
            if ('__ngUnwrap__' === k) return X;
            !1 ===
              (this.platformIsServer
                ? this.ngZone.runGuarded(() => X(k))
                : X(k)) && k.preventDefault();
          };
        }
      }
      function Ne(we) {
        return 'TEMPLATE' === we.tagName && void 0 !== we.content;
      }
      class De extends Ie {
        constructor(X, k, pe, Re, U, O, B, Ce) {
          super(X, U, O, Ce),
            (this.sharedStylesHost = k),
            (this.hostEl = pe),
            (this.shadowRoot = pe.attachShadow({ mode: 'open' })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const be = _e(Re.id, Re.styles);
          for (const We of be) {
            const $e = document.createElement('style');
            B && $e.setAttribute('nonce', B),
              ($e.textContent = We),
              this.shadowRoot.appendChild($e);
          }
        }
        nodeOrShadowRoot(X) {
          return X === this.hostEl ? this.shadowRoot : X;
        }
        appendChild(X, k) {
          return super.appendChild(this.nodeOrShadowRoot(X), k);
        }
        insertBefore(X, k, pe) {
          return super.insertBefore(this.nodeOrShadowRoot(X), k, pe);
        }
        removeChild(X, k) {
          return super.removeChild(this.nodeOrShadowRoot(X), k);
        }
        parentNode(X) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(X))
          );
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
      }
      class z extends Ie {
        constructor(X, k, pe, Re, U, O, B, Ce) {
          super(X, U, O, B),
            (this.sharedStylesHost = k),
            (this.removeStylesOnCompDestory = Re),
            (this.rendererUsageCount = 0),
            (this.styles = Ce ? _e(Ce, pe.styles) : pe.styles);
        }
        applyStyles() {
          this.sharedStylesHost.addStyles(this.styles),
            this.rendererUsageCount++;
        }
        destroy() {
          this.removeStylesOnCompDestory &&
            (this.sharedStylesHost.removeStyles(this.styles),
            this.rendererUsageCount--,
            0 === this.rendererUsageCount && this.onDestroy?.());
        }
      }
      class W extends z {
        constructor(X, k, pe, Re, U, O, B, Ce) {
          const be = Re + '-' + pe.id;
          super(X, k, pe, U, O, B, Ce, be),
            (this.contentAttr = (function se(we) {
              return '_ngcontent-%COMP%'.replace(Xe, we);
            })(be)),
            (this.hostAttr = (function ce(we) {
              return '_nghost-%COMP%'.replace(Xe, we);
            })(be));
        }
        applyToHost(X) {
          this.applyStyles(), this.setAttribute(X, this.hostAttr, '');
        }
        createElement(X, k) {
          const pe = super.createElement(X, k);
          return super.setAttribute(pe, this.contentAttr, ''), pe;
        }
      }
      let ae = (() => {
        class we extends Ve {
          constructor(k) {
            super(k);
          }
          supports(k) {
            return !0;
          }
          addEventListener(k, pe, Re) {
            return (
              k.addEventListener(pe, Re, !1),
              () => this.removeEventListener(k, pe, Re)
            );
          }
          removeEventListener(k, pe, Re) {
            return k.removeEventListener(pe, Re);
          }
        }
        return (
          (we.ɵfac = function (k) {
            return new (k || we)(p.LFG(D.K0));
          }),
          (we.ɵprov = p.Yz7({ token: we, factory: we.ɵfac })),
          we
        );
      })();
      const Me = ['alt', 'control', 'meta', 'shift'],
        je = {
          '\b': 'Backspace',
          '\t': 'Tab',
          '\x7f': 'Delete',
          '\x1b': 'Escape',
          Del: 'Delete',
          Esc: 'Escape',
          Left: 'ArrowLeft',
          Right: 'ArrowRight',
          Up: 'ArrowUp',
          Down: 'ArrowDown',
          Menu: 'ContextMenu',
          Scroll: 'ScrollLock',
          Win: 'OS',
        },
        Ue = {
          alt: (we) => we.altKey,
          control: (we) => we.ctrlKey,
          meta: (we) => we.metaKey,
          shift: (we) => we.shiftKey,
        };
      let ot = (() => {
        class we extends Ve {
          constructor(k) {
            super(k);
          }
          supports(k) {
            return null != we.parseEventName(k);
          }
          addEventListener(k, pe, Re) {
            const U = we.parseEventName(pe),
              O = we.eventCallback(U.fullKey, Re, this.manager.getZone());
            return this.manager
              .getZone()
              .runOutsideAngular(() =>
                (0, D.q)().onAndCancel(k, U.domEventName, O)
              );
          }
          static parseEventName(k) {
            const pe = k.toLowerCase().split('.'),
              Re = pe.shift();
            if (0 === pe.length || ('keydown' !== Re && 'keyup' !== Re))
              return null;
            const U = we._normalizeKey(pe.pop());
            let O = '',
              B = pe.indexOf('code');
            if (
              (B > -1 && (pe.splice(B, 1), (O = 'code.')),
              Me.forEach((be) => {
                const We = pe.indexOf(be);
                We > -1 && (pe.splice(We, 1), (O += be + '.'));
              }),
              (O += U),
              0 != pe.length || 0 === U.length)
            )
              return null;
            const Ce = {};
            return (Ce.domEventName = Re), (Ce.fullKey = O), Ce;
          }
          static matchEventFullKeyCode(k, pe) {
            let Re = je[k.key] || k.key,
              U = '';
            return (
              pe.indexOf('code.') > -1 && ((Re = k.code), (U = 'code.')),
              !(null == Re || !Re) &&
                ((Re = Re.toLowerCase()),
                ' ' === Re ? (Re = 'space') : '.' === Re && (Re = 'dot'),
                Me.forEach((O) => {
                  O !== Re && (0, Ue[O])(k) && (U += O + '.');
                }),
                (U += Re),
                U === pe)
            );
          }
          static eventCallback(k, pe, Re) {
            return (U) => {
              we.matchEventFullKeyCode(U, k) && Re.runGuarded(() => pe(U));
            };
          }
          static _normalizeKey(k) {
            return 'esc' === k ? 'escape' : k;
          }
        }
        return (
          (we.ɵfac = function (k) {
            return new (k || we)(p.LFG(D.K0));
          }),
          (we.ɵprov = p.Yz7({ token: we, factory: we.ɵfac })),
          we
        );
      })();
      function Tt(we, X) {
        return (0, p.iPO)({ rootComponent: we, ...ht(X) });
      }
      function ht(we) {
        return {
          appProviders: [...hr, ...(we?.providers ?? [])],
          platformProviders: cn,
        };
      }
      const cn = [
          { provide: p.Lbi, useValue: D.bD },
          {
            provide: p.g9A,
            useValue: function ct() {
              J.makeCurrent();
            },
            multi: !0,
          },
          {
            provide: D.K0,
            useFactory: function st() {
              return (0, p.RDi)(document), document;
            },
            deps: [],
          },
        ],
        hr = [
          { provide: p.zSh, useValue: 'root' },
          {
            provide: p.qLn,
            useFactory: function qt() {
              return new p.qLn();
            },
            deps: [],
          },
          { provide: oe, useClass: ae, multi: !0, deps: [D.K0, p.R0b, p.Lbi] },
          { provide: oe, useClass: ot, multi: !0, deps: [D.K0] },
          ye,
          et,
          le,
          { provide: p.FYo, useExisting: ye },
          { provide: D.JF, useClass: $, deps: [] },
          [],
        ];
      let jn = (() => {
        class we {
          constructor(k) {
            this._doc = k;
          }
          getTitle() {
            return this._doc.title;
          }
          setTitle(k) {
            this._doc.title = k || '';
          }
        }
        return (
          (we.ɵfac = function (k) {
            return new (k || we)(p.LFG(D.K0));
          }),
          (we.ɵprov = p.Yz7({
            token: we,
            factory: function (k) {
              let pe = null;
              return (
                (pe = k
                  ? new k()
                  : (function Sn() {
                      return new jn((0, p.LFG)(D.K0));
                    })()),
                pe
              );
            },
            providedIn: 'root',
          })),
          we
        );
      })();
      typeof window < 'u' && window;
    },
    2008: (Je, me, C) => {
      C.d(me, {
        gz: () => Fn,
        gk: () => V,
        m2: () => F,
        Q3: () => Fe,
        OD: () => b,
        wm: () => Ll,
        F0: () => Cn,
        rH: () => Pr,
        Bz: () => _a,
        lC: () => wr,
        bU: () => Gn,
        aF: () => ma,
      });
      var p = C(9523),
        D = C(9751),
        P = C(576),
        Y = C(2076),
        H = C(9646),
        ee = C(1135),
        Te = C(9841),
        de = C(6805),
        $ = C(7272),
        oe = C(9770),
        le = C(9635);
      function Ve(l, u) {
        const a = (0, P.m)(l) ? l : () => l,
          h = (v) => v.error(a());
        return new D.y(u ? (v) => u.schedule(h, 0, v) : h);
      }
      var Le = C(515),
        et = C(727),
        xe = C(4482),
        Xe = C(5403);
      function Ye() {
        return (0, xe.e)((l, u) => {
          let a = null;
          l._refCount++;
          const h = (0, Xe.x)(u, void 0, void 0, void 0, () => {
            if (!l || l._refCount <= 0 || 0 < --l._refCount)
              return void (a = null);
            const v = l._connection,
              M = a;
            (a = null),
              v && (!M || v === M) && v.unsubscribe(),
              u.unsubscribe();
          });
          l.subscribe(h), h.closed || (a = l.connect());
        });
      }
      class pt extends D.y {
        constructor(u, a) {
          super(),
            (this.source = u),
            (this.subjectFactory = a),
            (this._subject = null),
            (this._refCount = 0),
            (this._connection = null),
            (0, xe.A)(u) && (this.lift = u.lift);
        }
        _subscribe(u) {
          return this.getSubject().subscribe(u);
        }
        getSubject() {
          const u = this._subject;
          return (
            (!u || u.isStopped) && (this._subject = this.subjectFactory()),
            this._subject
          );
        }
        _teardown() {
          this._refCount = 0;
          const { _connection: u } = this;
          (this._subject = this._connection = null), u?.unsubscribe();
        }
        connect() {
          let u = this._connection;
          if (!u) {
            u = this._connection = new et.w0();
            const a = this.getSubject();
            u.add(
              this.source.subscribe(
                (0, Xe.x)(
                  a,
                  void 0,
                  () => {
                    this._teardown(), a.complete();
                  },
                  (h) => {
                    this._teardown(), a.error(h);
                  },
                  () => this._teardown()
                )
              )
            ),
              u.closed && ((this._connection = null), (u = et.w0.EMPTY));
          }
          return u;
        }
        refCount() {
          return Ye()(this);
        }
      }
      var qe = C(7579),
        ue = C(4755),
        ne = C(4004),
        se = C(3900),
        ce = C(5698),
        _e = C(8675),
        ye = C(9300),
        Ie = C(5577);
      function Ee(l) {
        return (0, xe.e)((u, a) => {
          let h = !1;
          u.subscribe(
            (0, Xe.x)(
              a,
              (v) => {
                (h = !0), a.next(v);
              },
              () => {
                h || a.next(l), a.complete();
              }
            )
          );
        });
      }
      function te(l = Ne) {
        return (0, xe.e)((u, a) => {
          let h = !1;
          u.subscribe(
            (0, Xe.x)(
              a,
              (v) => {
                (h = !0), a.next(v);
              },
              () => (h ? a.complete() : a.error(l()))
            )
          );
        });
      }
      function Ne() {
        return new de.K();
      }
      var De = C(4671);
      function z(l, u) {
        const a = arguments.length >= 2;
        return (h) =>
          h.pipe(
            l ? (0, ye.h)((v, M) => l(v, M, h)) : De.y,
            (0, ce.q)(1),
            a ? Ee(u) : te(() => new de.K())
          );
      }
      var W = C(4351);
      function ae(l, u, a) {
        const h =
          (0, P.m)(l) || u || a ? { next: l, error: u, complete: a } : l;
        return h
          ? (0, xe.e)((v, M) => {
              var S;
              null === (S = h.subscribe) || void 0 === S || S.call(h);
              let q = !0;
              v.subscribe(
                (0, Xe.x)(
                  M,
                  (Oe) => {
                    var tt;
                    null === (tt = h.next) || void 0 === tt || tt.call(h, Oe),
                      M.next(Oe);
                  },
                  () => {
                    var Oe;
                    (q = !1),
                      null === (Oe = h.complete) || void 0 === Oe || Oe.call(h),
                      M.complete();
                  },
                  (Oe) => {
                    var tt;
                    (q = !1),
                      null === (tt = h.error) ||
                        void 0 === tt ||
                        tt.call(h, Oe),
                      M.error(Oe);
                  },
                  () => {
                    var Oe, tt;
                    q &&
                      (null === (Oe = h.unsubscribe) ||
                        void 0 === Oe ||
                        Oe.call(h)),
                      null === (tt = h.finalize) || void 0 === tt || tt.call(h);
                  }
                )
              );
            })
          : De.y;
      }
      var Me = C(8421);
      function je(l) {
        return (0, xe.e)((u, a) => {
          let M,
            h = null,
            v = !1;
          (h = u.subscribe(
            (0, Xe.x)(a, void 0, void 0, (S) => {
              (M = (0, Me.Xf)(l(S, je(l)(u)))),
                h ? (h.unsubscribe(), (h = null), M.subscribe(a)) : (v = !0);
            })
          )),
            v && (h.unsubscribe(), (h = null), M.subscribe(a));
        });
      }
      function Tt(l) {
        return l <= 0
          ? () => Le.E
          : (0, xe.e)((u, a) => {
              let h = [];
              u.subscribe(
                (0, Xe.x)(
                  a,
                  (v) => {
                    h.push(v), l < h.length && h.shift();
                  },
                  () => {
                    for (const v of h) a.next(v);
                    a.complete();
                  },
                  void 0,
                  () => {
                    h = null;
                  }
                )
              );
            });
      }
      var ht = C(9718);
      function St(l) {
        return (0, xe.e)((u, a) => {
          try {
            u.subscribe(a);
          } finally {
            a.add(l);
          }
        });
      }
      var ct = C(8189),
        qt = C(6550);
      const st = 'primary',
        cn = Symbol('RouteTitle');
      class It {
        constructor(u) {
          this.params = u || {};
        }
        has(u) {
          return Object.prototype.hasOwnProperty.call(this.params, u);
        }
        get(u) {
          if (this.has(u)) {
            const a = this.params[u];
            return Array.isArray(a) ? a[0] : a;
          }
          return null;
        }
        getAll(u) {
          if (this.has(u)) {
            const a = this.params[u];
            return Array.isArray(a) ? a : [a];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function zt(l) {
        return new It(l);
      }
      function dn(l, u, a) {
        const h = a.path.split('/');
        if (
          h.length > l.length ||
          ('full' === a.pathMatch && (u.hasChildren() || h.length < l.length))
        )
          return null;
        const v = {};
        for (let M = 0; M < h.length; M++) {
          const S = h[M],
            q = l[M];
          if (S.startsWith(':')) v[S.substring(1)] = q;
          else if (S !== q.path) return null;
        }
        return { consumed: l.slice(0, h.length), posParams: v };
      }
      function Kt(l, u) {
        const a = l ? Object.keys(l) : void 0,
          h = u ? Object.keys(u) : void 0;
        if (!a || !h || a.length != h.length) return !1;
        let v;
        for (let M = 0; M < a.length; M++)
          if (((v = a[M]), !Xn(l[v], u[v]))) return !1;
        return !0;
      }
      function Xn(l, u) {
        if (Array.isArray(l) && Array.isArray(u)) {
          if (l.length !== u.length) return !1;
          const a = [...l].sort(),
            h = [...u].sort();
          return a.every((v, M) => h[M] === v);
        }
        return l === u;
      }
      function nr(l) {
        return l.length > 0 ? l[l.length - 1] : null;
      }
      function kn(l) {
        return (function J(l) {
          return (
            !!l &&
            (l instanceof D.y || ((0, P.m)(l.lift) && (0, P.m)(l.subscribe)))
          );
        })(l)
          ? l
          : (0, p.QGY)(l)
          ? (0, Y.D)(Promise.resolve(l))
          : (0, H.of)(l);
      }
      const Sn = {
          exact: function Qe(l, u, a) {
            if (
              !Vt(l.segments, u.segments) ||
              !In(l.segments, u.segments, a) ||
              l.numberOfChildren !== u.numberOfChildren
            )
              return !1;
            for (const h in u.children)
              if (!l.children[h] || !Qe(l.children[h], u.children[h], a))
                return !1;
            return !0;
          },
          subset: vt,
        },
        jn = {
          exact: function En(l, u) {
            return Kt(l, u);
          },
          subset: function rt(l, u) {
            return (
              Object.keys(u).length <= Object.keys(l).length &&
              Object.keys(u).every((a) => Xn(l[a], u[a]))
            );
          },
          ignored: () => !0,
        };
      function vn(l, u, a) {
        return (
          Sn[a.paths](l.root, u.root, a.matrixParams) &&
          jn[a.queryParams](l.queryParams, u.queryParams) &&
          !('exact' === a.fragment && l.fragment !== u.fragment)
        );
      }
      function vt(l, u, a) {
        return Gt(l, u, u.segments, a);
      }
      function Gt(l, u, a, h) {
        if (l.segments.length > a.length) {
          const v = l.segments.slice(0, a.length);
          return !(!Vt(v, a) || u.hasChildren() || !In(v, a, h));
        }
        if (l.segments.length === a.length) {
          if (!Vt(l.segments, a) || !In(l.segments, a, h)) return !1;
          for (const v in u.children)
            if (!l.children[v] || !vt(l.children[v], u.children[v], h))
              return !1;
          return !0;
        }
        {
          const v = a.slice(0, l.segments.length),
            M = a.slice(l.segments.length);
          return (
            !!(Vt(l.segments, v) && In(l.segments, v, h) && l.children[st]) &&
            Gt(l.children[st], u, M, h)
          );
        }
      }
      function In(l, u, a) {
        return u.every((h, v) => jn[a](l[v].parameters, h.parameters));
      }
      class sn {
        constructor(u = new it([], {}), a = {}, h = null) {
          (this.root = u), (this.queryParams = a), (this.fragment = h);
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = zt(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return fr.serialize(this);
        }
      }
      class it {
        constructor(u, a) {
          (this.segments = u),
            (this.children = a),
            (this.parent = null),
            Object.values(a).forEach((h) => (h.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return Qn(this);
        }
      }
      class an {
        constructor(u, a) {
          (this.path = u), (this.parameters = a);
        }
        get parameterMap() {
          return (
            this._parameterMap || (this._parameterMap = zt(this.parameters)),
            this._parameterMap
          );
        }
        toString() {
          return Jn(this);
        }
      }
      function Vt(l, u) {
        return l.length === u.length && l.every((a, h) => a.path === u[h].path);
      }
      let wt = (() => {
        class l {}
        return (
          (l.ɵfac = function (a) {
            return new (a || l)();
          }),
          (l.ɵprov = p.Yz7({
            token: l,
            factory: function () {
              return new Vn();
            },
            providedIn: 'root',
          })),
          l
        );
      })();
      class Vn {
        parse(u) {
          const a = new Ce(u);
          return new sn(
            a.parseRootSegment(),
            a.parseQueryParams(),
            a.parseFragment()
          );
        }
        serialize(u) {
          const a = `/${Tn(u.root, !0)}`,
            h = (function rr(l) {
              const u = Object.keys(l)
                .map((a) => {
                  const h = l[a];
                  return Array.isArray(h)
                    ? h.map((v) => `${hn(a)}=${hn(v)}`).join('&')
                    : `${hn(a)}=${hn(h)}`;
                })
                .filter((a) => !!a);
              return u.length ? `?${u.join('&')}` : '';
            })(u.queryParams);
          return `${a}${h}${
            'string' == typeof u.fragment
              ? `#${(function pr(l) {
                  return encodeURI(l);
                })(u.fragment)}`
              : ''
          }`;
        }
      }
      const fr = new Vn();
      function Qn(l) {
        return l.segments.map((u) => Jn(u)).join('/');
      }
      function Tn(l, u) {
        if (!l.hasChildren()) return Qn(l);
        if (u) {
          const a = l.children[st] ? Tn(l.children[st], !1) : '',
            h = [];
          return (
            Object.entries(l.children).forEach(([v, M]) => {
              v !== st && h.push(`${v}:${Tn(M, !1)}`);
            }),
            h.length > 0 ? `${a}(${h.join('//')})` : a
          );
        }
        {
          const a = (function Bt(l, u) {
            let a = [];
            return (
              Object.entries(l.children).forEach(([h, v]) => {
                h === st && (a = a.concat(u(v, h)));
              }),
              Object.entries(l.children).forEach(([h, v]) => {
                h !== st && (a = a.concat(u(v, h)));
              }),
              a
            );
          })(l, (h, v) =>
            v === st ? [Tn(l.children[st], !1)] : [`${v}:${Tn(h, !1)}`]
          );
          return 1 === Object.keys(l.children).length && null != l.children[st]
            ? `${Qn(l)}/${a[0]}`
            : `${Qn(l)}/(${a.join('//')})`;
        }
      }
      function qn(l) {
        return encodeURIComponent(l)
          .replace(/%40/g, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',');
      }
      function hn(l) {
        return qn(l).replace(/%3B/gi, ';');
      }
      function fn(l) {
        return qn(l)
          .replace(/\(/g, '%28')
          .replace(/\)/g, '%29')
          .replace(/%26/gi, '&');
      }
      function wn(l) {
        return decodeURIComponent(l);
      }
      function tn(l) {
        return wn(l.replace(/\+/g, '%20'));
      }
      function Jn(l) {
        return `${fn(l.path)}${(function At(l) {
          return Object.keys(l)
            .map((u) => `;${fn(u)}=${fn(l[u])}`)
            .join('');
        })(l.parameters)}`;
      }
      const we = /^[^\/()?;#]+/;
      function X(l) {
        const u = l.match(we);
        return u ? u[0] : '';
      }
      const k = /^[^\/()?;=#]+/,
        Re = /^[^=?&#]+/,
        O = /^[^&#]+/;
      class Ce {
        constructor(u) {
          (this.url = u), (this.remaining = u);
        }
        parseRootSegment() {
          return (
            this.consumeOptional('/'),
            '' === this.remaining ||
            this.peekStartsWith('?') ||
            this.peekStartsWith('#')
              ? new it([], {})
              : new it([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const u = {};
          if (this.consumeOptional('?'))
            do {
              this.parseQueryParam(u);
            } while (this.consumeOptional('&'));
          return u;
        }
        parseFragment() {
          return this.consumeOptional('#')
            ? decodeURIComponent(this.remaining)
            : null;
        }
        parseChildren() {
          if ('' === this.remaining) return {};
          this.consumeOptional('/');
          const u = [];
          for (
            this.peekStartsWith('(') || u.push(this.parseSegment());
            this.peekStartsWith('/') &&
            !this.peekStartsWith('//') &&
            !this.peekStartsWith('/(');

          )
            this.capture('/'), u.push(this.parseSegment());
          let a = {};
          this.peekStartsWith('/(') &&
            (this.capture('/'), (a = this.parseParens(!0)));
          let h = {};
          return (
            this.peekStartsWith('(') && (h = this.parseParens(!1)),
            (u.length > 0 || Object.keys(a).length > 0) &&
              (h[st] = new it(u, a)),
            h
          );
        }
        parseSegment() {
          const u = X(this.remaining);
          if ('' === u && this.peekStartsWith(';')) throw new p.vHH(4009, !1);
          return this.capture(u), new an(wn(u), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const u = {};
          for (; this.consumeOptional(';'); ) this.parseParam(u);
          return u;
        }
        parseParam(u) {
          const a = (function pe(l) {
            const u = l.match(k);
            return u ? u[0] : '';
          })(this.remaining);
          if (!a) return;
          this.capture(a);
          let h = '';
          if (this.consumeOptional('=')) {
            const v = X(this.remaining);
            v && ((h = v), this.capture(h));
          }
          u[wn(a)] = wn(h);
        }
        parseQueryParam(u) {
          const a = (function U(l) {
            const u = l.match(Re);
            return u ? u[0] : '';
          })(this.remaining);
          if (!a) return;
          this.capture(a);
          let h = '';
          if (this.consumeOptional('=')) {
            const S = (function B(l) {
              const u = l.match(O);
              return u ? u[0] : '';
            })(this.remaining);
            S && ((h = S), this.capture(h));
          }
          const v = tn(a),
            M = tn(h);
          if (u.hasOwnProperty(v)) {
            let S = u[v];
            Array.isArray(S) || ((S = [S]), (u[v] = S)), S.push(M);
          } else u[v] = M;
        }
        parseParens(u) {
          const a = {};
          for (
            this.capture('(');
            !this.consumeOptional(')') && this.remaining.length > 0;

          ) {
            const h = X(this.remaining),
              v = this.remaining[h.length];
            if ('/' !== v && ')' !== v && ';' !== v) throw new p.vHH(4010, !1);
            let M;
            h.indexOf(':') > -1
              ? ((M = h.slice(0, h.indexOf(':'))),
                this.capture(M),
                this.capture(':'))
              : u && (M = st);
            const S = this.parseChildren();
            (a[M] = 1 === Object.keys(S).length ? S[st] : new it([], S)),
              this.consumeOptional('//');
          }
          return a;
        }
        peekStartsWith(u) {
          return this.remaining.startsWith(u);
        }
        consumeOptional(u) {
          return (
            !!this.peekStartsWith(u) &&
            ((this.remaining = this.remaining.substring(u.length)), !0)
          );
        }
        capture(u) {
          if (!this.consumeOptional(u)) throw new p.vHH(4011, !1);
        }
      }
      function be(l) {
        return l.segments.length > 0 ? new it([], { [st]: l }) : l;
      }
      function We(l) {
        const u = {};
        for (const h of Object.keys(l.children)) {
          const M = We(l.children[h]);
          if (h === st && 0 === M.segments.length && M.hasChildren())
            for (const [S, q] of Object.entries(M.children)) u[S] = q;
          else (M.segments.length > 0 || M.hasChildren()) && (u[h] = M);
        }
        return (function $e(l) {
          if (1 === l.numberOfChildren && l.children[st]) {
            const u = l.children[st];
            return new it(l.segments.concat(u.segments), u.children);
          }
          return l;
        })(new it(l.segments, u));
      }
      function j(l) {
        return l instanceof sn;
      }
      function T(l) {
        let u;
        const v = be(
          (function a(M) {
            const S = {};
            for (const Oe of M.children) {
              const tt = a(Oe);
              S[Oe.outlet] = tt;
            }
            const q = new it(M.url, S);
            return M === l && (u = q), q;
          })(l.root)
        );
        return u ?? v;
      }
      function Q(l, u, a, h) {
        let v = l;
        for (; v.parent; ) v = v.parent;
        if (0 === u.length) return ut(v, v, v, a, h);
        const M = (function Ut(l) {
          if ('string' == typeof l[0] && 1 === l.length && '/' === l[0])
            return new rn(!0, 0, l);
          let u = 0,
            a = !1;
          const h = l.reduce((v, M, S) => {
            if ('object' == typeof M && null != M) {
              if (M.outlets) {
                const q = {};
                return (
                  Object.entries(M.outlets).forEach(([Oe, tt]) => {
                    q[Oe] = 'string' == typeof tt ? tt.split('/') : tt;
                  }),
                  [...v, { outlets: q }]
                );
              }
              if (M.segmentPath) return [...v, M.segmentPath];
            }
            return 'string' != typeof M
              ? [...v, M]
              : 0 === S
              ? (M.split('/').forEach((q, Oe) => {
                  (0 == Oe && '.' === q) ||
                    (0 == Oe && '' === q
                      ? (a = !0)
                      : '..' === q
                      ? u++
                      : '' != q && v.push(q));
                }),
                v)
              : [...v, M];
          }, []);
          return new rn(a, u, h);
        })(u);
        if (M.toRoot()) return ut(v, v, new it([], {}), a, h);
        const S = (function Ht(l, u, a) {
            if (l.isAbsolute) return new _n(u, !0, 0);
            if (!a) return new _n(u, !1, NaN);
            if (null === a.parent) return new _n(a, !0, 0);
            const h = ge(l.commands[0]) ? 0 : 1;
            return (function Wt(l, u, a) {
              let h = l,
                v = u,
                M = a;
              for (; M > v; ) {
                if (((M -= v), (h = h.parent), !h)) throw new p.vHH(4005, !1);
                v = h.segments.length;
              }
              return new _n(h, !1, v - M);
            })(a, a.segments.length - 1 + h, l.numberOfDoubleDots);
          })(M, v, l),
          q = S.processChildren
            ? on(S.segmentGroup, S.index, M.commands)
            : ir(S.segmentGroup, S.index, M.commands);
        return ut(v, S.segmentGroup, q, a, h);
      }
      function ge(l) {
        return (
          'object' == typeof l && null != l && !l.outlets && !l.segmentPath
        );
      }
      function ke(l) {
        return 'object' == typeof l && null != l && l.outlets;
      }
      function ut(l, u, a, h, v) {
        let S,
          M = {};
        h &&
          Object.entries(h).forEach(([Oe, tt]) => {
            M[Oe] = Array.isArray(tt) ? tt.map((ft) => `${ft}`) : `${tt}`;
          }),
          (S = l === u ? a : Rt(l, u, a));
        const q = be(We(S));
        return new sn(q, M, v);
      }
      function Rt(l, u, a) {
        const h = {};
        return (
          Object.entries(l.children).forEach(([v, M]) => {
            h[v] = M === u ? a : Rt(M, u, a);
          }),
          new it(l.segments, h)
        );
      }
      class rn {
        constructor(u, a, h) {
          if (
            ((this.isAbsolute = u),
            (this.numberOfDoubleDots = a),
            (this.commands = h),
            u && h.length > 0 && ge(h[0]))
          )
            throw new p.vHH(4003, !1);
          const v = h.find(ke);
          if (v && v !== nr(h)) throw new p.vHH(4004, !1);
        }
        toRoot() {
          return (
            this.isAbsolute &&
            1 === this.commands.length &&
            '/' == this.commands[0]
          );
        }
      }
      class _n {
        constructor(u, a, h) {
          (this.segmentGroup = u), (this.processChildren = a), (this.index = h);
        }
      }
      function ir(l, u, a) {
        if (
          (l || (l = new it([], {})),
          0 === l.segments.length && l.hasChildren())
        )
          return on(l, u, a);
        const h = (function yn(l, u, a) {
            let h = 0,
              v = u;
            const M = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; v < l.segments.length; ) {
              if (h >= a.length) return M;
              const S = l.segments[v],
                q = a[h];
              if (ke(q)) break;
              const Oe = `${q}`,
                tt = h < a.length - 1 ? a[h + 1] : null;
              if (v > 0 && void 0 === Oe) break;
              if (Oe && tt && 'object' == typeof tt && void 0 === tt.outlets) {
                if (!kr(Oe, tt, S)) return M;
                h += 2;
              } else {
                if (!kr(Oe, {}, S)) return M;
                h++;
              }
              v++;
            }
            return { match: !0, pathIndex: v, commandIndex: h };
          })(l, u, a),
          v = a.slice(h.commandIndex);
        if (h.match && h.pathIndex < l.segments.length) {
          const M = new it(l.segments.slice(0, h.pathIndex), {});
          return (
            (M.children[st] = new it(
              l.segments.slice(h.pathIndex),
              l.children
            )),
            on(M, 0, v)
          );
        }
        return h.match && 0 === v.length
          ? new it(l.segments, {})
          : h.match && !l.hasChildren()
          ? gr(l, u, a)
          : h.match
          ? on(l, 0, v)
          : gr(l, u, a);
      }
      function on(l, u, a) {
        if (0 === a.length) return new it(l.segments, {});
        {
          const h = (function Kn(l) {
              return ke(l[0]) ? l[0].outlets : { [st]: l };
            })(a),
            v = {};
          if (
            !h[st] &&
            l.children[st] &&
            1 === l.numberOfChildren &&
            0 === l.children[st].segments.length
          ) {
            const M = on(l.children[st], u, a);
            return new it(l.segments, M.children);
          }
          return (
            Object.entries(h).forEach(([M, S]) => {
              'string' == typeof S && (S = [S]),
                null !== S && (v[M] = ir(l.children[M], u, S));
            }),
            Object.entries(l.children).forEach(([M, S]) => {
              void 0 === h[M] && (v[M] = S);
            }),
            new it(l.segments, v)
          );
        }
      }
      function gr(l, u, a) {
        const h = l.segments.slice(0, u);
        let v = 0;
        for (; v < a.length; ) {
          const M = a[v];
          if (ke(M)) {
            const Oe = mr(M.outlets);
            return new it(h, Oe);
          }
          if (0 === v && ge(a[0])) {
            h.push(new an(l.segments[u].path, Gr(a[0]))), v++;
            continue;
          }
          const S = ke(M) ? M.outlets[st] : `${M}`,
            q = v < a.length - 1 ? a[v + 1] : null;
          S && q && ge(q)
            ? (h.push(new an(S, Gr(q))), (v += 2))
            : (h.push(new an(S, {})), v++);
        }
        return new it(h, {});
      }
      function mr(l) {
        const u = {};
        return (
          Object.entries(l).forEach(([a, h]) => {
            'string' == typeof h && (h = [h]),
              null !== h && (u[a] = gr(new it([], {}), 0, h));
          }),
          u
        );
      }
      function Gr(l) {
        const u = {};
        return Object.entries(l).forEach(([a, h]) => (u[a] = `${h}`)), u;
      }
      function kr(l, u, a) {
        return l == a.path && Kt(u, a.parameters);
      }
      const K = 'imperative';
      class y {
        constructor(u, a) {
          (this.id = u), (this.url = a);
        }
      }
      class b extends y {
        constructor(u, a, h = 'imperative', v = null) {
          super(u, a),
            (this.type = 0),
            (this.navigationTrigger = h),
            (this.restoredState = v);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class F extends y {
        constructor(u, a, h) {
          super(u, a), (this.urlAfterRedirects = h), (this.type = 1);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class V extends y {
        constructor(u, a, h, v) {
          super(u, a), (this.reason = h), (this.code = v), (this.type = 2);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class fe extends y {
        constructor(u, a, h, v) {
          super(u, a), (this.reason = h), (this.code = v), (this.type = 16);
        }
      }
      class Fe extends y {
        constructor(u, a, h, v) {
          super(u, a), (this.error = h), (this.target = v), (this.type = 3);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class nt extends y {
        constructor(u, a, h, v) {
          super(u, a),
            (this.urlAfterRedirects = h),
            (this.state = v),
            (this.type = 4);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class gt extends y {
        constructor(u, a, h, v) {
          super(u, a),
            (this.urlAfterRedirects = h),
            (this.state = v),
            (this.type = 7);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class yt extends y {
        constructor(u, a, h, v, M) {
          super(u, a),
            (this.urlAfterRedirects = h),
            (this.state = v),
            (this.shouldActivate = M),
            (this.type = 8);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class Dt extends y {
        constructor(u, a, h, v) {
          super(u, a),
            (this.urlAfterRedirects = h),
            (this.state = v),
            (this.type = 5);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class $t extends y {
        constructor(u, a, h, v) {
          super(u, a),
            (this.urlAfterRedirects = h),
            (this.state = v),
            (this.type = 6);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class or {
        constructor(u) {
          (this.route = u), (this.type = 9);
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class xn {
        constructor(u) {
          (this.route = u), (this.type = 10);
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class Bn {
        constructor(u) {
          (this.snapshot = u), (this.type = 11);
        }
        toString() {
          return `ChildActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class _t {
        constructor(u) {
          (this.snapshot = u), (this.type = 12);
        }
        toString() {
          return `ChildActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class pn {
        constructor(u) {
          (this.snapshot = u), (this.type = 13);
        }
        toString() {
          return `ActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class Pn {
        constructor(u) {
          (this.snapshot = u), (this.type = 14);
        }
        toString() {
          return `ActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class Br {
        constructor(u, a, h) {
          (this.routerEvent = u),
            (this.position = a),
            (this.anchor = h),
            (this.type = 15);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      class I {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.injector = null),
            (this.children = new x()),
            (this.attachRef = null);
        }
      }
      let x = (() => {
        class l {
          constructor() {
            this.contexts = new Map();
          }
          onChildOutletCreated(a, h) {
            const v = this.getOrCreateContext(a);
            (v.outlet = h), this.contexts.set(a, v);
          }
          onChildOutletDestroyed(a) {
            const h = this.getContext(a);
            h && ((h.outlet = null), (h.attachRef = null));
          }
          onOutletDeactivated() {
            const a = this.contexts;
            return (this.contexts = new Map()), a;
          }
          onOutletReAttached(a) {
            this.contexts = a;
          }
          getOrCreateContext(a) {
            let h = this.getContext(a);
            return h || ((h = new I()), this.contexts.set(a, h)), h;
          }
          getContext(a) {
            return this.contexts.get(a) || null;
          }
        }
        return (
          (l.ɵfac = function (a) {
            return new (a || l)();
          }),
          (l.ɵprov = p.Yz7({ token: l, factory: l.ɵfac, providedIn: 'root' })),
          l
        );
      })();
      class he {
        constructor(u) {
          this._root = u;
        }
        get root() {
          return this._root.value;
        }
        parent(u) {
          const a = this.pathFromRoot(u);
          return a.length > 1 ? a[a.length - 2] : null;
        }
        children(u) {
          const a = ze(u, this._root);
          return a ? a.children.map((h) => h.value) : [];
        }
        firstChild(u) {
          const a = ze(u, this._root);
          return a && a.children.length > 0 ? a.children[0].value : null;
        }
        siblings(u) {
          const a = Mt(u, this._root);
          return a.length < 2
            ? []
            : a[a.length - 2].children
                .map((v) => v.value)
                .filter((v) => v !== u);
        }
        pathFromRoot(u) {
          return Mt(u, this._root).map((a) => a.value);
        }
      }
      function ze(l, u) {
        if (l === u.value) return u;
        for (const a of u.children) {
          const h = ze(l, a);
          if (h) return h;
        }
        return null;
      }
      function Mt(l, u) {
        if (l === u.value) return [u];
        for (const a of u.children) {
          const h = Mt(l, a);
          if (h.length) return h.unshift(u), h;
        }
        return [];
      }
      class dt {
        constructor(u, a) {
          (this.value = u), (this.children = a);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function Ge(l) {
        const u = {};
        return l && l.children.forEach((a) => (u[a.value.outlet] = a)), u;
      }
      class mt extends he {
        constructor(u, a) {
          super(u), (this.snapshot = a), er(this, u);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function Ft(l, u) {
        const a = (function Yt(l, u) {
            const S = new Zt([], {}, {}, '', {}, st, u, null, {});
            return new Un('', new dt(S, []));
          })(0, u),
          h = new ee.X([new an('', {})]),
          v = new ee.X({}),
          M = new ee.X({}),
          S = new ee.X({}),
          q = new ee.X(''),
          Oe = new Fn(h, v, S, q, M, st, u, a.root);
        return (Oe.snapshot = a.root), new mt(new dt(Oe, []), a);
      }
      class Fn {
        constructor(u, a, h, v, M, S, q, Oe) {
          (this.urlSubject = u),
            (this.paramsSubject = a),
            (this.queryParamsSubject = h),
            (this.fragmentSubject = v),
            (this.dataSubject = M),
            (this.outlet = S),
            (this.component = q),
            (this._futureSnapshot = Oe),
            (this.title =
              this.dataSubject?.pipe((0, ne.U)((tt) => tt[cn])) ??
              (0, H.of)(void 0)),
            (this.url = u),
            (this.params = a),
            (this.queryParams = h),
            (this.fragment = v),
            (this.data = M);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap ||
              (this._paramMap = this.params.pipe((0, ne.U)((u) => zt(u)))),
            this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap ||
              (this._queryParamMap = this.queryParams.pipe(
                (0, ne.U)((u) => zt(u))
              )),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot
            ? this.snapshot.toString()
            : `Future(${this._futureSnapshot})`;
        }
      }
      function Mn(l, u = 'emptyOnly') {
        const a = l.pathFromRoot;
        let h = 0;
        if ('always' !== u)
          for (h = a.length - 1; h >= 1; ) {
            const v = a[h],
              M = a[h - 1];
            if (v.routeConfig && '' === v.routeConfig.path) h--;
            else {
              if (M.component) break;
              h--;
            }
          }
        return (function br(l) {
          return l.reduce(
            (u, a) => ({
              params: { ...u.params, ...a.params },
              data: { ...u.data, ...a.data },
              resolve: {
                ...a.data,
                ...u.resolve,
                ...a.routeConfig?.data,
                ...a._resolvedData,
              },
            }),
            { params: {}, data: {}, resolve: {} }
          );
        })(a.slice(h));
      }
      class Zt {
        get title() {
          return this.data?.[cn];
        }
        constructor(u, a, h, v, M, S, q, Oe, tt) {
          (this.url = u),
            (this.params = a),
            (this.queryParams = h),
            (this.fragment = v),
            (this.data = M),
            (this.outlet = S),
            (this.component = q),
            (this.routeConfig = Oe),
            (this._resolve = tt);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap || (this._paramMap = zt(this.params)), this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = zt(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return `Route(url:'${this.url
            .map((h) => h.toString())
            .join('/')}', path:'${
            this.routeConfig ? this.routeConfig.path : ''
          }')`;
        }
      }
      class Un extends he {
        constructor(u, a) {
          super(a), (this.url = u), er(this, a);
        }
        toString() {
          return Ct(this._root);
        }
      }
      function er(l, u) {
        (u.value._routerState = l), u.children.forEach((a) => er(l, a));
      }
      function Ct(l) {
        const u =
          l.children.length > 0 ? ` { ${l.children.map(Ct).join(', ')} } ` : '';
        return `${l.value}${u}`;
      }
      function Er(l) {
        if (l.snapshot) {
          const u = l.snapshot,
            a = l._futureSnapshot;
          (l.snapshot = a),
            Kt(u.queryParams, a.queryParams) ||
              l.queryParamsSubject.next(a.queryParams),
            u.fragment !== a.fragment && l.fragmentSubject.next(a.fragment),
            Kt(u.params, a.params) || l.paramsSubject.next(a.params),
            (function hr(l, u) {
              if (l.length !== u.length) return !1;
              for (let a = 0; a < l.length; ++a) if (!Kt(l[a], u[a])) return !1;
              return !0;
            })(u.url, a.url) || l.urlSubject.next(a.url),
            Kt(u.data, a.data) || l.dataSubject.next(a.data);
        } else
          (l.snapshot = l._futureSnapshot),
            l.dataSubject.next(l._futureSnapshot.data);
      }
      function Ei(l, u) {
        const a =
          Kt(l.params, u.params) &&
          (function Lr(l, u) {
            return (
              Vt(l, u) && l.every((a, h) => Kt(a.parameters, u[h].parameters))
            );
          })(l.url, u.url);
        return (
          a &&
          !(!l.parent != !u.parent) &&
          (!l.parent || Ei(l.parent, u.parent))
        );
      }
      let wr = (() => {
        class l {
          constructor() {
            (this.activated = null),
              (this._activatedRoute = null),
              (this.name = st),
              (this.activateEvents = new p.vpe()),
              (this.deactivateEvents = new p.vpe()),
              (this.attachEvents = new p.vpe()),
              (this.detachEvents = new p.vpe()),
              (this.parentContexts = (0, p.f3M)(x)),
              (this.location = (0, p.f3M)(p.s_b)),
              (this.changeDetector = (0, p.f3M)(p.sBO)),
              (this.environmentInjector = (0, p.f3M)(p.lqb)),
              (this.inputBinder = (0, p.f3M)(Wr, { optional: !0 })),
              (this.supportsBindingToComponentInputs = !0);
          }
          get activatedComponentRef() {
            return this.activated;
          }
          ngOnChanges(a) {
            if (a.name) {
              const { firstChange: h, previousValue: v } = a.name;
              if (h) return;
              this.isTrackedInParentContexts(v) &&
                (this.deactivate(),
                this.parentContexts.onChildOutletDestroyed(v)),
                this.initializeOutletWithName();
            }
          }
          ngOnDestroy() {
            this.isTrackedInParentContexts(this.name) &&
              this.parentContexts.onChildOutletDestroyed(this.name),
              this.inputBinder?.unsubscribeFromRouteData(this);
          }
          isTrackedInParentContexts(a) {
            return this.parentContexts.getContext(a)?.outlet === this;
          }
          ngOnInit() {
            this.initializeOutletWithName();
          }
          initializeOutletWithName() {
            if (
              (this.parentContexts.onChildOutletCreated(this.name, this),
              this.activated)
            )
              return;
            const a = this.parentContexts.getContext(this.name);
            a?.route &&
              (a.attachRef
                ? this.attach(a.attachRef, a.route)
                : this.activateWith(a.route, a.injector));
          }
          get isActivated() {
            return !!this.activated;
          }
          get component() {
            if (!this.activated) throw new p.vHH(4012, !1);
            return this.activated.instance;
          }
          get activatedRoute() {
            if (!this.activated) throw new p.vHH(4012, !1);
            return this._activatedRoute;
          }
          get activatedRouteData() {
            return this._activatedRoute
              ? this._activatedRoute.snapshot.data
              : {};
          }
          detach() {
            if (!this.activated) throw new p.vHH(4012, !1);
            this.location.detach();
            const a = this.activated;
            return (
              (this.activated = null),
              (this._activatedRoute = null),
              this.detachEvents.emit(a.instance),
              a
            );
          }
          attach(a, h) {
            (this.activated = a),
              (this._activatedRoute = h),
              this.location.insert(a.hostView),
              this.inputBinder?.bindActivatedRouteToOutletComponent(this),
              this.attachEvents.emit(a.instance);
          }
          deactivate() {
            if (this.activated) {
              const a = this.component;
              this.activated.destroy(),
                (this.activated = null),
                (this._activatedRoute = null),
                this.deactivateEvents.emit(a);
            }
          }
          activateWith(a, h) {
            if (this.isActivated) throw new p.vHH(4013, !1);
            this._activatedRoute = a;
            const v = this.location,
              S = a.snapshot.component,
              q = this.parentContexts.getOrCreateContext(this.name).children,
              Oe = new un(a, q, v.injector);
            (this.activated = v.createComponent(S, {
              index: v.length,
              injector: Oe,
              environmentInjector: h ?? this.environmentInjector,
            })),
              this.changeDetector.markForCheck(),
              this.inputBinder?.bindActivatedRouteToOutletComponent(this),
              this.activateEvents.emit(this.activated.instance);
          }
        }
        return (
          (l.ɵfac = function (a) {
            return new (a || l)();
          }),
          (l.ɵdir = p.lG2({
            type: l,
            selectors: [['router-outlet']],
            inputs: { name: 'name' },
            outputs: {
              activateEvents: 'activate',
              deactivateEvents: 'deactivate',
              attachEvents: 'attach',
              detachEvents: 'detach',
            },
            exportAs: ['outlet'],
            standalone: !0,
            features: [p.TTD],
          })),
          l
        );
      })();
      class un {
        constructor(u, a, h) {
          (this.route = u), (this.childContexts = a), (this.parent = h);
        }
        get(u, a) {
          return u === Fn
            ? this.route
            : u === x
            ? this.childContexts
            : this.parent.get(u, a);
        }
      }
      const Wr = new p.OlP('');
      let ni = (() => {
        class l {
          constructor() {
            this.outletDataSubscriptions = new Map();
          }
          bindActivatedRouteToOutletComponent(a) {
            this.unsubscribeFromRouteData(a), this.subscribeToRouteData(a);
          }
          unsubscribeFromRouteData(a) {
            this.outletDataSubscriptions.get(a)?.unsubscribe(),
              this.outletDataSubscriptions.delete(a);
          }
          subscribeToRouteData(a) {
            const { activatedRoute: h } = a,
              v = (0, Te.a)([h.queryParams, h.params, h.data])
                .pipe(
                  (0, se.w)(
                    ([M, S, q], Oe) => (
                      (q = { ...M, ...S, ...q }),
                      0 === Oe ? (0, H.of)(q) : Promise.resolve(q)
                    )
                  )
                )
                .subscribe((M) => {
                  if (
                    !a.isActivated ||
                    !a.activatedComponentRef ||
                    a.activatedRoute !== h ||
                    null === h.component
                  )
                    return void this.unsubscribeFromRouteData(a);
                  const S = (0, p.qFp)(h.component);
                  if (S)
                    for (const { templateName: q } of S.inputs)
                      a.activatedComponentRef.setInput(q, M[q]);
                  else this.unsubscribeFromRouteData(a);
                });
            this.outletDataSubscriptions.set(a, v);
          }
        }
        return (
          (l.ɵfac = function (a) {
            return new (a || l)();
          }),
          (l.ɵprov = p.Yz7({ token: l, factory: l.ɵfac })),
          l
        );
      })();
      function Sr(l, u, a) {
        if (a && l.shouldReuseRoute(u.value, a.value.snapshot)) {
          const h = a.value;
          h._futureSnapshot = u.value;
          const v = (function no(l, u, a) {
            return u.children.map((h) => {
              for (const v of a.children)
                if (l.shouldReuseRoute(h.value, v.value.snapshot))
                  return Sr(l, h, v);
              return Sr(l, h);
            });
          })(l, u, a);
          return new dt(h, v);
        }
        {
          if (l.shouldAttach(u.value)) {
            const M = l.retrieve(u.value);
            if (null !== M) {
              const S = M.route;
              return (
                (S.value._futureSnapshot = u.value),
                (S.children = u.children.map((q) => Sr(l, q))),
                S
              );
            }
          }
          const h = (function Hr(l) {
              return new Fn(
                new ee.X(l.url),
                new ee.X(l.params),
                new ee.X(l.queryParams),
                new ee.X(l.fragment),
                new ee.X(l.data),
                l.outlet,
                l.component,
                l
              );
            })(u.value),
            v = u.children.map((M) => Sr(l, M));
          return new dt(h, v);
        }
      }
      const vr = 'ngNavigationCancelingError';
      function hi(l, u) {
        const { redirectTo: a, navigationBehaviorOptions: h } = j(u)
            ? { redirectTo: u, navigationBehaviorOptions: void 0 }
            : u,
          v = fi(!1, 0, u);
        return (v.url = a), (v.navigationBehaviorOptions = h), v;
      }
      function fi(l, u, a) {
        const h = new Error('NavigationCancelingError: ' + (l || ''));
        return (h[vr] = !0), (h.cancellationCode = u), a && (h.url = a), h;
      }
      function Nt(l) {
        return Zs(l) && j(l.url);
      }
      function Zs(l) {
        return l && l[vr];
      }
      let Hi = (() => {
        class l {}
        return (
          (l.ɵfac = function (a) {
            return new (a || l)();
          }),
          (l.ɵcmp = p.Xpm({
            type: l,
            selectors: [['ng-component']],
            standalone: !0,
            features: [p.jDz],
            decls: 1,
            vars: 0,
            template: function (a, h) {
              1 & a && p._UZ(0, 'router-outlet');
            },
            dependencies: [wr],
            encapsulation: 2,
          })),
          l
        );
      })();
      function gi(l) {
        const u = l.children && l.children.map(gi),
          a = u ? { ...l, children: u } : { ...l };
        return (
          !a.component &&
            !a.loadComponent &&
            (u || a.loadChildren) &&
            a.outlet &&
            a.outlet !== st &&
            (a.component = Hi),
          a
        );
      }
      function Ln(l) {
        return l.outlet || st;
      }
      function An(l) {
        if (!l) return null;
        if (l.routeConfig?._injector) return l.routeConfig._injector;
        for (let u = l.parent; u; u = u.parent) {
          const a = u.routeConfig;
          if (a?._loadedInjector) return a._loadedInjector;
          if (a?._injector) return a._injector;
        }
        return null;
      }
      class Ks {
        constructor(u, a, h, v, M) {
          (this.routeReuseStrategy = u),
            (this.futureState = a),
            (this.currState = h),
            (this.forwardEvent = v),
            (this.inputBindingEnabled = M);
        }
        activate(u) {
          const a = this.futureState._root,
            h = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(a, h, u),
            Er(this.futureState.root),
            this.activateChildRoutes(a, h, u);
        }
        deactivateChildRoutes(u, a, h) {
          const v = Ge(a);
          u.children.forEach((M) => {
            const S = M.value.outlet;
            this.deactivateRoutes(M, v[S], h), delete v[S];
          }),
            Object.values(v).forEach((M) => {
              this.deactivateRouteAndItsChildren(M, h);
            });
        }
        deactivateRoutes(u, a, h) {
          const v = u.value,
            M = a ? a.value : null;
          if (v === M)
            if (v.component) {
              const S = h.getContext(v.outlet);
              S && this.deactivateChildRoutes(u, a, S.children);
            } else this.deactivateChildRoutes(u, a, h);
          else M && this.deactivateRouteAndItsChildren(a, h);
        }
        deactivateRouteAndItsChildren(u, a) {
          u.value.component &&
          this.routeReuseStrategy.shouldDetach(u.value.snapshot)
            ? this.detachAndStoreRouteSubtree(u, a)
            : this.deactivateRouteAndOutlet(u, a);
        }
        detachAndStoreRouteSubtree(u, a) {
          const h = a.getContext(u.value.outlet),
            v = h && u.value.component ? h.children : a,
            M = Ge(u);
          for (const S of Object.keys(M))
            this.deactivateRouteAndItsChildren(M[S], v);
          if (h && h.outlet) {
            const S = h.outlet.detach(),
              q = h.children.onOutletDeactivated();
            this.routeReuseStrategy.store(u.value.snapshot, {
              componentRef: S,
              route: u,
              contexts: q,
            });
          }
        }
        deactivateRouteAndOutlet(u, a) {
          const h = a.getContext(u.value.outlet),
            v = h && u.value.component ? h.children : a,
            M = Ge(u);
          for (const S of Object.keys(M))
            this.deactivateRouteAndItsChildren(M[S], v);
          h &&
            (h.outlet &&
              (h.outlet.deactivate(), h.children.onOutletDeactivated()),
            (h.attachRef = null),
            (h.route = null));
        }
        activateChildRoutes(u, a, h) {
          const v = Ge(a);
          u.children.forEach((M) => {
            this.activateRoutes(M, v[M.value.outlet], h),
              this.forwardEvent(new Pn(M.value.snapshot));
          }),
            u.children.length && this.forwardEvent(new _t(u.value.snapshot));
        }
        activateRoutes(u, a, h) {
          const v = u.value,
            M = a ? a.value : null;
          if ((Er(v), v === M))
            if (v.component) {
              const S = h.getOrCreateContext(v.outlet);
              this.activateChildRoutes(u, a, S.children);
            } else this.activateChildRoutes(u, a, h);
          else if (v.component) {
            const S = h.getOrCreateContext(v.outlet);
            if (this.routeReuseStrategy.shouldAttach(v.snapshot)) {
              const q = this.routeReuseStrategy.retrieve(v.snapshot);
              this.routeReuseStrategy.store(v.snapshot, null),
                S.children.onOutletReAttached(q.contexts),
                (S.attachRef = q.componentRef),
                (S.route = q.route.value),
                S.outlet && S.outlet.attach(q.componentRef, q.route.value),
                Er(q.route.value),
                this.activateChildRoutes(u, null, S.children);
            } else {
              const q = An(v.snapshot);
              (S.attachRef = null),
                (S.route = v),
                (S.injector = q),
                S.outlet && S.outlet.activateWith(v, S.injector),
                this.activateChildRoutes(u, null, S.children);
            }
          } else this.activateChildRoutes(u, null, h);
        }
      }
      class oo {
        constructor(u) {
          (this.path = u), (this.route = this.path[this.path.length - 1]);
        }
      }
      class Vi {
        constructor(u, a) {
          (this.component = u), (this.route = a);
        }
      }
      function Xs(l, u, a) {
        const h = l._root;
        return Ii(h, u ? u._root : null, a, [h.value]);
      }
      function mi(l, u) {
        const a = Symbol(),
          h = u.get(l, a);
        return h === a
          ? 'function' != typeof l || (0, p.Z0I)(l)
            ? u.get(l)
            : l
          : h;
      }
      function Ii(
        l,
        u,
        a,
        h,
        v = { canDeactivateChecks: [], canActivateChecks: [] }
      ) {
        const M = Ge(u);
        return (
          l.children.forEach((S) => {
            (function Sl(
              l,
              u,
              a,
              h,
              v = { canDeactivateChecks: [], canActivateChecks: [] }
            ) {
              const M = l.value,
                S = u ? u.value : null,
                q = a ? a.getContext(l.value.outlet) : null;
              if (S && M.routeConfig === S.routeConfig) {
                const Oe = (function qs(l, u, a) {
                  if ('function' == typeof a) return a(l, u);
                  switch (a) {
                    case 'pathParamsChange':
                      return !Vt(l.url, u.url);
                    case 'pathParamsOrQueryParamsChange':
                      return (
                        !Vt(l.url, u.url) || !Kt(l.queryParams, u.queryParams)
                      );
                    case 'always':
                      return !0;
                    case 'paramsOrQueryParamsChange':
                      return !Ei(l, u) || !Kt(l.queryParams, u.queryParams);
                    default:
                      return !Ei(l, u);
                  }
                })(S, M, M.routeConfig.runGuardsAndResolvers);
                Oe
                  ? v.canActivateChecks.push(new oo(h))
                  : ((M.data = S.data), (M._resolvedData = S._resolvedData)),
                  Ii(l, u, M.component ? (q ? q.children : null) : a, h, v),
                  Oe &&
                    q &&
                    q.outlet &&
                    q.outlet.isActivated &&
                    v.canDeactivateChecks.push(new Vi(q.outlet.component, S));
              } else
                S && Ti(u, q, v),
                  v.canActivateChecks.push(new oo(h)),
                  Ii(l, null, M.component ? (q ? q.children : null) : a, h, v);
            })(S, M[S.value.outlet], a, h.concat([S.value]), v),
              delete M[S.value.outlet];
          }),
          Object.entries(M).forEach(([S, q]) => Ti(q, a.getContext(S), v)),
          v
        );
      }
      function Ti(l, u, a) {
        const h = Ge(l),
          v = l.value;
        Object.entries(h).forEach(([M, S]) => {
          Ti(S, v.component ? (u ? u.children.getContext(M) : null) : u, a);
        }),
          a.canDeactivateChecks.push(
            new Vi(
              v.component && u && u.outlet && u.outlet.isActivated
                ? u.outlet.component
                : null,
              v
            )
          );
      }
      function Ai(l) {
        return 'function' == typeof l;
      }
      function gn(l) {
        return l instanceof de.K || 'EmptyError' === l?.name;
      }
      const Ar = Symbol('INITIAL_VALUE');
      function ri() {
        return (0, se.w)((l) =>
          (0, Te.a)(l.map((u) => u.pipe((0, ce.q)(1), (0, _e.O)(Ar)))).pipe(
            (0, ne.U)((u) => {
              for (const a of u)
                if (!0 !== a) {
                  if (a === Ar) return Ar;
                  if (!1 === a || a instanceof sn) return a;
                }
              return !0;
            }),
            (0, ye.h)((u) => u !== Ar),
            (0, ce.q)(1)
          )
        );
      }
      function vi(l) {
        return (0, le.z)(
          ae((u) => {
            if (j(u)) throw hi(0, u);
          }),
          (0, ne.U)((u) => !0 === u)
        );
      }
      class Yr {
        constructor(u) {
          this.segmentGroup = u || null;
        }
      }
      class _i {
        constructor(u) {
          this.urlTree = u;
        }
      }
      function Zr(l) {
        return Ve(new Yr(l));
      }
      function Ui(l) {
        return Ve(new _i(l));
      }
      class Ol {
        constructor(u, a) {
          (this.urlSerializer = u), (this.urlTree = a);
        }
        noMatchError(u) {
          return new p.vHH(4002, !1);
        }
        lineralizeSegments(u, a) {
          let h = [],
            v = a.root;
          for (;;) {
            if (((h = h.concat(v.segments)), 0 === v.numberOfChildren))
              return (0, H.of)(h);
            if (v.numberOfChildren > 1 || !v.children[st])
              return Ve(new p.vHH(4e3, !1));
            v = v.children[st];
          }
        }
        applyRedirectCommands(u, a, h) {
          return this.applyRedirectCreateUrlTree(
            a,
            this.urlSerializer.parse(a),
            u,
            h
          );
        }
        applyRedirectCreateUrlTree(u, a, h, v) {
          const M = this.createSegmentGroup(u, a.root, h, v);
          return new sn(
            M,
            this.createQueryParams(a.queryParams, this.urlTree.queryParams),
            a.fragment
          );
        }
        createQueryParams(u, a) {
          const h = {};
          return (
            Object.entries(u).forEach(([v, M]) => {
              if ('string' == typeof M && M.startsWith(':')) {
                const q = M.substring(1);
                h[v] = a[q];
              } else h[v] = M;
            }),
            h
          );
        }
        createSegmentGroup(u, a, h, v) {
          const M = this.createSegments(u, a.segments, h, v);
          let S = {};
          return (
            Object.entries(a.children).forEach(([q, Oe]) => {
              S[q] = this.createSegmentGroup(u, Oe, h, v);
            }),
            new it(M, S)
          );
        }
        createSegments(u, a, h, v) {
          return a.map((M) =>
            M.path.startsWith(':')
              ? this.findPosParam(u, M, v)
              : this.findOrReturn(M, h)
          );
        }
        findPosParam(u, a, h) {
          const v = h[a.path.substring(1)];
          if (!v) throw new p.vHH(4001, !1);
          return v;
        }
        findOrReturn(u, a) {
          let h = 0;
          for (const v of a) {
            if (v.path === u.path) return a.splice(h), v;
            h++;
          }
          return u;
        }
      }
      const $i = {
        matched: !1,
        consumedSegments: [],
        remainingSegments: [],
        parameters: {},
        positionalParamSegments: {},
      };
      function zi(l, u, a, h, v) {
        const M = Oi(l, u, a);
        return M.matched
          ? ((h = (function ro(l, u) {
              return (
                l.providers &&
                  !l._injector &&
                  (l._injector = (0, p.MMx)(
                    l.providers,
                    u,
                    `Route: ${l.path}`
                  )),
                l._injector ?? u
              );
            })(u, h)),
            (function On(l, u, a, h) {
              const v = u.canMatch;
              if (!v || 0 === v.length) return (0, H.of)(!0);
              const M = v.map((S) => {
                const q = mi(S, l);
                return kn(
                  (function ao(l) {
                    return l && Ai(l.canMatch);
                  })(q)
                    ? q.canMatch(u, a)
                    : l.runInContext(() => q(u, a))
                );
              });
              return (0, H.of)(M).pipe(ri(), vi());
            })(h, u, a).pipe((0, ne.U)((S) => (!0 === S ? M : { ...$i }))))
          : (0, H.of)(M);
      }
      function Oi(l, u, a) {
        if ('' === u.path)
          return 'full' === u.pathMatch && (l.hasChildren() || a.length > 0)
            ? { ...$i }
            : {
                matched: !0,
                consumedSegments: [],
                remainingSegments: a,
                parameters: {},
                positionalParamSegments: {},
              };
        const v = (u.matcher || dn)(a, l, u);
        if (!v) return { ...$i };
        const M = {};
        Object.entries(v.posParams ?? {}).forEach(([q, Oe]) => {
          M[q] = Oe.path;
        });
        const S =
          v.consumed.length > 0
            ? { ...M, ...v.consumed[v.consumed.length - 1].parameters }
            : M;
        return {
          matched: !0,
          consumedSegments: v.consumed,
          remainingSegments: a.slice(v.consumed.length),
          parameters: S,
          positionalParamSegments: v.posParams ?? {},
        };
      }
      function Ri(l, u, a, h) {
        return a.length > 0 &&
          (function xl(l, u, a) {
            return a.some((h) => xi(l, u, h) && Ln(h) !== st);
          })(l, a, h)
          ? {
              segmentGroup: new it(u, Rl(h, new it(a, l.children))),
              slicedSegments: [],
            }
          : 0 === a.length &&
            (function Pl(l, u, a) {
              return a.some((h) => xi(l, u, h));
            })(l, a, h)
          ? {
              segmentGroup: new it(l.segments, sa(l, 0, a, h, l.children)),
              slicedSegments: a,
            }
          : { segmentGroup: new it(l.segments, l.children), slicedSegments: a };
      }
      function sa(l, u, a, h, v) {
        const M = {};
        for (const S of h)
          if (xi(l, a, S) && !v[Ln(S)]) {
            const q = new it([], {});
            M[Ln(S)] = q;
          }
        return { ...v, ...M };
      }
      function Rl(l, u) {
        const a = {};
        a[st] = u;
        for (const h of l)
          if ('' === h.path && Ln(h) !== st) {
            const v = new it([], {});
            a[Ln(h)] = v;
          }
        return a;
      }
      function xi(l, u, a) {
        return (
          (!(l.hasChildren() || u.length > 0) || 'full' !== a.pathMatch) &&
          '' === a.path
        );
      }
      class Zo {
        constructor(u, a, h, v, M, S, q) {
          (this.injector = u),
            (this.configLoader = a),
            (this.rootComponentType = h),
            (this.config = v),
            (this.urlTree = M),
            (this.paramsInheritanceStrategy = S),
            (this.urlSerializer = q),
            (this.allowRedirects = !0),
            (this.applyRedirects = new Ol(this.urlSerializer, this.urlTree));
        }
        noMatchError(u) {
          return new p.vHH(4002, !1);
        }
        recognize() {
          const u = Ri(this.urlTree.root, [], [], this.config).segmentGroup;
          return this.processSegmentGroup(
            this.injector,
            this.config,
            u,
            st
          ).pipe(
            je((a) => {
              if (a instanceof _i)
                return (
                  (this.allowRedirects = !1),
                  (this.urlTree = a.urlTree),
                  this.match(a.urlTree)
                );
              throw a instanceof Yr ? this.noMatchError(a) : a;
            }),
            (0, ne.U)((a) => {
              const h = new Zt(
                  [],
                  Object.freeze({}),
                  Object.freeze({ ...this.urlTree.queryParams }),
                  this.urlTree.fragment,
                  {},
                  st,
                  this.rootComponentType,
                  null,
                  {}
                ),
                v = new dt(h, a),
                M = new Un('', v),
                S = (function N(l, u, a = null, h = null) {
                  return Q(T(l), u, a, h);
                })(h, [], this.urlTree.queryParams, this.urlTree.fragment);
              return (
                (S.queryParams = this.urlTree.queryParams),
                (M.url = this.urlSerializer.serialize(S)),
                this.inheritParamsAndData(M._root),
                { state: M, tree: S }
              );
            })
          );
        }
        match(u) {
          return this.processSegmentGroup(
            this.injector,
            this.config,
            u.root,
            st
          ).pipe(
            je((h) => {
              throw h instanceof Yr ? this.noMatchError(h) : h;
            })
          );
        }
        inheritParamsAndData(u) {
          const a = u.value,
            h = Mn(a, this.paramsInheritanceStrategy);
          (a.params = Object.freeze(h.params)),
            (a.data = Object.freeze(h.data)),
            u.children.forEach((v) => this.inheritParamsAndData(v));
        }
        processSegmentGroup(u, a, h, v) {
          return 0 === h.segments.length && h.hasChildren()
            ? this.processChildren(u, a, h)
            : this.processSegment(u, a, h, h.segments, v, !0);
        }
        processChildren(u, a, h) {
          const v = [];
          for (const M of Object.keys(h.children))
            'primary' === M ? v.unshift(M) : v.push(M);
          return (0, Y.D)(v).pipe(
            (0, W.b)((M) => {
              const S = h.children[M],
                q = (function Mi(l, u) {
                  const a = l.filter((h) => Ln(h) === u);
                  return a.push(...l.filter((h) => Ln(h) !== u)), a;
                })(a, M);
              return this.processSegmentGroup(u, q, S, M);
            }),
            (function ot(l, u) {
              return (0, xe.e)(
                (function Ue(l, u, a, h, v) {
                  return (M, S) => {
                    let q = a,
                      Oe = u,
                      tt = 0;
                    M.subscribe(
                      (0, Xe.x)(
                        S,
                        (ft) => {
                          const Qt = tt++;
                          (Oe = q ? l(Oe, ft, Qt) : ((q = !0), ft)),
                            h && S.next(Oe);
                        },
                        v &&
                          (() => {
                            q && S.next(Oe), S.complete();
                          })
                      )
                    );
                  };
                })(l, u, arguments.length >= 2, !0)
              );
            })((M, S) => (M.push(...S), M)),
            Ee(null),
            (function Pt(l, u) {
              const a = arguments.length >= 2;
              return (h) =>
                h.pipe(
                  l ? (0, ye.h)((v, M) => l(v, M, h)) : De.y,
                  Tt(1),
                  a ? Ee(u) : te(() => new de.K())
                );
            })(),
            (0, Ie.z)((M) => {
              if (null === M) return Zr(h);
              const S = Gi(M);
              return (
                (function Ko(l) {
                  l.sort((u, a) =>
                    u.value.outlet === st
                      ? -1
                      : a.value.outlet === st
                      ? 1
                      : u.value.outlet.localeCompare(a.value.outlet)
                  );
                })(S),
                (0, H.of)(S)
              );
            })
          );
        }
        processSegment(u, a, h, v, M, S) {
          return (0, Y.D)(a).pipe(
            (0, W.b)((q) =>
              this.processSegmentAgainstRoute(
                q._injector ?? u,
                a,
                q,
                h,
                v,
                M,
                S
              ).pipe(
                je((Oe) => {
                  if (Oe instanceof Yr) return (0, H.of)(null);
                  throw Oe;
                })
              )
            ),
            z((q) => !!q),
            je((q) => {
              if (gn(q))
                return (function la(l, u, a) {
                  return 0 === u.length && !l.children[a];
                })(h, v, M)
                  ? (0, H.of)([])
                  : Zr(h);
              throw q;
            })
          );
        }
        processSegmentAgainstRoute(u, a, h, v, M, S, q) {
          return (function aa(l, u, a, h) {
            return (
              !!(Ln(l) === h || (h !== st && xi(u, a, l))) &&
              ('**' === l.path || Oi(u, l, a).matched)
            );
          })(h, v, M, S)
            ? void 0 === h.redirectTo
              ? this.matchSegmentAgainstRoute(u, v, h, M, S, q)
              : q && this.allowRedirects
              ? this.expandSegmentAgainstRouteUsingRedirect(u, v, a, h, M, S)
              : Zr(v)
            : Zr(v);
        }
        expandSegmentAgainstRouteUsingRedirect(u, a, h, v, M, S) {
          return '**' === v.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(u, h, v, S)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(
                u,
                a,
                h,
                v,
                M,
                S
              );
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(u, a, h, v) {
          const M = this.applyRedirects.applyRedirectCommands(
            [],
            h.redirectTo,
            {}
          );
          return h.redirectTo.startsWith('/')
            ? Ui(M)
            : this.applyRedirects.lineralizeSegments(h, M).pipe(
                (0, Ie.z)((S) => {
                  const q = new it(S, {});
                  return this.processSegment(u, a, q, S, v, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(u, a, h, v, M, S) {
          const {
            matched: q,
            consumedSegments: Oe,
            remainingSegments: tt,
            positionalParamSegments: ft,
          } = Oi(a, v, M);
          if (!q) return Zr(a);
          const Qt = this.applyRedirects.applyRedirectCommands(
            Oe,
            v.redirectTo,
            ft
          );
          return v.redirectTo.startsWith('/')
            ? Ui(Qt)
            : this.applyRedirects
                .lineralizeSegments(v, Qt)
                .pipe(
                  (0, Ie.z)((lr) =>
                    this.processSegment(u, h, a, lr.concat(tt), S, !1)
                  )
                );
        }
        matchSegmentAgainstRoute(u, a, h, v, M, S) {
          let q;
          if ('**' === h.path) {
            const Oe = v.length > 0 ? nr(v).parameters : {},
              tt = new Zt(
                v,
                Oe,
                Object.freeze({ ...this.urlTree.queryParams }),
                this.urlTree.fragment,
                Qo(h),
                Ln(h),
                h.component ?? h._loadedComponent ?? null,
                h,
                Wi(h)
              );
            (q = (0, H.of)({
              snapshot: tt,
              consumedSegments: [],
              remainingSegments: [],
            })),
              (a.children = {});
          } else
            q = zi(a, h, v, u).pipe(
              (0, ne.U)(
                ({
                  matched: Oe,
                  consumedSegments: tt,
                  remainingSegments: ft,
                  parameters: Qt,
                }) =>
                  Oe
                    ? {
                        snapshot: new Zt(
                          tt,
                          Qt,
                          Object.freeze({ ...this.urlTree.queryParams }),
                          this.urlTree.fragment,
                          Qo(h),
                          Ln(h),
                          h.component ?? h._loadedComponent ?? null,
                          h,
                          Wi(h)
                        ),
                        consumedSegments: tt,
                        remainingSegments: ft,
                      }
                    : null
              )
            );
          return q.pipe(
            (0, se.w)((Oe) =>
              null === Oe
                ? Zr(a)
                : this.getChildConfig((u = h._injector ?? u), h, v).pipe(
                    (0, se.w)(({ routes: tt }) => {
                      const ft = h._loadedInjector ?? u,
                        {
                          snapshot: Qt,
                          consumedSegments: lr,
                          remainingSegments: as,
                        } = Oe,
                        { segmentGroup: Ur, slicedSegments: Qr } = Ri(
                          a,
                          lr,
                          as,
                          tt
                        );
                      if (0 === Qr.length && Ur.hasChildren())
                        return this.processChildren(ft, tt, Ur).pipe(
                          (0, ne.U)((cs) =>
                            null === cs ? null : [new dt(Qt, cs)]
                          )
                        );
                      if (0 === tt.length && 0 === Qr.length)
                        return (0, H.of)([new dt(Qt, [])]);
                      const ls = Ln(h) === M;
                      return this.processSegment(
                        ft,
                        tt,
                        Ur,
                        Qr,
                        ls ? st : M,
                        !0
                      ).pipe((0, ne.U)((cs) => [new dt(Qt, cs)]));
                    })
                  )
            )
          );
        }
        getChildConfig(u, a, h) {
          return a.children
            ? (0, H.of)({ routes: a.children, injector: u })
            : a.loadChildren
            ? void 0 !== a._loadedRoutes
              ? (0, H.of)({
                  routes: a._loadedRoutes,
                  injector: a._loadedInjector,
                })
              : (function _r(l, u, a, h) {
                  const v = u.canLoad;
                  if (void 0 === v || 0 === v.length) return (0, H.of)(!0);
                  const M = v.map((S) => {
                    const q = mi(S, l);
                    return kn(
                      (function Il(l) {
                        return l && Ai(l.canLoad);
                      })(q)
                        ? q.canLoad(u, a)
                        : l.runInContext(() => q(u, a))
                    );
                  });
                  return (0, H.of)(M).pipe(ri(), vi());
                })(u, a, h).pipe(
                  (0, Ie.z)((v) =>
                    v
                      ? this.configLoader.loadChildren(u, a).pipe(
                          ae((M) => {
                            (a._loadedRoutes = M.routes),
                              (a._loadedInjector = M.injector);
                          })
                        )
                      : (function co(l) {
                          return Ve(fi(!1, 3));
                        })()
                  )
                )
            : (0, H.of)({ routes: [], injector: u });
        }
      }
      function ca(l) {
        const u = l.value.routeConfig;
        return u && '' === u.path;
      }
      function Gi(l) {
        const u = [],
          a = new Set();
        for (const h of l) {
          if (!ca(h)) {
            u.push(h);
            continue;
          }
          const v = u.find((M) => h.value.routeConfig === M.value.routeConfig);
          void 0 !== v ? (v.children.push(...h.children), a.add(v)) : u.push(h);
        }
        for (const h of a) {
          const v = Gi(h.children);
          u.push(new dt(h.value, v));
        }
        return u.filter((h) => !a.has(h));
      }
      function Qo(l) {
        return l.data || {};
      }
      function Wi(l) {
        return l.resolve || {};
      }
      function Pi(l) {
        return 'string' == typeof l.title || null === l.title;
      }
      function zn(l) {
        return (0, se.w)((u) => {
          const a = l(u);
          return a ? (0, Y.D)(a).pipe((0, ne.U)(() => u)) : (0, H.of)(u);
        });
      }
      const Rr = new p.OlP('ROUTES');
      let f = (() => {
        class l {
          constructor() {
            (this.componentLoaders = new WeakMap()),
              (this.childrenLoaders = new WeakMap()),
              (this.compiler = (0, p.f3M)(p.Sil));
          }
          loadComponent(a) {
            if (this.componentLoaders.get(a))
              return this.componentLoaders.get(a);
            if (a._loadedComponent) return (0, H.of)(a._loadedComponent);
            this.onLoadStartListener && this.onLoadStartListener(a);
            const h = kn(a.loadComponent()).pipe(
                (0, ne.U)(g),
                ae((M) => {
                  this.onLoadEndListener && this.onLoadEndListener(a),
                    (a._loadedComponent = M);
                }),
                St(() => {
                  this.componentLoaders.delete(a);
                })
              ),
              v = new pt(h, () => new qe.x()).pipe(Ye());
            return this.componentLoaders.set(a, v), v;
          }
          loadChildren(a, h) {
            if (this.childrenLoaders.get(h)) return this.childrenLoaders.get(h);
            if (h._loadedRoutes)
              return (0, H.of)({
                routes: h._loadedRoutes,
                injector: h._loadedInjector,
              });
            this.onLoadStartListener && this.onLoadStartListener(h);
            const M = this.loadModuleFactoryOrRoutes(h.loadChildren).pipe(
                (0, ne.U)((q) => {
                  this.onLoadEndListener && this.onLoadEndListener(h);
                  let Oe, tt;
                  return (
                    Array.isArray(q)
                      ? (tt = q)
                      : ((Oe = q.create(a).injector),
                        (tt = Oe.get(
                          Rr,
                          [],
                          p.XFs.Self | p.XFs.Optional
                        ).flat())),
                    { routes: tt.map(gi), injector: Oe }
                  );
                }),
                St(() => {
                  this.childrenLoaders.delete(h);
                })
              ),
              S = new pt(M, () => new qe.x()).pipe(Ye());
            return this.childrenLoaders.set(h, S), S;
          }
          loadModuleFactoryOrRoutes(a) {
            return kn(a()).pipe(
              (0, ne.U)(g),
              (0, Ie.z)((h) =>
                h instanceof p.YKP || Array.isArray(h)
                  ? (0, H.of)(h)
                  : (0, Y.D)(this.compiler.compileModuleAsync(h))
              )
            );
          }
        }
        return (
          (l.ɵfac = function (a) {
            return new (a || l)();
          }),
          (l.ɵprov = p.Yz7({ token: l, factory: l.ɵfac, providedIn: 'root' })),
          l
        );
      })();
      function g(l) {
        return (function _(l) {
          return l && 'object' == typeof l && 'default' in l;
        })(l)
          ? l.default
          : l;
      }
      let w = (() => {
        class l {
          get hasRequestedNavigation() {
            return 0 !== this.navigationId;
          }
          constructor() {
            (this.currentNavigation = null),
              (this.lastSuccessfulNavigation = null),
              (this.events = new qe.x()),
              (this.configLoader = (0, p.f3M)(f)),
              (this.environmentInjector = (0, p.f3M)(p.lqb)),
              (this.urlSerializer = (0, p.f3M)(wt)),
              (this.rootContexts = (0, p.f3M)(x)),
              (this.inputBindingEnabled =
                null !== (0, p.f3M)(Wr, { optional: !0 })),
              (this.navigationId = 0),
              (this.afterPreactivation = () => (0, H.of)(void 0)),
              (this.rootComponentType = null),
              (this.configLoader.onLoadEndListener = (v) =>
                this.events.next(new xn(v))),
              (this.configLoader.onLoadStartListener = (v) =>
                this.events.next(new or(v)));
          }
          complete() {
            this.transitions?.complete();
          }
          handleNavigationRequest(a) {
            const h = ++this.navigationId;
            this.transitions?.next({ ...this.transitions.value, ...a, id: h });
          }
          setupNavigations(a) {
            return (
              (this.transitions = new ee.X({
                id: 0,
                currentUrlTree: a.currentUrlTree,
                currentRawUrl: a.currentUrlTree,
                extractedUrl: a.urlHandlingStrategy.extract(a.currentUrlTree),
                urlAfterRedirects: a.urlHandlingStrategy.extract(
                  a.currentUrlTree
                ),
                rawUrl: a.currentUrlTree,
                extras: {},
                resolve: null,
                reject: null,
                promise: Promise.resolve(!0),
                source: K,
                restoredState: null,
                currentSnapshot: a.routerState.snapshot,
                targetSnapshot: null,
                currentRouterState: a.routerState,
                targetRouterState: null,
                guards: { canActivateChecks: [], canDeactivateChecks: [] },
                guardsResult: null,
              })),
              this.transitions.pipe(
                (0, ye.h)((h) => 0 !== h.id),
                (0, ne.U)((h) => ({
                  ...h,
                  extractedUrl: a.urlHandlingStrategy.extract(h.rawUrl),
                })),
                (0, se.w)((h) => {
                  let v = !1,
                    M = !1;
                  return (0, H.of)(h).pipe(
                    ae((S) => {
                      this.currentNavigation = {
                        id: S.id,
                        initialUrl: S.rawUrl,
                        extractedUrl: S.extractedUrl,
                        trigger: S.source,
                        extras: S.extras,
                        previousNavigation: this.lastSuccessfulNavigation
                          ? {
                              ...this.lastSuccessfulNavigation,
                              previousNavigation: null,
                            }
                          : null,
                      };
                    }),
                    (0, se.w)((S) => {
                      const q = a.browserUrlTree.toString(),
                        Oe =
                          !a.navigated ||
                          S.extractedUrl.toString() !== q ||
                          q !== a.currentUrlTree.toString();
                      if (
                        !Oe &&
                        'reload' !==
                          (S.extras.onSameUrlNavigation ??
                            a.onSameUrlNavigation)
                      ) {
                        const ft = '';
                        return (
                          this.events.next(
                            new fe(S.id, a.serializeUrl(h.rawUrl), ft, 0)
                          ),
                          (a.rawUrlTree = S.rawUrl),
                          S.resolve(null),
                          Le.E
                        );
                      }
                      if (a.urlHandlingStrategy.shouldProcessUrl(S.rawUrl))
                        return (
                          L(S.source) && (a.browserUrlTree = S.extractedUrl),
                          (0, H.of)(S).pipe(
                            (0, se.w)((ft) => {
                              const Qt = this.transitions?.getValue();
                              return (
                                this.events.next(
                                  new b(
                                    ft.id,
                                    this.urlSerializer.serialize(
                                      ft.extractedUrl
                                    ),
                                    ft.source,
                                    ft.restoredState
                                  )
                                ),
                                Qt !== this.transitions?.getValue()
                                  ? Le.E
                                  : Promise.resolve(ft)
                              );
                            }),
                            (function ua(l, u, a, h, v, M) {
                              return (0, Ie.z)((S) =>
                                (function uo(
                                  l,
                                  u,
                                  a,
                                  h,
                                  v,
                                  M,
                                  S = 'emptyOnly'
                                ) {
                                  return new Zo(
                                    l,
                                    u,
                                    a,
                                    h,
                                    v,
                                    S,
                                    M
                                  ).recognize();
                                })(l, u, a, h, S.extractedUrl, v, M).pipe(
                                  (0, ne.U)(({ state: q, tree: Oe }) => ({
                                    ...S,
                                    targetSnapshot: q,
                                    urlAfterRedirects: Oe,
                                  }))
                                )
                              );
                            })(
                              this.environmentInjector,
                              this.configLoader,
                              this.rootComponentType,
                              a.config,
                              this.urlSerializer,
                              a.paramsInheritanceStrategy
                            ),
                            ae((ft) => {
                              if (
                                ((h.targetSnapshot = ft.targetSnapshot),
                                (h.urlAfterRedirects = ft.urlAfterRedirects),
                                (this.currentNavigation = {
                                  ...this.currentNavigation,
                                  finalUrl: ft.urlAfterRedirects,
                                }),
                                'eager' === a.urlUpdateStrategy)
                              ) {
                                if (!ft.extras.skipLocationChange) {
                                  const lr = a.urlHandlingStrategy.merge(
                                    ft.urlAfterRedirects,
                                    ft.rawUrl
                                  );
                                  a.setBrowserUrl(lr, ft);
                                }
                                a.browserUrlTree = ft.urlAfterRedirects;
                              }
                              const Qt = new nt(
                                ft.id,
                                this.urlSerializer.serialize(ft.extractedUrl),
                                this.urlSerializer.serialize(
                                  ft.urlAfterRedirects
                                ),
                                ft.targetSnapshot
                              );
                              this.events.next(Qt);
                            })
                          )
                        );
                      if (
                        Oe &&
                        a.urlHandlingStrategy.shouldProcessUrl(a.rawUrlTree)
                      ) {
                        const {
                            id: ft,
                            extractedUrl: Qt,
                            source: lr,
                            restoredState: as,
                            extras: Ur,
                          } = S,
                          Qr = new b(
                            ft,
                            this.urlSerializer.serialize(Qt),
                            lr,
                            as
                          );
                        this.events.next(Qr);
                        const ls = Ft(0, this.rootComponentType).snapshot;
                        return (
                          (h = {
                            ...S,
                            targetSnapshot: ls,
                            urlAfterRedirects: Qt,
                            extras: {
                              ...Ur,
                              skipLocationChange: !1,
                              replaceUrl: !1,
                            },
                          }),
                          (0, H.of)(h)
                        );
                      }
                      {
                        const ft = '';
                        return (
                          this.events.next(
                            new fe(S.id, a.serializeUrl(h.extractedUrl), ft, 1)
                          ),
                          (a.rawUrlTree = S.rawUrl),
                          S.resolve(null),
                          Le.E
                        );
                      }
                    }),
                    ae((S) => {
                      const q = new gt(
                        S.id,
                        this.urlSerializer.serialize(S.extractedUrl),
                        this.urlSerializer.serialize(S.urlAfterRedirects),
                        S.targetSnapshot
                      );
                      this.events.next(q);
                    }),
                    (0, ne.U)(
                      (S) =>
                        (h = {
                          ...S,
                          guards: Xs(
                            S.targetSnapshot,
                            S.currentSnapshot,
                            this.rootContexts
                          ),
                        })
                    ),
                    (function Tl(l, u) {
                      return (0, Ie.z)((a) => {
                        const {
                          targetSnapshot: h,
                          currentSnapshot: v,
                          guards: {
                            canActivateChecks: M,
                            canDeactivateChecks: S,
                          },
                        } = a;
                        return 0 === S.length && 0 === M.length
                          ? (0, H.of)({ ...a, guardsResult: !0 })
                          : (function lo(l, u, a, h) {
                              return (0, Y.D)(l).pipe(
                                (0, Ie.z)((v) =>
                                  (function oa(l, u, a, h, v) {
                                    const M =
                                      u && u.routeConfig
                                        ? u.routeConfig.canDeactivate
                                        : null;
                                    if (!M || 0 === M.length)
                                      return (0, H.of)(!0);
                                    const S = M.map((q) => {
                                      const Oe = An(u) ?? v,
                                        tt = mi(q, Oe);
                                      return kn(
                                        (function so(l) {
                                          return l && Ai(l.canDeactivate);
                                        })(tt)
                                          ? tt.canDeactivate(l, u, a, h)
                                          : Oe.runInContext(() =>
                                              tt(l, u, a, h)
                                            )
                                      ).pipe(z());
                                    });
                                    return (0, H.of)(S).pipe(ri());
                                  })(v.component, v.route, a, u, h)
                                ),
                                z((v) => !0 !== v, !0)
                              );
                            })(S, h, v, l).pipe(
                              (0, Ie.z)((q) =>
                                q &&
                                (function Js(l) {
                                  return 'boolean' == typeof l;
                                })(q)
                                  ? (function Wo(l, u, a, h) {
                                      return (0, Y.D)(u).pipe(
                                        (0, W.b)((v) =>
                                          (0, $.z)(
                                            (function Yo(l, u) {
                                              return (
                                                null !== l && u && u(new Bn(l)),
                                                (0, H.of)(!0)
                                              );
                                            })(v.route.parent, h),
                                            (function ra(l, u) {
                                              return (
                                                null !== l && u && u(new pn(l)),
                                                (0, H.of)(!0)
                                              );
                                            })(v.route, h),
                                            (function Al(l, u, a) {
                                              const h = u[u.length - 1],
                                                M = u
                                                  .slice(0, u.length - 1)
                                                  .reverse()
                                                  .map((S) =>
                                                    (function Qs(l) {
                                                      const u = l.routeConfig
                                                        ? l.routeConfig
                                                            .canActivateChild
                                                        : null;
                                                      return u && 0 !== u.length
                                                        ? { node: l, guards: u }
                                                        : null;
                                                    })(S)
                                                  )
                                                  .filter((S) => null !== S)
                                                  .map((S) =>
                                                    (0, oe.P)(() => {
                                                      const q = S.guards.map(
                                                        (Oe) => {
                                                          const tt =
                                                              An(S.node) ?? a,
                                                            ft = mi(Oe, tt);
                                                          return kn(
                                                            (function ta(l) {
                                                              return (
                                                                l &&
                                                                Ai(
                                                                  l.canActivateChild
                                                                )
                                                              );
                                                            })(ft)
                                                              ? ft.canActivateChild(
                                                                  h,
                                                                  l
                                                                )
                                                              : tt.runInContext(
                                                                  () => ft(h, l)
                                                                )
                                                          ).pipe(z());
                                                        }
                                                      );
                                                      return (0, H.of)(q).pipe(
                                                        ri()
                                                      );
                                                    })
                                                  );
                                              return (0, H.of)(M).pipe(ri());
                                            })(l, v.path, a),
                                            (function ia(l, u, a) {
                                              const h = u.routeConfig
                                                ? u.routeConfig.canActivate
                                                : null;
                                              if (!h || 0 === h.length)
                                                return (0, H.of)(!0);
                                              const v = h.map((M) =>
                                                (0, oe.P)(() => {
                                                  const S = An(u) ?? a,
                                                    q = mi(M, S);
                                                  return kn(
                                                    (function ea(l) {
                                                      return (
                                                        l && Ai(l.canActivate)
                                                      );
                                                    })(q)
                                                      ? q.canActivate(u, l)
                                                      : S.runInContext(() =>
                                                          q(u, l)
                                                        )
                                                  ).pipe(z());
                                                })
                                              );
                                              return (0, H.of)(v).pipe(ri());
                                            })(l, v.route, a)
                                          )
                                        ),
                                        z((v) => !0 !== v, !0)
                                      );
                                    })(h, M, l, u)
                                  : (0, H.of)(q)
                              ),
                              (0, ne.U)((q) => ({ ...a, guardsResult: q }))
                            );
                      });
                    })(this.environmentInjector, (S) => this.events.next(S)),
                    ae((S) => {
                      if (
                        ((h.guardsResult = S.guardsResult), j(S.guardsResult))
                      )
                        throw hi(0, S.guardsResult);
                      const q = new yt(
                        S.id,
                        this.urlSerializer.serialize(S.extractedUrl),
                        this.urlSerializer.serialize(S.urlAfterRedirects),
                        S.targetSnapshot,
                        !!S.guardsResult
                      );
                      this.events.next(q);
                    }),
                    (0, ye.h)(
                      (S) =>
                        !!S.guardsResult ||
                        (a.restoreHistory(S),
                        this.cancelNavigationTransition(S, '', 3),
                        !1)
                    ),
                    zn((S) => {
                      if (S.guards.canActivateChecks.length)
                        return (0, H.of)(S).pipe(
                          ae((q) => {
                            const Oe = new Dt(
                              q.id,
                              this.urlSerializer.serialize(q.extractedUrl),
                              this.urlSerializer.serialize(q.urlAfterRedirects),
                              q.targetSnapshot
                            );
                            this.events.next(Oe);
                          }),
                          (0, se.w)((q) => {
                            let Oe = !1;
                            return (0, H.of)(q).pipe(
                              (function Or(l, u) {
                                return (0, Ie.z)((a) => {
                                  const {
                                    targetSnapshot: h,
                                    guards: { canActivateChecks: v },
                                  } = a;
                                  if (!v.length) return (0, H.of)(a);
                                  let M = 0;
                                  return (0, Y.D)(v).pipe(
                                    (0, W.b)((S) =>
                                      (function qo(l, u, a, h) {
                                        const v = l.routeConfig,
                                          M = l._resolve;
                                        return (
                                          void 0 !== v?.title &&
                                            !Pi(v) &&
                                            (M[cn] = v.title),
                                          (function Jo(l, u, a, h) {
                                            const v = (function ln(l) {
                                              return [
                                                ...Object.keys(l),
                                                ...Object.getOwnPropertySymbols(
                                                  l
                                                ),
                                              ];
                                            })(l);
                                            if (0 === v.length)
                                              return (0, H.of)({});
                                            const M = {};
                                            return (0, Y.D)(v).pipe(
                                              (0, Ie.z)((S) =>
                                                (function da(l, u, a, h) {
                                                  const v = An(u) ?? h,
                                                    M = mi(l, v);
                                                  return kn(
                                                    M.resolve
                                                      ? M.resolve(u, a)
                                                      : v.runInContext(() =>
                                                          M(u, a)
                                                        )
                                                  );
                                                })(l[S], u, a, h).pipe(
                                                  z(),
                                                  ae((q) => {
                                                    M[S] = q;
                                                  })
                                                )
                                              ),
                                              Tt(1),
                                              (0, ht.h)(M),
                                              je((S) => (gn(S) ? Le.E : Ve(S)))
                                            );
                                          })(M, l, u, h).pipe(
                                            (0, ne.U)(
                                              (S) => (
                                                (l._resolvedData = S),
                                                (l.data = Mn(l, a).resolve),
                                                v &&
                                                  Pi(v) &&
                                                  (l.data[cn] = v.title),
                                                null
                                              )
                                            )
                                          )
                                        );
                                      })(S.route, h, l, u)
                                    ),
                                    ae(() => M++),
                                    Tt(1),
                                    (0, Ie.z)((S) =>
                                      M === v.length ? (0, H.of)(a) : Le.E
                                    )
                                  );
                                });
                              })(
                                a.paramsInheritanceStrategy,
                                this.environmentInjector
                              ),
                              ae({
                                next: () => (Oe = !0),
                                complete: () => {
                                  Oe ||
                                    (a.restoreHistory(q),
                                    this.cancelNavigationTransition(q, '', 2));
                                },
                              })
                            );
                          }),
                          ae((q) => {
                            const Oe = new $t(
                              q.id,
                              this.urlSerializer.serialize(q.extractedUrl),
                              this.urlSerializer.serialize(q.urlAfterRedirects),
                              q.targetSnapshot
                            );
                            this.events.next(Oe);
                          })
                        );
                    }),
                    zn((S) => {
                      const q = (Oe) => {
                        const tt = [];
                        Oe.routeConfig?.loadComponent &&
                          !Oe.routeConfig._loadedComponent &&
                          tt.push(
                            this.configLoader
                              .loadComponent(Oe.routeConfig)
                              .pipe(
                                ae((ft) => {
                                  Oe.component = ft;
                                }),
                                (0, ne.U)(() => {})
                              )
                          );
                        for (const ft of Oe.children) tt.push(...q(ft));
                        return tt;
                      };
                      return (0, Te.a)(q(S.targetSnapshot.root)).pipe(
                        Ee(),
                        (0, ce.q)(1)
                      );
                    }),
                    zn(() => this.afterPreactivation()),
                    (0, ne.U)((S) => {
                      const q = (function Mr(l, u, a) {
                        const h = Sr(l, u._root, a ? a._root : void 0);
                        return new mt(h, u);
                      })(
                        a.routeReuseStrategy,
                        S.targetSnapshot,
                        S.currentRouterState
                      );
                      return (h = { ...S, targetRouterState: q });
                    }),
                    ae((S) => {
                      (a.currentUrlTree = S.urlAfterRedirects),
                        (a.rawUrlTree = a.urlHandlingStrategy.merge(
                          S.urlAfterRedirects,
                          S.rawUrl
                        )),
                        (a.routerState = S.targetRouterState),
                        'deferred' === a.urlUpdateStrategy &&
                          (S.extras.skipLocationChange ||
                            a.setBrowserUrl(a.rawUrlTree, S),
                          (a.browserUrlTree = S.urlAfterRedirects));
                    }),
                    ((l, u, a, h) =>
                      (0, ne.U)(
                        (v) => (
                          new Ks(
                            u,
                            v.targetRouterState,
                            v.currentRouterState,
                            a,
                            h
                          ).activate(l),
                          v
                        )
                      ))(
                      this.rootContexts,
                      a.routeReuseStrategy,
                      (S) => this.events.next(S),
                      this.inputBindingEnabled
                    ),
                    (0, ce.q)(1),
                    ae({
                      next: (S) => {
                        (v = !0),
                          (this.lastSuccessfulNavigation =
                            this.currentNavigation),
                          (a.navigated = !0),
                          this.events.next(
                            new F(
                              S.id,
                              this.urlSerializer.serialize(S.extractedUrl),
                              this.urlSerializer.serialize(a.currentUrlTree)
                            )
                          ),
                          a.titleStrategy?.updateTitle(
                            S.targetRouterState.snapshot
                          ),
                          S.resolve(!0);
                      },
                      complete: () => {
                        v = !0;
                      },
                    }),
                    St(() => {
                      v || M || this.cancelNavigationTransition(h, '', 1),
                        this.currentNavigation?.id === h.id &&
                          (this.currentNavigation = null);
                    }),
                    je((S) => {
                      if (((M = !0), Zs(S))) {
                        Nt(S) || ((a.navigated = !0), a.restoreHistory(h, !0));
                        const q = new V(
                          h.id,
                          this.urlSerializer.serialize(h.extractedUrl),
                          S.message,
                          S.cancellationCode
                        );
                        if ((this.events.next(q), Nt(S))) {
                          const Oe = a.urlHandlingStrategy.merge(
                              S.url,
                              a.rawUrlTree
                            ),
                            tt = {
                              skipLocationChange: h.extras.skipLocationChange,
                              replaceUrl:
                                'eager' === a.urlUpdateStrategy || L(h.source),
                            };
                          a.scheduleNavigation(Oe, K, null, tt, {
                            resolve: h.resolve,
                            reject: h.reject,
                            promise: h.promise,
                          });
                        } else h.resolve(!1);
                      } else {
                        a.restoreHistory(h, !0);
                        const q = new Fe(
                          h.id,
                          this.urlSerializer.serialize(h.extractedUrl),
                          S,
                          h.targetSnapshot ?? void 0
                        );
                        this.events.next(q);
                        try {
                          h.resolve(a.errorHandler(S));
                        } catch (Oe) {
                          h.reject(Oe);
                        }
                      }
                      return Le.E;
                    })
                  );
                })
              )
            );
          }
          cancelNavigationTransition(a, h, v) {
            const M = new V(
              a.id,
              this.urlSerializer.serialize(a.extractedUrl),
              h,
              v
            );
            this.events.next(M), a.resolve(!1);
          }
        }
        return (
          (l.ɵfac = function (a) {
            return new (a || l)();
          }),
          (l.ɵprov = p.Yz7({ token: l, factory: l.ɵfac, providedIn: 'root' })),
          l
        );
      })();
      function L(l) {
        return l !== K;
      }
      let ve = (() => {
          class l {
            buildTitle(a) {
              let h,
                v = a.root;
              for (; void 0 !== v; )
                (h = this.getResolvedTitleForRoute(v) ?? h),
                  (v = v.children.find((M) => M.outlet === st));
              return h;
            }
            getResolvedTitleForRoute(a) {
              return a.data[cn];
            }
          }
          return (
            (l.ɵfac = function (a) {
              return new (a || l)();
            }),
            (l.ɵprov = p.Yz7({
              token: l,
              factory: function () {
                return (0, p.f3M)(Se);
              },
              providedIn: 'root',
            })),
            l
          );
        })(),
        Se = (() => {
          class l extends ve {
            constructor(a) {
              super(), (this.title = a);
            }
            updateTitle(a) {
              const h = this.buildTitle(a);
              void 0 !== h && this.title.setTitle(h);
            }
          }
          return (
            (l.ɵfac = function (a) {
              return new (a || l)(p.LFG(qt.Dx));
            }),
            (l.ɵprov = p.Yz7({
              token: l,
              factory: l.ɵfac,
              providedIn: 'root',
            })),
            l
          );
        })(),
        at = (() => {
          class l {}
          return (
            (l.ɵfac = function (a) {
              return new (a || l)();
            }),
            (l.ɵprov = p.Yz7({
              token: l,
              factory: function () {
                return (0, p.f3M)(Xt);
              },
              providedIn: 'root',
            })),
            l
          );
        })();
      class Jt {
        shouldDetach(u) {
          return !1;
        }
        store(u, a) {}
        shouldAttach(u) {
          return !1;
        }
        retrieve(u) {
          return null;
        }
        shouldReuseRoute(u, a) {
          return u.routeConfig === a.routeConfig;
        }
      }
      let Xt = (() => {
        class l extends Jt {}
        return (
          (l.ɵfac = (function () {
            let u;
            return function (h) {
              return (u || (u = p.n5z(l)))(h || l);
            };
          })()),
          (l.ɵprov = p.Yz7({ token: l, factory: l.ɵfac, providedIn: 'root' })),
          l
        );
      })();
      const kt = new p.OlP('', { providedIn: 'root', factory: () => ({}) });
      let xt = (() => {
          class l {}
          return (
            (l.ɵfac = function (a) {
              return new (a || l)();
            }),
            (l.ɵprov = p.Yz7({
              token: l,
              factory: function () {
                return (0, p.f3M)(mn);
              },
              providedIn: 'root',
            })),
            l
          );
        })(),
        mn = (() => {
          class l {
            shouldProcessUrl(a) {
              return !0;
            }
            extract(a) {
              return a;
            }
            merge(a, h) {
              return a;
            }
          }
          return (
            (l.ɵfac = function (a) {
              return new (a || l)();
            }),
            (l.ɵprov = p.Yz7({
              token: l,
              factory: l.ɵfac,
              providedIn: 'root',
            })),
            l
          );
        })();
      var Ze = (() => (
        ((Ze = Ze || {})[(Ze.COMPLETE = 0)] = 'COMPLETE'),
        (Ze[(Ze.FAILED = 1)] = 'FAILED'),
        (Ze[(Ze.REDIRECTING = 2)] = 'REDIRECTING'),
        Ze
      ))();
      function Dn(l, u) {
        l.events
          .pipe(
            (0, ye.h)(
              (a) =>
                a instanceof F ||
                a instanceof V ||
                a instanceof Fe ||
                a instanceof fe
            ),
            (0, ne.U)((a) =>
              a instanceof F || a instanceof fe
                ? Ze.COMPLETE
                : a instanceof V && (0 === a.code || 1 === a.code)
                ? Ze.REDIRECTING
                : Ze.FAILED
            ),
            (0, ye.h)((a) => a !== Ze.REDIRECTING),
            (0, ce.q)(1)
          )
          .subscribe(() => {
            u();
          });
      }
      function Kr(l) {
        throw l;
      }
      function xr(l, u, a) {
        return u.parse('/');
      }
      const ii = {
          paths: 'exact',
          fragment: 'ignored',
          matrixParams: 'ignored',
          queryParams: 'exact',
        },
        yr = {
          paths: 'subset',
          fragment: 'ignored',
          matrixParams: 'ignored',
          queryParams: 'subset',
        };
      let Cn = (() => {
          class l {
            get navigationId() {
              return this.navigationTransitions.navigationId;
            }
            get browserPageId() {
              if ('computed' === this.canceledNavigationResolution)
                return this.location.getState()?.ɵrouterPageId;
            }
            get events() {
              return this.navigationTransitions.events;
            }
            constructor() {
              (this.disposed = !1),
                (this.currentPageId = 0),
                (this.console = (0, p.f3M)(p.c2e)),
                (this.isNgZoneEnabled = !1),
                (this.options = (0, p.f3M)(kt, { optional: !0 }) || {}),
                (this.pendingTasks = (0, p.f3M)(p.HDt)),
                (this.errorHandler = this.options.errorHandler || Kr),
                (this.malformedUriErrorHandler =
                  this.options.malformedUriErrorHandler || xr),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1),
                (this.urlHandlingStrategy = (0, p.f3M)(xt)),
                (this.routeReuseStrategy = (0, p.f3M)(at)),
                (this.titleStrategy = (0, p.f3M)(ve)),
                (this.onSameUrlNavigation =
                  this.options.onSameUrlNavigation || 'ignore'),
                (this.paramsInheritanceStrategy =
                  this.options.paramsInheritanceStrategy || 'emptyOnly'),
                (this.urlUpdateStrategy =
                  this.options.urlUpdateStrategy || 'deferred'),
                (this.canceledNavigationResolution =
                  this.options.canceledNavigationResolution || 'replace'),
                (this.config = (0, p.f3M)(Rr, { optional: !0 })?.flat() ?? []),
                (this.navigationTransitions = (0, p.f3M)(w)),
                (this.urlSerializer = (0, p.f3M)(wt)),
                (this.location = (0, p.f3M)(ue.Ye)),
                (this.componentInputBindingEnabled = !!(0, p.f3M)(Wr, {
                  optional: !0,
                })),
                (this.isNgZoneEnabled =
                  (0, p.f3M)(p.R0b) instanceof p.R0b &&
                  p.R0b.isInAngularZone()),
                this.resetConfig(this.config),
                (this.currentUrlTree = new sn()),
                (this.rawUrlTree = this.currentUrlTree),
                (this.browserUrlTree = this.currentUrlTree),
                (this.routerState = Ft(0, null)),
                this.navigationTransitions.setupNavigations(this).subscribe(
                  (a) => {
                    (this.lastSuccessfulId = a.id),
                      (this.currentPageId = this.browserPageId ?? 0);
                  },
                  (a) => {
                    this.console.warn(`Unhandled Navigation Error: ${a}`);
                  }
                );
            }
            resetRootComponentType(a) {
              (this.routerState.root.component = a),
                (this.navigationTransitions.rootComponentType = a);
            }
            initialNavigation() {
              if (
                (this.setUpLocationChangeListener(),
                !this.navigationTransitions.hasRequestedNavigation)
              ) {
                const a = this.location.getState();
                this.navigateToSyncWithBrowser(this.location.path(!0), K, a);
              }
            }
            setUpLocationChangeListener() {
              this.locationSubscription ||
                (this.locationSubscription = this.location.subscribe((a) => {
                  const h = 'popstate' === a.type ? 'popstate' : 'hashchange';
                  'popstate' === h &&
                    setTimeout(() => {
                      this.navigateToSyncWithBrowser(a.url, h, a.state);
                    }, 0);
                }));
            }
            navigateToSyncWithBrowser(a, h, v) {
              const M = { replaceUrl: !0 },
                S = v?.navigationId ? v : null;
              if (v) {
                const Oe = { ...v };
                delete Oe.navigationId,
                  delete Oe.ɵrouterPageId,
                  0 !== Object.keys(Oe).length && (M.state = Oe);
              }
              const q = this.parseUrl(a);
              this.scheduleNavigation(q, h, S, M);
            }
            get url() {
              return this.serializeUrl(this.currentUrlTree);
            }
            getCurrentNavigation() {
              return this.navigationTransitions.currentNavigation;
            }
            get lastSuccessfulNavigation() {
              return this.navigationTransitions.lastSuccessfulNavigation;
            }
            resetConfig(a) {
              (this.config = a.map(gi)),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1);
            }
            ngOnDestroy() {
              this.dispose();
            }
            dispose() {
              this.navigationTransitions.complete(),
                this.locationSubscription &&
                  (this.locationSubscription.unsubscribe(),
                  (this.locationSubscription = void 0)),
                (this.disposed = !0);
            }
            createUrlTree(a, h = {}) {
              const {
                  relativeTo: v,
                  queryParams: M,
                  fragment: S,
                  queryParamsHandling: q,
                  preserveFragment: Oe,
                } = h,
                tt = Oe ? this.currentUrlTree.fragment : S;
              let Qt,
                ft = null;
              switch (q) {
                case 'merge':
                  ft = { ...this.currentUrlTree.queryParams, ...M };
                  break;
                case 'preserve':
                  ft = this.currentUrlTree.queryParams;
                  break;
                default:
                  ft = M || null;
              }
              null !== ft && (ft = this.removeEmptyProps(ft));
              try {
                Qt = T(v ? v.snapshot : this.routerState.snapshot.root);
              } catch {
                ('string' != typeof a[0] || !a[0].startsWith('/')) && (a = []),
                  (Qt = this.currentUrlTree.root);
              }
              return Q(Qt, a, ft, tt ?? null);
            }
            navigateByUrl(a, h = { skipLocationChange: !1 }) {
              const v = j(a) ? a : this.parseUrl(a),
                M = this.urlHandlingStrategy.merge(v, this.rawUrlTree);
              return this.scheduleNavigation(M, K, null, h);
            }
            navigate(a, h = { skipLocationChange: !1 }) {
              return (
                (function sr(l) {
                  for (let u = 0; u < l.length; u++)
                    if (null == l[u]) throw new p.vHH(4008, !1);
                })(a),
                this.navigateByUrl(this.createUrlTree(a, h), h)
              );
            }
            serializeUrl(a) {
              return this.urlSerializer.serialize(a);
            }
            parseUrl(a) {
              let h;
              try {
                h = this.urlSerializer.parse(a);
              } catch (v) {
                h = this.malformedUriErrorHandler(v, this.urlSerializer, a);
              }
              return h;
            }
            isActive(a, h) {
              let v;
              if (((v = !0 === h ? { ...ii } : !1 === h ? { ...yr } : h), j(a)))
                return vn(this.currentUrlTree, a, v);
              const M = this.parseUrl(a);
              return vn(this.currentUrlTree, M, v);
            }
            removeEmptyProps(a) {
              return Object.keys(a).reduce((h, v) => {
                const M = a[v];
                return null != M && (h[v] = M), h;
              }, {});
            }
            scheduleNavigation(a, h, v, M, S) {
              if (this.disposed) return Promise.resolve(!1);
              let q, Oe, tt;
              S
                ? ((q = S.resolve), (Oe = S.reject), (tt = S.promise))
                : (tt = new Promise((Qt, lr) => {
                    (q = Qt), (Oe = lr);
                  }));
              const ft = this.pendingTasks.add();
              return (
                Dn(this, () => {
                  Promise.resolve().then(() => this.pendingTasks.remove(ft));
                }),
                this.navigationTransitions.handleNavigationRequest({
                  source: h,
                  restoredState: v,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.currentUrlTree,
                  rawUrl: a,
                  extras: M,
                  resolve: q,
                  reject: Oe,
                  promise: tt,
                  currentSnapshot: this.routerState.snapshot,
                  currentRouterState: this.routerState,
                }),
                tt.catch((Qt) => Promise.reject(Qt))
              );
            }
            setBrowserUrl(a, h) {
              const v = this.urlSerializer.serialize(a);
              if (
                this.location.isCurrentPathEqualTo(v) ||
                h.extras.replaceUrl
              ) {
                const S = {
                  ...h.extras.state,
                  ...this.generateNgRouterState(h.id, this.browserPageId),
                };
                this.location.replaceState(v, '', S);
              } else {
                const M = {
                  ...h.extras.state,
                  ...this.generateNgRouterState(
                    h.id,
                    (this.browserPageId ?? 0) + 1
                  ),
                };
                this.location.go(v, '', M);
              }
            }
            restoreHistory(a, h = !1) {
              if ('computed' === this.canceledNavigationResolution) {
                const M =
                  this.currentPageId -
                  (this.browserPageId ?? this.currentPageId);
                0 !== M
                  ? this.location.historyGo(M)
                  : this.currentUrlTree ===
                      this.getCurrentNavigation()?.finalUrl &&
                    0 === M &&
                    (this.resetState(a),
                    (this.browserUrlTree = a.currentUrlTree),
                    this.resetUrlToCurrentUrlTree());
              } else
                'replace' === this.canceledNavigationResolution &&
                  (h && this.resetState(a), this.resetUrlToCurrentUrlTree());
            }
            resetState(a) {
              (this.routerState = a.currentRouterState),
                (this.currentUrlTree = a.currentUrlTree),
                (this.rawUrlTree = this.urlHandlingStrategy.merge(
                  this.currentUrlTree,
                  a.rawUrl
                ));
            }
            resetUrlToCurrentUrlTree() {
              this.location.replaceState(
                this.urlSerializer.serialize(this.rawUrlTree),
                '',
                this.generateNgRouterState(
                  this.lastSuccessfulId,
                  this.currentPageId
                )
              );
            }
            generateNgRouterState(a, h) {
              return 'computed' === this.canceledNavigationResolution
                ? { navigationId: a, ɵrouterPageId: h }
                : { navigationId: a };
            }
          }
          return (
            (l.ɵfac = function (a) {
              return new (a || l)();
            }),
            (l.ɵprov = p.Yz7({
              token: l,
              factory: l.ɵfac,
              providedIn: 'root',
            })),
            l
          );
        })(),
        Pr = (() => {
          class l {
            constructor(a, h, v, M, S, q) {
              (this.router = a),
                (this.route = h),
                (this.tabIndexAttribute = v),
                (this.renderer = M),
                (this.el = S),
                (this.locationStrategy = q),
                (this._preserveFragment = !1),
                (this._skipLocationChange = !1),
                (this._replaceUrl = !1),
                (this.href = null),
                (this.commands = null),
                (this.onChanges = new qe.x());
              const Oe = S.nativeElement.tagName?.toLowerCase();
              (this.isAnchorElement = 'a' === Oe || 'area' === Oe),
                this.isAnchorElement
                  ? (this.subscription = a.events.subscribe((tt) => {
                      tt instanceof F && this.updateHref();
                    }))
                  : this.setTabIndexIfNotOnNativeEl('0');
            }
            set preserveFragment(a) {
              this._preserveFragment = (0, p.D6c)(a);
            }
            get preserveFragment() {
              return this._preserveFragment;
            }
            set skipLocationChange(a) {
              this._skipLocationChange = (0, p.D6c)(a);
            }
            get skipLocationChange() {
              return this._skipLocationChange;
            }
            set replaceUrl(a) {
              this._replaceUrl = (0, p.D6c)(a);
            }
            get replaceUrl() {
              return this._replaceUrl;
            }
            setTabIndexIfNotOnNativeEl(a) {
              null != this.tabIndexAttribute ||
                this.isAnchorElement ||
                this.applyAttributeValue('tabindex', a);
            }
            ngOnChanges(a) {
              this.isAnchorElement && this.updateHref(),
                this.onChanges.next(this);
            }
            set routerLink(a) {
              null != a
                ? ((this.commands = Array.isArray(a) ? a : [a]),
                  this.setTabIndexIfNotOnNativeEl('0'))
                : ((this.commands = null),
                  this.setTabIndexIfNotOnNativeEl(null));
            }
            onClick(a, h, v, M, S) {
              return (
                !!(
                  null === this.urlTree ||
                  (this.isAnchorElement &&
                    (0 !== a ||
                      h ||
                      v ||
                      M ||
                      S ||
                      ('string' == typeof this.target &&
                        '_self' != this.target)))
                ) ||
                (this.router.navigateByUrl(this.urlTree, {
                  skipLocationChange: this.skipLocationChange,
                  replaceUrl: this.replaceUrl,
                  state: this.state,
                }),
                !this.isAnchorElement)
              );
            }
            ngOnDestroy() {
              this.subscription?.unsubscribe();
            }
            updateHref() {
              this.href =
                null !== this.urlTree && this.locationStrategy
                  ? this.locationStrategy?.prepareExternalUrl(
                      this.router.serializeUrl(this.urlTree)
                    )
                  : null;
              const a =
                null === this.href
                  ? null
                  : (0, p.P3R)(
                      this.href,
                      this.el.nativeElement.tagName.toLowerCase(),
                      'href'
                    );
              this.applyAttributeValue('href', a);
            }
            applyAttributeValue(a, h) {
              const v = this.renderer,
                M = this.el.nativeElement;
              null !== h ? v.setAttribute(M, a, h) : v.removeAttribute(M, a);
            }
            get urlTree() {
              return null === this.commands
                ? null
                : this.router.createUrlTree(this.commands, {
                    relativeTo:
                      void 0 !== this.relativeTo ? this.relativeTo : this.route,
                    queryParams: this.queryParams,
                    fragment: this.fragment,
                    queryParamsHandling: this.queryParamsHandling,
                    preserveFragment: this.preserveFragment,
                  });
            }
          }
          return (
            (l.ɵfac = function (a) {
              return new (a || l)(
                p.Y36(Cn),
                p.Y36(Fn),
                p.$8M('tabindex'),
                p.Y36(p.Qsj),
                p.Y36(p.SBq),
                p.Y36(ue.S$)
              );
            }),
            (l.ɵdir = p.lG2({
              type: l,
              selectors: [['', 'routerLink', '']],
              hostVars: 1,
              hostBindings: function (a, h) {
                1 & a &&
                  p.NdJ('click', function (M) {
                    return h.onClick(
                      M.button,
                      M.ctrlKey,
                      M.shiftKey,
                      M.altKey,
                      M.metaKey
                    );
                  }),
                  2 & a && p.uIk('target', h.target);
              },
              inputs: {
                target: 'target',
                queryParams: 'queryParams',
                fragment: 'fragment',
                queryParamsHandling: 'queryParamsHandling',
                state: 'state',
                relativeTo: 'relativeTo',
                preserveFragment: 'preserveFragment',
                skipLocationChange: 'skipLocationChange',
                replaceUrl: 'replaceUrl',
                routerLink: 'routerLink',
              },
              standalone: !0,
              features: [p.TTD],
            })),
            l
          );
        })();
      class ha {}
      let Ll = (() => {
          class l {
            preload(a, h) {
              return h().pipe(je(() => (0, H.of)(null)));
            }
          }
          return (
            (l.ɵfac = function (a) {
              return new (a || l)();
            }),
            (l.ɵprov = p.Yz7({
              token: l,
              factory: l.ɵfac,
              providedIn: 'root',
            })),
            l
          );
        })(),
        jt = (() => {
          class l {
            constructor(a, h, v, M, S) {
              (this.router = a),
                (this.injector = v),
                (this.preloadingStrategy = M),
                (this.loader = S);
            }
            setUpPreloading() {
              this.subscription = this.router.events
                .pipe(
                  (0, ye.h)((a) => a instanceof F),
                  (0, W.b)(() => this.preload())
                )
                .subscribe(() => {});
            }
            preload() {
              return this.processRoutes(this.injector, this.router.config);
            }
            ngOnDestroy() {
              this.subscription && this.subscription.unsubscribe();
            }
            processRoutes(a, h) {
              const v = [];
              for (const M of h) {
                M.providers &&
                  !M._injector &&
                  (M._injector = (0, p.MMx)(
                    M.providers,
                    a,
                    `Route: ${M.path}`
                  ));
                const S = M._injector ?? a,
                  q = M._loadedInjector ?? S;
                ((M.loadChildren && !M._loadedRoutes && void 0 === M.canLoad) ||
                  (M.loadComponent && !M._loadedComponent)) &&
                  v.push(this.preloadConfig(S, M)),
                  (M.children || M._loadedRoutes) &&
                    v.push(
                      this.processRoutes(q, M.children ?? M._loadedRoutes)
                    );
              }
              return (0, Y.D)(v).pipe((0, ct.J)());
            }
            preloadConfig(a, h) {
              return this.preloadingStrategy.preload(h, () => {
                let v;
                v =
                  h.loadChildren && void 0 === h.canLoad
                    ? this.loader.loadChildren(a, h)
                    : (0, H.of)(null);
                const M = v.pipe(
                  (0, Ie.z)((S) =>
                    null === S
                      ? (0, H.of)(void 0)
                      : ((h._loadedRoutes = S.routes),
                        (h._loadedInjector = S.injector),
                        this.processRoutes(S.injector ?? a, S.routes))
                  )
                );
                if (h.loadComponent && !h._loadedComponent) {
                  const S = this.loader.loadComponent(h);
                  return (0, Y.D)([M, S]).pipe((0, ct.J)());
                }
                return M;
              });
            }
          }
          return (
            (l.ɵfac = function (a) {
              return new (a || l)(
                p.LFG(Cn),
                p.LFG(p.Sil),
                p.LFG(p.lqb),
                p.LFG(ha),
                p.LFG(f)
              );
            }),
            (l.ɵprov = p.Yz7({
              token: l,
              factory: l.ɵfac,
              providedIn: 'root',
            })),
            l
          );
        })();
      const ho = new p.OlP('');
      let es = (() => {
        class l {
          constructor(a, h, v, M, S = {}) {
            (this.urlSerializer = a),
              (this.transitions = h),
              (this.viewportScroller = v),
              (this.zone = M),
              (this.options = S),
              (this.lastId = 0),
              (this.lastSource = 'imperative'),
              (this.restoredId = 0),
              (this.store = {}),
              (S.scrollPositionRestoration =
                S.scrollPositionRestoration || 'disabled'),
              (S.anchorScrolling = S.anchorScrolling || 'disabled');
          }
          init() {
            'disabled' !== this.options.scrollPositionRestoration &&
              this.viewportScroller.setHistoryScrollRestoration('manual'),
              (this.routerEventsSubscription = this.createScrollEvents()),
              (this.scrollEventsSubscription = this.consumeScrollEvents());
          }
          createScrollEvents() {
            return this.transitions.events.subscribe((a) => {
              a instanceof b
                ? ((this.store[this.lastId] =
                    this.viewportScroller.getScrollPosition()),
                  (this.lastSource = a.navigationTrigger),
                  (this.restoredId = a.restoredState
                    ? a.restoredState.navigationId
                    : 0))
                : a instanceof F
                ? ((this.lastId = a.id),
                  this.scheduleScrollEvent(
                    a,
                    this.urlSerializer.parse(a.urlAfterRedirects).fragment
                  ))
                : a instanceof fe &&
                  0 === a.code &&
                  ((this.lastSource = void 0),
                  (this.restoredId = 0),
                  this.scheduleScrollEvent(
                    a,
                    this.urlSerializer.parse(a.url).fragment
                  ));
            });
          }
          consumeScrollEvents() {
            return this.transitions.events.subscribe((a) => {
              a instanceof Br &&
                (a.position
                  ? 'top' === this.options.scrollPositionRestoration
                    ? this.viewportScroller.scrollToPosition([0, 0])
                    : 'enabled' === this.options.scrollPositionRestoration &&
                      this.viewportScroller.scrollToPosition(a.position)
                  : a.anchor && 'enabled' === this.options.anchorScrolling
                  ? this.viewportScroller.scrollToAnchor(a.anchor)
                  : 'disabled' !== this.options.scrollPositionRestoration &&
                    this.viewportScroller.scrollToPosition([0, 0]));
            });
          }
          scheduleScrollEvent(a, h) {
            this.zone.runOutsideAngular(() => {
              setTimeout(() => {
                this.zone.run(() => {
                  this.transitions.events.next(
                    new Br(
                      a,
                      'popstate' === this.lastSource
                        ? this.store[this.restoredId]
                        : null,
                      h
                    )
                  );
                });
              }, 0);
            });
          }
          ngOnDestroy() {
            this.routerEventsSubscription?.unsubscribe(),
              this.scrollEventsSubscription?.unsubscribe();
          }
        }
        return (
          (l.ɵfac = function (a) {
            p.$Z();
          }),
          (l.ɵprov = p.Yz7({ token: l, factory: l.ɵfac })),
          l
        );
      })();
      function Gn(l, ...u) {
        return (0, p.MR2)([
          { provide: Rr, multi: !0, useValue: l },
          [],
          { provide: Fn, useFactory: ts, deps: [Cn] },
          { provide: p.tb, multi: !0, useFactory: kl },
          u.map((a) => a.ɵproviders),
        ]);
      }
      function ts(l) {
        return l.routerState.root;
      }
      function Dr(l, u) {
        return { ɵkind: l, ɵproviders: u };
      }
      function kl() {
        const l = (0, p.f3M)(p.zs3);
        return (u) => {
          const a = l.get(p.z2F);
          if (u !== a.components[0]) return;
          const h = l.get(Cn),
            v = l.get(ns);
          1 === l.get(Wn) && h.initialNavigation(),
            l.get(Vr, null, p.XFs.Optional)?.setUpPreloading(),
            l.get(ho, null, p.XFs.Optional)?.init(),
            h.resetRootComponentType(a.componentTypes[0]),
            v.closed || (v.next(), v.complete(), v.unsubscribe());
        };
      }
      const ns = new p.OlP('', { factory: () => new qe.x() }),
        Wn = new p.OlP('', { providedIn: 'root', factory: () => 1 }),
        Vr = new p.OlP('');
      function ma(l) {
        return Dr(0, [
          { provide: Vr, useExisting: jt },
          { provide: ha, useExisting: l },
        ]);
      }
      const is = new p.OlP('ROUTER_FORROOT_GUARD'),
        os = [
          ue.Ye,
          { provide: wt, useClass: Vn },
          Cn,
          x,
          { provide: Fn, useFactory: ts, deps: [Cn] },
          f,
          [],
        ];
      function Hl() {
        return new p.PXZ('Router', Cn);
      }
      let _a = (() => {
        class l {
          constructor(a) {}
          static forRoot(a, h) {
            return {
              ngModule: l,
              providers: [
                os,
                [],
                { provide: Rr, multi: !0, useValue: a },
                {
                  provide: is,
                  useFactory: Ca,
                  deps: [[Cn, new p.FiY(), new p.tp0()]],
                },
                { provide: kt, useValue: h || {} },
                h?.useHash
                  ? { provide: ue.S$, useClass: ue.Do }
                  : { provide: ue.S$, useClass: ue.b0 },
                {
                  provide: ho,
                  useFactory: () => {
                    const l = (0, p.f3M)(ue.EM),
                      u = (0, p.f3M)(p.R0b),
                      a = (0, p.f3M)(kt),
                      h = (0, p.f3M)(w),
                      v = (0, p.f3M)(wt);
                    return (
                      a.scrollOffset && l.setOffset(a.scrollOffset),
                      new es(v, h, l, u, a)
                    );
                  },
                },
                h?.preloadingStrategy
                  ? ma(h.preloadingStrategy).ɵproviders
                  : [],
                { provide: p.PXZ, multi: !0, useFactory: Hl },
                h?.initialNavigation ? ba(h) : [],
                h?.bindToComponentInputs
                  ? Dr(8, [ni, { provide: Wr, useExisting: ni }]).ɵproviders
                  : [],
                [
                  { provide: fo, useFactory: kl },
                  { provide: p.tb, multi: !0, useExisting: fo },
                ],
              ],
            };
          }
          static forChild(a) {
            return {
              ngModule: l,
              providers: [{ provide: Rr, multi: !0, useValue: a }],
            };
          }
        }
        return (
          (l.ɵfac = function (a) {
            return new (a || l)(p.LFG(is, 8));
          }),
          (l.ɵmod = p.oAB({ type: l })),
          (l.ɵinj = p.cJS({})),
          l
        );
      })();
      function Ca(l) {
        return 'guarded';
      }
      function ba(l) {
        return [
          'disabled' === l.initialNavigation
            ? Dr(3, [
                {
                  provide: p.ip1,
                  multi: !0,
                  useFactory: () => {
                    const u = (0, p.f3M)(Cn);
                    return () => {
                      u.setUpLocationChangeListener();
                    };
                  },
                },
                { provide: Wn, useValue: 2 },
              ]).ɵproviders
            : [],
          'enabledBlocking' === l.initialNavigation
            ? Dr(2, [
                { provide: Wn, useValue: 0 },
                {
                  provide: p.ip1,
                  multi: !0,
                  deps: [p.zs3],
                  useFactory: (u) => {
                    const a = u.get(ue.V_, Promise.resolve());
                    return () =>
                      a.then(
                        () =>
                          new Promise((h) => {
                            const v = u.get(Cn),
                              M = u.get(ns);
                            Dn(v, () => {
                              h(!0);
                            }),
                              (u.get(w).afterPreactivation = () => (
                                h(!0), M.closed ? (0, H.of)(void 0) : M
                              )),
                              v.initialNavigation();
                          })
                      );
                  },
                },
              ]).ɵproviders
            : [],
        ];
      }
      const fo = new p.OlP('');
    },
  },
  (Je) => {
    Je((Je.s = 3813));
  },
]);
