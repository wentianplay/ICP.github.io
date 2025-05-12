 
// 游戏角色备案数据库
const WTP = (() => {
    const database = {
        "G20250001": {
            number: "彬ICP备G20250001号",
            type: "游戏角色",
            character: "天彬",
            game: "《天彬TianBIN》",
            server: "天界区",
            level: "Lv.99",
            faction: "文天阁",
            apply: "2025-05-01",
            approve: "2025-05-01"
        },
        "G20250002": {
            number: "彬ICP备G20250002号",
            type: "游戏角色",
            character: "幽冥狐",
            game: "《天彬TianBIN》",
            server: "幽冥界",
            level: "Lv.85",
            faction: "暗影盟",
            apply: "2025-05-02",
            approve: "2025-05-02"
        },
        "G20250003": {
            number: "彬ICP备G20250003号",
            type: "游戏角色",
            character: "雪狐狸",
            game: "《天彬TianBIN》",
            server: "冰雪原",
            level: "Lv.78",
            faction: "自由猎人",
            apply: "2025-05-03",
            approve: "2025-05-03"
        }
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
 