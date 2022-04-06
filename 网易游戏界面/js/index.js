(function () {
    var games = {
        $: function (ele) {
            return document.querySelectorAll(ele);
        },
        // 头部导航
        "bannerslider": function () {
            var game_list = this.$(".game_list")[0];
            var game_text = this.$('.game_text')[0];
            var num = 0;
            var banne_game_list = this.$('.banne_game_list')[0];
            var game_list_btn = this.$('.game_list_btn')[0];
            var banner_game_btn = document.querySelectorAll('.banner_game_btn')[0];

            game_list_btn.onclick = function () {-
                num++;
                if (num % 2 == 1) {
                    game_list.classList.toggle("game_list_change");
                    game_text.style.display = "none";
                } else {
                    game_list.className = "game_list";
                    game_text.style.display = "block";
                }
                banne_game_list.classList.toggle("show");

            }
            banner_game_btn.onclick = function () {
                num = 0;
                game_list.classList.remove("game_list_change");
                banne_game_list.classList.remove("show");
                game_text.style.display = "block";
            }
        },
        // 大轮播图
        "bannerTabs":function(){
            var allLi = this.$('.banner_list_one');
            var click_list_li = this.$('.click_list li');
            var zIndex = 5;
            var index =0;
            var timer =null;
            var banner_last = this.$('.banner_last')[0];
            var banner_next = this.$('.banner_next')[0];

            var bannerArr = [
                {
                    "name_text":"漫威超级战争",
                    "title_text":"超级反派集结",
                    "bg":"img/bb351359-e561-4e5b-9041-96f42a6fb75d.jpeg",
                },
                {
                    "name_text":"网易游戏点卡",
                    "title_text":"网易入驻天猫 淘宝",
                    "bg":"img/17c5610b-b620-4849-84eb-13c30edeec08.jpeg",
                },
                {
                    "name_text":"哈利波特:魔法觉醒",
                    "title_text":"全平台正式上线",
                    "bg":"img/fb2c2ca9-1c42-46a5-a3a0-538d2058a387.jpeg",
                },
                {
                    "name_text":"零号任务",
                    "title_text":"2v4潜入对抗手游",
                    "bg":"img/b44514e7-2e31-4567-8e75-2b9ea9583e4e.jpeg",
                },
                {
                    "name_text":"宝可梦大电影",
                    "title_text":"联动服饰加入游戏",
                    "bg":"img/bca3d7d2-79f8-4ba1-b624-740f15d55718.jpeg",
                }
            ];
            
			banner_last.onmouseenter =function(){
                var last =index-1 ;
                if(last ==-1)last =allLi.length-1;
                this.children[0].children[0].style.backgroundImage= "url("+bannerArr[last].bg+")";
                this.children[0].children[1].innerHTML =bannerArr[last].name_text;
                this.children[0].children[2].innerHTML =bannerArr[last].title_text;
            }
            banner_last.onclick =function(){
                index--;
                if(index ==-1) index=click_list_li.length-1;
                for(var i =0;i<click_list_li.length;i++){
                    click_list_li[i].classList.remove('active');
                    allLi[i].classList.remove('active');
                }
                click_list_li[index].classList.add('active');
                allLi[index].classList.add('active');
                banner_last.onmouseenter();
                startTabs ();
            }
            banner_next.onmouseenter =function(){
                var next =index+1 ;
                if(next ==allLi.length)next =0;
                this.children[0].children[0].style.backgroundImage= "url("+bannerArr[next].bg+")";
                this.children[0].children[1].innerHTML =bannerArr[next].name_text;
                this.children[0].children[2].innerHTML =bannerArr[next].title_text;
            }
            banner_next.onclick =function(){
                index++;
                if(index ==click_list_li.length) index=0;
                for(var i =0;i<click_list_li.length;i++){
                    click_list_li[i].classList.remove('active');
                    allLi[i].classList.remove('active');
                };
                click_list_li[index].classList.add('active');
                allLi[index].classList.add('active');
                banner_next.onmouseenter();
                startTabs ();
            }

            for(var i =0;i<allLi.length;i++){
                allLi[i].zIndex =zIndex;
                zIndex--;
            }
            for(var i =0;i<click_list_li.length;i++){
                click_list_li[i].index =i;
                click_list_li[i].onclick =function(){
                    for(var i =0;i<click_list_li.length;i++){
                        click_list_li[i].classList.remove('active');
                        allLi[i].classList.remove('active');
                    }
                    this.classList.add('active');
                    allLi[this.index].classList.add('active');
                    index=this.index;
                    startTabs ();
                }
            };
            startTabs ();
            function startTabs (){
                clearInterval(timer);
                timer = setInterval(function(){
                    index++;
                    if(index ==click_list_li.length) index=0;
                    for(var i =0;i<click_list_li.length;i++){
                        click_list_li[i].classList.remove('active');
                        allLi[i].classList.remove('active');
                    }
                    click_list_li[index].classList.add('active');
                    allLi[index].classList.add('active');
                    
                },5000)
            }
         },
        //  轮播新闻图
        "bannerNewsTabs":function(){
            var allUlLi = this.$('.banner .banner_news .banner_news_game li');
            var allOlLi = this.$('.banner .banner_news  .banner_news_images li');
            var zIndex = 5;
            var index =0;
            for(var i=0;i<allOlLi.length;i++){
                allOlLi[i].zIndex =zIndex;
                zIndex--;
            }
            for(var i =0;i<allUlLi.length;i++){
                allUlLi[i].index =i;
                allUlLi[i].onclick =function(){
                    for(var i =0 ;i<allUlLi.length;i++){
                        allUlLi[i].classList.remove('active');
                        allOlLi[i].classList.remove('active');
                    }
                    this.classList.add('active');
                    console.log(allOlLi[this.index]);

                    allOlLi[this.index].classList.add('active');
                }
            }


        },
        // 官方社群
        "officialCommunity":function(){
            var communityUl = this.$('.community  .community-l .community-l-center .community_ul')[0];
            communityUl.innerHTML += communityUl.innerHTML;

            // 获取需要移入效果的所有li
            var allOlLi=this.$('.community  .community-l .community-l-center .community_ul>li .community_ol li ');
             // console.log(allOlLi);
            //  需要移动的ul；
             communityUl.style.width =communityUl.children[0].offsetWidth*communityUl.children.length + 'px';
             var community_l =this.$('.community  .community-l')[0];
             var index =0;
            // 获取左右按钮
            var last_btn =this.$('.last_btn')[0];
            var next_btn =this.$('.next_btn')[0];
            // 特殊宽度
            var onlyWidth = 162;
            var timer =null;
            var leftWidth =communityUl.children[0].offsetWidth;

            for(var i =0;i<allOlLi.length;i++){
                allOlLi[i].onmouseenter=function(){
                    for(var i =0;i<allOlLi.length;i++){
                        allOlLi[i].classList.remove('active');
                    }
                    this.classList.add('active');
                };
                
            }
            var lock =true ;
            startslider();
            function startslider(){
                clearInterval(timer);

                timer=setInterval(function(){
                    next_btn.onclick() ;
                }, 3000);
            }

            community_l.onmouseenter =function(){
                clearInterval(timer);
            }
            community_l.onmouseleave =function(){
                startslider();
            }

            last_btn.onclick =function(){
                if(!lock)return;
                lock=false;
                // console.log(index);
                if(index ==0){
                    communityUl.style.transition ='0s';
                    communityUl.style.left =(-4*leftWidth)-onlyWidth+'px';
                    setTimeout(function() {
                        communityUl.style.transition ='1.5s';
                        index = -4;
                        communityUl.style.left =index*leftWidth+'px';
                    }, 100);
                }else{
                   if(index == -4){
                       index =-3;
                       communityUl.style.left =index*leftWidth+'px';
                   }
                   else{
                       index++;
                   }
                   communityUl.style.left =index*leftWidth+'px';
                }
                
              
                setTimeout(function(){
                    lock =true;
                }, 1000);
                for(var i =0;i<allOlLi.length;i++){
                    allOlLi[i].classList.remove('active');
                }
            };
            next_btn.onclick =function(){
                if(!lock)return;
                lock=false;
                index--;
                // console.log(index);
                if (index==-5) {
                    communityUl.style.left =(index+1)*leftWidth-onlyWidth+'px';
                    index =0;
                    setTimeout(function(){
                        communityUl.style.transition ="0s";
                        setTimeout(function(){
                            communityUl.style.left=0;
                            setTimeout(function() {
                                communityUl.style.transition ="1.5s";
                            }, 50);
                        }, 10);
                    },1050)
                    
                } else if (index==-4) {
                    communityUl.style.left =(index+1)*leftWidth-onlyWidth+'px';
                }
                else{
                    communityUl.style.left =leftWidth*index +'px';       
                }
                setTimeout(function(){
                    lock=true;
                }, 1000);
                for(var i =0;i<allOlLi.length;i++){
                    allOlLi[i].classList.remove('active');
                }
            }

        },
        // 热门游戏更换
        "hotgamesChange":function(){
            var change =this.$('.games .hotgames .change')[0];
            // 获取到li
            var allLi = this.$('.games .hotgames_bt .hotgames_bt_list li');
            // 要更改的数据
            var index=6;

            var lock =false;
            
            var changeArr= [
                {
                    "ewm":'img/games_ewn.png',
                    "title":'游戏类型：MOMO手游',
                    "image":'img/game-list-img.png',
                    "name":'《游戏王：决斗链接》',
                    "showtitle":'全新游戏王GX世界版本9月2号上线',
                },{
                    "ewm":'img/games_ewn.png',
                    "title":'游戏类型：MOMO手游',
                    "image":'img/game-list-img.png',
                    "name":'《游戏王：决斗链接》',
                    "showtitle":'全新游戏王GX世界版本9月2号上线',
                },{
                    "ewm":'img/games_ewn.png',
                    "title":'游戏类型：MOMO手游',
                    "image":'img/game-list-img.png',
                    "name":'《游戏王：决斗链接》',
                    "showtitle":'全新游戏王GX世界版本9月2号上线',
                },{
                    "ewm":'img/games_ewn.png',
                    "title":'游戏类型：MOMO手游',
                    "image":'img/game-list-img.png',
                    "name":'《游戏王：决斗链接》',
                    "showtitle":'全新游戏王GX世界版本9月2号上线',
                },{
                    "ewm":'img/games_ewn.png',
                    "title":'游戏类型：MOMO手游',
                    "image":'img/game-list-img.png',
                    "name":'《游戏王：决斗链接》',
                    "showtitle":'全新游戏王GX世界版本9月2号上线',
                },{
                    "ewm":'img/games_ewn.png',
                    "title":'游戏类型：MOMO手游',
                    "image":'img/game-list-img.png',
                    "name":'《游戏王：决斗链接》',
                    "showtitle":'全新游戏王GX世界版本9月2号上线',
                },{
                    "ewm":'img/games_ewn.png',
                    "title":'100抽参与周年庆活动',
                    "image":'img/14556651-311f-4e04-891c-b88dcc840798.jpeg',
                    "name":'《阴阳时：妖怪屋》',
                    "showtitle":'一周年庆开启，活动得100抽！',
                },{
                    "ewm":'img/games_ewn.png',
                    "title":'100抽参与周年庆活动',
                    "image":'img/14556651-311f-4e04-891c-b88dcc840798.jpeg',
                    "name":'《阴阳时：妖怪屋》',
                    "showtitle":'一周年庆开启，活动得100抽！',
                },{
                    "ewm":'img/games_ewn.png',
                    "title":'100抽参与周年庆活动',
                    "image":'img/14556651-311f-4e04-891c-b88dcc840798.jpeg',
                    "name":'《阴阳时：妖怪屋》',
                    "showtitle":'一周年庆开启，活动得100抽！',
                },{
                    "ewm":'img/games_ewn.png',
                    "title":'100抽参与周年庆活动',
                    "image":'img/14556651-311f-4e04-891c-b88dcc840798.jpeg',
                    "name":'《阴阳时：妖怪屋》',
                    "showtitle":'一周年庆开启，活动得100抽！',
                },{
                    "ewm":'img/games_ewn.png',
                    "title":'100抽参与周年庆活动',
                    "image":'img/14556651-311f-4e04-891c-b88dcc840798.jpeg',
                    "name":'《阴阳时：妖怪屋》',
                    "showtitle":'一周年庆开启，活动得100抽！',
                },{
                    "ewm":'img/games_ewn.png',
                    "title":'100抽参与周年庆活动',
                    "image":'img/14556651-311f-4e04-891c-b88dcc840798.jpeg',
                    "name":'《阴阳时：妖怪屋》',
                    "showtitle":'一周年庆开启，活动得100抽！',
                },
            ];
            change.onclick =function(){
                if(lock)return;
                lock =true;
               for(var i=0;i<allLi.length;i++){
                    (function(i){
                        setTimeout(function(){
                            // 添加scale样式，使其消失
                            allLi[i].classList.add('scale');
                            setTimeout(function(){
                                
                                if(index==changeArr.length)index =0;
                                allLi[i].children[0].children[1].children[0].innerText =changeArr[index].title;
                                allLi[i].children[1].src =changeArr[index].image;
                                allLi[i].children[2].innerText =changeArr[index].name;
                                allLi[i].children[3].innerText =changeArr[index].showtitle;
                                index++;
                                console.log(index)
                                // 删除样式，使其显示
                                allLi[i].classList.remove('scale');
                            },500)
                        },i*100)
                    })(i);
               }
               setTimeout(function(){
                lock=false;
               },1000)
            };
        },
        // 查看更多按钮
        "viewMore":function(){
            var more =this.$('.hide_box .hide_box_center .hide_show_button')[0];
           
            var treelinks =this.$('.treelinks')[0];
            
            more.onclick =function(){
                    if(more.innerText =="查看更多"){
                        more.innerText ="收起"
                        treelinks.classList.add('active');
                    }else{
                        more.innerText ="查看更多"
                        treelinks.classList.remove('active');
                    }
                    
            }
            // 取消鼠标按下时的默认事件
            more.onmousedown =function(){
                return false;
            }
        },

    };

    games.bannerslider();
    games.bannerTabs();
    games.bannerNewsTabs();
    games.officialCommunity();
    games.hotgamesChange();
    games.viewMore();
})();