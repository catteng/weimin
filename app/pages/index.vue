<template>
  <div class="l-block">
    <div class="l-block__item -kv">
      <div ref="container" class="wave-container" @mousemove="onMouseMove" @mouseleave="onMouseLeave"></div>
    </div>

    <div class="l-block__item -a">SECTION 1</div>
    <div class="l-block__item -b">SECTION 2</div>
    <div class="l-block__item -a">SECTION </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'

const container = ref(null)
let renderer, scene, camera, lines = []
let waveGroup
let animationFrameId
let startTime = 0

const mouse = new THREE.Vector2(-9999, -9999)
const targetCameraRotation = new THREE.Vector2(0, 0)

const initWave = () => {
  if (!container.value) return

  const width = container.value.clientWidth
  const height = container.value.clientHeight

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000)
  camera.position.set(0, 55, 115)
  camera.lookAt(0, 10, 0)

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  container.value.appendChild(renderer.domElement)

  waveGroup = new THREE.Group()
  waveGroup.position.set(150, -15, 30)
  waveGroup.rotation.y = -0.1
  scene.add(waveGroup)

  const lineCount = 65
  const segments = 800
  const lineLength = 1920

  // 💡 定義白金白顏色
  const colorWhite = new THREE.Color(0xFFFFFF)
  const colorGold = new THREE.Color(0xF0CC7E)

  for (let i = 0; i < lineCount; i++) {
    const points = []
    const colors = []
    const zPos = (i - lineCount / 2) * 5.0

    for (let j = 0; j <= segments; j++) {
      const xPos = (j / segments - 0.5) * lineLength
      points.push(new THREE.Vector3(xPos, 0, zPos))
      
      // 計算漸層：中間點是金，兩端是白
      const progress = Math.abs((j / segments) - 0.5) * 2
      const color = new THREE.Color().lerpColors(colorGold, colorWhite, progress)
      colors.push(color.r, color.g, color.b)
    }

    const geometry = new THREE.BufferGeometry().setFromPoints(points)
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))

    // 💡 建立雙股線，並套用頂點顏色材質
    const createLine = (zOffset) => {
      const material = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0
      })
      const line = new THREE.Line(geometry, material)
      line.position.z = zOffset
      line.userData = { zOffset: zPos }
      waveGroup.add(line)
      lines.push(line)
    }

    createLine(-0.15)
    createLine(0.15)
  }

  window.addEventListener('resize', onWindowResize)
}

const animate = (time) => {
  animationFrameId = requestAnimationFrame(animate)
  if (!startTime) startTime = time
  const runTime = time - startTime
  const elapsed = time * 0.0008

  camera.position.x += (targetCameraRotation.x * 50 - camera.position.x) * 0.04
  camera.position.y += ((55 + targetCameraRotation.y * 12) - camera.position.y) * 0.04
  camera.lookAt(0, 5, 0)

  lines.forEach((line, index) => {
    const positionAttribute = line.geometry.attributes.position
    const { zOffset } = line.userData

    // 進場：因為現在有兩層，除以 2 讓進場效果成對出現
    const targetOpacity = 0.4 // 增加一點透明度讓漸層更明顯
    const staggerDelay = Math.floor(index / 2) * 50 

    if (runTime > staggerDelay && line.material.opacity < targetOpacity) {
      line.material.opacity += 0.01
    }

    for (let i = 0; i < positionAttribute.count; i++) {
      const x = positionAttribute.getX(i)
      const z = zOffset
      const y = Math.sin(x * 0.03 + elapsed * 2.0 + z * 0.02) * 8.0 +
                Math.cos(z * 0.03 + elapsed * 2.5) * 4.0
      positionAttribute.setY(i, y)
    }
    positionAttribute.needsUpdate = true
  })

  renderer.render(scene, camera)
}

/**
 * 處理滑鼠移動，更新目標相機角度
 * @param {MouseEvent} event - 游標事件物件
 */
const onMouseMove = (event) => {
  const rect = container.value.getBoundingClientRect()
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

  targetCameraRotation.x = mouse.x
  targetCameraRotation.y = mouse.y
}

/**
 * 處理滑鼠離開容器，重置視角目標
 */
const onMouseLeave = () => {
  mouse.set(-9999, -9999)
  targetCameraRotation.set(0, 0)
}

/**
 * 處理視窗縮放事件，維持比例與渲染大小
 */
const onWindowResize = () => {
  if (!container.value) return
  const width = container.value.clientWidth
  const height = container.value.clientHeight

  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
}

onMounted(() => {
  initWave()
  animate(0)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrameId)
  window.removeEventListener('resize', onWindowResize)

  lines.forEach(line => {
    line.geometry.dispose()
    line.material.dispose()
  })
  if (renderer) renderer.dispose()
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.wave-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 100%);
  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 100%);
}
</style>