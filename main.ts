namespace SpriteKind {
    export const icon = SpriteKind.create()
    export const ugoku = SpriteKind.create()
    export const lightpi = SpriteKind.create()
}
// 食事場、花瓶に水
scene.onOverlapTile(SpriteKind.Player, assets.tile`mizu-kabinn`, function (sprite, location) {
    if (controller.A.isPressed() && 0 == water) {
        if (1 == flower) {
            game.showLongText("中に水が入っていた", DialogLayout.Bottom)
            game.showLongText("水を入れ替えた！", DialogLayout.Bottom)
            game.showLongText("枯れていた花が蘇った", DialogLayout.Bottom)
            water += 1
        } else {
            game.showLongText("中に水が入っていた", DialogLayout.Bottom)
            game.showLongText("どこかに花はないだろうか", DialogLayout.Bottom)
            pause(500)
        }
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e e f . . 
        f f f e e e e e e e f . 
        f f f f e e e e e e e f 
        f f f f f e e e 4 e e f 
        f f f f e e e 4 4 e e f 
        f f f f 4 4 4 4 4 e f f 
        f f 4 e 4 f f 4 4 e f . 
        f f 4 d 4 d d d d f . . 
        . f f f 4 d d b b f . . 
        . 4 d d e 4 4 4 e f . . 
        . e d d e 1 1 1 1 f . . 
        . f e e f 6 6 6 6 f f . 
        . f f f f f f f f f f . 
        . . f f . . . f f f . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e e f . . 
        f f f e e e e e e e f . 
        f f f f e e e e e e e f 
        f f f f f e e e 4 e e f 
        f f f f e e e 4 4 e e f 
        f f f f 4 4 4 4 4 e f f 
        f f 4 e 4 f f 4 4 e f . 
        . f 4 d 4 d d d d f . . 
        . f f f e e d b b f . . 
        . . f 4 d d e 4 e f . . 
        . . f e d d e 1 1 f . . 
        . f f f e e f 6 6 f f . 
        . f f f f f f f f f f . 
        . . f f . . . f f f . . 
        `,img`
        . . . . f f f f f . . . 
        . . f f e e e e e f . . 
        . f f e e e e e e e f . 
        f f f f e e e e e e e f 
        f f f f f e e e 4 e e f 
        f f f f e e e 4 4 e e f 
        f f f f 4 4 4 4 4 e f f 
        f f 4 e 4 f f 4 4 e f f 
        . f 4 d 4 d d d d f f . 
        . f f f 4 d d b b f . . 
        . . f e e 4 4 4 e f . . 
        . . 4 d d e 1 1 1 f . . 
        . . e d d e 1 1 1 f . . 
        . . f e e f 6 6 6 f . . 
        . . . f f f f f f . . . 
        . . . . f f f . . . . . 
        `],
    100,
    true
    )
})
function TheLastRoom () {
    if (idou > 0) {
        if (tsukue == 1 && (light2 == 1 && fire == 1)) {
            game.showLongText("部屋の外からなにかが動く音がした", DialogLayout.Bottom)
            game.showLongText("確かめに行こう", DialogLayout.Bottom)
        }
    } else {
        if (tsukue == 1 && (light2 == 1 && fire == 1)) {
            tiles.setTileAt(tiles.getTileLocation(9, 1), assets.tile`dor`)
            tiles.setTileAt(tiles.getTileLocation(10, 1), assets.tile`dor0`)
            tiles.setTileAt(tiles.getTileLocation(10, 2), assets.tile`aruzi-ido`)
        }
    }
}
// 食事場、暖炉
scene.onOverlapTile(SpriteKind.Player, assets.tile`danromoyasu`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (machi == 0 && fire == 0) {
            game.showLongText("暖炉だ", DialogLayout.Bottom)
            game.showLongText("道具さえあれば火を起こせそうだ", DialogLayout.Bottom)
            pause(1000)
        } else if (machi == 1 && fire == 0) {
            game.showLongText("マッチで暖炉に火をつけた", DialogLayout.Bottom)
            tiles.setTileAt(tiles.getTileLocation(7, 4), assets.tile`danro-moeru`)
            fire += 1
            TheLastRoom()
        } else {
            game.showLongText("あたたかい", DialogLayout.Bottom)
            pause(1000)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hito1`, function (sprite, location) {
    if (controller.A.isPressed()) {
        game.showLongText("メガネをかけた人の絵画が飾られている", DialogLayout.Bottom)
        game.showLongText("その下に「noah」と書かれている", DialogLayout.Bottom)
        pause(1000)
    }
    whoQuizMiss()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hito3`, function (sprite, location) {
    if (controller.A.isPressed()) {
        game.showLongText("帽子をかぶった人の絵画が飾られている", DialogLayout.Bottom)
        game.showLongText("その下に「leonard」と書かれている", DialogLayout.Bottom)
        pause(1000)
    }
    whoQuizMiss()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hito2`, function (sprite, location) {
    if (controller.A.isPressed()) {
        game.showLongText("杖を持った人の絵画が飾られている", DialogLayout.Bottom)
        game.showLongText("その下に「jack」と書かれている", DialogLayout.Bottom)
        pause(1000)
    }
    if (lastKey == 0) {
        if (pins.P0.analogRead() > 100) {
            game.showLongText("ボタンを押した", DialogLayout.Bottom)
            game.showLongText("絵画の裏からカギが落ちてきた", DialogLayout.Bottom)
            game.showLongText("これで出られるかもしれない", DialogLayout.Bottom)
            lastKey += 1
        }
    } else {
        game.showLongText("もう反応しないようだ", DialogLayout.Bottom)
        pause(1000)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f f e e e e e e f f . 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        . f e d d b b d d e f . 
        . f f e 4 4 4 4 e f f . 
        e 4 f b 1 1 1 1 b f 4 e 
        4 d f 1 1 1 1 1 1 f d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e f f f . 
        f f f e e e e e e f f f 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        . f e d d b b d 4 e f e 
        f f f e 4 4 4 4 d d 4 e 
        e 4 f b 1 1 1 e d d e . 
        . . f 6 6 6 6 f e e . . 
        . . f f f f f f f . . . 
        . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e f f f . 
        f f f e e e e e e f f f 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        e f e 4 d b b d d e f . 
        e 4 d d 4 4 4 4 e f f f 
        . e d d e 1 1 1 b f 4 e 
        . . e e f 6 6 6 6 f . . 
        . . . f f f f f f f . . 
        . . . . . . . f f f . . 
        `],
    100,
    true
    )
})
function start1 () {
    mySprite = sprites.create(img`
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f e e e e e e e f f . 
        f f e f e e e e e e f f 
        f f f e e e e e e e e f 
        f f f e e e e e e f e f 
        f f f f e e e e f f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        . f f f f f f f f f f . 
        . e f f f f f f f f e . 
        e 4 f b b b b b b f 4 e 
        4 d f d d d d d d c d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `, SpriteKind.Player)
    mySprite.setPosition(105, 55)
    story.startCutscene(function () {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . f f f f f . . . . 
            . . f e e e e e f f . . 
            . f e e e e e e e f f . 
            f e e e e e e e f f f f 
            f e e 4 e e e f f f f f 
            f e e 4 4 e e e f f f f 
            f f e 4 4 4 4 4 f f f f 
            f f e 4 4 f f 4 e 4 f f 
            . f f d d d d 4 d 4 f . 
            . . f b b d d 4 f f f . 
            . . f e 4 4 4 e e f . . 
            . . f 1 1 1 e d d 4 . . 
            . . f 1 1 1 e d d e . . 
            . . f 6 6 6 f e e f . . 
            . . . f f f f f f . . . 
            . . . . . f f f . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . . f e e e e e f f f . 
            . f e e e e e e e f f f 
            f e e e e e e e f f f f 
            f e e 4 e e e f f f f f 
            f e e 4 4 e e e f f f f 
            f f e 4 4 4 4 4 f f f f 
            . f e 4 4 f f 4 e 4 f f 
            . . f d d d d 4 d 4 f . 
            . . f b b d e e f f f . 
            . . f e 4 e d d 4 f . . 
            . . f 1 1 e d d e f . . 
            . f f 6 6 f e e f f f . 
            . f f f f f f f f f f . 
            . . f f f . . . f f . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . . f e e e e e f f f . 
            . f e e e e e e e f f f 
            f e e e e e e e f f f f 
            f e e 4 e e e f f f f f 
            f e e 4 4 e e e f f f f 
            f f e 4 4 4 4 4 f f f f 
            . f e 4 4 f f 4 e 4 f f 
            . . f d d d d 4 d 4 f f 
            . . f b b d d 4 f f f . 
            . . f e 4 4 4 e d d 4 . 
            . . f 1 1 1 1 e d d e . 
            . f f 6 6 6 6 f e e f . 
            . f f f f f f f f f f . 
            . . f f f . . . f f . . 
            `],
        100,
        true
        )
        story.spriteMoveToLocation(mySprite, 80, 55, 50)
        mySprite.setImage(img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f f e e e e e e f f . 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 d d d d d d 4 e f 
            . f e d d b b d d e f . 
            . f f e 4 4 4 4 e f f . 
            e 4 f b 1 1 1 1 b f 4 e 
            4 d f 1 1 1 1 1 1 f d 4 
            4 4 f 6 6 6 6 6 6 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `)
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    })
    Mathar = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    Mathar.setFlag(SpriteFlag.GhostThroughWalls, true)
    Mathar.setPosition(50, 150)
    story.startCutscene(function () {
        animation.runImageAnimation(
        Mathar,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . . f f f f 2 2 f f f f . . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f f 2 f e f . . 
            . . f f f 2 f e e 2 2 f f f . . 
            . . f e 2 f f e e 2 f e e f . . 
            . f f e f f e e e f e e e f f . 
            . f f e e e e e e e e e e f f . 
            . . . f e e e e e e e e f . . . 
            . . . e f f f f f f f f 4 e . . 
            . . . 4 f 2 2 2 2 2 e d d 4 . . 
            . . . e f f f f f f e e 4 . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . . f f f f 2 2 f f f f . . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e f 2 f f f 2 f 2 e f . . 
            . . f f f 2 2 e e f 2 f f f . . 
            . . f e e f 2 e e f f 2 e f . . 
            . f f e e e f e e e f f e f f . 
            . f f e e e e e e e e e e f f . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f e . . . 
            . . 4 d d e 2 2 2 2 2 f 4 . . . 
            . . . 4 e e f f f f f f e . . . 
            . . . . . . . . . f f f . . . . 
            `],
        100,
        true
        )
        story.spriteMoveToLocation(Mathar, 50, 70, 50)
        animation.runImageAnimation(
        Mathar,
        [img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e e e d d d f . . . 
            . . . . . f 4 d d e 4 e f . . . 
            . . . . . f e d d e 2 2 f . . . 
            . . . . f f f e e f 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . 4 d d e 4 4 4 e f . . . 
            . . . . e d d e 2 2 2 2 f . . . 
            . . . . f e e f 4 4 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        100,
        true
        )
        story.spriteMoveToLocation(Mathar, 80, 70, 50)
        animation.stopAnimation(animation.AnimationTypes.All, Mathar)
    })
    story.startCutscene(function () {
        animation.runImageAnimation(
        Mathar,
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d e e e e e f . . . 
            . . . f e 4 e d d 4 f . . . . . 
            . . . f 2 2 e d d e f . . . . . 
            . . f f 5 5 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e d d 4 . . . . 
            . . . f 2 2 2 2 e d d e . . . . 
            . . f f 5 5 4 4 f e e f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        100,
        true
        )
        story.spriteMoveToLocation(Mathar, 50, 70, 50)
        animation.runImageAnimation(
        Mathar,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . . f e 4 d d d d 4 e f e . . 
            . . f e f 2 2 2 2 e d d 4 e . . 
            . . e 4 f 2 2 2 2 e d d e . . . 
            . . . . f 4 4 5 5 f e e . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 2 2 2 2 2 2 e f f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . e f e 4 d d d d 4 e f . . . 
            . . e 4 d d e 2 2 2 2 f e f . . 
            . . . e d d e 2 2 2 2 f 4 e . . 
            . . . . e e f 5 5 4 4 f . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . f f f . . . . 
            `],
        100,
        true
        )
        story.spriteMoveToLocation(Mathar, 50, 150, 50)
        animation.stopAnimation(animation.AnimationTypes.All, Mathar)
        Mathar.destroy()
    })
    story.startCutscene(function () {
        scene.cameraShake(8, 200)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . f f f f f . . . . 
            . . f e e e e e f f . . 
            . f e e e e e e e f f . 
            f e e e e e e e f f f f 
            f e e 4 e e e f f f f f 
            f e e 4 4 e e e f f f f 
            f f e 4 4 4 4 4 f f f f 
            f f e 4 4 f f 4 e 4 f f 
            . f f d d d d 4 d 4 f . 
            . . f b b d d 4 f f f . 
            . . f e 4 4 4 e e f . . 
            . . f 1 1 1 e d d 4 . . 
            . . f 1 1 1 e d d e . . 
            . . f 6 6 6 f e e f . . 
            . . . f f f f f f . . . 
            . . . . . f f f . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . . f e e e e e f f f . 
            . f e e e e e e e f f f 
            f e e e e e e e f f f f 
            f e e 4 e e e f f f f f 
            f e e 4 4 e e e f f f f 
            f f e 4 4 4 4 4 f f f f 
            . f e 4 4 f f 4 e 4 f f 
            . . f d d d d 4 d 4 f . 
            . . f b b d e e f f f . 
            . . f e 4 e d d 4 f . . 
            . . f 1 1 e d d e f . . 
            . f f 6 6 f e e f f f . 
            . f f f f f f f f f f . 
            . . f f f . . . f f . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . . f e e e e e f f f . 
            . f e e e e e e e f f f 
            f e e e e e e e f f f f 
            f e e 4 e e e f f f f f 
            f e e 4 4 e e e f f f f 
            f f e 4 4 4 4 4 f f f f 
            . f e 4 4 f f 4 e 4 f f 
            . . f d d d d 4 d 4 f f 
            . . f b b d d 4 f f f . 
            . . f e 4 4 4 e d d 4 . 
            . . f 1 1 1 1 e d d e . 
            . f f 6 6 6 6 f e e f . 
            . f f f f f f f f f f . 
            . . f f f . . . f f . . 
            `],
        100,
        true
        )
        story.spriteMoveToLocation(mySprite, 40, 55, 50)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f e e e e e e e f f . 
            f f e f e e e e e e f f 
            f f f e e e e e e e e f 
            f f f e e e e e e f e f 
            f f f f e e e e f f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            . f f f f f f f f f f . 
            . e f f f f f f f f e . 
            e 4 f b b b b b b f 4 e 
            4 d f d d d d d d c d 4 
            4 4 f 6 6 6 6 6 6 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f e e e e e e e f f . 
            f e e f e e e e e e f f 
            f f f e e e e e e e e f 
            f f e e e e e e e f e f 
            f f f e e e e f f f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            . f f f f f f f f f f . 
            . e f f f f f f f f e . 
            . 4 f b b b b b f e 4 e 
            . 4 f d d d d d e d d 4 
            . e f f f f f f e e 4 . 
            . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f e e e e e e e f f . 
            f f e f e e e e e e f f 
            f f f e e e e e e e e f 
            f f f f e e e e e f e f 
            f f f f f e e e e f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            . f f f f f f f f f f . 
            . e f f f f f f f f e . 
            e 4 e f b b b b b f 4 . 
            4 d d e d d d d d f 4 . 
            . 4 e e f f f f f f e . 
            . . . . . . . f f f . . 
            `],
        100,
        true
        )
        story.spriteMoveToLocation(mySprite, 40, 40, 50)
        osiire += 1
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    })
}
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
})
// 来るとき、帰るとき、自分の部屋
scene.onOverlapTile(SpriteKind.Player, assets.tile`kabe3`, function (sprite, location) {
    if (ikikaeri == 0) {
        mySprite.setPosition(160, 240)
        scene.setBackgroundColor(11)
        tiles.setTilemap(tilemap`yakata`)
        ikikaeri += 1
        mySprite2 = sprites.create(img`
            fccccccccccccccf
            cbddddddddddddbc
            cddddddddddddddc
            cddddddddddddddc
            cddddddddddddddc
            cddddddddddddddc
            cddddddddddddddc
            cddddddddddddddc
            cdbbbbbbbbbbbbdc
            cbbbbbbbbbbbbbbc
            cbddddddddddddbc
            cbcbbbcbbcbbbcbc
            fbcbbbcddcbbbcbf
            fbcbbbbccbbbbcbf
            fbccccccccccccbf
            fbbbbbbbbbbbbbbf
            fbddddddddddddbf
            fbcbbbcbbcbbbcbf
            fbcbbbcddcbbbcbf
            fbcbbbbccbbbbcbf
            fbccccccccccccbf
            fbbbbbbbbbbbbbbf
            fbffffffffffffbf
            ffffffffffffffff
            `, SpriteKind.ugoku)
        tiles.setWallAt(tiles.getTileLocation(3, 7), true)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(3, 7))
    } else if (ikikaeri == 1 && lastKey == 1) {
        scene.setBackgroundColor(15)
        tiles.setTilemap(tilemap`kaerimiti`)
        ikikaeri += 1
        mySprite.setPosition(110, 20)
    } else if (ikikaeri == 2 && lastKey == 1) {
        scene.setBackgroundColor(6)
        tiles.setTilemap(tilemap`home`)
        mySprite.setPosition(30, 40)
    }
})
function ifflag () {
    mySprite2.destroy()
    mySprite2 = sprites.create(img`
        fccccccccccccccf
        cbddddddddddddbc
        cddddddddddddddc
        cddddddddddddddc
        cddddddddddddddc
        cddddddddddddddc
        cddddddddddddddc
        cddddddddddddddc
        cdbbbbbbbbbbbbdc
        cbbbbbbbbbbbbbbc
        cbddddddddddddbc
        cbcbbbcbbcbbbcbc
        fbcbbbcddcbbbcbf
        fbcbbbbccbbbbcbf
        fbccccccccccccbf
        fbbbbbbbbbbbbbbf
        fbddddddddddddbf
        fbcbbbcbbcbbbcbf
        fbcbbbcddcbbbcbf
        fbcbbbbccbbbbcbf
        fbccccccccccccbf
        fbbbbbbbbbbbbbbf
        fbffffffffffffbf
        ffffffffffffffff
        `, SpriteKind.ugoku)
    if (SensurOsu == 0) {
        tiles.setWallAt(tiles.getTileLocation(3, 7), true)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(3, 7))
    } else {
        tiles.setWallAt(tiles.getTileLocation(2, 7), true)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(2, 7))
    }
    if (flower == 1) {
        tiles.setTileAt(tiles.getTileLocation(6, 11), assets.tile`nai-tukue`)
    }
    if (light2 == 1) {
        for (let 値 of sprites.allOfKind(SpriteKind.lightpi)) {
            値.destroy()
            for (let 値 of tiles.getTilesByType(assets.tile`lump`)) {
                mySprite3 = sprites.create(img`
                    . . . . . . f f f f . . . . . . 
                    . . . . . f 1 1 1 1 f . . . . . 
                    . . . . f 1 1 5 1 1 1 f . . . . 
                    . . . f 1 1 1 5 1 5 1 1 f . . . 
                    . . . f 1 5 4 1 5 5 5 1 f . . . 
                    . . . f 5 4 4 4 4 4 5 5 f . . . 
                    . . . . f f 4 4 4 4 f f . . . . 
                    . . . 5 4 4 f 5 5 f 4 4 . . . . 
                    . . . . 5 4 4 f f 4 4 4 . . . . 
                    . . . . 5 5 f f f f 5 . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . f f . f f . f f . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.lightpi)
                tiles.placeOnTile(mySprite3, 値)
            }
        }
    }
}
// 食事場、花瓶を置く
scene.onOverlapTile(SpriteKind.Player, assets.tile`hana-okubasyo`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (tsukue == 0 && water == 1) {
            game.showLongText("花の入った花瓶を机に置いた", DialogLayout.Bottom)
            tiles.setTileAt(tiles.getTileLocation(7, 8), assets.tile`myTile23`)
            tsukue = 1
            TheLastRoom()
        } else if (tsukue == 1 && water == 1) {
            game.showLongText("キレイなバラが咲いている", DialogLayout.Bottom)
            pause(500)
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . f f f f f . . . . 
        . . f e e e e e f f . . 
        . f e e e e e e e f f . 
        f e e e e e e e f f f f 
        f e e 4 e e e f f f f f 
        f e e 4 4 e e e f f f f 
        f f e 4 4 4 4 4 f f f f 
        f f e 4 4 f f 4 e 4 f f 
        . f f d d d d 4 d 4 f . 
        . . f b b d d 4 f f f . 
        . . f e 4 4 4 e e f . . 
        . . f 1 1 1 e d d 4 . . 
        . . f 1 1 1 e d d e . . 
        . . f 6 6 6 f e e f . . 
        . . . f f f f f f . . . 
        . . . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . . f e e e e e f f f . 
        . f e e e e e e e f f f 
        f e e e e e e e f f f f 
        f e e 4 e e e f f f f f 
        f e e 4 4 e e e f f f f 
        f f e 4 4 4 4 4 f f f f 
        . f e 4 4 f f 4 e 4 f f 
        . . f d d d d 4 d 4 f . 
        . . f b b d e e f f f . 
        . . f e 4 e d d 4 f . . 
        . . f 1 1 e d d e f . . 
        . f f 6 6 f e e f f f . 
        . f f f f f f f f f f . 
        . . f f f . . . f f . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . . f e e e e e f f f . 
        . f e e e e e e e f f f 
        f e e e e e e e f f f f 
        f e e 4 e e e f f f f f 
        f e e 4 4 e e e f f f f 
        f f e 4 4 4 4 4 f f f f 
        . f e 4 4 f f 4 e 4 f f 
        . . f d d d d 4 d 4 f f 
        . . f b b d d 4 f f f . 
        . . f e 4 4 4 e d d 4 . 
        . . f 1 1 1 1 e d d e . 
        . f f 6 6 6 6 f e e f . 
        . f f f f f f f f f f . 
        . . f f f . . . f f . . 
        `],
    100,
    true
    )
})
// 通路に移動
scene.onOverlapTile(SpriteKind.Player, assets.tile`deiri`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setTilemap(tilemap`yakata`)
        ifflag()
        if (idou == 2) {
            mySprite.setPosition(58, 120)
            idou = 0
            pause(200)
        } else if (idou == 3) {
            mySprite.setPosition(229, 120)
            idou = 0
            pause(200)
        } else if (idou == 4) {
            mySprite.setPosition(159, 40)
            idou = 0
            pause(200)
        }
        TheLastRoom()
    }
})
function lightFlowerMach () {
    if (controller.A.isPressed()) {
        if (idou == 2) {
            if (light1 == 0 || secret == 0) {
                game.showLongText("金庫だ", DialogLayout.Bottom)
                game.showLongText("文字を入力できるようだ", DialogLayout.Bottom)
                answer = game.askForString("")
                // 花、秘密、間違い
                if (light1 == 0 && answer == "rose") {
                    game.showLongText("金庫を開けるとブレーカーが出てきた", DialogLayout.Bottom)
                    game.showLongText("これで明かりをつけられそうだ", DialogLayout.Bottom)
                    game.showLongText("スイッチを押してみよう", DialogLayout.Bottom)
                    pause(500)
                    light1 = 1
                } else if (answer == "kevin" == (secret == 0)) {
                    game.showLongText("ケヴィンの日記", DialogLayout.Bottom)
                    secret = 1
                } else {
                    game.showLongText("反応がない。間違っているようだ。", DialogLayout.Bottom)
                    pause(500)
                }
            } else {
                game.showLongText("ここにもう用はない", DialogLayout.Bottom)
                pause(500)
            }
        } else if (idou == 0 && 200 < mySprite.x) {
            if (machi == 0) {
                game.showLongText("絵画の裏に四角い穴があった", DialogLayout.Bottom)
                game.showLongText("中にはマッチが入っていた", DialogLayout.Bottom)
                machi = 1
            }
        } else {
            if (flower == 0) {
                game.showLongText("枯れた花が入っている", DialogLayout.Bottom)
                game.showLongText("枯れた花が入った花瓶を手に入れた", DialogLayout.Bottom)
                tiles.setTileAt(tiles.getTileLocation(6, 11), assets.tile`nai-tukue`)
                flower = 1
            }
        }
    } else if (light1 == 1 && light2 == 0) {
        if (pins.P0.analogRead() > 100) {
            for (let 値 of tiles.getTilesByType(assets.tile`lump`)) {
                mySprite3 = sprites.create(img`
                    . . . . . . f f f f . . . . . . 
                    . . . . . f 1 1 1 1 f . . . . . 
                    . . . . f 1 1 5 1 1 1 f . . . . 
                    . . . f 1 1 1 5 1 5 1 1 f . . . 
                    . . . f 1 5 4 1 5 5 5 1 f . . . 
                    . . . f 5 4 4 4 4 4 5 5 f . . . 
                    . . . . f f 4 4 4 4 f f . . . . 
                    . . . 5 4 4 f 5 5 f 4 4 . . . . 
                    . . . . 5 4 4 f f 4 4 4 . . . . 
                    . . . . 5 5 f f f f 5 . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . f f . f f . f f . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.lightpi)
                tiles.placeOnTile(mySprite3, 値)
            }
            game.showLongText("明かりがついたか確かめに行こう", DialogLayout.Bottom)
            pause(500)
            light2 = 1
            TheLastRoom()
        }
    }
}
// 倉庫
scene.onOverlapTile(SpriteKind.Player, assets.tile`souko`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setTilemap(tilemap`sooko`)
        mySprite2.destroy()
        if (light2 == 1) {
            for (let 値 of sprites.allOfKind(SpriteKind.lightpi)) {
                値.destroy()
            }
            for (let 値 of tiles.getTilesByType(assets.tile`lump`)) {
                mySprite3 = sprites.create(img`
                    . . . . . . f f f f . . . . . . 
                    . . . . . f 1 1 1 1 f . . . . . 
                    . . . . f 1 1 5 1 1 1 f . . . . 
                    . . . f 1 1 1 5 1 5 1 1 f . . . 
                    . . . f 1 5 4 1 5 5 5 1 f . . . 
                    . . . f 5 4 4 4 4 4 5 5 f . . . 
                    . . . . f f 4 4 4 4 f f . . . . 
                    . . . 5 4 4 f 5 5 f 4 4 . . . . 
                    . . . . 5 4 4 f f 4 4 4 . . . . 
                    . . . . 5 5 f f f f 5 . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . f f . f f . f f . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.lightpi)
                tiles.placeOnTile(mySprite3, 値)
            }
        }
        mySprite.setPosition(105, 140)
        idou = 2
        pause(200)
    }
})
// 電気,マッチ、花
scene.onOverlapTile(SpriteKind.Player, assets.tile`button-machi-hana`, function (sprite, location) {
    lightFlowerMach()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hito0`, function (sprite, location) {
    if (controller.A.isPressed()) {
        game.showLongText("大きなヒゲが生えた人の絵画が飾られている", DialogLayout.Bottom)
        game.showLongText("その下に「oliver」と書かれている", DialogLayout.Bottom)
        pause(1000)
    }
    whoQuizMiss()
})
function whoQuizMiss () {
    if (pins.P0.analogRead() > 100) {
        game.showLongText("ボタンを押した", DialogLayout.Bottom)
        game.showLongText("......", DialogLayout.Bottom)
        game.showLongText("特に反応はない", DialogLayout.Bottom)
        pause(1000)
    }
}
// 主の部屋
scene.onOverlapTile(SpriteKind.Player, assets.tile`aruzi-ido`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setTilemap(tilemap`aruzi-heya`)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(10, 3))
        mySprite.setPosition(95, 150)
        if (light1 == 1 && light2 == 1) {
            for (let 値 of sprites.allOfKind(SpriteKind.lightpi)) {
                値.destroy()
            }
            for (let 値 of tiles.getTilesByType(assets.tile`lump`)) {
                mySprite3 = sprites.create(img`
                    . . . . . . f f f f . . . . . . 
                    . . . . . f 1 1 1 1 f . . . . . 
                    . . . . f 1 1 5 1 1 1 f . . . . 
                    . . . f 1 1 1 5 1 5 1 1 f . . . 
                    . . . f 1 5 4 1 5 5 5 1 f . . . 
                    . . . f 5 4 4 4 4 4 5 5 f . . . 
                    . . . . f f 4 4 4 4 f f . . . . 
                    . . . 5 4 4 f 5 5 f 4 4 . . . . 
                    . . . . 5 4 4 f f 4 4 4 . . . . 
                    . . . . 5 5 f f f f 5 . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . f f . f f . f f . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.lightpi)
                tiles.placeOnTile(mySprite3, 値)
            }
        }
        idou = 4
        pause(200)
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f e e e e e e e f f . 
        f f e f e e e e e e f f 
        f f f e e e e e e e e f 
        f f f e e e e e e f e f 
        f f f f e e e e f f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        . f f f f f f f f f f . 
        . e f f f f f f f f e . 
        e 4 f b b b b b b f 4 e 
        4 d f d d d d d d c d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f e e e e e e e f f . 
        f e e f e e e e e e f f 
        f f f e e e e e e e e f 
        f f e e e e e e e f e f 
        f f f e e e e f f f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        . f f f f f f f f f f . 
        . e f f f f f f f f e . 
        . 4 f b b b b b f e 4 e 
        . 4 f d d d d d e d d 4 
        . e f f f f f f e e 4 . 
        . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f e e e e e e e f f . 
        f f e f e e e e e e f f 
        f f f e e e e e e e e f 
        f f f f e e e e e f e f 
        f f f f f e e e e f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        . f f f f f f f f f f . 
        . e f f f f f f f f e . 
        e 4 e f b b b b b f 4 . 
        4 d d e d d d d d f 4 . 
        . 4 e e f f f f f f e . 
        . . . . . . . f f f . . 
        `],
    100,
    true
    )
})
// 自分の部屋から
scene.onOverlapTile(SpriteKind.Player, assets.tile`kuro-zet1`, function (sprite, location) {
    if (osiire == 1) {
        scene.setBackgroundColor(15)
        mySprite.setPosition(130, 210)
        tiles.setTilemap(tilemap`miti`)
        kamera = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        kamera.setPosition(130, 230)
        kamera.setFlag(SpriteFlag.GhostThroughWalls, true)
        story.startCutscene(function () {
            scene.cameraFollowSprite(kamera)
            story.spriteMoveToLocation(kamera, 130, 0, 70)
            story.setPagePauseLength(1000, 1000)
            story.spriteMoveToLocation(kamera, 130, 260, 80)
            scene.cameraFollowSprite(mySprite)
            kamera.destroy()
            controller.moveSprite(mySprite)
        })
    }
})
// 食事場所and棚を移動させるやつ
scene.onOverlapTile(SpriteKind.Player, assets.tile`mesi-ido`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (100 < mySprite.x) {
            tiles.setTilemap(tilemap`lunch`)
            mySprite.setPosition(75, 200)
            mySprite2.destroy()
            if (light2 == 1) {
                for (let 値 of sprites.allOfKind(SpriteKind.lightpi)) {
                    値.destroy()
                }
                for (let 値 of tiles.getTilesByType(assets.tile`lump`)) {
                    mySprite3 = sprites.create(img`
                        . . . . . . f f f f . . . . . . 
                        . . . . . f 1 1 1 1 f . . . . . 
                        . . . . f 1 1 5 1 1 1 f . . . . 
                        . . . f 1 1 1 5 1 5 1 1 f . . . 
                        . . . f 1 5 4 1 5 5 5 1 f . . . 
                        . . . f 5 4 4 4 4 4 5 5 f . . . 
                        . . . . f f 4 4 4 4 f f . . . . 
                        . . . 5 4 4 f 5 5 f 4 4 . . . . 
                        . . . . 5 4 4 f f 4 4 4 . . . . 
                        . . . . 5 5 f f f f 5 . . . . . 
                        . . . . . f f f f f f . . . . . 
                        . . . . f f . f f . f f . . . . 
                        . . . . . . . f f . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, SpriteKind.lightpi)
                    tiles.placeOnTile(mySprite3, 値)
                }
            }
            idou = 3
            pause(200)
            if (tsukue == 1) {
                tiles.setTileAt(tiles.getTileLocation(7, 8), assets.tile`myTile23`)
            }
        } else if (SensurOsu == 0) {
            game.showLongText("重そうな棚があって通れない", DialogLayout.Bottom)
            game.showLongText("頑張れば押せそうだ", DialogLayout.Bottom)
            pause(500)
        }
    }
    if (pins.P1.analogRead() > 500) {
        if (SensurOsu == 0) {
            story.startCutscene(function () {
                tiles.setWallAt(tiles.getTileLocation(3, 7), false)
                story.spriteMoveToLocation(mySprite2, 43, mySprite2.y, 50)
                tiles.setWallAt(tiles.getTileLocation(2, 7), true)
                SensurOsu += 1
            })
        }
    }
})
let kamera: Sprite = null
let answer = ""
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let Mathar: Sprite = null
let mySprite: Sprite = null
let fire = 0
let machi = 0
let tsukue = 0
let water = 0
let flower = 0
let secret = 0
let light2 = 0
let light1 = 0
let SensurOsu = 0
let lastKey = 0
let osiire = 0
let idou = 0
let ikikaeri = 0
tiles.setTilemap(tilemap`home`)
scene.setBackgroundColor(6)
ikikaeri = 0
idou = 0
osiire = 0
lastKey = 0
SensurOsu = 0
light1 = 0
light2 = 0
secret = 0
flower = 0
water = 0
tsukue = 0
machi = 0
fire = 0
start1()
