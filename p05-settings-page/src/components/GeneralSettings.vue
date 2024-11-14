<template>
    <h2>General Settings</h2>
    <div>
        <div>
            <label>Name</label>
            <input type="text">
        </div>
        <div>
            <label>E-mail</label>
            <input type="email">
        </div>
        <div>
            <label>About Me</label>
            <textarea></textarea>
        </div>
        <div>
            <label>Gender</label>
            <input type="radio" name="gender" id="male" value="male">
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female">
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other">
            <label for="other">Other / Prefer Not To Say</label>
        </div>
        <div>
            <label>Country</label>
            <select>
                <option>Canada</option>
                <option>Germany</option>
                <option>UK</option>
                <option>USA</option>
            </select>
        </div>
    </div>
</template>
