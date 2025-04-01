// ICP.js - 备案信息数据库
const iCPDatabase = {
    "20252823": {
        op: "苏天彬",
        eop: "个人",
        ICP: "彬ICP备20252823号}",
        name: "天彬ICP备案｜文天玩WenTianPlay",
        link: "wentianplay.top",
        url: "WenTianPlay.TOP",
        good: "2025-02-28",
        status: "2025-03-31"
    }
};

function queryICP(params) {
    for (const [icpNumber, entry] of Object.entries(iCPDatabase)) {
        let match = true;
        
        // 备案号查询
        if (params.icpNumber && params.icpNumber !== icpNumber) {
            match = false;
        }
        
        // 域名查询（支持link和url字段，不区分大小写）
        if (params.domain) {
            const domains = [entry.link?.toLowerCase(), entry.url?.toLowerCase()];
            if (!domains.includes(params.domain.toLowerCase())) {
                match = false;
            }
        }
        
        // 申请单位查询
        if (params.applicant && entry.op !== params.applicant) {
            match = false;
        }
        
        if (match) {
            return { icpNumber, ...entry };
        }
    }
    return null;
}

// 示例查询
console.log(queryICP({ icpNumber: "20252823" }));
// 输出：匹配的备案信息对象

console.log(queryICP({ domain: "wentianplay.top" }));
// 输出：匹配的备案信息对象

console.log(queryICP({ icpNumber: "20252824" }));
// 输出：null
 