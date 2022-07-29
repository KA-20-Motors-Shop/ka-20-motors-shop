import { createGlobalStyle } from "styled-components";


export const Reset = createGlobalStyle`
     /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
     p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, input, main, textarea {
        font: inherit;
        font-size: 1rem;
        font-family: 'Inter';
        text-decoration: none;
        list-style: none;
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        box-sizing: border-box;
    }

   
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    a {
        text-decoration: none;
        color: #09f;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

`

export const GlobalStyle = createGlobalStyle`
    #root{
        --color-brand1:     #4529E6;
        --color-brand2:     #5126EA;
        --color-brand3:     #B0A6F0;

        --color-grey0:      #0B0D0D;
        --color-grey1:      #212529;
        --color-grey2:      #495057;
        --color-grey3:      #868e96;
        --color-grey4:      #ADB5BD;
        --color-grey5:      #CED4DA;
        --color-grey6:      #DEE2E6;
        --color-grey7:      #E9ECEF;
        --color-grey8:      #F1F3F5;
        --color-grey9:      #F8F9FA;
        --color-grey10:     #FDFDFD;
        --color-whiteFixed: #FFFFFF;

        --color-alert1:     #CD2B31;
        --color-alert2:     #FDD8D8;
        --color-alert3:     #FFE5E5;
        --color-sucess1:    #18794E;
        --color-sucess2:    #CCEBD7;
        --color-sucess3:    #DDF3E4;

        --color-random1:    #e34d8c;
        --color-random2:    #c04277;
        --color-random3:    #7d2a4d;
        --color-random4:    #7000ff;
        --color-random5:    #6200e3;
        --color-random6:    #36007d;
        --color-random7:    #349974;
        --color-random8:    #2a7d5f;
        --color-random9:    #153d2e;
        --color-random10:   #6100ff;
        --color-random11:   #5700e3;
        --color-random12:   #30007d;
    }

    button{
        cursor:pointer;
    }

`
