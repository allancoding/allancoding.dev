<template>
    <div class="cube-container">
        <div ref="cube" class="cube">
            <a v-for="(link, index) in links" :key="index" :href="link.url" class="face" :class="faceClasses[index]"
                target="_blank">
                <span class="label" :ref="setLabelRefs">{{ link.label }}</span>
            </a>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
    links: {
        type: Array,
        required: true
    }
});

const cube = ref(null);
const labelElements = [];

function setLabelRefs(el) {
    if (el && !labelElements.includes(el)) {
        labelElements.push(el);
    }
}

const faceClasses = ['front', 'bottom', 'right', 'back', 'top', 'left'];

const animationClasses = [
    'DownRight',
    'DownLeft',
    'UpRight',
    'UpLeft'
];

const directions = ['normal', 'reverse'];

onMounted(() => {
    labelElements.value = cube.value.querySelectorAll('.label');
    const randomIndex = Math.floor(Math.random() * animationClasses.length);
    const randomClass = animationClasses[randomIndex];
    const randomDirection = directions[Math.floor(Math.random() * directions.length)];
    cube.value.classList.add(randomClass, randomDirection);
    cube.value.querySelectorAll('.face').forEach(face => {
        face.classList.add('show');
    });
});
</script>

<style>
@import url("assets/css/cube.css");
</style>

<style scoped>
.cube-container {
    width: 225px;
    height: 225px;
    margin: 15px;
    padding: 60px 70px;
    perspective: 1000px;
}

.cube {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
}

.face {
    position: absolute;
    width: 225px;
    height: 225px;
    background: rgba(0, 255, 0, 0.05);
    border: 2px solid #00ff00;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    opacity: 0;
    transition: opacity 0.5s ease-in;
    transition: background 0.25s ease-in, box-shadow 0.25s ease-in, border 0.25s ease-in, scale 0.25s ease-in;
}

.face:hover {
    background: rgba(244, 3, 11, 0.15);
    box-shadow: 0 0 10px #F4030B;
    border: 3px solid #F4030B;
    scale: 1.035;
}

.label {
    font-size: 1.5rem;
    color: #00ff00;
    text-shadow: 0 0 5px #00ff00;
    backface-visibility: hidden;
    margin: 25px;
    text-align: center;
    transition: color 0.25s ease-in, text-shadow 0.25s ease-in;
}

.face:hover .label{
    color: #F4030B;
    text-shadow: 0 0 10px #F4030B;
}

.front {
    transform: rotateY(0deg) translateZ(112.5px);
}

.back {
    transform: rotateY(180deg) translateZ(112.5px);
}

.right {
    transform: rotateY(90deg) translateZ(112.5px);
}

.left {
    transform: rotateY(-90deg) translateZ(112.5px);
}

.top {
    transform: rotateX(90deg) translateZ(112.5px);
}

.bottom {
    transform: rotateX(-90deg) translateZ(112.5px);
}
</style>