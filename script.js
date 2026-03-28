class Scene1 extends Phaser.Scene {
  constructor() {
    super('Scene1')
  }

  preload() {
    this.load.image("retry", "assets/retry.png")
    this.load.image("chone", "assets/chones.png")
    this.load.image("kd", "assets/kd.png")
    this.load.image("lp", "assets/lp.png")
    this.load.image("qt", "assets/qt.png")
    this.load.image("bg1", "assets/4th(alleygo).png")
    this.load.audio("quit", "assets/quit.mp3")
    this.load.audio("kick", "assets/kick.wav")
    this.load.audio("lock", "assets/key.mp3")
    this.load.image("fail", "assets/failer.png")
    this.load.audio("failfx", "assets/failsound.mp3")
    this.load.image("run", "assets/run.png")
    this.load.image("shoot", "assets/sh0ot.png")
  }

  create() {
    // Head stuff
    const newParagraph = document.createElement('p');
    const newInfo = document.createElement('p');
    const newHeader = document.createElement('h1');
    newHeader.textContent = 'Cracking the Doorway'
    newParagraph.textContent = 'CtD is a fangame of Henry Stickmin. It is in no way affiliated with PuffballsUnited, ForteBass or Innersloth.'
    newInfo.textContent = 'To run this you need a fastish PC, and a good internet connection. If you downloaded this, it may work without internet unless self server code isn\'t included.'
    document.body.appendChild(newHeader)
    document.body.appendChild(newParagraph)
    document.body.appendChild(newInfo)
    // End of head stuff

    // Phaser stuff (idk where the end is but ok)
    const canvas = document.querySelector("canvas")
    canvas.style.visibility = "hidden"

    // video setting stuff
    const videos = [
      document.getElementById("s1p1"),
      document.getElementById("s2p2"),
      document.getElementById("s3p3")
    ]

    // set scenes stuff
    const scenes = [
      document.getElementById("kck"),
      document.getElementById("lck"),
      document.getElementById("qt"),
      document.getElementById("stl"),
      document.getElementById("gun")
    ]

    // other boring audio stuff
    const failfx = this.sound.add("failfx")

    // scene preload stuff
    scenes[0].style.visibility = "hidden"
    scenes[1].style.visibility = "hidden"
    scenes[2].style.visibility = "hidden"
    scenes[3].style.visibility = "hidden"
    scenes[4].style.visibility = "hidden"

    // at this point i dont know what this is doing but it works so dont touch it ok
    videos.forEach(v => {
      v.style.visibility = "hidden"
      v.muted = true
    })

    // video stuff
    const playVideo = (index) => {
      if (index >= videos.length) return

      const vid = videos[index]
      vid.style.visibility = "visible"
      vid.play()

      vid.onended = () => {
        vid.style.visibility = "hidden"

        if (index === 2) {
          // put actual game code here
          this.add.image(1920 / 2, 1080 / 2, "bg1")
          canvas.style.visibility = "visible"
          // kick
          const kickd = this.add.image(300, 1080 / 2, "kd")
          kickd.setInteractive()
          kickd.on("pointerover", () => {
            const kickk = this.sound.add("kick")
            kickk.play()
            kickd.setTint(0x222222)
          })
          kickd.on("pointerout", () => {
            kickd.clearTint()
          })
          kickd.on("pointerdown", () => {
            canvas.style.visibility = "hidden"
            scenes[0].style.visibility = "visible"
            scenes[0].play()
            scenes[0].onended = () => {
              scenes[0].style.visibility = "hidden"
              canvas.style.visibility = "visible"
              const texty = this.add.text(850, 640, "Rip", { fill: "#fff", align: "center", font: "48px Arial" })
              kickd.visible = false
              lockp.visible = false
              quit.visible = false
              const fail = this.add.image(1920 / 2, 350, "fail")
              const retry = this.add.image(260, 940, "retry")
              retry.setInteractive()
              retry.on("pointerover", () => {
                retry.setTint(0x222222)
              })
              retry.on("pointerout", () => {
                retry.clearTint()
              })
              retry.on("pointerdown", () => {
                texty.visible = false
                fail.visible = false
                retry.visible = false
                kickd.visible = true
                lockp.visible = true
                quit.visible = true
              })
              fail.setScale(0.5)
              failfx.play()
            }
          })

          // lockpick
          const lockp = this.add.image(950, 1080 / 2, "lp")
          lockp.setInteractive()
          lockp.on("pointerover", () => {
            const lockk = this.sound.add("lock")
            lockk.play()
            lockp.setTint(0x222222)
          })
          lockp.on("pointerout", () => {
            lockp.clearTint()
          })
          lockp.on("pointerdown", () => {
            canvas.style.visibility = "hidden"
            scenes[1].style.visibility = "visible"
            scenes[1].play()
            scenes[1].onended = () => {
              scenes[1].style.visibility = "hidden"
              canvas.style.visibility = "visible"
              const texty = this.add.text(850, 640, "Oh no", { fill: "#fff", align: "center", font: "48px Arial" })
              kickd.visible = false
              lockp.visible = false
              quit.visible = false
              const fail = this.add.image(1920 / 2, 350, "fail")
              const retry = this.add.image(260, 940, "retry")
              retry.setInteractive()
              retry.on("pointerover", () => {
                retry.setTint(0x222222)
              })
              retry.on("pointerout", () => {
                retry.clearTint()
              })
              retry.on("pointerdown", () => {
                texty.visible = false
                fail.visible = false
                retry.visible = false
                kickd.visible = true
                lockp.visible = true
                quit.visible = true
              })
              fail.setScale(0.5)
              failfx.play()
            }
          })

          // quit
          const quit = this.add.image(1600, 1080 / 2, "qt")
          quit.setInteractive()
          quit.on("pointerover", () => {
            const quitk = this.sound.add("quit")
            quitk.play()
            quit.setTint(0x222222)
          })
          quit.on("pointerout", () => {
            quit.clearTint()
          })
          quit.on("pointerdown", () => {
            canvas.style.visibility = "hidden"
            scenes[2].style.visibility = "visible"
            scenes[2].play()
            scenes[2].onended = () => {
              scenes[2].style.visibility = "hidden"
              canvas.style.visibility = "visible"
              quit.visible = false
              lockp.visible = false
              kickd.visible = false
              // start next choice
              const shoot = this.add.image(950, 1080 / 2, "shoot")
              shoot.setInteractive()
              shoot.on("pointerover", () => {
                shoot.setTint(0x222222)
              })
              shoot.on("pointerout", () => {
                shoot.clearTint()
              })
              shoot.on("pointerdown", () => {
                canvas.style.visibility = "hidden"
                scenes[4].style.visibility = "visible"
                scenes[4].play()
                scenes[4].onended = () => {
                  run.visible = false
                  shoot.visible = false
                  scenes[4].style.visibility = "hidden"
                  canvas.style.visibility = "visible"
                  const texty = this.add.text(550, 640, "So you shot it, what now? Cause I don't have a plan.", { fill: "#fff", align: "center", font: "48px Arial" })
                  run.visible = false
                  const fail = this.add.image(1920 / 2, 350, "fail")
                  const retry = this.add.image(260, 940, "retry")
                  retry.setInteractive()
                  retry.on("pointerover", () => {
                    retry.setTint(0x222222)
                  })
                  retry.on("pointerout", () => {
                    retry.clearTint()
                  })
                  retry.on("pointerdown", () => {
                    texty.visible = false
                    fail.visible = false
                    retry.visible = false
                    run.visible = true
                    shoot.visible = true
                  })
                  fail.setScale(0.5)
                  failfx.play()
                }
              })
              const run = this.add.image(300, 1080 / 2, "run")
              run.setInteractive()
              run.on("pointerover", () => {
                run.setTint(0x222222)
              })
              run.on("pointerout", () => {
                run.clearTint()
              })
              run.on("pointerdown", () => {
                canvas.style.visibility = "hidden"
                scenes[3].style.visibility = "visible"
                scenes[3].play()
                scenes[3].onended = () => {
                  shoot.visible = false
                  run.visible = false
                  scenes[3].style.visibility = "hidden"
                  canvas.style.visibility = "visible"
                  const texty = this.add.text(350, 640, "Why have you set off so many alarms? THIS IS YOUR FOURTH TIME!", { fill: "#fff", align: "center", font: "48px Arial" })
                  run.visible = false
                  const fail = this.add.image(1920 / 2, 350, "fail")
                  const retry = this.add.image(260, 940, "retry")
                  retry.setInteractive()
                  retry.on("pointerover", () => {
                    retry.setTint(0x222222)
                  })
                  retry.on("pointerout", () => {
                    retry.clearTint()
                  })
                  retry.on("pointerdown", () => {
                    texty.visible = false
                    fail.visible = false
                    retry.visible = false
                    run.visible = true
                    shoot.visible = true
                  })
                  fail.setScale(0.5)
                  failfx.play()
                }
              })

            }
          })
        }
        else {
          playVideo(index + 1)
        }
      }
    }
    playVideo(0)
  }
}

const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  scene: [Scene1],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}

const game = new Phaser.Game(config)