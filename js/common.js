// 菜单页
var header = new Vue({
    el: "#header",
    data: {
        loading: true,
        menu: "https://2021.igem.org/wiki/images/2/22/T--CPU_CHINA--face.png", //菜单按钮
        isOpen: false, //背景变化
        classA: false, //一级菜单是否打开
        classB: false, //二级菜单是否打开
        isActive: "", //背景变色
        isActiveA: -1, //一级菜单悬停效果
        isActiveB: -1, //二级菜单悬停效果
        status: // 菜单的状态
        {
            "open": "https://2021.igem.org/wiki/images/a/a4/T--CPU_CHINA--.png",
            "close": "https://2021.igem.org/wiki/images/2/22/T--CPU_CHINA--face.png"
        },
        clickon: true, //鼠标是否位于菜单上
        ifon: true, //离开是否会关闭按钮
        // 一级菜单列表
        classList: ["Project", "Parts", "Model", "Human Practices", "Team"],
        // 二级菜单刘表
        classList2: [
            [{
                    text: "Description",
                    url: "",
                    num: 0,
                },
                {
                    text: "Design",
                    url: "",
                    num: 1,
                },
                {
                    text: "Proof of Concept",
                    url: "",
                    num: 2,
                },
                {
                    text: "Proposed Implementation",
                    url: "",
                    num: 3,
                },
                {
                    text: "Art Design",
                    url: "https://2021.igem.org/Team:CPU_CHINA/Art",
                    num: 4,
                },
                {
                    text: "Lab",
                    url: "",
                    num: 5,
                },
                {
                    text: "General Safety",
                    url: "https://2021.igem.org/Team:CPU_CHINA/Safety",
                    num: 6,
                },
            ],
            [{
                    text: "Parts Overview",
                    url: "https://2021.igem.org/Team:CPU_CHINA/partsOverview",
                    num: 0,
                },
                {
                    text: "Contributions",
                    url: "https://2021.igem.org/Team:CPU_CHINA/Contribution",
                    num: 1,
                },
                {
                    text: "Engineering Success",
                    url: "https://2021.igem.org/Team:CPU_CHINA/Engineering",
                    num: 2,
                },
                {
                    text: "Improvement",
                    url: "",
                    num: 3,
                },
            ],
            [{
                    text: "Summary",
                    url: "",
                    num: 0,
                },
                {
                    text: "Mathematical Modeling",
                    url: "",
                    num: 1,
                },
                {
                    text: "Molecular Modeling",
                    url: "",
                    num: 2,
                },
            ],
            [{
                    text: "Summary",
                    url: "",
                    num: 0,
                },
                {
                    text: "Integrated Human Practices",
                    url: "",
                    num: 1,
                },
                {
                    text: "Education and Public Engagement",
                    url: "",
                    num: 2,
                },
                {
                    text: "Entrepreneurship",
                    url: "",
                    num: 3,
                },
                {
                    text: "Plasticase",
                    url: "",
                    num: 4,
                },
                {
                    text: "Meddy:Relight My Star",
                    url: "https://2021.igem.org/Team:CPU_CHINA/MeddyRelightMyStar",
                    num: 5,
                }
            ],
            [{
                    text: "Members",
                    url: "https://2021.igem.org/Team:CPU_CHINA/Team",
                    num: 0,
                },
                {
                    text: "Attributions",
                    url: "https://2021.igem.org/Team:CPU_CHINA/Attributions",
                    num: 1,
                },
                {
                    text: "Collaboration",
                    url: "",
                    num: 2,
                },
                {
                    text: "Partnership",
                    url: "",
                    num: 3,
                },
            ],
        ],
    },
    methods: {
        // 鼠标悬停到菜单按钮上
        mouseover() {
            if (this.menu == this.status["close"]) {
                this.menu =
                    "https://2021.igem.org/wiki/images/9/91/T--CPU_CHINA--zheng.gif";
                this.isOpen = true;
                this.isActive = "menu";
                setTimeout(() => {
                    this.classA = true;
                    this.menu =
                        "https://2021.igem.org/wiki/images/a/a4/T--CPU_CHINA--.png";

                }, 1100);
            }
        },
        // 关闭菜单
        close() {
            if (this.menu == this.status["open"]) {
                this.menu =
                    "https://2021.igem.org/wiki/images/5/5b/T--CPU_CHINA--fan.gif";
                this.isActive = "";
                this.classB = false;
                this.classA = false;
                this.isActiveA = -1;
                setTimeout(() => {
                    this.isOpen = false;
                    this.menu =
                        "https://2021.igem.org/wiki/images/2/22/T--CPU_CHINA--face.png";

                }, 1100);
            }
        },
        // 点击菜单按钮
        click() {
            if (this.menu == this.status["open"]) {
                this.close();
            } else if (this.menu == this.status["close"]) {
                this.mouseover();
            } else {
                return;
            }
        },
        // 鼠标移动到菜单上
        on() {
            this.clickon = false;
            this.ifon = false;
        },
        // 鼠标离开菜单
        leave() {
            setTimeout(() => {
                if (this.clickon) {
                    this.ifon = true;
                    if (this.ifon && this.menu == this.status["open"]) {
                        this.close();
                    } else {
                        return;
                    }
                }
            }, 3000);
            this.clickon = true;
        },
        // 鼠标点击空白关闭菜单
        ifclick() {
            if (this.clickon && this.menu == this.status["open"]) {
                this.close();
            } else {
                return;
            }
        },
        // 鼠标点击一级菜单
        classAClick(index) {
            this.isActiveB = -1;
            this.isActiveA = index;
            this.classB = true;
        },
        // 鼠标悬停到二级菜单
        classBOver(num) {
            setTimeout(() => {
                this.isActiveB = num;
            }, 300);
        },
        // 鼠标离开二级菜单
        classBLeave(num) {
            setTimeout(() => {
                this.isActiveB = -1;
            }, 300);
        },
    },
    beforeCreate() {
        this.loading = true;
    },
    mounted() {
        this.$nextTick(function () {
            this.mouseover();
            setTimeout(() => {
                this.close();
                this.loading = false;
            }, 1100)
        })
    }
});

// 页面滚动响应
var $navs = $("nav li"), // 导航
    $sections = $(".section"), // 模块
    $window = $(window),
    navLength = $navs.length - 1;

$window.scroll(function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    len = navLength;
    for (; len > -1; len--) {
        var that = $sections.eq(len);
        if (scrollTop+10 >= that.offset().top-10) {
            $navs.removeClass("current").eq(len).addClass("current");
            break;
        }
    }
});

$navs.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
            scrollTop: $($(this).find("a").attr("href")).offset().top,
        },
        400
    );
});