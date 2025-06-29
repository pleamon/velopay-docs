// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: '概述',
      collapsed: false,
      items: [
        'overview/architecture',
        'overview/roadmap',
        'overview/documentation-outline',
      ],
    },
    {
      type: 'category',
      label: '业务文档',
      items: [
        'business/payment-basics',
        'business/business-model',
        {
          type: 'category',
          label: '合规',
          items: [
            'business/compliance/overview',
            'business/compliance/kyc-kyb',
            'business/compliance/aml',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '技术架构',
      items: [
        'technical/getting-started',
        'technical/architecture/overview',
        'technical/architecture/microservices',
        'technical/architecture/database-design',
      ],
    },
    {
      type: 'category',
      label: '平台文档',
      items: [
        {
          type: 'category',
          label: '支付网关',
          items: [
            'platforms/gateway/overview',
            'platforms/gateway/collection',
            'platforms/gateway/payout',
          ],
        },
        {
          type: 'category',
          label: '商户平台',
          items: [
            'platforms/merchant/overview',
            'platforms/merchant/integration',
          ],
        },
        {
          type: 'category',
          label: '代理商平台',
          items: [
            'platforms/agent/overview',
            'platforms/agent/commission',
          ],
        },
        {
          type: 'category',
          label: '运营平台',
          items: [
            'platforms/admin/overview',
            'platforms/admin/operations',
          ],
        },
        {
          type: 'category',
          label: '用户平台',
          items: [
            'platforms/user/overview',
            'platforms/user/payment-flow',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'API 文档',
      items: [
        'api/introduction',
        'api/authentication',
        'api/payment-api',
        'api/webhook',
        'api/error-codes',
      ],
    },
    {
      type: 'category',
      label: '开发指南',
      items: [
        'development/frontend-guide',
        'development/backend-guide',
        'development/testing-guide',
      ],
    },
    {
      type: 'category',
      label: '运维指南',
      items: [
        'operations/deployment',
        'operations/monitoring',
        'operations/troubleshooting',
      ],
    },
  ],
};

module.exports = sidebars;