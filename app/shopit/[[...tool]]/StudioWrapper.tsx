"use client";
import React from "react";
import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.shopit.config";

export default function ShopitStudioWrapper() {
  return <NextStudio config={config} />;
}
