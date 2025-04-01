 
// ICP.js - 数据服务层
const ICP = (() => {
    // 备案数据库
    const icpDatabase = {
        "20252823": {
            number: "彬ICP备20252823号",
            company: "文天玩网络科技有限公司",
            type: "民营企业",
            domain: "wentianplay.top",
            pages: "www.wentianplay.top",
            apply: "2025-03-31",
            approve: "2025-03-31"
        }
        }; 
       "20254272": {
            number: "彬ICP备20254272号",
            company: "文天玩网络科技有限公司",
            type: "民营企业",
            domain: "wentianplay.net",
            pages: "www.wentianplay.net",
            apply: "2025-03-31",
            approve: "2025-03-31"
        }
        }; 
        "20258956": {
            number: "彬ICP备20258956号",
            company: "文天玩网络科技有限公司",
            type: "民营企业",
            domain: "wentianplay.com",
            pages: "www.wentianplay.com",
            apply: "2025-03-31",
            approve: "2025-03-31"
        }
    };

    // 查询方法
    const search = (input) => {
        const icpNumber = input.replace(/[^0-9]/g, '');
        return icpDatabase[icpNumber] || null;
    }

    // 公共API
    return {
        searchICP: search,
        generateCode: (number) => `
            天彬ICP备案｜文天玩WenTianPlay
            查询"彬ICP备"备案号信息
            复制备案号代码到页脚处
             <pre>&lt;a href="https://WenTianPlay.TOP/" target="_blank"rel="noopener noreferrer"&gt;${number}&lt;/a&gt;</pre>

    }
})();
 