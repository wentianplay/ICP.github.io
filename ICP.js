 
const ICP = (() => {
    const database = {
        "20252823": {
            number: "彬ICP备20252823号",
            company: "文天玩网络科技有限公司",
            type: "民营企业",
            domain: "WenTianPlay.TOP",
            pages: "www.wentianplay.top*",
            apply: "2025-03-31",
            approve: "2025-03-31"
        },
        "20254272": {
            number: "彬ICP备20254272号",
            company: "文天玩网络科技有限公司",
            type: "民营企业",
            domain: "WenTianPlay.NET",
            pages: "www.wentianplay.net*",
            apply: "2025-03-31",
            approve: "2025-03-31"
        },
        "20258956": {
            number: "彬ICP备20258956号",
            company: "文天玩网络科技有限公司",
            type: "民营企业",
            domain: "WenTianPlay.COM",
            pages: "www.wentianplay.com*",
            apply: "2025-03-31",
            approve: "2025-03-31"
        },
        "20258125": {
            number: "彬ICP备20258125号",
            company: "乔伊",
            type: "个人",
            domain: "暂无",
            pages: "暂无*",
            apply: "2025-04-01",
            approve: "2025-04-01"
        },
        "20250207": {
            number: "彬ICP备20250207号",
            company: "雪狐狸",
            type: "个人",
            domain: "vkcraftminecraft.COM",
            pages: "vkcraftminecraft.com*",
            apply: "2025-05-13",
            approve: "2025-05-13"
        },
        "20250513": {
            number: "彬ICP备20250513号",
            company: "文天玩网络科技有限公司",
            type: "民营企业",
            domain: "WenTianWan.CN",
            pages: "www.wentianwan.cn*",
            apply: "2025-03-31",
            approve: "2025-03-31"
        }
    };

    const search = (input) => {
        const icpNumber = input.replace(/[^\d]/g, '');
        return database[icpNumber] || null;
    };

    return { search };
})();
 