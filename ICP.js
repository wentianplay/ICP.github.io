const iCPDatabase = {
    "20252823": {
        op: "苏天彬",
        eop: "个人",
        ICP: "彬ICP备20252823号",
        name: "天彬ICP备案｜文天玩WenTianPlay",
        link: "www.wentianplay.top",
        url: "WenTianPlay.TOP",
        good: "2025-02-28",
        status: "2025-03-31"
    }
};

function queryICP(params) {
    return Object.entries(iCPDatabase).find(([icpNumber, entry]) => {
        return (!params.icpNumber || params.icpNumber === icpNumber) &&
               (!params.domain || 
                [entry.link?.toLowerCase(), entry.url?.toLowerCase()].includes(params.domain.toLowerCase())) &&
               (!params.applicant || entry.op === params.applicant);
    })?.[1] || null;
}
 