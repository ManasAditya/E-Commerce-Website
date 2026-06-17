import { supabase } from "../supabase";

export async function addToCart(productId) {
  // Check if product already exists
  const { data } = await supabase
    .from("cart")
    .select("*")
    .eq("product_id", productId)
    .maybeSingle();

  if (data) {
    await supabase
      .from("cart")
      .update({
        quantity: data.quantity + 1,
      })
      .eq("id", data.id);
  } else {
    await supabase
      .from("cart")
      .insert({
        product_id: productId,
        quantity: 1,
      });
  }
}

export async function getCart() {
  const { data, error } = await supabase
    .from("cart")
    .select("*");

  if (error) return [];

  return data;
}