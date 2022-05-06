import React from 'react';
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
      title: 'Мой профиль',
      path: '/',
      icon: <AiIcons.AiFillHome/>,
      cName: 'nav-text'
    },
    {
        title: 'Практика',
        path: '/practice',
        icon: <AiIcons.AiFillCode/>,
        cName: 'nav-text'
    },
    {
        title: 'Теория',
        path: '/theory',
        icon: <AiIcons.AiFillDatabase/>,
        cName: 'nav-text'
    },
    {
        title: 'Тесты',
        path: '/tests',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-text'
    },
    {
        title: 'Чат',
        path: '/chat',
        icon: <AiIcons.AiFillWechat/>,
        cName: 'nav-text'
    },
    {
        title: 'Напишите нам',
        path: '/textToUs',
        icon: <AiIcons.AiFillMail/>,
        cName: 'nav-text'
    },

]