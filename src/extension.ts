import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.updateSnapshots', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const filePath = editor.document.fileName;
            const terminal = vscode.window.createTerminal(`Playwright Test: ${filePath}`);
            terminal.sendText(`npx playwright test ${filePath} --update-snapshots`);
            terminal.show();
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}