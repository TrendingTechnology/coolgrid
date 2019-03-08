(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./documentation/examples/nested-columns.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return p});var r=t("./node_modules/react/index.js"),o=t.n(r),c=t("./node_modules/@mdx-js/tag/dist/index.js"),i=t("./node_modules/docz/dist/index.m.js"),a=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),u=t("./src/index.js");function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function A(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,n){return!n||"object"!==s(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,n){return(f=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var p=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=b(this,g(n).call(this,e))).layout=null,t}var t,r,s;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&f(e,n)}(n,o.a.Component),t=n,(r=[{key:"render",value:function(){var e=this.props,n=e.components,t=l(e,["components"]);return o.a.createElement(c.MDXTag,{name:"wrapper",components:n},o.a.createElement(c.MDXTag,{name:"h1",components:n,props:{id:"nested-columns"}},"Nested columns"),o.a.createElement(c.MDXTag,{name:"p",components:n},"Columns and rows can be also nested."),o.a.createElement(i.e,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZgCsTZjwABSEP5p3YeQ3RNdpUUSWB0AtT4NxoOB_QFe0oMdGhXDQDIllFUYlkcKAlgmGBjxQtC5XaT04AEcgiMg9ggylNjTS1do7Q1dhoM0HxUONdiAAFmJEAZUEBYUYFEgNUF0VFjlOAAvZwCCw-B2G4CT1iiARnlQK52gABnYZMZiwdp9xrGZOxYWdbIAFmc9gADZnNc9YwBAgAxH1oESWz-GcQ5EUdTB2AQyh-CWIhqEoOAPMREKazCmhnAgPTLnYABGHy3PkcEtOoHSAEE5lM9hI2g8gbCgdBwxQzlTLEVqYxkdhMNgbhgEPAyjOxeRt1rYAOugbrggAMhW8ZEnmShmkWrqeu4A75TAUItJ7VB2nYAB-DYlvDSM-quXbltQGqaykGRq3fMxYXEzAwDCKApnu_rBrepqVxrRMBIIHBwsyFJrwIObazraxmJgVKkIyAl0fG6CUn6dAriYlj5Fm1cUcYRxyMogQKZRosoHsOA4HG4p6Y8SVtgJtoMFwygoGFK4AGIYDssWYA8VVIdrLwBGnK5yv8uABa4dhhY8ZNNfIchpYZ_tPIKK4ACY7OcvXa2KV79YsZGbcYGiRjtm21wFkaSpgcaAA5yZll2odGZ3_cTej3dK8aAtmqgoAtAKpHooPg6pt38nD4BI7EaPY_jgXE_tyRHbzynJAT-n9eTqAw894AfNQrcy9rKRC4bnOaZdAQg6kNH4MQrgMjtputVh-HEbmqRwc-sxvxALjyEkVRsAArQKBA_QGGI8TqYICj26EjiS5AneMg0jeHUdvfPUdk--ND2SPQPqBr5InGWLv_eSfU2qfodaCt6PgRqK0UdAxF-3RXrT1ngfNuGR54Rg0MvYCegwIQWftBAseBu5gL3qNbI_MMz6EImJB0eFqCujfp6EhmZXxEKmPYAgPhyGqT0Fgahmlv6kTodJL-WBn5_QBlMdBmDIyUP0O-CB3EC6jFgWoJeQFdCgQMOBU-pFBGwSwW_HBOEREESfuJbR0p3T730boh0nCL5MNoCwjS30eHiV_vQlC3DeEwH-qEQG-Y8RCP0WIpQM8JH0WkYvQC2h5FryUXxfR5jjFON-i4_hRZ8E0Cnr4yBH9ZEhNXsg9hxw4luKgusTmcAYDFVKorAKbkLDR1CEQVA9wKrGwqewDwZpthCjQAQOpwBVxYE6fTP4MARgkSuHZRpKN5H_2GauJQq44BECuF0v27B-mDI1FcAArAAdnKfTcZtN1k-TslM0Z7AiBE3Mos5ZQz2AbI2V7Y5lTD57OuabI5q4oApHmX0iAAyrkAE5fkNJ2Y89uVxfkBUOTLaZMssBQE-Rc75KyRSK1NiMoF0DywVUqhClG1tHEvWScoSBf9aaqUSTDYJK8kGKJQeJaGe8zRKhoRJfssRthLDPKxN-gt0D-DwCY2hq8WFRMFaw5R7BDLGRyIwzR_LzkWEiC8Wg6BUp3EaeQM0tAADihNnBjhiLOOAjTsCgXQMzQ1FkMhpBVXAAA6niLexqzAyUMTgT04RoCENQGKhZFh7C6gAHKWAag0f155RQAH1RTnmcGGgAauebU4aADS54ACazgQh2CjTG0U8bE0pvTY0m8DUY2RujXGhNya03OCdRfCh9Vt46NqtpKYl50ZZjMm1UBSwnrhkYq4FIPaWZLFdTgAclAhzyD6twAaPr2CPD2OEGY4RmXNIlK0yg7TDVNMpCUmAPaBbVNqUsNdrgN3tKTTARIdhcUttSITamkAUh9GiMpFq6qJRap1XqgocBowy3Haq1cwAoUozPJGD-Sx2gEy4K5CSU71hfRrF0AgfRzD_sphK7C9N_DjW3ikXFKNjV0FNSzcaxGMBmuESzTkhHawf3GjB011An0vrOnRiwwBR0KpuNka1kZAPboANqjuzRW_N1aR2uuLaWsTubK0FucAAXVo6uTuDqWE4Exn3OmiyLCsHiIyPGDcLCjqY4-iAz7MhnXuQzUdMxWUCcHNu8zLHLNseUjgU956aCXuvZyWzKN7OOcE9Rct8mJPpvfC7Mm9M84LU6s9DjdYoGWJhtp6cA9JBYeyHNd8r0zBtsRjgFgOUoCuESP6n03QzLtEynAAAjqEF4lALTNaeITVL_9rEulsQ6PheT2BFf0ASvxc9iXtwsca9JlKFHrz4u1DVMANNTGdehBlrCbHONce4j9WQVttQQ6gcRc9HakvwuShBoTkFirpW_Dbsr8ZjjJKyzlhjuW8tlY7MxjDQlWKZTlqVLrJAyqZXOvbX6uC6puL-xpx4rIY2c3aiYK3Gk8aVdatV8RejldoDeFpbSaC6hmGdc1NYKOkbgLW8hbqYhQE9d6hwDj_BkW3rTMxa32Kuq67TR76xRS6htWWnNeaq3pszfxcLovFNFpLeeYX4mxc1penWphqJ3AdJ63e4bHbWrQUgzdPadB-2Dp6MO9g9nnO9RBnOlDaHQaUwmxkThOBqYMnh0HYAXahAjDNUsH3lgB1SY-A4qdNuG4Lv2Mu0i3nCcdJPbuj2B6oBHu3bHzdvmr03obne1zqBWPWbfWZCHMBtVQ5_QajD_tQsmZ6PQwLtZwMG-g4TODIHos2yQy7O9dA_BaWyPj9dce7DF-x24rIg-z1x-J6TqvLs88F9fdQLzBOM8ED82T4OC_3OF-X-nrdDeLDw6tUj-1IqnMTu3VKLAAXa9Ceg7MOD0Hwi0AEO0JTDcu82ztwIdDtfGCA614WC4bAD4bsAAA-4Bk4owgeBGQBMILCJGZq5GiBlGLM1GdgkB0BvuNGyW-sDGwAc6wcpmrq2-VmS-qAh-DM--BEVwve7giI6Ak-PmHS8BsWemDMXGrq6OfGzmF-qqkuIuCm1aqmHBts8BDsowLuGWYIYhDMBmKe1cRBxBJBp4D6bm5BNm8BQWrqx-iOl-yOeAB22hDMNech3e9eJhYG6h-eO-FBK-Q-a-G-Vh7At-5hdmuhlq-hdwhhB2oWdeWAYWQhkWzgHeKh7BKhRcnBvadAeBDMTcUh9CWmvcmW_-2W00uWn-9MERjcPO7cLubu1S_ciGTqtUOuMMpW5IFWVWLEtW9WTWLWbWEAHWXAkiIwPW2SA27i5Ro2kCZ2f2l2cimS1KjOJeK2b262IkMS_WuSu2S2B27evR_iAs52pCNAM2iCc24Sz8d2hiD2TK32DiNObRU2_2XqfEgO5ioO5xqC6wJeZe6A0O-qKQm-JyXh1qvhIqaORAiqvBl-WOUAOOE-q-7SM-ykrxFOZq1OLqtOHqj2DguoAAMgAKr6j-oK4RZK4S5ybS7VoTFc71q1KNqa7NoNpDZXiuidrtSJZ9rjBB5m7bqW6X7W4zoO51iHG4CFEe7AZdrRx-6MywHB7X4smzpoo6RkEeYsjF5LYPFPG_qHY9r17wZf5jJkk0EEBgn1Tvpj644wDMHT4k7glz4MwSm76oAOFT5OFZ4N6mn2HqmvH6zKH6yjp6EfFn7MIEDGkuw8HKp8H-H34pCP4qZUGVKWHuE4nCHpq15uHBwunvGn4o7n7wE-n8b-kP4zDv4xnEHX4hn3pcAWaaGebqnOFyFhEMygY2wRkhH0wqm1g_5_4cEAEZHoC14gFgFYHRywFxEWCQlkbAC9l_pnCYFQF8m4G14EFOk2xmY2GL5aHuH2lXDqmam1K145EuxcE4Apl-nOZBGK6KaiEuxREJa3SxEtzpGSpBxlk5EJG-5JFcnFEfhlEUnrGVHlaVbVYtR1bZQNERBNEtHoAPwdF9ZTBdGtrPmiDHYpLLHoog7NkbHXYjF8SaJLDtQsz4nyiaJ4IXYM4LajjtxZD6jZAQCuAACKjI8IN6qu7q9OWuapIJNAZqLUvJwK2MYerJc6sAUwXQDI7itWGkFgEAzQwiLFAgfUyh3Fg2AA1GZOzBwVEFgBaLiOgBMFcAACQLQiXyDmz0yyUWC4r1mTjwB5KlFsLAU5I7ZTCaIlZsC6VNLeAWipxGx2XywZAWjVAWxKUqUVR2R2QACkFslk1kFo_QKQhAVwYQEQAVrgVkaAFosAYABA4V4QlA0s6w6lXaH8xMIp4wFpLBdga0eFGQBFRFpF5F3yf6BAJ69FBAZqtGqVNY6V0EA5Ipq4Q5tlKM6lA5dGVsZgslJ2kg1FcA8Fwx82qCDJ6FGEzZWFaxJJNxdiLKOwSwPGE1H2cAfKYO7AMm8uVZWJnO98LaGunqW2eiZJ9x36MOBqTFgmLUIGipPgZkt1oCN1bFopNYd6ugT6N1q4wWOwEGaiSwW1GJuJUWxyP12wwiSpgNO1-5oNrqDmv1_hUNUukZoR6wBWyGY49uyho6H1lmxyxZWeVwuoHg6gWwMM2wWewlthKQuVw-Her06NC6FozNLNrNbN7NHNnN7NZgC6x-BQuQdOLwyQ1FQtPNkg7AXNktUt0tx1xCZJrpCZRhIqV1VuD1SgARz1_u8AGQrA2QG-06r1AlQlAAhNxTrXrVnmJauAZcTaTVKDgP4PkCkKgAqQEWSM5vTbVBYAZdjXDY5jmYZUUgILregPrbDWOiFjuYHebaHZbWjSZWLRLdLcnSnczYnXzbOALdAELVnVAKLSpOLanUXVLbLVMHelucyZ2tdWrVrUHSHfreHhjahr_nsD8Z6f4WbcHRbf5gnQXUncXQPWzYnc1SLUZInYPRPSzaXUWESQgSaoxWZAoYyI3Uba1MbUvTAFbTLAZSdH9JRC2TWOjavRBptDANtEsoZjVodO0MdKdMpG-HKnWZjS3RvRgZ7ZpN7c_eYG1auOpRvbirJYzYXZPRPenSVewE1hkMkEOYVdZsKOPSA4PWYHeseCwKVVA0xZchqAnkUnuksDytvAbY_YJWvQQ64FvSjAZe0PxXiusCQ5GFgw6ANHZBQ0_c3eYO1bWHJKg8RXsKgEkCNB-sEJUK1D8agIpVwF5X_Qis_OLYUsUh7PIMxKw_rOpWQ8lt1fHR_YZew8cNEK4L3bnukNZjAIRWg2RRkOVUxdBPaTgwo6VChEOnAEQ3OvQ8bfaX1BMD7kNgIEIAIE-PqWvnYNFd0D8SzAUMbW-F7ewJxYHYNnxXcWSfoBRS1LbWTTgMk-VZGB46FMKK1HekJvgwKHQPkPVEpnsM0Jk_ACozPTpNBIw6ti1CwNeKUyuTLPQ80yU-CTgA0-wGIGZCw4_ZQ0Ze4tJW8eY-RYkAwzI9gzurg0ngyZGJ07UuCZyFeVo-sAZRJYDL3UzYgwPYnQLjaiEBgAiYieM7w5AwIMkB5JkEQHYHEICePmdAg_s0Xcg6ddjkxdEGiEsBTYkO7Zfi44k7Pbcz6C1IJkJj8wIB_towumC3KHEOYIEDCLreYKVEIEsDADTakC_rIcfcbQi-wAVUS8bYdIM-JV_ewKgG4lABszWPQ0SwVUZFtM0ESwdLVpQCTWTQ_cofQ2k_bf83-gi5yDgGgOQCnuUJGP82s0M2w_bgi0Jv87CzijCPTt0JOQZTSwkFMvS5_bowi4Y58087qYE6CYaVqZ2kK1VY4Qfv2FHdC84yvbU1xSM1MGZAKzDI7ZZi7Y9Tk3C-LS8EVbQHYL8NjOqewEKzExABTSNEQBlIsDE6bjCksFgDCnsEcJlB4NAPujknANsBEDMFiwQOQDgOsAuoqPiBG_8yNMMG4jkPEGaOgNA8CksjMw6CI7srvBva8QuirPOHPSRgSLYEaHk4bGdH2D29G7G4GUWwbF2PzXk6nEyAVHk1TTpDW-fUKzU7E-O8pPENas9dExYAupYLqHqFcF0P9FKHk7qbpijI6zgGFAIOeJKHgJGAuO2u64bQzHehvdqYCR--BX81eoC3cGWSe-LRiyOA0TsEaBAFgPTPQ_-1gf-xy-wBSw3Hu72FANakJp-4jOU4vZfdkce7WAutpALP-ILCkJGNh6gAex7VMrWXepsFAHCBC85kq1erC6uPQ2x3CDU8fSy2fc0AJ9jOh-0Fy3ba-EJ7WHercHKB69y_bd687a7fR4x0C1hwuxO7h6rcyqOuJwAhbq6op3ivrEfQzPQ_6tUoEAIGK3AOFGgEG5GMZ31FgSJ-fcZ6ZNfaiDOCkLyzp92Pu_p5fjgMuy1MZ6R5CmR9swQNx4kER-wJ6w7eE-p_TLdRzNVXAIl0pksAuqBXsCpxBfrJp2F3cKuO_Zs1S_F73dkk9vhbQGY8RRYxRT2jqcCba0Tha7Univ1QdQRMNVSgwNknekjcEViWZPfvaU_vI3uk_lUjUoRLx71s_Hen6iiWiUDSjS1Pfsu0_rO0_h5Au7OO_tMWXWSUcztyES1Jt6ieidDdWh8NQHEJ6UJusM_rxm_o0u0KOYRL952QOhpCphdy6wiYGsGqGhGk9-LmZNd7D84C91pNEJGB9zWM-DgQD59wHsD2YKD5BYShImdlZRSpsWEjSg6MhcyjA3tZNZKtNVQjhWNRynT6tetXNT_LA8VRM5YyZHT9zoNbRbPeqQvXrqkLMOyni0cC9Y_bE_F5-T1sfbOzUwr2M5wyjIFWgGpcAM-t975wM1dK1BaOVOwEYBLzMH1OLcbOwFcLO_OuwMbFpT4BaOpfb9b87xbCjLZVZ1s26_V2ZUV1ZTILZdUA5SVE5XLNOG5d4BbK-RVlcGALAFgBbEn9gIpZkDMFcCMJnxbPED6w5QuGAFcP52OB1PVRYI1aAllbLzDPacS-tGkE16YyVW11k5VU0tVbVWTBX-wFX81S9a1SzBr33_2agZTt1a9H1VBeNisaT1diNdseJNT6hZRRolNfosz_Naz3vOz_CU38Gy37zykwL7CTRaSbPUOfYBqnk8XoestyDF2su-ypL_O15HOLLxxWOHE7xfKDQ3ep5XxCdpIu4tJbrUj6jm9yoPlaJvQ0AGq83W7AdXvTHkoSNlKeAHXvb2uilBsckYdSoAPkC-UJao_Wds705DFBbe7AYoHgMkZ4ACBVsL3rWDT4KUeYIwYZAwIsBMCHKeAGcNsDYH0xOBhSWwBgNmBG9sBgHagWgIIFEC3eswUgeQKuBUDgA-A3yvQNXA-8YBQlE7u_wgJQEtB_NdDph23oID1eeg7yKP1MEEZzY6ghlkJXt5YF7eBg-ATxSmBIDFkWvcRvFUSrECRBHvbSm4OipBUQqYVbwTMAd5O8_B-sdwRaELbCCZgnvNQXqx0b246u-KUyttniTB8bKBSeyo5TMFR9XK7ldYEKHyBnRL2C4V9LrQ8o0DFYPlfyhZFcAKVABNQvyqn2T5uV_AQgjDq0PT4sDFYvfKvplXGAtUZYdfHLg3257NdW-ZVeABBicbX9P0woCDC9xTzLc1m8gfoV7iarj9GKg_GWD_UWSdVthLMSfr1VGy5RtgA6f8JoGoBDERu4EOdPwAY7Hh-AVwfgECGJBVBvArlX8OSCZAgBGk_AXWgIFaYvD2A_AOyDgAhGHJ_h6wfgOUHVQQBeuoI_gA1Hdh_gECPoX4TknJCUBEgeYPIPzQ2z8xygIIL4XTBhE1h-AUQNAMiJUBwIl46UWESAEwDzAIwWkcqqCOUL8BMKm_WkQAD0fIOAcqDgGTCMiZY_ADbPyPKgBQcAXsIUWKJRj8B2e_IwUeVA2RCjyoCo2sBKK1BWhIgUomUXKM1EgAtG8gCBKSNwC40aa1w47BkjuEgAukIAWgL6CyAvC3hS2YKrqNmAzB-AZosmPICAA",__position:0,__code:"<ThemeProvider theme={{ grid: theme }}>\n  <Container\n    colCss={`\n      background-color: #e0e0eb;\n      border: 1px solid #b3b3cc;\n      padding: 20px;\n    `}\n  >\n    <Row>\n      <Col size={8}>\n        <Row>\n          <Col size={6}>col-6</Col>\n          <Col size={6}>col-6</Col>\n        </Row>\n      </Col>\n      <Col size={4} />\n    </Row>\n  </Container>\n</ThemeProvider>",__scope:{props:this?this.props:t,ThemeProvider:a.a,Container:u.b,Row:u.c,Col:u.a,theme:u.d}},o.a.createElement(a.a,{theme:{grid:u.d}},o.a.createElement(u.b,{colCss:"\n        background-color: #e0e0eb;\n        border: 1px solid #b3b3cc;\n        padding: 20px;\n      "},o.a.createElement(u.c,null,o.a.createElement(u.a,{size:8},o.a.createElement(u.c,null,o.a.createElement(u.a,{size:6},"col-6"),o.a.createElement(u.a,{size:6},"col-6"))),o.a.createElement(u.a,{size:4}))))))}}])&&A(t.prototype,r),s&&A(t,s),n}();p.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/index.js":function(e,n,t){"use strict";var r=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=t("./node_modules/react/index.js"),c=t.n(o),i=t("./node_modules/lodash/lodash.js"),a=Object(o.createContext)({}),u=["breakpoints","baseSize","columns"],s=["size","gap","padding"],l=s.concat(["gutter","colCss","colTag"]),A=l.concat(["rowCss","rowTag"]);function b(e){return(b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,c=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(u){o=!0,c=u}finally{try{r||null==a.return||a.return()}finally{if(o)throw c}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function f(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    ","\n  "]);return f=function(){return e},e}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){d(e,n,t[n])})}return e}function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=p({},Object(i.pick)(t,u),Object(i.pick)(n,u),Object(i.pick)(e,u));return p({},r,{breakpointKeys:Object.keys(r.breakpoints)})},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0;return t?p({},Object(i.pick)(n,t),Object(i.pick)(e,t)):Object.assign({},n,e)},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return Object(i.omit)(e,n)},w=function(e){if(e)return"function"===typeof e?e(r.b):Object(r.b)(f(),e)},h=function(e,n,t){return t?e>0?"\n      @media only screen and (min-width: ".concat(e/n,"em) {\n        ").concat(t,"\n      }\n    "):t:""},E=function(e,n){var t=e.breakpoints,r=e.baseSize;if(!t)throw Error("Breakpoints are missing!");for(var o="",c=Object.entries(t),i=0;i<c.length;i++){var a=g(c[i],2)[1],u=a.viewport;a.viewport>=0&&(o+=h(u,r,n(a)))}return o},j=function(e,n,t,r){var o=Object.assign({},n),c=!0,i=!1,a=void 0;try{for(var u,s=function(){var e=u.value,c={};r.forEach(function(n){var r=function(e,n,t){var r=t[e];return r||0===r?r&&"object"===b(r)?Object.keys(r).includes(n)?r[n]:null:r:null}(n,e,t);(r||0===r)&&(c[n]=r)});var i=t[e];if(i){if("object"===b(i)){var a=Object.assign({},c);c=p({},i,a)}(Number.isFinite(i)||"string"===typeof i)&&(c.size=i)}o[e]=Object.assign({},n[e],c)},l=e[Symbol.iterator]();!(c=(u=l.next()).done);c=!0)s()}catch(A){i=!0,a=A}finally{try{c||null==l.return||l.return()}finally{if(i)throw a}}return o};function B(){var e=v(["\n      ","\n    "]);return B=function(){return e},e}function C(){var e=v(["\n  box-sizing: border-box;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n\n  ",";\n\n  ","\n"]);return C=function(){return e},e}function v(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var k=function(e){var n=e.container,t="";return n&&(t+="\n        max-width: ".concat(n,"px;\n      ")),t},Y=r.c.div(C(),function(e){var n=e.theme;return n.breakpoints&&E(n,k)},function(e){var n=e.extendCss;return Object(r.b)(B(),n)});function S(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){x(e,n,t[n])})}return e}function x(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Q(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function M(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var W=function(e){var n=e.theme,t=e.children,r=e.tag,o=e.css,s=M(e,["theme","children","tag","css"]),l=O(s,{},Object(i.get)(n,"grid",{}));return c.a.createElement(Y,Object.assign({as:r,extendCss:w(o),theme:l},m(s,[].concat(Q(A),Q(u)))),c.a.createElement(a.Provider,{value:S({},l,Object(i.pick)(s,l.breakpointKeys),Object(i.pick)(s,A))},t))};W.displayName="mosquito-ui/grid/Container";var N=W;W.__docgenInfo={description:"",methods:[],displayName:"mosquito-ui/grid/Container"};var D=Object(r.d)(N),F=Object(o.createContext)({});function K(){var e=G(["\n      ","\n    "]);return K=function(){return e},e}function P(){var e=G(["\n  box-sizing: border-box;\n  display: flex;\n  flex-wrap: wrap;\n  align-self: stretch;\n\n  ","};\n\n  ","\n"]);return P=function(){return e},e}function G(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var T=function(e){var n=e.gap,t=e.gutter,r="";return n&&(r+="\n        margin: ".concat(0===t?-1*n/2:n/2,"px -").concat(n/2,"px;\n      ")),r},R=r.c.div(P(),function(e){var n=e.theme;return n.breakpoints&&E(n,T)},function(e){var n=e.extendCss;return Object(r.b)(K(),n)});function Z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){I(e,n,t[n])})}return e}function I(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function H(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var q=function(e){var n=e.theme,t=e.children,r=e.tag,o=e.css,u=H(e,["theme","children","tag","css"]);return c.a.createElement(a.Consumer,null,function(e){var a=e.rowCss,s=e.rowTag,A=H(e,["rowCss","rowTag"]),b=O(u,A,Object(i.get)(n,"grid",{})),g=j(b.breakpointKeys,b.breakpoints,y(u,A),["gap","gutter"]);return c.a.createElement(R,Object.assign({as:r||s,extendCss:w(o||a),theme:Z({},b,{breakpoints:g})},m(u,l)),c.a.createElement(F.Provider,{value:Z({},b,y(u,A,b.breakpointKeys),y(u,A,l))},t))})};q.displayName="mosquito-ui/grid/Row";var U=q;q.__docgenInfo={description:"",methods:[],displayName:"mosquito-ui/grid/Row"};var _=Object(r.d)(U);function z(){var e=L(["\n      ","\n    "]);return z=function(){return e},e}function V(){var e=L(["\n  box-sizing: border-box;\n  position: relative;\n  width: 100%;\n  max-width: 100%;\n  flex-basis: 0;\n  flex-grow: 1;\n\n  ",";\n\n  ","\n"]);return V=function(){return e},e}function L(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var J=r.c.div(V(),function(e){var n,t=e.theme;return t.breakpoints&&E(t,(n=t.columns,function(e){var t=e.size,r=e.gap,o=e.padding,c="",i=t/n*100;return i&&(c+="\n      max-width: ".concat(r?"calc(".concat(i,"% - ").concat(r,"px)"):"".concat(i,"%"),";\n      flex-grow: 0;\n      flex-shrink: 0;\n      flex-basis: ").concat(r?"calc(".concat(i,"% - ").concat(r,"px)"):"".concat(i,"%"),";\n    ")),(o||0===o)&&(c+="padding: ".concat(o,"px;")),(r||0===r)&&(c+="\n      margin-left: ".concat(r/2,"px;\n      margin-right: ").concat(r/2,"px;\n      margin-top: ").concat(r,"px;\n    ")),c}))},function(e){var n=e.extendCss;return Object(r.b)(z(),n)});function X(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){$(e,n,t[n])})}return e}function $(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ee(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var ne=function(e){var n=e.children,t=e.tag,r=e.css,o=ee(e,["children","tag","css"]);return c.a.createElement(F.Consumer,null,function(e){var i=e.colCss,a=e.colTag,u=ee(e,["colCss","colTag"]),l=O({},u,{}),A=j(l.breakpointKeys,l.breakpoints,X({},y(m(o,["gap"]),u,s),y(m(o,["gap"]),u,l.breakpointKeys)),s);return c.a.createElement(J,Object.assign({as:t||a,extendCss:w(r||i),theme:X({},l,{breakpoints:A})},m(o,s)),n)})};ne.displayName="mosquito-ui/grid/Col";var te=ne;ne.__docgenInfo={description:"",methods:[],displayName:"mosquito-ui/grid/Col"};var re=te,oe={baseSize:16,columns:12,breakpoints:{xs:{viewport:0,container:0},sm:{viewport:576,container:540},md:{viewport:778,container:720},lg:{viewport:992,container:960},xl:{viewport:1200,container:1140}}};t.d(n,"b",function(){return D}),t.d(n,"c",function(){return _}),t.d(n,"a",function(){return re}),t.d(n,"d",function(){return oe})}}]);
//# sourceMappingURL=documentation-examples-nested-columns.6bcc057d671ddbbdd962.js.map