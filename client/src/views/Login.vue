<template>
    <section>
        <div class="form form-sm">
            <h1 class="form-title">Login</h1>
            <div class="form-field">
                <label class="form-field-label" for="username">username</label>
                <input class="form-field-input" type="text" name="username" v-model="credentials.username">
            </div>
            <div class="form-field">
                <label class="form-field-label" for="password">password</label>
                <input class="form-field-input" v-bind:type="password.type" name="password" v-model="credentials.password" v-on:keyup.enter="login">
                <div class="eye" v-on:click="togglePassword()">
                    <svg v-if="password.visibility" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#424242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    <svg v-if="!password.visibility" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D3D3D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                </div>
                <!-- <p class="form-field-subtext">username or password incorrect</p> -->
            </div>
            <button class="btn" type="button" v-on:click="login()">login</button>
        </div>
    </section>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

    export default {
        name: 'Login',
        data() {
            return {
                credentials: {
                    username: '',
                    password: ''
                },
                password: {
                    visibility: false,
                    type: 'password'
                },
                
            }
        },
        methods: {
            async login() {
                await AuthenticationService.login({
                    name: this.credentials.username,
                    password: this.credentials.password
                })

                // if(this.input.username == 'alex' && this.input.password == 'alex' ) {
                //     console.log('login success');
                // } else {
                //     console.log('login fail');
                // }
            },
            async getUsers() {
                await AuthenticationService.getUsers()
            },
            togglePassword() {
                if(this.password.visibility == false) {
                    this.password.type = 'text';
                    this.password.visibility = true;
                } else if (this.password.visibility == true) {
                    this.password.type = 'password';
                    this.password.visibility = false;
                }
            }
        }
    }
</script>

<style scoped>

   .form {
        display: flex;
        flex-flow: column;
        margin: 0 auto;
        max-width: 19rem;
    }
    .form-title {
        margin-bottom: 1rem;
    }
    .form-field {
        margin-bottom: 1.25rem;
        position: relative;
    }
    .form-field-label {
        font-size: 0.9rem;
    }
    .form-field-input {
        display: block;
        width: 100%;
        height: 36px;
        margin: 0.5rem 0;
        border: 1px solid lightgrey;
        border-radius: 3px;
        padding: 0 0.5rem;
    }
    .form-field-subtext {
        display: none;
        margin: 0;
        font-size: 0.75rem;
        color: #dc3545;
    }
    .form-field textarea {
        resize: vertical;
        height: 72px;
        min-height: 36px;
        padding: 0.5rem;
        max-height: 180px;
    }
    .form-field .eye {
        position: absolute;
        right: 0;
        top: 30px;
        height: 36px;
        width: 48px;
        padding-top: 8px;
        text-align: center;
        cursor: pointer;
    }
    .form .btn {
        align-self: flex-end;
    }
</style>
