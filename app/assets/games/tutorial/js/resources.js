//game resources
game.resources = [
    /**
     * Graphics.
     */
    // our level tileset
    {name: "area01_level_tiles", type:"image", src: "assets/tutorial/data/img/map/area01_level_tiles.png"},
    // the main player spritesheet
    {name: "gripe_run_right", type:"image", src: "assets/tutorial/data/img/sprite/gripe_run_right.png"},
    // the parallax background
    {name: "area01_bkg0",         type:"image", src: "assets/tutorial/data/img/area01_bkg0.png"},
    {name: "area01_bkg1",         type:"image", src: "assets/tutorial/data/img/area01_bkg1.png"},
    // the spinning coin spritesheet
    {name: "spinning_coin_gold",  type:"image", src: "assets/tutorial/data/img/sprite/spinning_coin_gold.png"},
    // our enemty entity
    {name: "wheelie_right",       type:"image", src: "assets/tutorial/data/img/sprite/wheelie_right.png"},
    // game font
    {name: "32x32_font",          type:"image", src: "assets/tutorial/data/img/font/32x32_font.png"},
    // title screen
    {name: "title_screen",        type:"image", src: "assets/tutorial/data/img/gui/title_screen.png"},
    /* 
     * Maps. 
     */
    {name: "area01", type: "tmx", src: "assets/tutorial/data/map/area01.tmx"},
    {name: "area02", type: "tmx", src: "assets/tutorial/data/map/area02.tmx"},

    /* 
     * Background music. 
     */
    {name: "dst-inertexponent", type: "audio", src: "assets/tutorial/data/bgm/", channel : 1},
     
    /* 
     * Sound effects. 
     */
    {name: "cling", type: "audio", src: "assets/tutorial/data/sfx/", channel : 2},
    {name: "stomp", type: "audio", src: "assets/tutorial/data/sfx/", channel : 1},
    {name: "jump",  type: "audio", src: "assets/tutorial/data/sfx/", channel : 1}
];

