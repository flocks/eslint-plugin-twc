module.exports = {
  rules: {
    "variable-prefix": {
      meta: {
        type: "suggestion",
        docs: {
          description: "Suggest a prefix for component created with react-twc",
        },
        fixable: "code",
        schema: ["prefix"],
      },
      create(context) {
        const prefix = (context.options[0] && context.options[0].prefix) || "$";

        return {
          VariableDeclarator(node) {
            const variableName = node.id.name;
            if (!variableName) return;

            const isTwcDeclaration =
              node.init.type === "TaggedTemplateExpression" &&
              node.init.tag.object.name === "twc";

            if (isTwcDeclaration) {
              if (!variableName.startsWith(prefix)) {
                context.report({
                  node,
                  message: `Variable '${variableName}' should start with '${prefix}'`,
                  fix: (fixer) => {
                    return fixer.replaceText(
                      node.id,
                      `${prefix}${variableName}`
                    );
                  },
                });
              }
            }
          },
        };
      },
    },
  },
};
