module.exports = {
    ci: {
        collect: {
            url: ["http://127.0.0.1:5500/"],
            numberOfRuns: 1
        },
        "assert": {
            "assertions": {
                "categories:performance": ["warn", { "minScore": 0.1 }],
            }
        },
        upload: {
            target: "lhci",
            token: "199779c0-a988-47de-a45a-b79034ac2b9b",
            outputDir: "./.lighthouse",
            serverBaseUrl: "http://localhost:55771"
        },
        server: {
        },
        wizard: {
            // wizard options here
        },
    },
};