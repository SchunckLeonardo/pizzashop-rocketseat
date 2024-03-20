import { api } from '@/lib/axios'

export interface CanceltOrderParams {
  orderId: string
}

export async function cancelOrder({ orderId }: CanceltOrderParams) {
  await api.patch<CanceltOrderParams>(`/orders/${orderId}/cancel`)
}
