// 导航栏悬浮和点击效果
// 获取所有的菜单项
const menuItems = document.querySelectorAll('.menu-item');
// 定义一个变量dropdownVisible，初始值为false
let dropdownVisible = false;

// 定义一个函数showDropdown，用于显示下拉菜单
const showDropdown = (dropdown) => {
    // 设置下拉菜单的显示状态为显示
    dropdown.style.display = 'block'
    // 设置dropdownVisible为true
    dropdownVisible = true
};

// 定义一个函数hideDropdown，用于隐藏下拉菜单
const hideDropdown = (dropdown) => {
    // 设置下拉菜单的显示状态为隐藏
    dropdown.style.display = 'none'
    // 设置dropdownVisible为false
    dropdownVisible = false
};

// 遍历菜单项
menuItems.forEach(item => {
    // 获取链接
    const link = item.querySelector('a');
    // 获取下拉菜单
    const dropdown = item.querySelector('.dropdown');

    // 为链接添加鼠标进入事件，事件处理函数为showDropdown
    link.addEventListener('mouseenter', () => showDropdown(dropdown));
    // 为链接添加鼠标离开事件，事件处理函数为hideDropdown，hideDropdownVisible为false时，也执行hideDropdown
    link.addEventListener('mouseleave', () => {
        if (!dropdownVisible) {
            hideDropdown(dropdown);
        }
    });

    // 为下拉菜单添加鼠标进入事件，事件处理函数为showDropdown
    dropdown.addEventListener('mouseenter', () => showDropdown(dropdown));
    // 为下拉菜单添加鼠标离开事件，事件处理函数为hideDropdown
    dropdown.addEventListener('mouseleave', () => hideDropdown(dropdown));
});