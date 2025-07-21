/** @type {import('tailwindcss').Config} */ 

module.exports={
    content: ["./*.{html,js}"],
    theme:{
        extends:{
            fontSize:{
                sm:'0.75rem',    //12px
                base:'.875rem',  //14px
                md:'1rem',       //16px
                lg:'1.25rem',    //20px
                xl:'1.5rem',     //24px
                '2xl':'1.75rem', //28px
                '3xl':'2rem',    //32px
                '4xl':'2.25rem'  //36px
            },
            colors:{
                grey:{
                    dark:"#E5E5E5",
                    light: "#C4C4C4"
                },
                black:{
                    dark: "#242527",
                    light: "#2B2B2B",
                },
            }
        }
    },
    plugins:[],
};
