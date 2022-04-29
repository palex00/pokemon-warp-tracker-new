var platinum = {
    name: "platinum",
    start_location: "sandgem",
    font: "NDS_Font",
    font_size: "38px",
    locations: {
        // Cities
        sandgem:      {x: 36,  y: 143, w: 8,  h: 8,  name: "Sandgem Town"   },
        jubilife:     {x: 29,  y: 122, w: 15, h: 15, name: "Jubilife City"  },
        oreburgh:     {x: 57,  y: 122, w: 15, h: 15, name: "Oreburgh City"  },
        floaroma:     {x: 36,  y: 94,  w: 8,  h: 15, name: "Floaroma Town"  },
        eterna:       {x: 64,  y: 73,  w: 15, h: 15, name: "Eterna City"    },
        hearthome:    {x: 99,  y: 108, w: 15, h: 15, name: "Hearthome City" },
        solaceon:     {x: 120, y: 101, w: 15, h: 8,  name: "Solaceon Town"  },
        veilstone:    {x: 148, y: 87,  w: 15, h: 15, name: "Veilstone City" },
        pastoria:     {x: 127, y: 136, w: 15, h: 15, name: "Pastoria City"  },
        celestic:     {x: 100, y: 73,  w: 8,  h: 8,  name: "Celestic Town"  },
        canalave:     {x: 8,   y: 115, w: 8,  h: 15, name: "Canalave City"  },
        snowpoint:    {x: 78,  y: 3,   w: 8,  h: 15, name: "Snowpoint City" },
        sunyshore:    {x: 183, y: 122, w: 15, h: 15, name: "Sunyshore City" },
        league:       {x: 183, y: 80,  w: 8,  h: 8,  name: "Pokémon League" },
        fightarea:    {x: 134, y: 52,  w: 15, h: 8,  name: "Fight Area"     },
        survivalarea: {x: 141, y: 31,  w: 8,  h: 8,  name: "Survival Area"  },
        resortarea:   {x: 176, y: 59,  w: 8,  h: 8,  name: "Resort Area"    },
        
        // Routes
        route201:          {x: 22,  y: 143, w: 8,  h: 8,  name: "Route 201"                        },
        oreburghgate_r203: {x: 47,  y: 122, w: 8,  h: 8,  name: "Oreburgh Gate\nRoute 203"         },
        route204:          {x: 36,  y: 111, w: 8,  h: 8,  name: "Route 204"                        },
        windworks:         {x: 50,  y: 101, w: 8,  h: 8,  name: "Valley Windworks"                 },
        ironworks_meadow:  {x: 36,  y: 81,  w: 8,  h: 8,  name: "Fuego Ironworks\nFloaroma Meadow" },
        route206:          {x: 64,  y: 94,  w: 8,  h: 15, name: "Route 206"                        },
        route207_route208: {x: 78,  y: 115, w: 8,  h: 8,  name: "Route 207\nRoute 208"             },
        route209:          {x: 120, y: 115, w: 8,  h: 8,  name: "Route 209"                        },
        route210_route215: {x: 120, y: 80,  w: 15, h: 15, name: "Route 210\nRoute 215"             },
        route214:          {x: 155, y: 108, w: 8,  h: 8,  name: "Route 214"                        },
        valorlakefront:    {x: 148, y: 122, w: 15, h: 15, name: "Valor Lakefront\nRoute 213"       },
        r212_mansion:      {x: 99,  y: 136, w: 15, h: 15, name: "Route 212\nBlacklot's Mansion"    },
        route221:          {x: 49,  y: 157, w: 15, h: 8,  name: "Route 221"                        },
        route211:          {x: 85 , y: 73,  w: 8,  h: 8,  name: "Route 211"                        },
        route216_route217: {x: 64,  y: 18,  w: 8,  h: 15, name: "Route 216\nRoute 217"             },
        route222:          {x: 170, y: 129, w: 8,  h: 8,  name: "Route 222"                        },
        route225:          {x: 134, y: 41,  w: 8,  h: 8,  name: "Route 225"                        },
        route226_route227: {x: 162, y: 24,  w: 8,  h: 15, name: "Route 226\nRoute 227"             },
        route228:          {x: 169, y: 45,  w: 8,  h: 8,  name: "Route 228"                        },
        
        // Important locations
        jubilifetv_poketch: {x: 24,  y: 111, w: 8, h: 8,  name: "Jubilife TV\nPokétch Company" },
        eternaforest_r205:  {x: 50,  y: 73,  w: 8, h: 8,  name: "Eterna Forest\nRoute 205"     },
        eternagalactic:     {x: 64,  y: 60,  w: 8, h: 8,  name: "Galactic Eterna"              },
        coronet:            {x: 78,  y: 94,  w: 8, h: 15, name: "Mt. Coronet"                  },
        solaceonruins:      {x: 138, y: 103, w: 8, h: 8,  name: "Solaceon Ruins"               },
        departmentstore:    {x: 145, y: 74,  w: 8, h: 8,  name: "Department Store"             },
        galactichq:         {x: 158, y: 74,  w: 8, h: 8,  name: "Team Galactic HQ"             },
        coronetsummit:      {x: 85,  y: 52,  w: 8, h: 15, name: "Mt. Coronet Summit"           },
        ironisland:         {x: 22,  y: 66,  w: 8, h: 8,  name: "Iron Island"                  },
        victoryroad:        {x: 183, y: 92,  w: 8, h: 8,  name: "Victory Road"                 },
    },

    // Undefined fields:
    // - link_type:     "warp"        / "mark"
    // - link:          warp_name     / mark_name
    // - link_location: location_name / <garbage>
    warps: {
        // Cities
        sandgem: {
            center:     {x: 270, y: 117                           },
            mart:       {x: 430, y: 113                           },
            house:      {x: 109, y: 262                           },
            profhouse:  {x: 256, y: 264                           },
            center_up:  {x: 398, y: 358, name: "Sandgem (Center)" },
            center_mid: {x: 486, y: 392, name: "Sandgem (Center)" },
            center_bot: {x: 545, y: 358, name: "Sandgem (Center)" },
        },
        jubilife: {
            poketchleft:    {x: 165, y: 118                            },
			poketchright:   {x: 216, y: 154                            },
			jubilifetv:     {x: 444, y: 113                            },
			righttv:        {x: 635, y: 155                            },
			mart:           {x: 623, y: 256                            },
			center:         {x: 637, y: 389                            },
			trade:          {x: 263, y: 408                            },
			tradebot:       {x: 157, y: 508                            },
			house:          {x: 479, y: 463                            },
			gate:           {x: 69,  y: 207                            },
			trade_entrance: {x: 104, y: 369, name: "Jubilife (Trade)"  },
			trade_green:    {x: 128, y: 271, name: "Jubilife (Trade)"  },
			trade_red:      {x: 162, y: 319, name: "Jubilife (Trade)"  },
			center_up:      {x: 579, y: 535, name: "Jubilife (Center)" },
			center_mid:     {x: 681, y: 576, name: "Jubilife (Center)" },
			center_bot:     {x: 722, y: 535, name: "Jubilife (Center)" },
        },
        oreburgh: {
            entrance:     {x: 90,  y: 108                             },
			top1:         {x: 248, y: 66                              },
			top2:         {x: 359, y: 100                             },
			mart:         {x: 474, y: 66                              },
			museum:       {x: 792, y: 78                              },
			center:       {x: 760, y: 197                             },
			rightcenter:  {x: 903, y: 296                             },
            leftcenter:   {x: 599, y: 143                             },
			gym:          {x: 422, y: 170                             },
			leftgym:      {x: 279, y: 205                             },
			minehouse:    {x: 824, y: 403                             },
			mineentrance: {x: 745, y: 682                             },
			center_up:    {x: 284, y: 461, name: "Orenburgh (Center)" },
			center_mid:   {x: 381, y: 510, name: "Orenburgh (Center)" },
			center_bot:   {x: 478, y: 466, name: "Orenburgh (Center)" },
        },
        floaroma: {
			meadows:     {x: 146, y: 66                             },
			leftflower:  {x: 281, y: 191                            },
			flowershop:  {x: 425, y: 144                            },
			mart:        {x: 490, y: 226                            },
			rightcenter: {x: 488, y: 334                            },
			center:      {x: 362, y: 334                            },
			center_up:   {x: 55,  y: 320, name: "Floaroma (Center)" },
			center_mid:  {x: 110, y: 360, name: "Floaroma (Center)" },
			center_bot:  {x: 207, y: 320, name: "Floaroma (Center)" },
        },
        eterna: {
			galactic:    {x: 151, y: 45                           },
			leftstatue:  {x: 326, y: 76                           },
			botstatue:   {x: 502, y: 265                          },
			center:      {x: 153, y: 180                          },
			underground: {x: 232, y: 231                          },
			bikeshop:    {x: 232, y: 288                          },
			mart:        {x: 215, y: 401                          },
			rightmart:   {x: 313, y: 467                          },
			gym:         {x: 264, y: 563                          },
			leftgym:     {x: 42,  y: 572                          },
			route:       {x: 143, y: 666                          },
			center_up:   {x: 418, y: 506, name: "Eterna (Center)" },
			center_mid:  {x: 513, y: 548, name: "Eterna (Center)" },
			center_bot:  {x: 608, y: 502, name: "Eterna (Center)" },
        },
        hearthome: {
			routeleft:   {x: 88,  y: 641                            },
			routemid:    {x: 175, y: 714                            },
			routeright:  {x: 910, y: 641                            },
			church:      {x: 198, y: 420                            },
			poffin:      {x: 390, y: 420                            },
			mart:        {x: 479, y: 495                            },
			fanclub:     {x: 648, y: 420                            },
			hotel:       {x: 743, y: 495                            },
			center:      {x: 276, y: 271                            },
			bebe:        {x: 363, y: 325                            },
			contesthall: {x: 503, y: 250                            },
			righthall:   {x: 616, y: 285                            },
			gym:         {x: 826, y: 272                            },
			squareright: {x: 846, y: 70                             },
			squareleft:  {x: 173, y: 70                             },
			center_up:   {x: 415, y: 108, name: "Hearthome (Center)"},
			center_mid:  {x: 502, y: 148, name: "Hearthome (Center)"},
			center_bot:  {x: 596, y: 108, name: "Hearthome (Center)"},
        },
        solaceon: {
			daycare:     {x: 175, y: 48                             },
			rightcare:   {x: 374, y: 59                             },
			right1:      {x: 598, y: 83                             },
			right2:      {x: 623, y: 185                            },
			center:      {x: 379, y: 181                            },
			rightcenter: {x: 468, y: 233                            },
			ruins:       {x: 848, y: 227                            },
			mart:        {x: 465, y: 296                            },
			center_up:   {x: 86,  y: 326, name: "Solaceon (Center)" },
			center_mid:  {x: 112, y: 394, name: "Solaceon (Center)" },
			center_bot:  {x: 182, y: 361, name: "Solaceon (Center)" },
        },
        veilstone: {
			route215:      {x: 126, y: 273                             },
			route214:      {x: 753, y: 751                             },
			warehouse:     {x: 469, y: 154                             },
			department:    {x: 469, y: 310                             },
			galacticleft:  {x: 635, y: 100                             },
			galactigmid:   {x: 725, y: 165                             },
			galacticright: {x: 815, y: 100                             },
			centerupleft:  {x: 631, y: 275                             },
			centerupright: {x: 740, y: 310                             },
			center:        {x: 726, y: 411                             },
			rightcasino:   {x: 713, y: 550                             },
			casino:        {x: 552, y: 610                             },
			leftcasino1:   {x: 391, y: 550                             },
			leftcasino2:   {x: 295, y: 610                             },
			gym:           {x: 202, y: 397                             },
			center_up:     {x: 87,  y: 110, name: "Veilstone (Center)" },
			center_mid:    {x: 160, y: 147, name: "Veilstone (Center)" },
			center_bot:    {x: 262, y: 110, name: "Veilstone (Center)" },
        },
        pastoria: {
            route:      {x: 900, y: 187                            },
			leftroute:  {x: 750, y: 255                            },
			center:     {x: 370, y: 199                            },
			rightgym:   {x: 368, y: 310                            },
			gym:        {x: 193, y: 354                            },
			upmart:     {x: 390, y: 500                            },
			rightmart:  {x: 542, y: 450                            },
			mart:       {x: 390, y: 559                            },
			leftmart:   {x: 191, y: 554                            },
			center_up:  {x: 653, y: 620, name: "Pastoria (Center)" },
			center_mid: {x: 750, y: 663, name: "Pastoria (Center)" },
			center_bot: {x: 847, y: 620, name: "Pastoria (Center)" },


        },
        celestic: {
            topleft:     {x: 70,  y: 80                             },
			topmid:      {x: 246, y: 80                             },
			topright:    {x: 407, y: 80                             },
			cave:        {x: 245, y: 180                            },
			botleft:     {x: 101, y: 365                            },
			center:      {x: 390, y: 365                            },
			center_up:   {x: 541, y: 110, name: "Celestic (Center)" },
			center_mid:  {x: 638, y: 144, name: "Celestic (Center)" },
			center_bot:  {x: 686, y: 110, name: "Celestic (Center)" },
        },
        canalave: {
            route:      {x: 470, y: 520                            },
			left1:      {x: 75,  y: 96                             },
			gym:        {x: 100, y: 214                            },
			left2:      {x: 85,  y: 304                            },
			left3:      {x: 100, y: 378                            },
			right1:     {x: 335, y: 49                             },
			center:     {x: 335, y: 128                            },
			right2:     {x: 280, y: 229                            },
			mart:       {x: 280, y: 305                            },
			right3:     {x: 290, y: 381                            },
			center_up:  {x: 421, y: 350, name: "Canalave (Center)" },
			center_mid: {x: 509, y: 400, name: "Canalave (Center)" },
			center_bot: {x: 605, y: 350, name: "Canalave (Center)" },
        }, 
        snowpoint: {
            mart:       {x: 31,  y: 530                             },
			center:     {x: 440, y: 530                             },
			gym:        {x: 246, y: 396                             },
			left:       {x: 27,  y: 230                             },
			right:      {x: 447, y: 230                             },
			temple:     {x: 246, y: 85                              },
			center_up:  {x: 407, y: 430, name: "Snowpoint (Center)" },
			center_mid: {x: 493, y: 466, name: "Snowpoint (Center)" },
			center_bot: {x: 584, y: 430, name: "Snowpoint (Center)" },
        },
        sunyshore: {
			gym:        {x: 213, y: 91                              },
			topleft:    {x: 694, y: 47                              },
			topright:   {x: 828, y: 106                             },
			market:     {x: 287, y: 312                             },
			leftmart:   {x: 214, y: 393                             },
			mart:       {x: 354, y: 444                             },
			center:     {x: 458, y: 595                             },
			gate:       {x: 90,  y: 693                             },
			lighthouse: {x: 869, y: 623                             },
			toplight:   {x: 903, y: 400                             },
			center_up:  {x: 780, y: 250, name: "Sunyshore (Center)" },
			center_mid: {x: 881, y: 340, name: "Sunyshore (Center)" },
			center_bot: {x: 912, y: 290, name: "Sunyshore (Center)" },
        },
        league: {
            entrance:    {x: 313, y: 110, name: "Victory Entrance"          },
			center:      {x: 165, y: 110, name: "Victory Entrance"          },
			center_up:   {x: 75,  y: 270, name: "Victory Entrance (Center)" },
			center_mid:  {x: 105, y: 310, name: "Victory Entrance (Center)" },
			center_bot:  {x: 225, y: 270, name: "Victory Entrance (Center)" },
			league_door: {x: 682, y: 252                                    },
			league_e4:   {x: 682, y: 115                                    },
			league_top:  {x: 546, y: 220                                    },
			league_bot:  {x: 600, y: 290                                    },
        },
        fightarea: {
            gate:       {x: 55,  y: 64                               },
			center:     {x: 310, y: 146                              },
			mart:       {x: 526, y: 145                              },
			up:         {x: 433, y: 254                              },
			bot:        {x: 431, y: 324                              },
			center_up:  {x: 56,  y: 370, name: "Fight Area (Center)" },
			center_mid: {x: 140, y: 415, name: "Fight Area (Center)" },
			center_bot: {x: 236, y: 370, name: "Fight Area (Center)" },
        },
        survivalarea: {
			up:         {x: 285, y: 68,  name: "Survival Area (Top)"    },
			bar:        {x: 220, y: 260                                 },
			center:     {x: 334, y: 310                                 },
			mart:       {x: 409, y: 260                                 },
			bot:        {x: 271, y: 432                                 },
			center_up:  {x: 383, y: 115, name: "Survival Area (Center)" },
			center_mid: {x: 477, y: 171, name: "Survival Area (Center)" },
			center_bot: {x: 536, y: 115, name: "Survival Area (Center)" },
        },
        resortarea: {
			house:      {x: 168, y: 119                               },
			center:     {x: 70,  y: 319                               },
			center_up:  {x: 544, y: 110, name: "Resort Area (Center)" },
			center_mid: {x: 641, y: 182, name: "Resort Area (Center)" },
			center_bot: {x: 686, y: 110, name: "Resort Area (Center)" },

        },

        // Routes
        route201: {
			lake: {x: 128, y: 63},
        },
        oreburghgate_r203: {
            route203:   {x: 100, y: 160, name: "Route 203"     },
			gate_left:  {x: 191, y: 300, name: "Oreburgh Gate" },
			gate_top:   {x: 468, y: 88,  name: "Oreburgh Gate" },
			gate_right: {x: 550, y: 300, name: "Oreburgh Gate" },
        },
        route204: {
			bot: {x: 56,  y: 162, name: "Route 204 (Jubilife)" },
			top: {x: 200, y: 52,  name: "Route 204 (Floaroma)" },
        },
        windworks: {
			house: {x: 311, y: 187 },
        },
        ironworks_meadow: {
			works_house:     {x: 156, y: 98,  name: "Ironworks (Building)"  },
			works_meadow:    {x: 336, y: 386, name: "Ironworks (Meadow)"    },
			meadow_exit:     {x: 106, y: 443, name: "Floaroma Meadow (Top)" },
			meadow_entrance: {x: 107, y: 574, name: "Floaroma Meadow (Bot)" },
			meadow_house:    {x: 306, y: 598, name: "Floaroma Meadow (Bot)" },
        },
        route206: {
            exit:      {x: 194, y: 341 },
			caveleft:  {x: 189, y: 111 },
			caveright: {x: 319, y: 44  },
        },
        route207_route208: {
			r207:       {x: 178, y: 150, name: "Route 207" },
			r208_cave:  {x: 314, y: 45,  name: "Route 208" },
			r208_house: {x: 562, y: 60,  name: "Route 208" },
            r208_city:  {x: 605, y: 200, name: "Route 208" },
        },
        route209: {
            entrance: {x: 37,  y: 95  },
			tower:    {x: 239, y: 166 },
        },
        route210_route215: {
			r210_cafe:    {x: 132, y: 239, name: "Route 210 (Café)"    },
			r210_grandma: {x: 122, y: 67,  name: "Route 210 (Grandma)" },
			r215:         {x: 338, y: 184, name: "Route 215"           },
        },
        route214: {
			top:    {x: 113, y: 62  },
			cave:   {x: 87,  y: 210 },
			forest: {x: 377, y: 142 },
        },
        valorlakefront: {
			r213_city:          {x: 104, y: 117, name: "Route 213"       },
			r213_hotel:         {x: 298, y: 41,  name: "Route 213"       },
			r213_house:         {x: 264, y: 227, name: "Route 213"       },
			lakefront_topleft:  {x: 70,  y: 356, name: "Valor Lakefront" },
			lakefront_topmid:   {x: 324, y: 371, name: "Valor Lakefront" },
			lakefront_topright: {x: 466, y: 260, name: "Valor Lakefront" },
			lakefront_midleft:  {x: 246, y: 540, name: "Valor Lakefront" },
			lakefront_midtop:   {x: 420, y: 540, name: "Valor Lakefront" },
			lakefront_midbot:   {x: 387, y: 620, name: "Valor Lakefront" },
			lakefront_hotel:    {x: 326, y: 686, name: "Valor Lakefront" },
			lakefront_lake:     {x: 527, y: 57,  name: "Valor Lakefront" },
        },
        r212_mansion: {
			r212_city:     {x: 275, y: 315, name: "Route 212 (Garden)" },
			r212_mansion:  {x: 531, y: 348, name: "Route 212 (Garden)" },
			r212_house:    {x: 525, y: 529, name: "Route 212 (Marsh)"  },
			mansion_left1: {x: 85,  y: 45,  name: "Blacklot's Mansion" },
			mansion_left2: {x: 214, y: 90,  name: "Blacklot's Mansion" },
			mansion_left3: {x: 346, y: 45,  name: "Blacklot's Mansion" },
			mansion_top:   {x: 534, y: 10,  name: "Blacklot's Mansion" },
			mansion_right: {x: 777, y: 40,  name: "Blacklot's Mansion" },
			mansion_door:  {x: 532, y: 190, name: "Blacklot's Mansion" },

        },
        route221: {
			house:   {x: 124, y: 107 },
			palpark: {x: 399, y: 82  },
        },
        route211: {
			left:  {x: 71,  y: 63, name: "Route 211 (Eterna)"   },
			right: {x: 245, y: 63, name: "Route 211 (Celestic)" },
        },
        route216_route217: {
			r216_cave:  {x: 277, y: 381, name: "Route 216"        },
			r216_house: {x: 67,  y: 357, name: "Route 216"        },
			r217_right: {x: 262, y: 230, name: "Route 217"        },
			r217_left:  {x: 73,  y: 230, name: "Route 217"        },
			r217_lake:  {x: 134, y: 92,  name: "Route 217 (Lake)" },

        },
        route222: {
			left:  {x: 70,  y: 70 },
			right: {x: 169, y: 70 },
			city:  {x: 348, y: 90 },
        },
        route225: {
			entrance: {x: 238, y: 127 },
			house:    {x: 67,  y: 78  },
        },
        route226_route227: {
			r226_house: {x: 109, y: 240, name: "Route 226 (Meister)" },
			r226_gate:  {x: 282, y: 267, name: "Route 226 (Gate)"    },
			r227_house: {x: 273, y: 82,  name: "Route 227 (Heal)"    },
			r227_stark: {x: 123, y: 62,  name: "Route 227 (Stark)"   },
        },
        route228: {
			gate:  {x: 104, y: 86  },
			cave:  {x: 290, y: 86  },
			left:  {x: 71,  y: 228 },
			right: {x: 290, y: 244 },
        },

        // Important locations
        jubilifetv_poketch: {
			poketch_left:   {x: 233, y: 635, name: "Pokétch Company" },
			poketch_right:  {x: 444, y: 635, name: "Pokétch Company" },
			poketch_stairs: {x: 286, y: 520, name: "Pokétch Company" },
			tv_f1_entrance: {x: 142, y: 443, name: "Jubilife TV"     },
			tv_f1_stairs:   {x: 220, y: 287, name: "Jubilife TV"     },
			tv_f2_door:     {x: 44,  y: 15,  name: "Jubilife TV"     },
            tv_f2_down:     {x: 123, y: 70,  name: "Jubilife TV"     },
			tv_f2_up:       {x: 229, y: 15,  name: "Jubilife TV"     },
			tv_f3_left:     {x: 371, y: 300, name: "Jubilife TV"     },
			tv_f3_right:    {x: 420, y: 260, name: "Jubilife TV"     },
			tv_f3_down:     {x: 475, y: 330, name: "Jubilife TV"     },
			tv_f3_up:       {x: 570, y: 260, name: "Jubilife TV"     },
			tv_f4_stairs:   {x: 475, y: 90,  name: "Jubilife TV"     },
        },
        eternaforest_r205: {
			r205_house:            {x: 233, y: 625, name: "Route 205 (Floaroma)"        },
			r205_entrance:         {x: 107, y: 513, name: "Route 205 (Floaroma)"        },
			r205_exit:             {x: 573, y: 525, name: "Route 205 (Eterna)"          },
			forest_entrance:       {x: 143, y: 372, name: "Eterna Forest (Entrance)"    },
			forest_chateau:        {x: 129, y: 206, name: "Eterna Forest (Chateau)" },
			forest_exit:           {x: 402, y: 525, name: "Eterna Forest (Exit)"        },
			chateau_hub_entrance:  {x: 465, y: 318, name: "Old Chateau (Hub)"           },
			chateau_hub_left:      {x: 338, y: 185, name: "Old Chateau (Hub)"           },
			chateau_hub_right:     {x: 599, y: 185, name: "Old Chateau (Hub)"           },
			chateau_hub_middle:    {x: 465, y: 218, name: "Old Chateau (Hub)"           },
			chateau_hub_top:       {x: 465, y: 143, name: "Old Chateau (Hub)"           },
			chateau_line_entrance: {x: 305, y: 100, name: "Old Chateau (Corridor)"      },
			chateau_line_door1:    {x: 67,  y: 55,  name: "Old Chateau (Corridor)"      },
			chateau_line_door2:    {x: 178, y: 20,  name: "Old Chateau (Corridor)"      },
			chateau_line_door3:    {x: 305, y: 55,  name: "Old Chateau (Corridor)"      },
			chateau_line_door4:    {x: 436, y: 20,  name: "Old Chateau (Corridor)"      },
			chateau_line_door5:    {x: 546, y: 55,  name: "Old Chateau (Corridor)"      },
        },
        eternagalactic: {
			f1_entrance: {x: 170, y: 364, name: "Galactic Eterna (F1)" },
			f1_door:     {x: 70,  y: 227, name: "Galactic Eterna (F1)" },
			f1_stairs1:  {x: 220, y: 230, name: "Galactic Eterna (F1)" },
			f1_stairs2:  {x: 317, y: 265, name: "Galactic Eterna (F1)" },
			f2_stairs1:  {x: 132, y: 70,  name: "Galactic Eterna (F2)" },
			f2_stairs2:  {x: 222, y: 33,  name: "Galactic Eterna (F2)" },
			f2_stairs3:  {x: 331, y: 70,  name: "Galactic Eterna (F2)" },
			f3_stairs1:  {x: 420, y: 290, name: "Galactic Eterna (F3)" },
			f3_stairs2:  {x: 580, y: 236, name: "Galactic Eterna (F3)" },
			f3_stairs3:  {x: 670, y: 290, name: "Galactic Eterna (F3)" },
        },
        coronet: {
			f1_entrance: {x: 62,  y: 400, name: "Mt. Coronet (F1)"    },
			f1_exit:     {x: 291, y: 490, name: "Mt. Coronet (F1)"    },
			f1_stairs:   {x: 279, y: 340, name: "Mt. Coronet (F1)"    },

			f2_left:     {x: 62,  y: 270, name: "Mt. Coronet (F2)"    },
			f2_top:      {x: 62,  y: 50,  name: "Mt. Coronet (F2)"    },
			f2_right:    {x: 225, y: 190, name: "Mt. Coronet (F2)"    },

			f3_entrance: {x: 380, y: 286, name: "Mt. Coronet (∩)"     },
			f3_left:     {x: 468, y: 238, name: "Mt. Coronet (∩)"     },
			f3_right:    {x: 550, y: 286, name: "Mt. Coronet (∩)"     },

			f4_left:     {x: 72,  y: 776, name: "Mt. Coronet (Water)" },
			f4_right:    {x: 350, y: 769, name: "Mt. Coronet (Water)" },
			f4_top:      {x: 407, y: 630, name: "Mt. Coronet (Water)" },
			f4_water:    {x: 174, y: 595, name: "Mt. Coronet (Water)" },

			upf1_bot:    {x: 735, y: 730, name: "Mt. Coronet (Rocks)" },
			upf1_left:   {x: 450, y: 440, name: "Mt. Coronet (Rocks)" },
			upf1_right:  {x: 840, y: 360, name: "Mt. Coronet (Rocks)" },
			upf1_top:    {x: 587, y: 80,  name: "Mt. Coronet (Rocks)" },

			upf12_left:  {x: 317, y: 50,  name: "Mt. Coronet (⊃)"     },
			upf12_top:   {x: 446, y: 15,  name: "Mt. Coronet (⊃)"     },
			upf12_bot:   {x: 372, y: 150, name: "Mt. Coronet (⊃)"     },
        },
        solaceonruins: {
			entrance_door:     {x: 92,  y: 190, name: "Solaceon Ruins (Entrance)" },
			entrance_botright: {x: 156, y: 135, name: "Solaceon Ruins (Entrance)" },
			entrance_topleft:  {x: 54,  y: 63,  name: "Solaceon Ruins (Entrance)" },
			entrance_topright: {x: 156, y: 63,  name: "Solaceon Ruins (Entrance)" },

			bf1_botleft:       {x: 235, y: 160, name: "Solaceon Ruins (Hiker)"    },
			bf1_botright:      {x: 350, y: 160, name: "Solaceon Ruins (Hiker)"    },
			bf1_topleft:       {x: 235, y: 35,  name: "Solaceon Ruins (Hiker)"    },
			bf1_topright:      {x: 350, y: 35,  name: "Solaceon Ruins (Hiker)"    },

			bf2_botleft:       {x: 427, y: 135, name: "Solaceon Ruins (Karl)"     },
			bf2_botright:      {x: 532, y: 135, name: "Solaceon Ruins (Karl)"     },
			bf2_topleft:       {x: 427, y: 63,  name: "Solaceon Ruins (Karl)"     },
			bf2_topright:      {x: 532, y: 63,  name: "Solaceon Ruins (Karl)"     },

			bf3_botleft:       {x: 54,  y: 320, name: "Solaceon Ruins (⇓ stairs)" },
			bf3_botright:      {x: 156, y: 320, name: "Solaceon Ruins (⇓ stairs)" },
			bf3_topleft:       {x: 54,  y: 260, name: "Solaceon Ruins (⇓ stairs)" },
			bf3_topright:      {x: 156, y: 260, name: "Solaceon Ruins (⇓ stairs)" },

			bf32_botleft:      {x: 235, y: 350, name: "Solaceon Ruins (3 stairs)" },
			bf32_botright:     {x: 350, y: 350, name: "Solaceon Ruins (3 stairs)" },
			bf32_topleft:      {x: 235, y: 230, name: "Solaceon Ruins (3 stairs)" },

			bf4_botleft:       {x: 427, y: 320, name: "Solaceon Ruins (⇑ stairs)" },
			bf4_botright:      {x: 532, y: 320, name: "Solaceon Ruins (⇑ stairs)" },
			bf4_topleft:       {x: 427, y: 260, name: "Solaceon Ruins (⇑ stairs)" },
			bf4_topright:      {x: 532, y: 260, name: "Solaceon Ruins (⇑ stairs)" },
        },
        departmentstore: {
            bf1_stairs:  {x: 169, y: 445 },

			f1_left:     {x: 140, y: 260 },
			f1_right:    {x: 260, y: 310 },
			f1_entrance: {x: 204, y: 350 },

			f2_left:     {x: 140, y: 80  },
			f2_right:    {x: 260, y: 124 },

			f3_left:     {x: 473, y: 445 },
			f3_right:    {x: 600, y: 495 },

			f4_left:     {x: 450, y: 260 },
			f4_right:    {x: 600, y: 310 },

			f5_stairs:   {x: 450, y: 80  },
        },
        galactichq: {
            bf2_left:   {x: 88,  y: 163, name: "Galactic HQ (Basement)"  },
			bf2_bot:    {x: 228, y: 199, name: "Galactic HQ (Basement)"  },
			bf2_top:    {x: 150, y: 60,  name: "Galactic HQ (Basement)"  },

			f1_left:    {x: 414, y: 256, name: "Galactic HQ (Entrance)"  },
			f1_top:     {x: 570, y: 195, name: "Galactic HQ (Entrance)"  },
			f1_right:   {x: 751, y: 262, name: "Galactic HQ (Entrance)"  },

			f12_left:   {x: 296, y: 9,   name: "Galactic HQ (\∪)"        },
			f12_right:  {x: 338, y: 79,  name: "Galactic HQ (\∪)"        },
			f12_stairs: {x: 480, y: 45,  name: "Galactic HQ (\∪)"        },

			f2_stairs:  {x: 88,  y: 489, name: "Galactic HQ (Room)"      },
			f2_tv:      {x: 368, y: 458, name: "Galactic HQ (Room)"      },
			f2_bot:     {x: 623, y: 570, name: "Galactic HQ (Room)"      },
			f2_top:     {x: 622, y: 424, name: "Galactic HQ (Room)"      },

			f22_tele:   {x: 128, y: 390, name: "Galactic HQ (Small)"     },
			f22_left:   {x: 207, y: 330, name: "Galactic HQ (Small)"     },
			f22_right:  {x: 322, y: 390, name: "Galactic HQ (Small)"     },

			f3_left:    {x: 629, y: 765, name: "Galactic HQ (Teleports)" },
			f3_mid:     {x: 655, y: 675, name: "Galactic HQ (Teleports)" },
			f3_right:   {x: 733, y: 725, name: "Galactic HQ (Teleports)" },
			f3_stairs:  {x: 910, y: 640, name: "Galactic HQ (Teleports)" },

			f4_right:   {x: 910, y: 370, name: "Galactic HQ (Office)"    },
			f4_left:    {x: 770, y: 325, name: "Galactic HQ (Office)"    },
			f4_green:   {x: 910, y: 500, name: "Galactic HQ (Office)"    },
			f4_stairs:  {x: 678, y: 526, name: "Galactic HQ (Office)"    },
        },
        coronetsummit: {
			bot:      {x: 96,  y: 656 },
			botleft:  {x: 80,  y: 435 },
			botright: {x: 446, y: 455 },
			topleft:  {x: 469, y: 273 },
			topright: {x: 547, y: 182 },
			top:      {x: 133, y: 62  },
        },
        ironisland: {
			exterior_entrance: {x: 243, y: 0,  name: "Iron Island (Exterior)"    },
			exterior_house:    {x: 146, y: 167, name: "Iron Island (Exterior)"    },
			exterior_ledge:    {x: 88,  y: 95,  name: "Iron Island (Ext. Ledge)"  },
			f1_entrance:       {x: 419, y: 143, name: "Iron Island (Small)"       },
			f1_left:           {x: 330, y: 90,  name: "Iron Island (Small)"       },
			f1_right:          {x: 505, y: 90,  name: "Iron Island (Small)"       },
			bf2_top:           {x: 686, y: 20,  name: "Iron Island (Summer)"      },
			bf2_left:          {x: 712, y: 385, name: "Iron Island (Summer)"      },
			bf2_right:         {x: 910, y: 385, name: "Iron Island (Summer)"      },
			bf3_left:          {x: 333, y: 260, name: "Iron Island (Trainerless)" },
			bf3_right:         {x: 545, y: 212, name: "Iron Island (Trainerless)" },
			bf3_bot:           {x: 566, y: 454, name: "Iron Island (Trainerless)" },

        },
        victoryroad: {
			f1_entrance: {x: 262, y: 729, name: "Victory Road (Main)"  },
			f1_left1:    {x: 88,  y: 340, name: "Victory Road (Main)"  },
			f1_left2:    {x: 88,  y: 490, name: "Victory Road (Main)"  },
			f1_left3:    {x: 132, y: 620, name: "Victory Road (Main)"  },
			f1_right1:   {x: 638, y: 335, name: "Victory Road (Main)"  },
			f1_right2:   {x: 712, y: 460, name: "Victory Road (Main)"  },
			f1_right3:   {x: 658, y: 590, name: "Victory Road (Main)"  },
			f1_exit:     {x: 572, y: 90,  name: "Victory Road (Main)"  },
			bf1_bot:     {x: 910, y: 380, name: "Victory Road (Water)" },
			bf1_mid:     {x: 910, y: 300, name: "Victory Road (Water)" },
			bf1_top:     {x: 910, y: 90,  name: "Victory Road (Water)" },
        },
        
    },

    // Numbers are meant to be to check if exist any marks/progress in the maps
    // if null, then we don't do tracking
    // if undefined, then we don't draw the mark
    marks: [
        [["unknown", 0], ["dead_end", null], ["event",     0], ["center", 0], ["mart",     0], ["one_way",  null]],
        [["normal",  0], ["fighting",    0], ["flying",    0], ["poison", 0], ["ground",   0], ["rock",        0], ["bug",         0], ["ghost",       0], ["fairy",     0]],
        [["steel",   0], ["fire",        0], ["water",     0], ["grass",  0], ["electric", 0], ["psychic",     0], ["ice",         0], ["dragon",      0], ["dark",      0]],
        [["1",       0], ["2",           0], ["3",         0], ["4",      0], ["5",        0], ["6",           0], ["7",           0], ["8",           0]],
        [["p_bush",  0], ["p_surf",      0], ["p_boulder", 0], ["p_fog",  0], ["p_rock",   0], ["p_waterfall", 0], ["p_rockywall", 0], ["bike_needed", 0], ["p_trainer", 0]],
    ],
    progress: [
        [["coal_badge", 0], ["forest_badge", 0], ["cobble_badge", 0], ["fen_badge",   0], ["relic_badge", 0], ["mine_badge",   0], ["icicle_badge", 0], ["beacon_badge", 0]],
        [["p_aaron",    0], ["p_bertha",     0], ["p_flint",      0], ["p_lucian",    0], ["p_cynthia",   0]],
        [["hm_cut",     0], ["hm_fly",       0], ["hm_surf",      0], ["hm_strength", 0], ["hm_defog",    0], ["hm_rocksmash", 0], ["hm_waterfall", 0], ["hm_rockclimb", 0]],
        [["bike",       0], ["works_key",    0], ["galactic_key", 0]],
    ],
};