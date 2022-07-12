var white2 = {
	debug: false,
    name: "white2",
    folder: "white2",
    start_location: "aspertia",
    font: "NDS_Font",
    font_size: "38px",

    // Config texts
	config_name: "White 2",
	config_randomizer_author: "Pointcrow",
	config_randomizer_link: "https://www.reddit.com/r/pokemon/comments/qel5h4/i_created_a_mod_that_randomizes_the_entire_map_of/",
	config_tracker_author: "Seb Hammes", 
	config_tracker_link: "https://twitter.com/RealSeb95",

	// Tracker information
    locations: {
        // Cities
        accumula_r2:		{x: 306, y: 160, w: 17, h: 8 ,  name: "Accumula Town\nRoute 2"  },
		anville:			{x: 15 , y: 32 , w: 8 , h: 8 ,  name: "Anville Town"   			},
		aspertia:			{x: 10 , y: 180, w: 8 , h: 15,  name: "Aspertia City"  			},
		castelianorth:		{x: 173, y: 169, w: 16, h: 8 ,  name: "Castelia City (North)"   },
		casteliawest:		{x: 173, y: 177, w: 8 , h: 15,  name: "Castelia City (West)"   	},
		casteliaeast:		{x: 181, y: 177, w: 8 , h: 15,  name: "Castelia City (East)"   	},
		driftveil:			{x: 89 , y: 109, w: 15, h: 15,  name: "Driftveil City" 			},
		floccesy_r19:		{x: 23 , y: 162, w: 17, h: 15,  name: "Floccesy Town\nRoute 19"	},
		humilau_r21:		{x: 330, y: 54 , w: 8 , h: 15,  name: "Humilau City\nRoute 21" 	},
		icirrus_r8:			{x: 98 , y: 43 , w: 15, h: 15,  name: "Icirrus City\nRoute 8"   },
		lacunosa_r12:		{x: 262, y: 50 , w: 17, h: 8 ,  name: "Lacunosa Town\nRoute 12" },
		lentimas:			{x: 237, y: 87 , w: 8 , h: 8 ,  name: "Lentimas Town"  			},
		mistralton:			{x: 23 , y: 76 , w: 15, h: 15,  name: "Mistralton City"  		},
		nacrene:			{x: 264, y: 150, w: 15, h: 8 ,  name: "Nacrene City"   			},
		nimbasa1:			{x: 173, y: 116, w: 8 , h: 16,  name: "Nimbasa City (Left)"   	},
		nimbasa2:			{x: 181, y: 116, w: 8 , h: 16,  name: "Nimbasa City (Right)"   	},
		nuvema_r1:       	{x: 315, y: 187, w: 8 , h: 17,  name: "Nuvema Town\nRoute 1"   	},
		opelucid:			{x: 162, y: 43 , w: 15, h: 15,  name: "Opelucid City"   		},
        striaton:			{x: 306, y: 134, w: 8 , h: 8 ,  name: "Striaton City"   		},
		undella:			{x: 296, y: 87 , w: 15, h: 8 ,  name: "Undella Town" 			},
		virbank:			{x: 80 , y: 162, w: 15, h: 8 ,  name: "Virbank City"  			},
		whiteforest:		{x: 264, y: 116, w: 15, h: 8 ,  name: "White Forest"  			},

        // Routes
        r3:					{x: 280, y: 126, w: 8 , h: 8 ,  name: "Route 3"   				},
		r4:					{x: 177, y: 144, w: 8 , h: 16,  name: "Route 4"   				},
		r5:					{x: 150, y: 116, w: 8 , h: 8 ,  name: "Route 5"   				},
		r6:					{x: 67 , y: 98 , w: 8 , h: 8 ,  name: "Route 6"   				},
		r7:					{x: 49 , y: 76 , w: 8 , h: 8 ,  name: "Route 7"   				},
		r9:					{x: 150, y: 50 , w: 8 , h: 8 ,  name: "Route 9"   				},
		r11:				{x: 185, y: 50 , w: 8 , h: 8 ,  name: "Route 11"   				},
		r13:				{x: 303, y: 50 , w: 8 , h: 16,  name: "Route 13"   				},
		r14:				{x: 284, y: 103, w: 8 , h: 8 ,  name: "Route 14"   				},
		r15:				{x: 252, y: 116, w: 8 , h: 8 ,  name: "Route 15"   				},
		r16:				{x: 205, y: 116, w: 8 , h: 8 ,  name: "Route 16"   				},
		r17_r18:			{x: 284, y: 187, w: 8 , h: 16,  name: "Route 17\nRoute 18"   	},
		r20:				{x: 57 , y: 162, w: 8 , h: 8 ,  name: "Route 20"   				},
		r22:				{x: 317, y: 45 , w: 8 , h: 8 ,  name: "Route 22"   				},
		r23:				{x: 273, y: 20 , w: 15, h: 15,  name: "Route 23"   				},

        // Important locations
		casteliasewers:		{x: 188, y: 191, w: 8 , h: 8 ,  name: "Castelia Sewers"   		},
		dreamyard:			{x: 321, y: 134, w: 8 , h: 8 ,  name: "Dreamyard"   			},
		driftveilmarket:	{x: 80 , y: 116, w: 8 , h: 8 ,  name: "Driftveil Market"   		},
		frigatedeck:		{x: 284, y: 178, w: 8 , h: 8 ,  name: "Plasma Frigate\nDeck" 	},
		frigatehallway:		{x: 293, y: 178, w: 8 , h: 8 ,  name: "Plasma Frigate\nHallway" },
		frigaterooms:		{x: 302, y: 178, w: 8 , h: 8 ,  name: "Plasma Frigate\nRooms"   },
		joinavenue:			{x: 177, y: 134, w: 8 , h: 8 ,  name: "Join Avenue"   			},
		nimbasastation:		{x: 164, y: 124, w: 8 , h: 8 ,  name: "Nimbasa\nGear Station"   },
		pinwheelforest:		{x: 254, y: 150, w: 8 , h: 8 ,  name: "Pinwheel Forest"   		},
		pokemonleague:		{x: 206, y: 3  , w: 16, h: 8 ,  name: "Pokemon League"   		},
		pokemonleagueout:	{x: 206, y: 11 , w: 16, h: 8 ,  name: "Pokemon League (Out)"	},
		pwt:				{x: 89 , y: 128, w: 8 , h: 8 ,  name: "PWT"						},
		reliccastle:		{x: 149, y: 144, w: 8 , h: 8 ,  name: "Relic Castle"   			},
		relicpassage1:		{x: 80 , y: 128, w: 8 , h: 8 ,  name: "Relic Passage (PWT)"   	},
		relicpassage2:		{x: 80 , y: 137, w: 8 , h: 8 ,  name: "Relic Passage (Castelia)"},
		revmountainout:		{x: 250, y: 87 , w: 8 , h: 8 ,  name: "Reversal Mountain (Out)" },
		revmountain:		{x: 270, y: 87 , w: 8 , h: 8 ,  name: "Reversal Mountain (In)" 	},
		royalunova:			{x: 173, y: 193, w: 8 , h: 8 ,  name: "Royal Unova"   			},
		shoppingmall:		{x: 150, y: 41 , w: 8 , h: 8 ,  name: "Shopping Mall"   		},
		undellabay:			{x: 321, y: 87 , w: 8 , h: 8 ,  name: "Undella Bay"   			},
		villagebridge:		{x: 202, y: 50 , w: 15, h: 8 ,  name: "Village Bridge"   		},
		
		// Caves
		chargestonecave1f:	{x: 58 , y: 98 , w: 8 , h: 8 ,  name: "Chargestone Cave (1F)"	},
		chargestonecaveb1f:	{x: 49 , y: 98 , w: 8 , h: 8 ,  name: "Chargestone Cave (B1F)"  },
		claytunnel1:		{x: 89 , y: 98 , w: 8 , h: 8 ,  name: "Clay Tunnel (1)"			},
		claytunnel2:		{x: 89 , y: 89 , w: 8 , h: 8 ,  name: "Clay Tunnel (2)"			},
		claytunnel3:		{x: 89 , y: 80 , w: 8 , h: 8 ,  name: "Clay Tunnel (3)"			},
		giantchasmcave:		{x: 303, y: 36 , w: 8 , h: 8 ,  name: "Giant Chasm (Cave)"   	},
		mistraltoncave:		{x: 76 , y: 98 , w: 8 , h: 8 ,  name: "Mistralton Cave"   		},
		seasidecave1f:		{x: 321, y: 75 , w: 8 , h: 8 ,  name: "Seaside Cave (1F)"   	},
		seasidecaveb1f:		{x: 330, y: 75 , w: 8 , h: 8 ,  name: "Seaside Cave (B1F)"   	},
		twistmountainin:	{x: 89 , y: 50 , w: 8 , h: 8 ,  name: "Twist Mountain"   		},
		twistmountainout:	{x: 89 , y: 41 , w: 8 , h: 8 ,  name: "Twist Mountain (Out)"	},
		victoryroadcaves:	{x: 222, y: 20 , w: 8 , h: 8 ,  name: "Victory Road (Caves)"	},
		victoryroadcliff:	{x: 210, y: 20 , w: 8 , h: 8 ,  name: "Victory Road (Cliff)"	},
		victoryroadentrance:{x: 258, y: 20 , w: 8 , h: 8 ,  name: "Victory Road (Entrance)"	},
		victoryroadout:		{x: 234, y: 20 , w: 8 , h: 8 ,  name: "Victory Road (Outside)"	},
		victoryroadruins:	{x: 246, y: 20 , w: 8 , h: 8 ,  name: "Victory Road (Ruins)"	},
		wellspringcave:		{x: 271, y: 126, w: 8 , h: 8 ,  name: "Wellspring Cave"   		},
    },

    // Undefined fields:
    // - link_type:     "warp"        / "mark"
    // - link:          warp_name     / mark_name
    // - link_location: location_name / <garbage>
    warps: {
        // Cities
        accumula_r2: {
			r2_gate:		{x: 207, y: 260, name: "Route 2 (Accumula)"						},
			gate:			{x: 332, y: 149, 												},
			center:			{x: 826, y: 294, 												},
			house_w:		{x: 365, y: 412, 												},
			house_n:		{x: 625, y: 113, 												},
			house_nw:		{x: 477, y: 145, 												},
			house_ne:		{x: 790, y: 119, 												},
		},
		anville: {
			house_sw:		{x: 426, y: 361, 												},
			house_se:		{x: 593, y: 361, 												},
			house_n:		{x: 518, y: 212, 												},
		},
		aspertia: {
			gate:			{x: 440, y: 31 , 												},
			center:			{x: 346, y: 465, 												},
			gym:			{x: 180, y: 432, 												},
			house_n:		{x: 550, y: 228, 												},
			house_mid:		{x: 253, y: 631, 												},
			house_s:		{x: 161, y: 794, 												},
		},
		castelianorth: {
			center_n:		{x: 456, y: 468, 												},
			center_w:		{x: 195, y: 805, 												},
			center_midw:	{x: 368, y: 872, 												},
			center_mide:	{x: 560, y: 872, 												},
			center_e:		{x: 735, y: 805, 												},
			street_entry:	{x: 483, y: 324, 												},
			street_gate:	{x: 475, y: 20 , 												},
			street_w:		{x: 362, y: 133, 												},
			street_ne:		{x: 535, y: 72 , 												},
			street_se:		{x: 596, y: 140, 												},
		},
		casteliawest: {
			left_n:			{x: 223, y: 20 , 												},
			left_s:			{x: 223, y: 356, 												},
			left_gym:		{x: 393, y: 102, 												},
			left_house:		{x: 90 , y: 100, 												},
			right_n:		{x: 684, y: 202, 												},
			right_s:		{x: 684, y: 342, 												},
			right_cafe:		{x: 756, y: 255, 												},
			frontleft_n:	{x: 144, y: 600, 												},
			frontleft_s:	{x: 100, y: 705, 												},
			frontleft_house:{x: 329, y: 535, 												},
			frontright_n:	{x: 630, y: 557, 												},
			frontright_s:	{x: 685, y: 705, 												},
		},
		casteliaeast: {
			left_n:			{x: 233, y: 20 , 												},
			left_s:			{x: 233, y: 298, 												},
			left_house:		{x: 331, y: 97 , 												},
			right_n:		{x: 730, y: 20 , 												},
			right_s:		{x: 725, y: 317, 												},
			right_w:		{x: 610, y: 93 , 												},
			right_e:		{x: 865, y: 168, 												},
			frontleft_n:	{x: 235, y: 570, 												},
			frontleft_s:	{x: 189, y: 694, 												},
			frontleft_house:{x: 90 , y: 509, 												},
			frontmid_n:		{x: 561, y: 591, 												},
			frontmid_s:		{x: 527, y: 700, 												},
			frontmid_center:{x: 394, y: 514, 												},
			frontright_gate:{x: 871, y: 543, 												},
			frontright_s:	{x: 776, y: 700, 												},
		},
		driftveil: {
			center:			{x: 474, y: 348, 												},
			leftcenter:		{x: 234, y: 348, 												},
			house_w:		{x: 161, y: 729, 												},
			house_mid:		{x: 493, y: 594, 												},
			house_e:		{x: 715, y: 372, 												},
			market_n:		{x: 215, y: 446, 												},
			market_s:		{x: 215, y: 535, 												},
			market_w:		{x: 120, y: 490, 												},
			market_e:		{x: 310, y: 490, 												},
			gym:			{x: 919, y: 175, 												},
			gate_s:			{x: 271, y: 853, 												},
			bridge:			{x: 908, y: 605, 												},
			cave:			{x: 90 , y: 52 , 												},
		},
		floccesy_r19: {
			r19_gate:		{x: 93 , y: 842, name: "Route 19 (Floccesy)"					},
			center:			{x: 376, y: 778, 												},
			house_left:		{x: 599, y: 786, 												},
			house_right:	{x: 691, y: 752, 												},
			alder:			{x: 413, y: 300, 												},
			grove:			{x: 607, y: 25 , 												},
		},
		humilau_r21: {
			r21_cave:		{x: 176, y: 860, name: "Route 21 (Humilau)"						},
			center:			{x: 149, y: 694, 												},
			gym:			{x: 295, y: 621, 												},
			tube:			{x: 424, y: 719, 												},
			house_nw:		{x: 91 , y: 40 , 												},
			house_ne:		{x: 556, y: 40 , 												},
			house_sw:		{x: 184, y: 341, 												},
			house_se:		{x: 518, y: 369, 												},
			house_mid:		{x: 222, y: 128, 												},
		},
		icirrus_r8: {
			caveexit:		{x: 117, y: 716, 												},
			center:			{x: 379, y: 605, 												},
			house_n:		{x: 361, y: 200, 												},
			house_w:		{x: 102, y: 410, 												},
			house_e:		{x: 398, y: 410, 												},
			gym:			{x: 160, y: 195, 												},
			tower:			{x: 269, y: 42 , 												},
			r8_moor:		{x: 682, y: 42 , name: "Route 8 (Icirrus)"						},
			r8_gate:		{x: 847, y: 240, name: "Route 8 (Icirrus)"						},
		},
		lacunosa_r12: {
			r12_gate:		{x: 86 , y: 220, name: "Route 12 (Lacunosa)"					},
			center:			{x: 630, y: 391, 												},
			leftcenter:		{x: 408, y: 398, 												},
			house_nw:		{x: 482, y: 141, 												},
			house_n:		{x: 576, y: 179, 												},
			house_ne:		{x: 761, y: 60 , 												},
		},
		lentimas: {
			center:			{x: 505, y: 236, 												},
			leftcenter:		{x: 356, y: 247, 												},
			house:			{x: 355, y: 397, 												},
		},
		mistralton: {
			center:			{x: 689, y: 207, 												},
			topcenter:		{x: 614, y: 81 , 												},
			rightcenter:	{x: 855, y: 257, 												},
			tower:			{x: 393, y: 72 , 												},
			gym:			{x: 136, y: 119, 												},
			cave:			{x: 596, y: 379, 												},
		},
		nacrene: {
			center:			{x: 342, y: 313, 												},
			gym:			{x: 472, y: 90 , 												},
			cafe:			{x: 102, y: 136, 												},
			loblolly:		{x: 720, y: 325, 												},
			leftcenter:		{x: 138, y: 325, 												},
			leftcenter_up:	{x: 168, y: 273, 												},
			rightcenter:	{x: 547, y: 325, 												},
			rightcenter_up:	{x: 577, y: 273, 												},
			house_ne:		{x: 712, y: 152, 												},
			house_ne_up:	{x: 743, y: 86 , 												},
			house_sw:		{x: 85 , y: 375, 												},
			gate:			{x: 895, y: 318, 												},
		},
		nimbasa1: {
			center:			{x: 277, y: 542, 												},
			leftcenter:		{x: 148, y: 574, 												},
			topcenter:		{x: 278, y: 399, 												},
			house_left:		{x: 148, y: 367, 												},
			stadium:		{x: 174, y: 62 , 												},
			court:			{x: 452, y: 62 , 												},
			theater:		{x: 741, y: 62 , 												},
			gate_s:			{x: 720, y: 754, 												},
			gate_nw:		{x: 90 , y: 158, 												},
			gate_ne:		{x: 922, y: 158, 												},
			gate_to_right:	{x: 842, y: 495, 												},
		},
		nimbasa2: {
			gym:			{x: 866, y: 136, 												},
			skater:			{x: 272, y: 141, 												},
			gate_to_left:	{x: 90 , y: 207, 												},
		},
        nuvema_r1: {
			r1_gate:		{x: 70 , y: 36 , name: "Route 1 (Nuvema)"						},
			left:  			{x: 122, y: 549, 					 		   					},
			right:			{x: 326, y: 549, 					 		   					},
			middle:			{x: 233, y: 413, 					 		   					},
			lab:			{x: 142, y: 298, 					 		   					},
		},
		opelucid: {
			gate_sw:		{x: 90 , y: 636, 					 		   					},
			gate_se:		{x: 871, y: 636, 					 		   					},
			center:			{x: 656, y: 593, 					 		   					},
			topcenter:		{x: 656, y: 336, 					 		   					},
			gym:			{x: 286, y: 182, 					 		   					},
			rightgym:		{x: 466, y: 185, 					 		   					},
			drayden:		{x: 526, y: 409, 					 		   					},
			house_n:		{x: 648, y: 185, 					 		   					},
			house_w:		{x: 155, y: 482, 					 		   					},
		},
		striaton: {
			center:			{x: 243, y: 122, 					 		   					},
			gym:			{x: 373, y: 128, 					 		   					},
			school:			{x: 113, y: 124, 					 		   					},
			dreamyard:		{x: 654, y: 59 , 					 		   					},
			house_w:		{x: 120, y: 302, 					 		   					},
			house_ne:		{x: 402, y: 238, 					 		   					},
			house_se:		{x: 402, y: 317, 					 		   					},
		},
		undella: {
			center:			{x: 857, y: 106, 					 		   					},
			gate:			{x: 730, y: 63 , 					 		   					},
			tube:			{x: 422, y: 105, 					 		   					},
			lefttube:		{x: 254, y: 94, 					 		   					},
			righttube:		{x: 590, y: 94, 					 		   					},
			cave:			{x: 100, y: 141, 					 		   					},
		},
		virbank: {
			gate_n:			{x: 480, y: 29 , 					 		   					},
			gate_w:			{x: 88 , y: 177, 					 		   					},
			center:			{x: 350, y: 150, 					 		   					},
			rightcenter:	{x: 609, y: 156, 					 		   					},
			gym:			{x: 684, y: 422, 					 		   					},
			leftgym:		{x: 628, y: 456, 					 		   					},
			harbour:		{x: 907, y: 437, 					 		   					},
			house:			{x: 184, y: 446, 					 		   					},
			complex:		{x: 339, y: 690, 					 		   					},
		},
		whiteforest: {
			gate_left:		{x: 90 , y: 312, 					 		   					},
			gate_right:		{x: 616, y: 50 , 					 		   					},
			house:			{x: 291, y: 268, 					 		   					},
			center:			{x: 610, y: 298, 					 		   					},
		},

        // Routes
		r3: {
			cave:			{x: 90 , y: 56 , 					 		   					},
			gate:			{x: 95 , y: 715, 					 		   					},
			school:			{x: 525, y: 78 , 					 		   					},
			daycare:		{x: 692, y: 78 , 					 		   					},
		},
		r4: {
			gate_s:			{x: 734, y: 839, 					 		   					},
			gate_nw:		{x: 124, y: 27 , 					 		   					},
			gate_ne:		{x: 736, y: 27 , 					 		   					},
			house_left:		{x: 80 , y: 453, 					 		   					},
			house_right_n:	{x: 872, y: 273, 					 		   					},
			house_right_s:	{x: 745, y: 681, 					 		   					},
			house_midleft:	{x: 465, y: 320, 					 		   					},
			house_midright:	{x: 644, y: 320, 					 		   					},
		},
		r5: {
			gate:			{x: 915, y: 270, 					 		   					},
			bridge:			{x: 90 , y: 195, 					 		   					},
			camper:			{x: 733, y: 232, 					 		   					},
		},
		r6: {
			cave_n:			{x: 213, y: 97 , 					 		   					},
			cave_e:			{x: 856, y: 371, 					 		   					},
			house:			{x: 114, y: 362, 					 		   					},
		},
		r7: {
			cave:			{x: 543, y: 47 , 					 		   					},
			tower:			{x: 213, y: 118, 					 		   					},
			house_left:		{x: 120, y: 538, 					 		   					},
			house_right:	{x: 652, y: 454, 					 		   					},
		},
		r9: {
			mall:			{x: 508, y: 145, 					 		   					},
			gate_w:			{x: 93 , y: 229, 					 		   					},
			gate_e:			{x: 851, y: 229, 					 		   					},
		},
		r11: {
			camper:			{x: 632, y: 141, 					 		   					},
			gate_w:			{x: 85 , y: 163, 					 		   					},
			gate_e:			{x: 865, y: 163, 					 		   					},
		},
		r13: {
			gate:			{x: 690, y: 816, 					 		   					},
			cave:			{x: 488, y: 35 , 					 		   					},
			house_n:		{x: 100, y: 384, 					 		   					},
			house_s:		{x: 110, y: 710, 					 		   					},
		},
		r14: {
			gate:			{x: 378, y: 500, 					 		   					},
			shrine:			{x: 111, y: 201, 					 		   					},
		},
		r15: {
			camper:			{x: 198, y: 263, 					 		   					},
			lab:			{x: 513, y: 119, 					 		   					},
			gate_w:			{x: 90 , y: 295, 					 		   					},
			gate_e:			{x: 917, y: 180, 					 		   					},
		},
		r16: {
			shrine:			{x: 556, y: 27 , 					 		   					},
			gate_w:			{x: 85 , y: 327, 					 		   					},
			gate_e:			{x: 865, y: 194, 					 		   					},
		},
		r17_r18: {
			gate:			{x: 715, y: 313, name: "Route 17"		   						},
			house:			{x: 348, y: 211, name: "Route 18"		   						},
			lab:			{x: 678, y: 61 , name: "Route 17"		   						},
			plasma:			{x: 715, y: 145, name: "Route 17"		   						},
		},
		r20: {
			ranch:			{x: 152, y: 63 , 					 		   					},
			gate:			{x: 594, y: 119, 					 		   					},
			cave:			{x: 153, y: 323, 					 		   					},
		},
		r22: {
			cave:			{x: 105, y: 123, 					 		   					},
		},
		r23: {
			victoryroad:	{x: 143, y: 28 , 					 		   					},
			house_n:		{x: 459, y: 83 , 					 		   					},
			house_s:		{x: 412, y: 305, 					 		   					},
			cave:			{x: 449, y: 430, 					 		   					},
		},
						
        // Important locations
		casteliasewers: {
			up_left:		{x: 354, y: 30 , 					 		   					},
			up_mid:			{x: 745, y: 288, 					 		   					},
			up_right:		{x: 998, y: 307, 					 		   					},
			passage:		{x: 828, y: 30 , 					 		   					},
			room_n:			{x: 217, y: 290, 					 		   					},
			room_sw:		{x: 90 , y: 486, 					 		   					},
			room_s:			{x: 438, y: 486, 					 		   					},
			room_se:		{x: 792, y: 486, 					 		   					},
		},		
		dreamyard: {
			entry:			{x: 85 , y: 377, 												},
			down_n:			{x: 839, y: 143, 												},
			down_sw:		{x: 290, y: 554, 												},
			down_se:		{x: 837, y: 667, 												},
		},
		driftveilmarket: {
			north:			{x: 243, y: 78 , 												},
			east:			{x: 419, y: 275, 												},
			south:			{x: 243, y: 473, 												},
		},
		frigatedeck: {
			down_n:			{x: 391, y: 201, name: "Plasma Frigate (Deck)"					},
			down_s:			{x: 259, y: 532, name: "Plasma Frigate (Deck)"					},
			entry:			{x: 156, y: 384, name: "Plasma Frigate (Deck)"					},
			door_n:			{x: 391, y: 30 , name: "Plasma Frigate (Deck)"					},
			door_s:			{x: 265, y: 819, name: "Plasma Frigate (Deck)"					},
		},
		frigatehallway: {
			north_stairs:	{x: 294, y: 209, name: "Plasma Frigate (Hallway N)"				},
			north_nw:		{x: 170, y: 25 , name: "Plasma Frigate (Hallway N)"				},
			north_ne:		{x: 414, y: 25 , name: "Plasma Frigate (Hallway N)"				},
			north_w:		{x: 140, y: 136, name: "Plasma Frigate (Hallway N)"				},
			north_e:		{x: 444, y: 136, name: "Plasma Frigate (Hallway N)"				},
			north_sw:		{x: 90 , y: 334, name: "Plasma Frigate (Hallway N)"				},
			north_se:		{x: 494, y: 334, name: "Plasma Frigate (Hallway N)"				},
			south_stairs:	{x: 294, y: 681, name: "Plasma Frigate (Hallway S)"				},
			south_nw:		{x: 196, y: 516, name: "Plasma Frigate (Hallway S)"				},
			south_ne:		{x: 388, y: 516, name: "Plasma Frigate (Hallway S)"				},
			south_w:		{x: 170, y: 627, name: "Plasma Frigate (Hallway S)"				},
			south_e:		{x: 414, y: 627, name: "Plasma Frigate (Hallway S)"				},
			south_sw:		{x: 140, y: 820, name: "Plasma Frigate (Hallway S)"				},
			south_se:		{x: 444, y: 820, name: "Plasma Frigate (Hallway S)"				},
		},
		frigaterooms: {
			nw_door:		{x: 377, y: 204, name: "Plasma Frigate (Room NW)"				},
			nw_nw:			{x: 108, y: 62 , name: "Plasma Frigate (Room NW)"				},
			nw_se:			{x: 322, y: 281, name: "Plasma Frigate (Room NW)"				},
			ne_door:		{x: 513, y: 128, name: "Plasma Frigate (Room NE)"				},
			ne_ne:			{x: 767, y: 62 , name: "Plasma Frigate (Room NE)"				},
			ne_sw:			{x: 552, y: 281, name: "Plasma Frigate (Room NE)"				},
			w_door:			{x: 377, y: 518, name: "Plasma Frigate (Room W)"				},
			w_nw:			{x: 108, y: 379, name: "Plasma Frigate (Room W)"				},
			w_ne:			{x: 322, y: 379, name: "Plasma Frigate (Room W)"				},
			w_sw:			{x: 84 , y: 595, name: "Plasma Frigate (Room W)"				},
			w_se:			{x: 322, y: 595, name: "Plasma Frigate (Room W)"				},
			e_door:			{x: 513, y: 444, name: "Plasma Frigate (Room E)"				},
			e_nw:			{x: 552, y: 379, name: "Plasma Frigate (Room E)"				},
			e_ne:			{x: 767, y: 379, name: "Plasma Frigate (Room E)"				},
			e_sw:			{x: 552, y: 595, name: "Plasma Frigate (Room E)"				},
			e_se:			{x: 800, y: 595, name: "Plasma Frigate (Room E)"				},
			sw_door:		{x: 377, y: 831, name: "Plasma Frigate (Room SW)"				},
			sw_nw:			{x: 108, y: 698, name: "Plasma Frigate (Room SW)"				},
			sw_ne:			{x: 322, y: 698, name: "Plasma Frigate (Room SW)"				},
			sw_sw:			{x: 84 , y: 909, name: "Plasma Frigate (Room SW)"				},
			se_door:		{x: 513, y: 758, name: "Plasma Frigate (Room SE)"				},
			se_ne:			{x: 767, y: 698, name: "Plasma Frigate (Room SE)"				},
			se_sw:			{x: 552, y: 909, name: "Plasma Frigate (Room SE)"				},
			se_se:			{x: 800, y: 909, name: "Plasma Frigate (Room SE)"				},
		},
		joinavenue: {
			gate_n:			{x: 161, y: 71 , 												},
			gate_s:			{x: 161, y: 825, 												},
			office:			{x: 86 , y: 691, 												},
		},
		nimbasastation: {
			left_n:			{x: 350, y: 219, name: "Gear Station"							},
			leftmid_n:		{x: 262, y: 304, name: "Gear Station"							},
			leftmid_s:		{x: 230, y: 434, name: "Gear Station"							},
			left_s:			{x: 299, y: 635, name: "Gear Station"							},
			right_n:		{x: 592, y: 219, name: "Gear Station"							},
			rightmid_n:		{x: 688, y: 304, name: "Gear Station"							},
			rightmid_s:		{x: 715, y: 434, name: "Gear Station"							},
			right_s:		{x: 646, y: 635, name: "Gear Station"							},
		},
		pinwheelforest: {
			forest_s:		{x: 597, y: 770, 												},
			forest_n:		{x: 368, y: 33, 												},
			field:			{x: 970, y: 88 , 												},
			entrance:		{x: 720, y: 519, name: "Pinwheel (Entrance)"					},
		},
		pokemonleague: {
			entry:			{x: 487, y: 701, 												},
			left:			{x: 110, y: 267, 												},
			midleft:		{x: 272, y: 90 , 												},
			midright:		{x: 676, y: 90 , 												},
			right:			{x: 852, y: 268, 												},
		},
		pokemonleagueout: {
			center:			{x: 148, y: 91 , 												},
			league:			{x: 617, y: 120, 												},
			entry:			{x: 661, y: 482, 												},
		},
		pwt: {
			gate:			{x: 369, y: 58 , 												},
			pwt:			{x: 740, y: 210, 												},
			cave:			{x: 185, y: 418, 												},
		},
		reliccastle: {
			f1_entry:		{x: 380, y: 301, name: "Relic Castle (1F)"						},
			f1_down_left:	{x: 88 , y: 309, name: "Relic Castle (1F)"						},
			f1_down_right:	{x: 341, y: 26 , name: "Relic Castle (1F)"						},
			b1f_up:			{x: 335, y: 400, name: "Relic Castle (B1F)"						},
			passway_n:		{x: 625, y: 42 , name: "Relic Castle (Passway)"					},
			passway_w:		{x: 529, y: 134, name: "Relic Castle (Passway)"					},
			passway_e:		{x: 720, y: 134, name: "Relic Castle (Passway)"					},
		},
		revmountainout: {
			cave:			{x: 158, y: 101, 												},
			house:			{x: 686, y: 218, 												},
		},
		revmountain: {
			entry_nw:		{x: 95 , y: 68 , name: "Reversal Mountain (1F)"					},
			entry_ne:		{x: 839, y: 68 , name: "Reversal Mountain (1F)"					},
			entry_sw:		{x: 153, y: 828, name: "Reversal Mountain (1F)"					},
			down_w:			{x: 398, y: 649, name: "Reversal Mountain (1F)"					},
			down_e:			{x: 819, y: 342, name: "Reversal Mountain (1F)"					},
			link_n:			{x: 373, y: 21 , name: "Reversal Mountain (Link)"				},
			link_s:			{x: 373, y: 214, name: "Reversal Mountain (Link)"				},
			link_e:			{x: 441, y: 86 , name: "Reversal Mountain (Link)"				},
		},
		royalunova: {
			left_red_nw:	{x: 147, y: 85 , name: "Royal Unova (Left)"						},
			left_red_w:		{x: 85 , y: 194, name: "Royal Unova (Left)"						},
			left_red_sw:	{x: 129, y: 347, name: "Royal Unova (Left)"						},
			left_red_se:	{x: 425, y: 347, name: "Royal Unova (Left)"						},
			left_blue_n:	{x: 293, y: 48 , name: "Royal Unova (Left)"						},
			left_blue_ne:	{x: 466, y: 48 , name: "Royal Unova (Left)"						},
			left_blue_s:	{x: 343, y: 162, name: "Royal Unova (Left)"						},
			left_blue_sw:	{x: 255, y: 194, name: "Royal Unova (Left)"						},
			right_red_nw:	{x: 611, y: 135, name: "Royal Unova (Right)"					},
			right_red_n:	{x: 730, y: 70 , name: "Royal Unova (Right)"					},
			right_red_ne:	{x: 877, y: 37 , name: "Royal Unova (Right)"					},
			right_red_sw:	{x: 611, y: 347, name: "Royal Unova (Right)"					},
			right_red_se:	{x: 797, y: 347, name: "Royal Unova (Right)"					},
			right_blue_w:	{x: 709, y: 194, name: "Royal Unova (Right)"					},
			right_blue_e:	{x: 827, y: 162, name: "Royal Unova (Right)"					},
		},
		shoppingmall: {
			entry:			{x: 195, y: 522, 												},
			room:			{x: 332, y: 283, 												},
		},
		undellabay: {
			cave:			{x: 213, y: 36 , 												},
		},
		villagebridge: {
			left_gate:		{x: 88 , y: 203, 												},
			left_house_w:	{x: 250, y: 113, 												},
			left_house_mid:	{x: 380, y: 81 , 												},
			left_house_e:	{x: 510, y: 49 , 												},
			left_tunnel:	{x: 590, y: 374, 												},
			right_gate:		{x: 612, y: 646, 												},
			right_house_w:	{x: 183, y: 492, 												},
			right_house_mid:{x: 313, y: 524, 												},
			right_house_e:	{x: 442, y: 556, 												},
		},
		
		// Caves
		chargestonecave1f: {
			down_n:			{x: 515, y: 108, 												},
			down_sw:		{x: 358, y: 565, 												},
			down_se:		{x: 720, y: 686, 												},
			exit_n:			{x: 856, y: 84 , 												},
			exit_s:			{x: 88 , y: 819, 												},
		},
		chargestonecaveb1f: {
			down:			{x: 398, y: 166, 												},
			up_n:			{x: 644, y: 120, 												},
			up_sw:			{x: 85 , y: 676, 												},
			up_se:			{x: 754, y: 790, 												},
		},
		claytunnel1: {
			entry_nw:		{x: 90 , y: 165, 												},
			entry_s:		{x: 293, y: 869, 												},
		},
		claytunnel2: {
			entry_n:		{x: 275, y: 25 , 												},
			entry_nw:		{x: 90 , y: 80 , 												},
			entry_sw:		{x: 90 , y: 773, 												},
			entry_se:		{x: 400, y: 532, 												},
		},
		claytunnel3: {
			entry_n:		{x: 184, y: 25 , 												},
			entry_s:		{x: 296, y: 868, 												},
			entry_ne:		{x: 475, y: 261, 												},
			entry_se:		{x: 475, y: 501, 												},
		},
		giantchasmcave: {
			way_s:			{x: 444, y: 879, 												},
			way_w:			{x: 90 , y: 275, 												},
			way_e:			{x: 840, y: 218, 												},
			mid:			{x: 444, y: 749, 												},
		},
		mistraltoncave: {
			f1_entry:		{x: 90 , y: 20 , name: "Mistralton Cave (1F)"					},
			f1_up:			{x: 324, y: 105, name: "Mistralton Cave (1F)"					},
			f1_passage:		{x: 494, y: 296, name: "Mistralton Cave (1F)"					},
			f2_down:		{x: 80 , y: 710, name: "Mistralton Cave (2F)"					},
			f2_up:			{x: 331, y: 516, name: "Mistralton Cave (2F)"					},
		},
		relicpassage1: {
			entry_nw:		{x: 119, y: 68 , 												},
			entry_ne:		{x: 599, y: 62 , 												},
			entry_se:		{x: 588, y: 472, 												},
		},
		relicpassage2: {
			entry_left_n:	{x: 169, y: 36 , 												},
			entry_right_s:	{x: 130, y: 201, 												},
			entry_right:	{x: 602, y: 572, 												},
		},
		seasidecave1f: {
			entry_nw:		{x: 203, y: 163, 												},
			entry_ne:		{x: 645, y: 210, 												},
			entry_s:		{x: 203, y: 883, 												},
			down_s:			{x: 387, y: 247, 												},
			down_e:			{x: 502, y: 114, 												},
		},
		seasidecaveb1f: {
			up_s:			{x: 220, y: 222, 												},
			up_e:			{x: 374, y: 85 , 												},
		},
		twistmountainin: {
			f1_n:			{x: 90 , y: 157, name: "Twist Mountain (1F)"					},
			f1_s:			{x: 240, y: 429, name: "Twist Mountain (1F)"					},
			f1_e:			{x: 438, y: 202, name: "Twist Mountain (1F)"					},
			f2_nw:			{x: 70 , y: 525, name: "Twist Mountain (2F)"					},
			f2_n:			{x: 405, y: 686, name: "Twist Mountain (2F)"					},
			f2_ne:			{x: 542, y: 616, name: "Twist Mountain (2F)"					},
			f2_sw:			{x: 70 , y: 890, name: "Twist Mountain (2F)"					},
			f2_s:			{x: 309, y: 890, name: "Twist Mountain (2F)"					},
			f2_se:			{x: 531, y: 890, name: "Twist Mountain (2F)"					},
			f3_left:		{x: 548, y: 261, name: "Twist Mountain (3F)"					},
			f3_mid_:		{x: 789, y: 219, name: "Twist Mountain (3F)"					},
			f3_right:		{x: 858, y: 50 , name: "Twist Mountain (3F)"					},
			b1f_n:			{x: 759, y: 554, name: "Twist Mountain (B1F)"					},
			b1f_sw:			{x: 682, y: 856, name: "Twist Mountain (B1F)"					},
			b1f_se:			{x: 925, y: 854, name: "Twist Mountain (B1F)"					},
		},
		twistmountainout: {
			ground_nw:		{x: 315, y: 293,  												},
			ground_ne:		{x: 629, y: 308, 												},
			ground_sw:		{x: 353, y: 537, 												},
			ground_se:		{x: 718, y: 458, 												},
			ground_house:	{x: 277, y: 444, 												},
			mid_left:		{x: 152, y: 298, 												},
			mid_mid:		{x: 294, y: 157, 												},
			mid_right:		{x: 498, y: 217, 												},
		},
		victoryroadcaves: {
			way_nw:			{x: 122, y: 164, 												},
			way_n:			{x: 462, y: 67 , 												},
			way_ne:			{x: 780, y: 164, 												},
			way_sw:			{x: 141, y: 513, 												},
			way_s:			{x: 461, y: 503, 												},
			way_se:			{x: 798, y: 513, 												},
		},
		victoryroadcliff: {
			cave_n:			{x: 479, y: 75 , 												},
			cave_mid_w:		{x: 410, y: 295, 												},
			cave_mid_e:		{x: 688, y: 251, 												},
			cave_sw:		{x: 168, y: 813, 												},
			cave_se:		{x: 853, y: 813, 												},
		},
		victoryroadentrance: {
			center:			{x: 491, y: 121, 												},
			cave:			{x: 270, y: 57 , 												},
			entry_r23:		{x: 860, y: 700, 												},
		},
		victoryroadout: {
			cave_nw:		{x: 95 , y: 50 , 												},
			cave_n:			{x: 313, y: 37 , 												},
			cave_ne:		{x: 512, y: 64 , 												},
			grove:			{x: 95 , y: 388, 												},
			cave_s:			{x: 632, y: 466, 												},
			entry:			{x: 914, y: 371, 												},
		},
		victoryroadruins: {
			bigentry_left:	{x: 95 , y: 298, 												},
			bigentry_right:	{x: 890, y: 828, 												},
			entry_mid:		{x: 558, y: 129, 												},
			entry_cave:		{x: 333, y: 109, 												},
		},
		wellspringcave: {
			entry:			{x: 529, y: 58 , 												},
			down:			{x: 503, y: 336, 												},
		},
    },

    // Numbers are meant to be to check if exist any marks/progress in the maps
    // if null, then we don't do tracking
    // if undefined, then we don't draw the mark
    marks: [
        [["unknown",     0], ["dead_end", null], ["event",        0], ["w2_center_mart", 0], ["one_way",  null]],
        [["normal",      0], ["fighting",    0], ["flying",       0], ["poison",         0], ["ground",   0], ["rock",        0], ["bug",         0], ["ghost",       0], ["fairy",       0], ["1", 0], ["2", 0], ["3", 0], ["4", 0]],
        [["steel",       0], ["fire",        0], ["water",        0], ["grass",          0], ["electric", 0], ["psychic",     0], ["ice",         0], ["dragon",      0], ["dark",        0], ["5", 0], ["6", 0], ["7", 0], ["8", 0]],
		[["team_plasma", 0]],
        [["w2_bush",     0], ["w2_surf",     0], ["w2_boulder",   0], ["w2_waterfall",	 0]],
    ],
    progress: [
        [["basicbadge",  0], ["toxicbadge", 0], ["insectbadge", 0], ["boltbadge",   0], ["quakebadge",   0], ["jetbadge", 0], ["legendbadge", 0], ["wavebadge", 0]],
		[["hm_cut",      0], ["hm_fly",     0], ["hm_surf",     0], ["hm_strength", 0], ["hm_waterfall", 0], ["hm_dive",  0]],
        [["bw_shauntal", 0], ["bw_marshal", 0], ["bw_grimsley", 0], ["bw_caitlin",  0], ["b2w2_iris",    0], ["", undefined], ["bw_N",        0], ["bw_alder",  0], ["bw_cynthia", 0]],
		[["bike",        0]],
	],
	modifiers: [
		[["#ce4069", 0], ["#ff9c54", 0], ["#f3d23b", 0], ["#743683", 0], ["#654321", 0], ["#014f01", 0]],
		[["#4d90d5", 0], ["#74cec0", 0], ["#90c12c", 0], ["#ec8fe6", 0], ["#5a5366", 0], ["#00146b", 0]],
	],
};