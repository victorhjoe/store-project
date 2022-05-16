import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import pt from 'vuetify/src/locale/pt.ts';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi'
    },
    lang: { 
        locales: { pt },
        current: 'pt'
    },
    theme: { 
        themes: {
            light: { 
                // primary: '#3F51B5',
                primary: '#FFC107',
                secondary: 'red',
                error: '#d53343'
            },
            dark: { 
                primary: '#FFC107',
                secondary: 'red',
                error: '#d53343'
            }
        }
    }
});
