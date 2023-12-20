document.addEventListener('DOMContentLoaded', function() {
    // 获取按钮和数据容器
    var updateButton = document.getElementById('updateButton');
    var dataContainer = document.getElementById('data-container');

    // 给按钮添加点击事件监听器
    updateButton.addEventListener('click', function() {
        // 模拟使用 AJAX 请求从服务器获取数据
        fetchDataAndUpdateUI();
    });

    // 模拟获取数据并更新页面的函数
    function fetchDataAndUpdateUI() {
        // 这里可以使用实际的 AJAX 请求
        // 这里使用 setTimeout 模拟异步请求
        setTimeout(function() {
            var newData = '新的数据：' + new Date().toLocaleTimeString();
            // 更新页面上的数据容器
            dataContainer.innerText = newData;
        }, 1000);
    }
});
