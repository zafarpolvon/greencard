<template>
    <div>
        <div class="header__box">
            <Navbar />
            <div class="flex justify-between container mx-auto ">
                <div v-scrollanimation class="ml-4 xl:ml-12 md:ml-12 mt-28 xl:mt-28 md:mt-28">
                    <h4 class="text-lg xl:text-2xl md:text-2xl font-medium text-white">{{ 'ProfileTitle' | localize }}</h4>
                    <h3 class="text-3xl xl:text-5xl md:text-5xl mt-4 font-semibold text-white header__option">{{ 'Header__Info' | localize }}</h3>
                </div>
                <div v-scrollanimation class="mt-48">
                    <ul class="mr-4 xl:mr-10 md:mr-10 flex flex-col">
                        <li class="mb-5">
                            <a href="https://instagram.com/greencarduz2023" class="header__social">
                                <i class="fab fa-instagram text-2xl text-white"></i>
                            </a>
                        </li>
                        <li class="mb-5">
                            <a href="#" class="header__social">
                                <img src="../assets/svg/telegram-plane-brands.svg" class="text-white" alt="">
                            </a>
                        </li>
                    </ul>
                </div>
               
            </div>
            <div class="container mx-auto">
                <div v-scrollanimation class="ml-4 xl:ml-12 md:ml-12 mr-4 xl:mr-0 md:mr-0">
                    <div class="mt-12 flex flex-col xl:flex-row md:flex-row header__buttons">
                        <a class="mr-0 xl:mr-6 md:mr-6 text-center" href="#">{{ 'Start__Project' | localize }}</a>
                        <a @click="scroll()" class="mt-5 xl:mt-0 md:mt-0 text-center cursor-pointer">{{ 'About__Us' | localize }}</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="section__1" ref="pablo">
            <div class="container mx-auto">
                <div v-scrollanimation class="about__header">
                    <p>DV Lottery</p>
                    <h3>{{ 'Help__Header' | localize }}</h3>
                </div>
                <div v-scrollanimation class="about__text">
                    <h6>{{ 'Main__Information' | localize }}</h6>
                </div>
                <div v-scrollanimation class="about__counter flex justify-center">
                    <div class="first">
                        <h2>{{ numbers.first }}</h2>
                        <p>{{ 'Award1__Recieve' | localize }}</p>
                    </div>
                    <div class="second">
                        <h2>{{ numbers.second }}</h2>
                        <p>{{ 'Award2__Recieve' | localize }}</p>
                    </div>
                    <div class="first">
                        <h2>{{ numbers.third }}</h2>
                        <p>{{ 'Award3__Recieve' | localize }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="section__2">
            <div class="container mx-auto px-4 xl:px-8 md:px-8">
                <div v-scrollanimation class="plus__header">
                    <p>DV Lottery</p>
                    <h3 >{{ 'Svedeniya__header' | localize }}</h3>
                </div>
                <div class="benefits__box flex flex-col xl:flex-row md:flex-row ">
                    <div class="benefits__left">
                        <div v-scrollanimation class="flex flex-col xl:flex-row md:flex-row ">
                            <div class="benefits__icon">
                                <i class="far fa-clock"></i>
                            </div>
                            <div class="benefits__info">
                                <h4 class="uppercase">{{ 'Times__Title' | localize }}</h4>
                                <p>{{ 'Times__Text' | localize }}</p>
                            </div>
                        </div>
                        <div v-scrollanimation class="flex flex-col xl:flex-row md:flex-row mt-4 xl:mt-10 md:mt-10">
                            <div class="benefits__icon">
                                <i class="far fa-clock"></i>
                            </div>
                            <div class="benefits__info">
                                <h4 class="uppercase">{{ 'Uslug__Title' | localize }}</h4>
                                <p>{{ 'Uslug__Text1' | localize }}</p>
                                <p>{{ 'Uslug__Text2' | localize }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="benefits__right">
                        <div v-scrollanimation class="flex flex-col xl:flex-row md:flex-row mt-4 xl:mt-0 md:mt-0">
                            <div class="benefits__icon">
                                <i class="fas fa-passport"></i>
                            </div>
                            <div class="benefits__info">
                                <h4 class="uppercase">{{ 'Docs__Title' | localize}}</h4>
                                <p>{{ 'Docs__Text1' | localize }}</p>
                            </div>
                        </div>
                        <div v-scrollanimation class="flex flex-col xl:flex-row md:flex-row mt-4 xl:mt-10 md:mt-10">
                            <div class="benefits__icon">
                                <i class="far fa-file-alt"></i>
                            </div>
                            <div class="benefits__info">
                                <h4 class="uppercase">{{ 'Reg__Title' | localize }}</h4>
                                <p>{{ 'Reg__Text' | localize }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section__3">
            <div class="container mx-auto px-4 xl:px-8 md:px-8">
                <div v-scrollanimation class="register__header">
                    <p>DV Lottery</p>
                    <h3>{{ 'Main__Footer' | localize }}</h3>
                </div>
                <div class="register__box">
                    <div v-scrollanimation class="register__left">
                        <h5>{{ 'Send__Message' | localize }}</h5>
                        <input v-model="name" type="text" :placeholder="'Input__Name' | localize">
                        <p v-if="$v.name.$dirty && !$v.name.required" class="text-red-500 text-xs italic">{{ 'Please__Text' | localize }}</p>
                        <input v-model="email" type="email" :placeholder="'Input__Email' | localize">
                        <p v-if="$v.email.$dirty && !$v.email.required" class="text-red-500 text-xs italic">{{ 'Please__Text' | localize }}</p>
                        <input v-model="number" type="text" :placeholder="'Input__Number' | localize">
                        <p v-if="$v.number.$dirty && !$v.number.required" class="text-red-500 text-xs italic">{{ 'Please__Text' | localize }}</p>
                        <button @click="submitHandler">{{ 'Send__Footer' | localize }}</button>
                    </div>
                    <div v-scrollanimation class="register__right">
                        <h5>{{ 'Contact__Footer' | localize }}</h5>
                        <h6>{{ 'Address__Footer' | localize }}</h6>
                        <p>{{ 'Adress__Footer1' | localize }}</p>
                        <p>{{ 'Adress__Footer2' | localize }}</p>
                        <p>{{ 'Adress__Footer3' | localize }}</p>
                        <h6>{{ 'Email__Footer' | localize }}</h6>
                        <a href="mailto:greencard2023uz@gmail.com">greencard2023uz@gmail.com</a>
                        <h6>{{ 'Call__Footer' | localize }}</h6>
                        <a href="tel:+998950010363">Тел: +(998)95 001-03-63</a>
                        <a href="tel:+998950010363">Telegram: +(998)99 126-33-32</a>
                        <div class="register__link">
                            <a href="https://instagram.com/greencarduz2023" class="header__social mr-3">
                                <i class="fab fa-instagram text-2xl text-white"></i>
                            </a>
                            <a href="#" class="header__social ml-3">
                                <img src="../assets/svg/telegram-plane-brands.svg" class="text-white" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import { required } from "vuelidate/lib/validators";
import emailjs from "emailjs-com";
export default {
    name: 'Home',
    data: () => ({
        name: "",
        email: "",
        number: "",
        numbers: []
    }),
    validations: {
        name: {
            required
        },
        email: {
            required
        },
        number: {
            required
        },
    },
    async mounted() {
        this.numbers = await this.$store.dispatch('fetchInfo')
        console.log(this.numbers);
    },
    methods: {
        scroll() {
            var element = this.$refs["pablo"];
            var top = element.offsetTop;
            window.scrollTo({
                top,
                behavior: "smooth",
            });
        },
        submitHandler() {
            if(this.$v.$invalid) {
                this.$v.$touch()
                return
            }
            const formData = {
                number: this.name,
                email: this.email,
                number: this.number
            }
            const userId = process.env.VUE_APP_EMAILJS_USER_ID;
            try {
                emailjs.send("service_u0wjpu3", "template_cbllufr", formData, userId);
            } catch (error) {
                console.log({ error });
            }
            this.name = "";
            this.email = "";
            this.number = "";
            
        }
    },
    components: {
        Navbar
    }
}
</script>
<style scoped>
    .before-enter {
        opacity: 0;
        transform: translateY(0px);
        transition: all 1.2s ease-out;
    }
    .enter {
        opacity: 1;
        transform: translateY(0px);
    }
    .register__left button {
        margin-top: 40px;
        background: #39b54a;
        border-color: #39b54a;
        color: #FFFFFF;
        padding: 12px 0;
        font-size: 26px;
    }
    .register__link {
        display: flex;
        flex-direction: row;
        margin-top: 20px;
        margin-bottom: 30px;
    }
    .register__right {
        padding: 35px 50px;
    }
    .register__right a:hover {
        color: #39b54a;
    }
    .header__option {
        width: 530px;
        line-height: 54px;
    }
    .register__right h5 {
        color: #fff;
        font-size: 20px;
        margin: 20px 0;
    }
    .register__right h6 {
        font-size: 24px;
        color: #39b54a;
        margin-top: 10px;
    }
    .register__right p {
        margin-top: 10px;
        color: #757575;
        font-size: 20px;
    }
    .register__right a {
        margin-top: 10px;
        color: #757575;
        font-size: 20px;
    }
    .register__header {
        text-align: center;
        margin: 40px 0;
    }
    .register__header p {
        color: #39b54a;
        font-size: 20px;
    }
    .register__header h3 {
        font-size: 46px;
        color: #fff;
    }
    .register__left h5 {
        color: #fff;
        font-size: 18px;
        margin: 20px 0 30px 0;
    }
    .register__left input {
        display: block;
        height: 6rem;
        padding: 1.5rem 0;
        border: 0;
        outline: none;
        color: #333333;
        font-size: 20px;
        line-height: 3rem;
        max-width: 100%;
        background: transparent;
        border-bottom: 2px solid rgba(0, 0, 0, 0.15);
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }
    .register__left input:focus {
        color: #fff;
        border-bottom: 1px solid #39b54a;
    }
    .register__left {
        display: flex;
        flex-direction: column;
        width: 55%;
        background: rgba(0, 0, 0, 0.2);
        padding: 35px 50px;
    }
    .register__right {
        display: flex;
        flex-direction: column;
        width: 35%;
        background: #121212;
    }
    .register__box {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .section__3 {
        background: url('../assets/image/black.jpg');
        background-repeat: no-repeat;
        background-position: 100%;
        background-size: 100%;
        padding: 40px 0;
    }
    .section__2 {
        padding: 80px 0;
    }
    .benefits__box {
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    }
    .benefits__left {
        margin-right: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .benefits__right {
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .benefits__info {
        padding-left: 20px;
    }
    .benefits__info h4 {
        font-size: 30px;
        font-weight: 500;
    }
    .benefits__info p {
        font-size: 20px;
    }
    .benefits__icon {
        font-size: 54px;
        color: #39b54a;
    }
    .plus__header {
        text-align: center;
    }
    .plus__header p {
        font-size: 18px;
        color: #39b54a;
    }
    .plus__header h3 {
        font-size: 48px;
    }
    .about__counter {
        margin-top: 30px;
    }
    .first h2 {
        font-size: 48px;
    }
    .first {
        text-align: center;
    }
    .second h2 {
        font-size: 48px;
    }
    .second {
        text-align: center;
        border-right: 1px solid #fff;
        border-left: 1px solid #fff;
        padding: 0 35px;
        margin: 0 35px;
    }
    .header__box {
        background: url('../assets/image/4.jpg');
        background-repeat: no-repeat;
        background-position: 100%;
        background-size: cover;
        max-height: 1000px;
        height: 800px;
    }
    .header__social {
        display: flex;
        border: 2px solid #fff;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        text-align: center;
    }
    .header__social i {
        display: flex;
        text-align: center;
        align-items: center;
        margin: 0 auto;
    }
    .header__social img {
        width: 24px;
        display: flex;
        text-align: center;
        align-items: center;
        margin: 0 auto;
    }
    .header__buttons a {
        border: 1.5px solid #fff;
        color: #fff;
        padding: 6px 20px;
        font-size: 24px;
    }
    .section__1 {
        background-color: #39b54a;
        color: #fff;
        padding: 40px 150px;
    }
    .about__header {
        text-align: center;
    }
    .about__header p {
        font-size: 18px;
    }
    .about__header h3 {
        font-size: 46px;
    }
    .about__text {
        margin-top: 30px;
        text-align: center;
        padding: 0 0px;
    }
    .about__text h6 {
        font-size: 24px;
    }
    @media screen and (min-width: 310px) and (max-width: 640px) {
        .benefits__box {
            margin-top: 20px;
            display: flex;
            flex-direction: column;
        }
        .header__option {
            width: 99%;
            line-height: 40px;
        }
        .header__box {
            height: 730px;
            background-position: 50% 100%;
        }
        .header__buttons a {
            font-size: 20px;
        }
        .section__1 {
            padding: 40px 10px;
        }
        .section__2 {
            padding: 50px 0;
        }
        .second {
            padding: 0 20px;
            margin: 0 20px;
        }
        .benefits__icon {
            text-align: center;
        }
        .benefits__info p {
            text-align: center;

        }
        .benefits__info h4 {
            text-align: center;
        }
        .benefits__right {
            margin-left: 0;
        }
        .benefits__left {
            margin-right: 0;
        }
        .register__left {
            display: flex;
            flex-direction: column;
            width: 100%;
            background: rgba(0, 0, 0, 0.2);
            padding: 35px 25px;
        }
        .register__right {
            display: flex;
            flex-direction: column;
            width: 100%;
            background: #121212;
            padding: 35px 25px;
        }
        .register__box {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .section__3 {
            background: url('../assets/image/black.jpg');
            background-repeat: no-repeat;
            background-position: 100%;
            background-size: cover;
            padding: 40px 0;
        }
        .register__header h3 {
            font-size: 36px;
        }
        .register__header {
            margin-top: 0;
        }
        .benefits__info {
            padding-left: 0;
        }
        .benefits__info p {
            margin-top: 10px;
        }
    }
</style>
