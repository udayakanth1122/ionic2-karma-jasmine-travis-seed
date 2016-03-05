var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ts = require('typescript');
var Lint = require('tslint/lib/lint');
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        _super.apply(this, arguments);
    }
    Rule.prototype.apply = function (sourceFile) {
        var walker = new NoConstantConditionWalker(sourceFile, this.getOptions());
        return this.applyWithWalker(walker);
    };
    Rule.FAILURE_STRING = 'unexpected constant condition';
    return Rule;
})(Lint.Rules.AbstractRule);
exports.Rule = Rule;
var NoConstantConditionWalker = (function (_super) {
    __extends(NoConstantConditionWalker, _super);
    function NoConstantConditionWalker() {
        _super.apply(this, arguments);
        this.isInConditional = false;
    }
    NoConstantConditionWalker.prototype.visitIfStatement = function (node) {
        this.validateCondition(node.expression);
        _super.prototype.visitIfStatement.call(this, node);
    };
    NoConstantConditionWalker.prototype.visitWhileStatement = function (node) {
        this.validateCondition(node.expression);
        _super.prototype.visitWhileStatement.call(this, node);
    };
    NoConstantConditionWalker.prototype.visitDoStatement = function (node) {
        this.validateCondition(node.expression);
        _super.prototype.visitDoStatement.call(this, node);
    };
    NoConstantConditionWalker.prototype.visitForStatement = function (node) {
        if (node.condition) {
            this.validateCondition(node.condition);
        }
        _super.prototype.visitForStatement.call(this, node);
    };
    NoConstantConditionWalker.prototype.visitConditionalExpression = function (node) {
        this.validateCondition(node.condition);
        _super.prototype.visitConditionalExpression.call(this, node);
    };
    NoConstantConditionWalker.prototype.validateCondition = function (expression) {
        this.isInConditional = true;
        if (this.isConstant(expression)) {
            this.addFailure(this.createFailure(expression.getStart(), expression.getWidth(), Rule.FAILURE_STRING));
        }
        this.walkChildren(expression);
        this.isInConditional = false;
    };
    NoConstantConditionWalker.prototype.isConstant = function (node) {
        switch (node.kind) {
            case 9:
            case 8:
            case 99:
            case 84:
            case 174:
            case 173:
            case 165:
            case 164:
                return true;
            case 179:
            case 180:
                return true;
            case 181:
                if (this.isAssignmentToken(node.operatorToken)) {
                    return this.isConstant(node.getLastToken());
                }
                return this.isConstant(node.getFirstToken()) && this.isConstant(node.getLastToken());
            case 182:
                return this.isConstant(node.condition);
        }
        return false;
    };
    NoConstantConditionWalker.prototype.isAssignmentToken = function (token) {
        return token.kind >= 56 && token.kind <= 68;
    };
    return NoConstantConditionWalker;
})(Lint.RuleWalker);
