import { api } from '@/lib/axios'

export interface ApproveOrderParams {
  orderId: string
}

export async function approveOrder({ orderId }: ApproveOrderParams) {
  await api.patch<ApproveOrderParams>(`/orders/${orderId}/approve`)
}
