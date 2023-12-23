/**
 * 抽奖转盘旋转逻辑
 */
import { ref, reactive } from 'vue'

interface IOptions {
  part: number // 转盘分为几部分
}

export function useTurntable(options: IOptions = { part: 8 }) {
  const isRun = ref(false)
  const partAngle = 360 / options.part
  const rotateAngle = ref(0) // 旋转角度
  const config = reactive({
    duration: 3000, // 总旋转时间，ms 级
    circle: 8, // 旋转圈数
    mode: 'ease-in-out', // 由快到慢
  })

  function generateRotateStyle(duration = config.duration) {
    const transition = `transform ${duration}ms ${config.mode}`
    const transform = `rotate(${rotateAngle.value}deg)`
    return `
      -webkit-transition: ${transition};
      transition: ${transition};
      -webkit-transform: ${transform};
      transform: ${transform};
    `
  }

  const circleAdd = ref(1) // 第几次抽奖
  const drawIndex = ref(7) // 中奖索引 转盘图片排序 指针右手开始 0-...
  const rotateStyle = ref(generateRotateStyle())

  function run() {
    if (isRun.value) return
    isRun.value = true

    return new Promise((resolve) => {
      const offset = 360 / options.part / 2 // 奖品中心偏移
      rotateAngle.value =
        config.circle * 360 * circleAdd.value - (offset + drawIndex.value * partAngle)
      // 圈数位置解析
      // config.circle * 360 * circleAdd.value 顺时针总圈数/累积总圈数
      // 22.5 + drawIndex.value * 45 ===> (奖品位置 === drawIndex.value * 45) (指针中间位置 === 22.5)

      circleAdd.value++
      rotateStyle.value = generateRotateStyle()

      setTimeout(() => {
        isRun.value = false
        resolve(undefined)
      }, config.duration)
    })
  }

  function randomIndex() {
    return Math.floor(Math.random() * options.part)
  }

  function resetAngle() {
    if (isRun.value) return
    isRun.value = true
    rotateAngle.value = 0
    rotateStyle.value = generateRotateStyle(0)

    return new Promise((resolve) => {
      setTimeout(() => {
        isRun.value = false
        resolve(undefined)
      }, 300)
    })
  }

  return {
    rotateStyle,
    drawIndex,
    run,
    randomIndex,
    resetAngle,
  }
}
