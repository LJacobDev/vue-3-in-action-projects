<template>
    <h2>General Settings</h2>
    <div>
        <div>
            <label>Name</label>
            <input type="text" v-model="general.name">
        </div>
        <div>
            <label>E-mail</label>
            <input type="email" v-model="general.email">
        </div>
        <div>
            <label>About Me</label>
            <textarea v-model="general.about"></textarea>
        </div>
        <div>
            <label>Gender</label>
            <input type="radio" name="gender" id="male" value="male" v-model="general.gender">
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" v-model="general.gender">
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" v-model="general.gender">
            <label for="other">Other / Prefer Not To Say</label>
        </div>
        <div>
            <label>Country</label>
            <select v-model="general.country">
                <option>Canada</option>
                <option>Germany</option>
                <option>UK</option>
                <option>USA</option>
            </select>
        </div>
    </div>
</template>

<script setup lang="ts">

import { useSettings } from '@/composables/useSettings';


    const { general } = useSettings();

</script>