# 圣经祷告词应用 - 项目需求文档

## 项目概述
- **项目名称**: bible-prayer-app
- **类型**: Web 应用 (MVP)
- **核心功能**: AI 根据用户心情生成个性化祷告词 + 每日圣经金句
- **目标用户**: 基督徒、需要进行灵修祷告的用户

## 功能列表

### 1. 首页 (Home)
- 显示每日圣经金句
- 快捷进入祷告生成

### 2. 祷告生成 (Prayer Generator)
- 用户输入当前心情/状态
- AI 生成个性化祷告词（模拟实现）
- 保存祷告到历史记录

### 3. 祷告记录 (History)
- 查看历史祷告记录
- 支持删除记录

### 4. 设置 (Settings)
- 每日提醒时间设置（UI展示）

## 技术实现
- 前端: Next.js + Tailwind CSS
- 状态管理: React useState
- 数据存储: localStorage (MVP阶段)
- AI生成: 模拟实现（可后续接入DeepSeek API）

## 页面结构
```
/           - 首页（每日金句）
/prayer     - 祷告生成页
/history    - 历史记录页
/settings   - 设置页
```