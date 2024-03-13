document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('copyInfoBtn').addEventListener('click', async () => {
        try {
            const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
            const infoToCopy = `ページ名: ${tab.title}\nURL: ${tab.url}`;
            await navigator.clipboard.writeText(infoToCopy);
            alert('ページ情報をクリップボードにコピーしました！');
        } catch (err) {
            console.error('情報のコピーに失敗しました: ', err);
            alert('情報のコピーに失敗しました。');
        }
    });
});
