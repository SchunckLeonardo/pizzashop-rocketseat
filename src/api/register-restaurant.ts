import { api } from '@/lib/axios'

export interface SignUpBody {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export async function signUp({
  email,
  restaurantName,
  managerName,
  phone,
}: SignUpBody) {
  await api.post('/restaurants', { email, restaurantName, managerName, phone })
}
