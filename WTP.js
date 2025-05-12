 
const WTP = (() => {
    const database = {
        "G20250001": {
            number: "彬ICP备G20250001号",
            name: "苏天彬",
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
            name: "苏文天",
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
            name: "苏玄彬",
            character: "玄士阵营",
            game: "文天阁",
            server: "玄天皇朝",
            level: "祖道境",
            faction: "至高存在",
            apply: "2025-05-03",
            approve: "2025-05-03"
        }
    };

    const search = (input) => {
        const cleanInput = input.trim();

        // ID查询
        if (cleanInput.toUpperCase().startsWith('G')) {
            const id = cleanInput.toUpperCase();
            return database[id] || null;
        }

        // 角色名查询
        for (const key in database) {
            if (database[key].name === cleanInput) {
                return database[key];
            }
        }

        return null;
    };

    return { search };
})();
 