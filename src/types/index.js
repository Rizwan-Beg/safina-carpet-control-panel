// Core types for SAFINA CARPETS Admin Panel - JSDoc for type hints

/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} name
 * @property {string} email
 * @property {'admin' | 'editor' | 'viewer'} role
 * @property {string} [avatar]
 * @property {Date} [lastLogin]
 */

/**
 * @typedef {Object} Product
 * @property {string} id
 * @property {string} name
 * @property {string} sku
 * @property {string} category
 * @property {string} [subcategory]
 * @property {string} size
 * @property {string} material
 * @property {number} price
 * @property {number} [originalPrice]
 * @property {number} stock
 * @property {string[]} images
 * @property {string} description
 * @property {boolean} featured
 * @property {'active' | 'inactive' | 'draft'} status
 * @property {string[]} tags
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

/**
 * @typedef {Object} Category
 * @property {string} id
 * @property {string} name
 * @property {string} slug
 * @property {string} [description]
 * @property {string} [icon]
 * @property {string} [banner]
 * @property {string} [parentId]
 * @property {Category[]} [subcategories]
 * @property {number} productCount
 * @property {boolean} isActive
 */

/**
 * @typedef {Object} Address
 * @property {string} street
 * @property {string} city
 * @property {string} state
 * @property {string} country
 * @property {string} pincode
 */

/**
 * @typedef {Object} Customer
 * @property {string} id
 * @property {string} name
 * @property {string} email
 * @property {string} [phone]
 * @property {Address} [address]
 * @property {Order[]} orders
 * @property {string[]} wishlist
 * @property {boolean} isBlocked
 * @property {Date} registeredAt
 * @property {Date} [lastOrderAt]
 */

/**
 * @typedef {Object} OrderItem
 * @property {string} productId
 * @property {string} productName
 * @property {string} sku
 * @property {number} quantity
 * @property {number} price
 * @property {number} total
 * @property {string} [image]
 */

/**
 * @typedef {Object} Order
 * @property {string} id
 * @property {string} customerId
 * @property {string} customerName
 * @property {string} customerEmail
 * @property {OrderItem[]} items
 * @property {'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled'} status
 * @property {'pending' | 'paid' | 'failed' | 'refunded'} paymentStatus
 * @property {string} paymentMethod
 * @property {number} total
 * @property {number} subtotal
 * @property {number} tax
 * @property {number} shipping
 * @property {number} [discount]
 * @property {Address} shippingAddress
 * @property {Address} [billingAddress]
 * @property {string} [trackingNumber]
 * @property {string} [notes]
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

/**
 * @typedef {Object} CustomCarpetRequest
 * @property {string} id
 * @property {string} customerName
 * @property {string} customerEmail
 * @property {string} customerPhone
 * @property {string} size
 * @property {string} color
 * @property {string} material
 * @property {string} [pattern]
 * @property {string} customMessage
 * @property {string[]} [images]
 * @property {number} [budget]
 * @property {'low' | 'medium' | 'high'} urgency
 * @property {'pending' | 'in-review' | 'quoted' | 'approved' | 'in-production' | 'completed' | 'rejected'} status
 * @property {Date} createdAt
 */

/**
 * @typedef {Object} DashboardStats
 * @property {number} totalOrders
 * @property {number} totalRevenue
 * @property {number} pendingOrders
 * @property {number} cancelledOrders
 * @property {number} totalCustomers
 * @property {number} totalProducts
 * @property {number} lowStockProducts
 * @property {number} customRequests
 */

// Export empty object since JSDoc doesn't require exports
export {};