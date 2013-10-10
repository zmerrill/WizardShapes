# game resources
g_resources = []

jsApp = {
  onload: -> me.video.init("screen", 640, 480, true, 'auto')
  loaded: ->
}

# the in game stuff
PlayScreen = me.ScreenObject.extend({

  onResetEvent: ->
    me.game.sort()

  onDestroyEvent: ->
    me.game.disableHUD()
    me.audio.stopTrack()
})

window.onReady ->
   jsApp.onload();