export const WHATSAPP_NUMBER = "56912345678";

export function getWhatsAppLink(
  message = "Hola, quiero hacer un pedido de Pollitos con Papas 🐔🍟"
) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
