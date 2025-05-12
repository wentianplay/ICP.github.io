 
// 游戏角色备案数据库
const WTP = (() => {
    const database = {
        "G20250001": {
            number: "彬ICP备G20250001号",
            type: "苏天彬",
            character: "玄士阵营",
            game: "文天阁",
            server: "玄天皇朝",
            level: "祖道境",
            faction: "至尊存在",
            apply: "2025-05-01",
            approve: "2025-05-01"
        },
        "G20250002": {
            number: "彬ICP备G20250002号",
            type: "苏文天",
            character: "玄士阵营",
            game: "文天阁",
            server: "玄天皇朝",
            level: "祖道境",
            faction: "至高存在",
            apply: "2025-05-02",
            approve: "2025-05-02"
        },
        "G20250003": {
            number: "彬ICP备G20250003号",
            type: "苏玄彬",
            character: "玄士阵营",
            game: "文天阁",
            server: "玄天皇朝",
            level: "祖道境",
            faction: "至高存在",
            apply: "2025-05-03",
            approve: "2025-05-03"
    };

    // 查询方法（支持ID或角色名查询）
    const search = (input) => {
        const cleanInput = input.trim().toUpperCase();
        
        // 按ID查询
        if (cleanInput.startsWith('G')) {
            return database[cleanInput] || null;
        }
        
        // 按角色名查询
        for (const key in database) {
            if (database[key].character === input) {
                return database[key];
            }
        }
        
        return null;
    };

    return { search };
})();
 