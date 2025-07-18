<template>
    <div class="cube-container">
        <div ref="cube" class="cube">
            <a v-for="(site, index) in sites" :key="index" :href="site.url" class="face" :class="faceClasses[index]"
                target="_blank">
                <span class="label" :ref="setLabelRefs">{{ site.label }}</span>
            </a>

        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const cube = ref(null)
const labelElements = []

function setLabelRefs(el) {
    if (el && !labelElements.includes(el)) {
        labelElements.push(el)
    }
}

const sites = [
    { label: 'Site 1', url: 'https://example.com' },
    { label: 'Site 2', url: 'https://example2.com' },
    { label: 'Site 3', url: 'https://example3.com' },
    { label: 'Site 4', url: 'https://example4.com' },
    { label: 'Site 5', url: 'https://example5.com' },
    { label: 'Site 6', url: 'https://example6.com' },
]

const faceClasses = ['front', 'back', 'right', 'left', 'top', 'bottom']

function inverseMatrix(matrixStr) {
    const match = matrixStr.match(/matrix3d\((.+)\)/)
    if (!match) return null

    const m = match[1].split(',').map(parseFloat)

    return [
        m[0], m[4], m[8], 0,
        m[1], m[5], m[9], 0,
        m[2], m[6], m[10], 0,
        0, 0, 0, 1
    ].join(',')
}

onMounted(() => {
    function updateBillboard() {
        const transform = getComputedStyle(cube.value).transform
        const matrix = inverseMatrix(transform)

        if (matrix) {
            labelElements.forEach(el => {
                el.style.transform = `matrix3d(${matrix})`
            })
        }

        requestAnimationFrame(updateBillboard)
    }

    labelElements.value = cube.value.querySelectorAll('.label')
    //updateBillboard()
})
</script>

<style scoped>
.cube-container {
    width: 300px;
    height: 300px;
    margin: 100px auto;
    perspective: 1000px;
}

.cube {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    animation: rotateCube 20s infinite linear;
}

.face {
    position: absolute;
    width: 300px;
    height: 300px;
    background: rgba(0, 255, 0, 0.05);
    border: 2px solid #0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
}

.label {
    font-size: 1.5rem;
    color: #0f0;
    text-shadow: 0 0 5px #0f0;
    backface-visibility: hidden;
}

.front {
    transform: rotateY(0deg) translateZ(150px);
}

.back {
    transform: rotateY(180deg) translateZ(150px);
}

.right {
    transform: rotateY(90deg) translateZ(150px);
}

.left {
    transform: rotateY(-90deg) translateZ(150px);
}

.top {
    transform: rotateX(90deg) translateZ(150px);
}

.bottom {
    transform: rotateX(-90deg) translateZ(150px);
}

@keyframes rotateCube {
    0% {
        transform: rotateX(0deg) rotateY(0deg);
    }

    100% {
        transform: rotateX(360deg) rotateY(720deg);
    }
}
</style>