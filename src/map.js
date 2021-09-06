export default {
    'title': '',
    'nodes': [{
      'text': 'Azure Kubernetes Services',
      'url': '',
      'fx': -50,
      'fy': -200,
      'category': 'aks',
      'nodes': [{
        'text': '',
        'url': 'https://azure.microsoft.com/en-us/services/kubernetes-service',
        'fx': 176.083777747024,
        'fy': -665.1641376795345,
        'nodes': [],
        'category': 'aks',
        'color': 'rgba(255, 189, 10, 1.0)'
      },
      {
        'text': 'Documentation',
        'note': '',
        'url': 'https://azure.microsoft.com/en-us/services/kubernetes-service',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(36, 170, 255, 1.0)'
      },      
      ],
    },
    {
      'text': 'Troubleshooting',
      'url': '',
      'fx': -346.2056231217888,
      'fy': -1039.035120728630204,
      'nodes': [
      {
        'text': 'AKS Periscope',
        'note': '',
        'url': 'https://github.com/Azure/aks-periscope',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(255, 0, 0, 1.0)'
      }],
      'category': ''
    },
    {
      'text': 'Identity',
      'url': '',
      'fx': -586.2056231217888,
      'fy': -939.035120728630204,
      'nodes': [],
      'category': 'identity'
    },
    {
      'text': 'Azure Active Directory',
      'url': 'https://azure.microsoft.com/en-us/services/active-directory/',
      'fx': -1146.2056231217888,
      'fy': -939.035120728630204,
      'nodes': [
      {
        'text': 'Pod Identity',
        'note': '',
        'url': 'https://docs.microsoft.com/en-us/azure/aks/use-azure-ad-pod-identity',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(36, 30, 255, 1.0)'
      },
      {
        'text': 'MFA (API Server)',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(36, 170, 255, 1.0)'
      },
      {
        'text': 'Conditionnal Access (API Server)',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(36, 170, 255, 1.0)'
      },
      {
        'text': 'Service Principal',
        'note': '',
        'url': 'https://docs.microsoft.com/en-us/azure/aks/kubernetes-service-principal?tabs=azure-cli',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(36, 170, 255, 1.0)'
      },
      {
        'text': 'Managed Identity',
        'note': '',
        'url': 'https://docs.microsoft.com/en-us/azure/aks/use-managed-identity',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(36, 170, 255, 1.0)'
      },
      {
        'text': 'Azure RBAC for Kubernetes Autorization',
        'note': '',
        'url': 'https://docs.microsoft.com/en-us/azure/aks/manage-azure-rbac',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(36, 170, 255, 1.0)'
      }],
      'category': ''
    },
    {
      'text': 'Control Plane (Managed)',
      'url': 'https://docs.microsoft.com/en-us/azure/aks/concepts-clusters-workloads',
      'fx': -686.2056231217888,
      'fy': -539.035120728630204,
      'nodes': [{
        'text': 'Doc',
        'note': '',
        'url': 'https://docs.microsoft.com/en-us/azure/aks/concepts-clusters-workloads',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(0, 200, 0, 1.0)'
      }],
      'category': 'aks'
    },
    {
      'text': 'Private Cluster',
      'url': 'https://docs.microsoft.com/en-us/azure/aks/private-clusters',
      'fx': -886.2056231217888,
      'fy': -739.035120728630204,
      'nodes': [{
        'text': 'Doc',
        'note': '',
        'url': 'https://docs.microsoft.com/en-us/azure/aks/private-clusters',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(0, 200, 0, 1.0)'
      }],
      'category': ''
    },
    {
      'text': 'Private DNS Zone',
      'url': '',
      'fx': -1446.2056231217888,
      'fy': -739.035120728630204,
      'nodes': [
      {
        'text': 'System',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(0, 200, 0, 1.0)'
      },
      {
        'text': 'None (Public DNS)',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(100, 200, 100, 1.0)'
      },
      {
        'text': 'CUSTOM_PRIVATE_DNS_RESOURCE_ID',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(100, 200, 100, 1.0)'
      }]
    },
    {
      'text': 'Public Endpoint',
      'url': '',
      'fx': -1086.2056231217888,
      'fy': -639.035120728630204,
      'nodes': [
        {
          'text': 'Authorized IP',
          'note': '',
          'url': 'https://docs.microsoft.com/en-us/azure/aks/api-server-authorized-ip-ranges',
          'fx': 476.083777747024,
          'fy': -625.1641376795345,
          'nodes': [],
          'category': '',
          'color': 'rgba(0, 200, 0, 1.0)'
      }],
      'category': ''
    },
    {
      'text': 'Supported versions of Kubernetes',
      'url': '',
      'fx': -1186.2056231217888,
      'fy': -539.035120728630204,
      'nodes': [
        {
          'text': 'Doc',
          'note': '',
          'url': 'https://docs.microsoft.com/en-us/azure/aks/supported-kubernetes-versions?tabs=azure-cli',
          'fx': 476.083777747024,
          'fy': -625.1641376795345,
          'nodes': [],
          'category': '',
          'color': 'rgba(0, 200, 0, 1.0)'
      }],
      'category': ''
    },
    {
      'text': 'SKU',
      'url': '',
      'fx': -886.2056231217888,
      'fy': -439.035120728630204,
      'nodes': [
        {
          'text': 'Free',
          'note': '',
          'url': '',
          'fx': 476.083777747024,
          'fy': -625.1641376795345,
          'nodes': [],
          'category': '',
          'color': 'rgba(0, 200, 0, 1.0)'
        },
        {
          'text': 'Uptime SLA',
          'note': '',
          'url': 'https://docs.microsoft.com/en-us/azure/aks/uptime-sla',
          'fx': 476.083777747024,
          'fy': -625.1641376795345,
          'nodes': [],
          'category': '',
          'color': 'rgba(100, 200, 100, 1.0)'
      }],
      'category': ''
    },
    {
      'text': 'Workers Nodes',
      'url': '',
      'fx': -586.2056231217888,
      'fy': -239.035120728630204,
      'nodes': [{
        'text': 'Doc',
        'note': '',
        'url': 'https://docs.microsoft.com/en-us/azure/aks/concepts-clusters-workloads',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(0, 250, 0, 1.0)'
      }],
      'category': 'nodes'
    },
    {
      'text': 'Virtual Kubelet',
      'url': '',
      'fx': -1086.2056231217888,
      'fy': -239.035120728630204,
      'nodes': [{
        'text': 'Azure Container Instance',
        'note': '',
        'url': 'https://docs.microsoft.com/en-us/azure/aks/virtual-nodes',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(0, 250, 0, 1.0)'
      },
      {
        'text': 'GitHub project',
        'note': '',
        'url': 'https://github.com/virtual-kubelet/azure-aci',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(0, 250, 0, 1.0)'
      }],
      'category': ''
    },
    {
      'text': 'Kubelet',
      'url': '',
      'fx': -950.2056231217888,
      'fy': -169.035120728630204,
      'nodes': [{
        'text': 'Doc',
        'note': '',
        'url': 'https://docs.microsoft.com/en-us/azure/aks/concepts-clusters-workloads',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(0, 250, 0, 1.0)'
      }],
      'category': ''
    },
    {
      'text': 'Node Pool',
      'url': '',
      'fx': -1150.2056231217888,
      'fy': -169.035120728630204,
      'nodes': [],
      'category': ''
    },
    {
      'text': 'Type',
      'url': '',
      'fx': -1400.2056231217888,
      'fy': -169.035120728630204,
      'nodes': [{
        'text': 'User',
        'note': '',
        'url': 'https://docs.microsoft.com/en-us/azure/aks/use-multiple-node-pools',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(0, 250, 0, 1.0)'
      },
      {
        'text': 'System',
        'note': '',
        'url': 'https://docs.microsoft.com/en-us/azure/aks/use-system-pools',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(100, 200, 100, 1.0)'
      }],
      'category': ''
    },
    {
      'text': 'Operating System',
      'url': '',
      'fx': -1386.2056231217888,
      'fy': 39.035120728630204,
      'nodes': [{
        'text': 'Windows Server 2019',
        'note': '',
        'url': 'https://docs.microsoft.com/en-us/azure/aks/windows-faq',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(0, 250, 0, 1.0)'
      },
      {
        'text': 'Linux Ubuntu',
        'note': '',
        'url': 'https://docs.microsoft.com/en-us/azure/aks/cluster-configuration',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(100, 200, 100, 1.0)'
      },
      {
        'text': 'Linux CBL-Mariner',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(100, 200, 100, 1.0)'
      }],
      'category': ''
    },
    {
      'text': 'Scaling',
      'url': '',
      'fx': -1386.2056231217888,
      'fy': 200.035120728630204,
      'nodes': [{
        'text': 'Manual',
        'note': '',
        'url': 'https://docs.microsoft.com/en-us/azure/aks/scale-cluster',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(0, 250, 0, 1.0)'
      },
      {
        'text': 'Autoscaling',
        'note': '',
        'url': 'https://docs.microsoft.com/en-us/azure/aks/cluster-autoscaler',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(100, 200, 100, 1.0)'
      },
      {
        'text': 'Autoscaler profile',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(100, 200, 100, 1.0)'
      }
      ],
      'category': ''
    },
    {
      'text': 'Groups',
      'url': '',
      'fx': -1386.2056231217888,
      'fy': 350.035120728630204,
      'nodes': [{
        'text': 'Proximity Placement Group',
        'note': '',
        'url': 'https://docs.microsoft.com/en-us/azure/aks/reduce-latency-ppg',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(0, 250, 0, 1.0)'
      },
      {
        'text': 'Availability Set',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(100, 200, 100, 1.0)'
      },
      {
        'text': 'Availability Zones',
        'note': '',
        'url': 'https://docs.microsoft.com/en-us/azure/aks/availability-zones',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(100, 200, 100, 1.0)'
      }
      ],
      'category': ''
    },
    {
      'text': 'Persistent Storage',
      'url': '',
      'fx': -386.2056231217888,
      'fy': 139.035120728630204,
      'category': 'storage',
      'nodes': [{
        'text': 'Doc',
        'note': '',
        'url': 'https://docs.microsoft.com/en-us/azure/aks/concepts-storage',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(158, 202, 94, 1.0)'
      }]
    },
    {
      'text': 'Azure Disk',
      'url': '',
      'fx': -686.2056231217888,
      'fy': 39.035120728630204,
      'nodes': [{
        'text': 'Doc',
        'note': '',
        'url': 'https://docs.microsoft.com/fr-fr/azure/aks/azure-disks-dynamic-pv',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(158, 202, 94, 1.0)'
      },
      {
        'text': 'Standard HDD',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(158, 202, 94, 1.0)'
      },
      {
        'text': 'Standard SSD',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(100, 200, 100, 1.0)'
      },
      {
        'text': 'Premium SSD',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(100, 200, 100, 1.0)'
      },
      {
        'text': 'Ultra Disk',
        'note': '',
        'url': 'https://docs.microsoft.com/fr-fr/azure/aks/use-ultra-disks',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(100, 200, 100, 1.0)'
      }],
      'category': ''
    },
    {
      'text': 'Azure File SMB',
      'url': '',
      'fx': -786.2056231217888,
      'fy': 150.035120728630204,
      'nodes': [{
        'text': 'Doc',
        'note': '',
        'url': 'https://docs.microsoft.com/en-us/azure/aks/azure-files-dynamic-pv',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(158, 202, 94, 1.0)'
      },
      {
        'text': 'Standard (HDD)',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(158, 202, 94, 1.0)'
      },
      {
        'text': 'Premium (SSD)',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(100, 200, 100, 1.0)'
      }],
      'category': ''
    },
    {
      'text': 'Azure File NFS',
      'url': '',
      'fx': -786.2056231217888,
      'fy': 239.035120728630204,
      'nodes': [{
        'text': 'Doc',
        'note': '',
        'url': 'https://docs.microsoft.com/fr-fr/azure/aks/azure-nfs-volume',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(100, 200, 100, 1.0)'
      }],
      'category': ''
    },
    {
      'text': 'Azure NetApp File',
      'url': '',
      'fx': -786.2056231217888,
      'fy': 320.035120728630204,
      'nodes': [{
        'text': 'Doc',
        'note': '',
        'url': 'https://docs.microsoft.com/fr-fr/azure/aks/azure-netapp-files',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(100, 200, 100, 1.0)'
      }],
      'category': ''
    },
    {
      'text': 'Azure Blobs (Fuse)',
      'url': '',
      'fx': -786.2056231217888,
      'fy': 400.035120728630204,
      'nodes': [{
        'text': 'Doc',
        'note': '',
        'url': 'https://azure.microsoft.com/en-us/blog/linux-fuse-adapter-for-blob-storage/',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(100, 200, 100, 1.0)'
      }],
      'category': ''
    },
    {
      'text': 'Governance',
      'url': '',
      'fx': -450,
      'fy': -100,
      'nodes': [{
        'text': 'Azure Policy',
        'note': '',
        'url': 'https://docs.microsoft.com/en-us/azure/governance/policy/concepts/policy-for-kubernetes',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(0, 157, 255, 1.0)'
      },
      {
        'text': 'Security Compliance',
        'note': '',
        'url': 'https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/scenarios/aks/eslz-security-governance-and-compliance',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(0, 157, 255, 1.0)'
      }],
      'category': 'governance'
    },
    {
      'text': 'Network',
      'url': '',
      'fx': 0,
      'fy': 340,
      'nodes': [],
      'category': 'reseau'
    },
    {
      'text': 'Egress',
      'url': '',
      'fx': 150,
      'fy': 410,
      'nodes': [{
        'text': 'Azure Firewall',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(155, 0, 255, 1.0)'
      },
      {
        'text': 'Azure NAT gateway',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(155, 0, 255, 1.0)'
      }],
      'category': ''
    },
    {
      'text': 'VNet',
      'url': '',
      'fx': 150,
      'fy': 250,
      'nodes': [],
      'category': ''
    },
    {
      'text': 'SubNet',
      'url': '',
      'fx': 320,
      'fy': 250,
      'nodes': [],
      'category': ''
    },
    {
      'text': 'Private Endpoint',
      'url': '',
      'fx': 550,
      'fy': 250,
      'nodes': [{
        'text': 'Private Link',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(155, 0, 255, 1.0)'
      }],
      'category': ''
    },
    {
      'text': 'ER/VPN Gateways',
      'url': '',
      'fx': 320,
      'fy': 330,
      'nodes': [],
      'category': ''
    },
    {
      'text': 'Azure Firewall',
      'url': '',
      'fx': 320,
      'fy': 180,
      'nodes': [],
      'category': ''
    },
    {
      'text': 'Plugins',
      'url': '',
      'fx': 150,
      'fy': 480,
      'nodes': [{
        'text': 'Azure CNI',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(155, 0, 255, 1.0)'
      },
      {
        'text': 'Kubenet',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(155, 0, 255, 1.0)'
      }],
      'category': ''
    },
    {
      'text': 'Ingress',
      'url': '',
      'fx': 150,
      'fy': 550,
      'nodes': [],
      'category': ''
    },
    {
      'text': 'HTTP Add On',
      'url': '',
      'fx': 350,
      'fy': 550,
      'nodes': [],
      'category': ''
    },
    {
      'text': 'Application Gateway Ingress Controller',
      'url': '',
      'fx': 350,
      'fy': 630,
      'nodes': [],
      'category': ''
    },
    {
      'text': 'Azure Application Gateway',
      'url': '',
      'fx': 750,
      'fy': 630,
      'nodes': [{
        'text': 'Standard_v2 SKU',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(155, 0, 255, 1.0)'
      },
      {
        'text': 'WAF_v2 SKU',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(155, 0, 255, 1.0)'
      }],
      'category': ''
    },
    {
      'text': 'Public IP',
      'url': '',
      'fx':   0,
      'fy': 550,
      'nodes': [],
      'category': ''
    },
    {
      'text': 'Azure Load Balancer',
      'url': '',
      'fx': -400,
      'fy': 550,
      'nodes': [{
        'text': 'Standard SKU',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(155, 0, 255, 1.0)'
      },
      {
        'text': 'Basic SKU',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(155, 0, 255, 1.0)'
      }],
      'category': ''
    },
    {
      'text': 'Service Mesh',
      'url': '',
      'fx': -400,
      'fy': 450,
      'nodes': [{
        'text': 'Istio',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(155, 0, 255, 1.0)'
      },
      {
        'text': 'Open Service Mesh add on',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(155, 0, 255, 1.0)'
      }],
      'category': ''
    },
    {
      'text': 'Network policies',
      'url': '',
      'fx': -300,
      'fy': 300,
      'nodes': [{
        'text': 'Azure',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(155, 0, 255, 1.0)'
      },
      {
        'text': 'Calico',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(155, 0, 255, 1.0)'
      }],
      'category': ''
    },
    {
      'text': 'Monitoring',
      'url': '',
      'fx': 550,
      'fy': 80,
      'nodes': [{
        'text': 'Azure Policy',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(255, 231, 0, 1.0)'
      }],
      'category': 'monitoring'
    },
    {
      'text': 'Workspace Log Analytics',
      'url': '',
      'fx': 950,
      'fy': 100,
      'nodes': [{
        'text': 'Control Plane Logs',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(255, 231, 0, 1.0)'
      },
      {
        'text': 'Azure Monitor Insight',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(255, 231, 0, 1.0)'
      },
      {
        'text': 'Azure Monitor for containers',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(255, 231, 0, 1.0)'
      }],
      'category': ''
    },
    {
      'text': 'Prometheus endpoints',
      'url': '',
      'fx': 950,
      'fy': 200,
      'nodes': [],
      'category': ''
    },
    {
      'text': 'Kubernetes Resource viewer',
      'url': '',
      'fx': 950,
      'fy': 300,
      'nodes': [],
      'category': ''
    },
    {
      'text': 'Automation',
      'url': '',
      'fx': 350,
      'fy': -200,
      'nodes': [{
        'text': 'Azure Policy',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(255, 158, 0, 1.0)'
      }],
      'category': 'automation'
    },
    {
      'text': 'Deployment Center',
      'url': '',
      'fx': 550,
      'fy': -300,
      'nodes': [],
      'category': ''
    },
    {
      'text': 'GitHub',
      'url': '',
      'fx': 850,
      'fy': -450,
      'nodes': [{
        'text': 'GitHub repo',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(255, 158, 0, 1.0)'
      },
      {
        'text': 'GitHub Actions',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(255, 158, 0, 1.0)'
      }],
      'category': ''
    },
    {
      'text': 'Azure DevOps',
      'url': '',
      'fx': 850,
      'fy': -380,
      'nodes': [{
        'text': 'Azure repo',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(255, 158, 0, 1.0)'
      },
      {
        'text': 'Azure Pipelines',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(255, 158, 0, 1.0)'
      }],
      'category': ''
    },
    {
      'text': 'Bitbucket cloud',
      'url': '',
      'fx': 850,
      'fy': -310,
      'nodes': [],
      'category': ''
    },
    {
      'text': 'Other Git',
      'url': '',
      'fx': 850,
      'fy': -240,
      'nodes': [],
      'category': ''
    },
    {
      'text': 'Upgrade',
      'url': '',
      'fx': 550,
      'fy': -100,
      'nodes': [],
      'category': ''
    },
    {
      'text': 'Control Plane',
      'url': '',
      'fx': 850,
      'fy': -160,
      'nodes': [],
      'category': ''
    },
    {
      'text': 'Worker nodes',
      'url': '',
      'fx': 850,
      'fy': -50,
      'nodes': [],
      'category': ''
    },
    {
      'text': 'Kubernetes version',
      'url': '',
      'fx': 1200,
      'fy': -150,
      'nodes': [{
        'text': 'Auto upgrade',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(255, 158, 0, 1.0)'
      }],
      'category': ''
    },
    {
      'text': 'Node image',
      'url': '',
      'fx': 1200,
      'fy': -80,
      'nodes': [{
        'text': 'Auto upgrade',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(255, 158, 0, 1.0)'
      }],
      'category': ''
    },
    {
      'text': 'Security patches',
      'url': '',
      'fx': 1200,
      'fy': -10,
      'nodes': [{
        'text': 'Kured',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(255, 158, 0, 1.0)'
      }],
      'category': ''
    },
    {
      'text': 'Security',
      'url': '',
        'fx': 186.2056231217888,
        'fy': -639.035120728630204,
      'nodes': [{
        'text': 'Azure Policy',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(255, 0, 0, 1.0)'
      }],
      'category': 'security'
    },
    {
      'text': 'Deployment',
      'url': '',
      'fx': 86.2056231217888,
      'fy': -1039.035120728630204,
      'nodes': [],
      'category': ''
    },
    {
      'text': 'Imperative',
      'url': '',
      'fx': 186.2056231217888,
      'fy': -1139.035120728630204,
      'nodes': [{
        'text': 'Azure Portal',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(217, 0, 255, 1.0)'
      },
      {
        'text': 'Azure Powershell',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(217, 0, 255, 1.0)'
      },
      {
        'text': 'Azure CLI',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(217, 0, 255, 1.0)'
      }],
      'category': ''
    },
    {
      'text': 'Declarative',
      'url': '',
      'fx': 386.2056231217888,
      'fy': -1039.035120728630204,
      'nodes': [{
        'text': 'Azure Resource Manager Template',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(217, 0, 255, 1.0)'
      },
      {
        'text': 'Bicep',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(217, 0, 255, 1.0)'
      },
      {
        'text': 'Terraform',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(217, 0, 255, 1.0)'
      },
      {
        'text': 'Ansible',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(217, 0, 255, 1.0)'
      }],
      'category': ''
    },
    {
      'text': 'Az aks command invoke',
      'url': '',
      'fx': 286.2056231217888,
      'fy': -939.035120728630204,
      'nodes': [],
      'category': ''
    },
    {
      'text': 'CSI Secret Store Driver',
      'url': '',
      'fx': 286.2056231217888,
      'fy': -839.035120728630204,
      'nodes': [{
        'text': 'Azure Key Vault',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(255, 0, 0, 1.0)'
      }],
      'category': ''
    },
    {
      'text': 'FIPS compliant nodes',
      'url': '',
      'fx': 586.2056231217888,
      'fy': -610.035120728630204,
      'nodes': [{
        'text': 'Azure Key Vault',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(255, 0, 0, 1.0)'
      }],
      'category': ''
    },
    {
      'text': 'Confidential Computing node',
      'note': '',
      'url': '',
      'fx': 486.2056231217888,
      'fy': -450.035120728630204,
      'nodes': [],
      'category': '',
      'color': 'rgba(255, 0, 0, 1.0)'
    },
    {
      'text': 'Azure Security Center',
      'url': '',
      'fx': 486.2056231217888,
      'fy': -539.035120728630204,
      'nodes': [{
        'text': 'Azure Defender for Kubernetes',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(255, 0, 0, 1.0)'
      }],
      'category': ''
    },
    {
      'text': 'Disk Encryption',
      'url': '',
      'fx': 386.2056231217888,
      'fy': -739.035120728630204,
      'nodes': [],
      'category': ''
    },
    {
      'text': 'Data Disk',
      'url': '',
      'fx': 700,
      'fy': -850,
      'nodes': [{
        'text': 'Azure Managed Disk',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(255, 0, 0, 1.0)'
      }],
      'category': ''
    },
    {
      'text': 'OS Disk',
      'url': '',
      'fx': 700,
      'fy': -780,
      'nodes': [],
      'category': ''
    },
    {
      'text': 'Azure Managed Disk',
      'url': '',
      'fx': 950,
      'fy': -780,
      'nodes': [{
        'text': 'Customer Manaed Key',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(255, 0, 0, 1.0)'
      },
      {
        'text': 'Service Managed Key',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(255, 0, 0, 1.0)'
      }],
      'category': ''
    },
    {
      'text': 'OS Ephemeral Disk',
      'url': '',
      'fx': 1000,
      'fy': -710,
      'nodes': [],
      'category': 'reddit'
    },
    {
      'text': 'Encryption at host',
      'url': '',
      'fx': 650,
      'fy': -700,
      'nodes': [{
        'text': 'Temp disk',
        'note': '',
        'url': '',
        'fx': 476.083777747024,
        'fy': -625.1641376795345,
        'nodes': [],
        'category': '',
        'color': 'rgba(255, 0, 0, 1.0)'
      }],
      'category': 'youtube'
    }
    ],
    'connections': [
    {
      'source': 'Azure Kubernetes Services',
      'target': 'Troubleshooting',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Azure Kubernetes Services',
      'target': 'Identity',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Azure Kubernetes Services',
      'target': 'Workers Nodes',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Workers Nodes',
      'target': 'Virtual Kubelet',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Workers Nodes',
      'target': 'Operating System',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Workers Nodes',
      'target': 'Scaling',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Workers Nodes',
      'target': 'Groups',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Workers Nodes',
      'target': 'Kubelet',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Kubelet',
      'target': 'Node Pool',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Node Pool',
      'target': 'Type',
      'curve': {
        'x': -203.841,
        'y': 109.5548
      }
    },
    {
      'source': 'Azure Kubernetes Services',
      'target': 'Persistent Storage',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Azure Kubernetes Services',
      'target': 'Deployment',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Azure Kubernetes Services',
      'target': 'Security',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Security',
      'target': 'CSI Secret Store Driver',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Security',
      'target': 'Disk Encryption',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Disk Encryption',
      'target': 'Data Disk',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Disk Encryption',
      'target': 'OS Disk',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'OS Disk',
      'target': 'Azure Managed Disk',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'OS Disk',
      'target': 'OS Ephemeral Disk',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Disk Encryption',
      'target': 'Encryption at host',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Security',
      'target': 'FIPS compliant nodes',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Security',
      'target': 'Confidential Computing node',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Security',
      'target': 'Azure Security Center',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Azure Kubernetes Services',
      'target': 'Automation',
      'curve': {
        'x': 153.841,
        'y': 149.5548
      }
    },
    {
      'source': 'Automation',
      'target': 'Deployment Center',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Deployment Center',
      'target': 'GitHub',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Deployment Center',
      'target': 'Azure DevOps',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Deployment Center',
      'target': 'Bitbucket cloud',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Deployment Center',
      'target': 'Other Git',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Automation',
      'target': 'Upgrade',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Upgrade',
      'target': 'Control Plane',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Upgrade',
      'target': 'Worker nodes',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Worker nodes',
      'target': 'Kubernetes version',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Worker nodes',
      'target': 'Node image',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Worker nodes',
      'target': 'Security patches',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Azure Kubernetes Services',
      'target': 'Monitoring',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Monitoring',
      'target': 'Workspace Log Analytics',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Monitoring',
      'target': 'Prometheus endpoints',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Monitoring',
      'target': 'Kubernetes Resource viewer',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Persistent Storage',
      'target': 'Azure Disk',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Persistent Storage',
      'target': 'Azure File SMB',
      'curve': {
        'x': -125.841,
        'y': 19.5548
      }
    },
    {
      'source': 'Persistent Storage',
      'target': 'Azure File NFS',
      'curve': {
        'x': -123.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Persistent Storage',
      'target': 'Azure NetApp File',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Persistent Storage',
      'target': 'Azure Blobs (Fuse)',
      'curve': {
        'x': -103.841,
        'y': 180
      }
    },
    {
      'source': 'Azure Kubernetes Services',
      'target': 'Governance',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Identity',
      'target': 'Azure Active Directory',
      'curve': {
        'x': -350.841,
        'y': -349.5548
      }
    },
    {
      'source': 'Azure Kubernetes Services',
      'target': 'Control Plane (Managed)',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Control Plane (Managed)',
      'target': 'Private Cluster',
      'curve': {
        'x': 53.841,
        'y': -49.5548
      }
    },
    {
      'source': 'Private Cluster',
      'target': 'Private DNS Zone',
      'curve': {
        'x': -203.841,
        'y': -149.5548
      }
    },
    {
      'source': 'Control Plane (Managed)',
      'target': 'Public Endpoint',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Control Plane (Managed)',
      'target': 'Supported versions of Kubernetes',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Control Plane (Managed)',
      'target': 'SKU',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Deployment',
      'target': 'Declarative',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Deployment',
      'target': 'Imperative',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Deployment',
      'target': 'Az aks command invoke',
      'curve': {
        'x': 40.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Azure Kubernetes Services',
      'target': 'Network',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Network',
      'target': 'Network policies',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Network',
      'target': 'Service Mesh',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Network',
      'target': 'Public IP',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Public IP',
      'target': 'Azure Load Balancer',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Network',
      'target': 'VNet',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'VNet',
      'target': 'SubNet',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'SubNet',
      'target': 'Private Endpoint',
      'curve': {
        'x': 3.841,
        'y': 9.5548
      }
    },
    {
      'source': 'VNet',
      'target': 'ER/VPN Gateways',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'VNet',
      'target': 'Azure Firewall',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Network',
      'target': 'Egress',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Network',
      'target': 'Plugins',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Network',
      'target': 'Ingress',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Ingress',
      'target': 'HTTP Add On',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Ingress',
      'target': 'Application Gateway Ingress Controller',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    {
      'source': 'Application Gateway Ingress Controller',
      'target': 'Azure Application Gateway',
      'curve': {
        'x': -103.841,
        'y': 49.5548
      }
    },
    ]
  }
  