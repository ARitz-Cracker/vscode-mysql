import * as vscode from "vscode";
import sqlFormatter = require('sql-formatter');

export class SqlFormattingProvider implements vscode.DocumentRangeFormattingEditProvider {

    public provideDocumentRangeFormattingEdits(document: vscode.TextDocument, range: vscode.Range, options: vscode.FormattingOptions, token: vscode.CancellationToken):
        vscode.ProviderResult<vscode.TextEdit[]> {

        return [new vscode.TextEdit(range, sqlFormatter.format(document.getText(range)))];
    }


}