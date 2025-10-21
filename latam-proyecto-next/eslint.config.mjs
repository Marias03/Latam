// eslint.config.js (or .eslintrc.js)
module.exports = {
  extends: ["next/core-web-vitals"],
  rules: {
    // Disable specific rules globally
    "@typescript-eslint/no-unused-vars": "off",
    "react-hooks/exhaustive-deps": "off",
  },
  overrides: [
    {
      // Specific file overrides
      files: [
        "./src/app/[locale]/admin-auth/page.tsx",
        "./src/app/[locale]/layout.tsx",
        "./src/app/[locale]/page.tsx",
        "./src/components/Admin/AdminDashboardSection.tsx",
      ],
      rules: {
        "@typescript-eslint/no-unused-vars": "off",
        "react-hooks/exhaustive-deps": "off",
      },
    },
  ],
};
