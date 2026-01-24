"use client";
import React, { useEffect, useRef, useState } from "react";
import Dialog from "@/components/ui/dialog";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function RequestDialog({ open, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState({});
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    if (open) {
      setErrors({});
      setTimeout(() => nameRef.current?.focus(), 50);
    } else {
      setName("");
      setEmail("");
      setPhone("");
      setTitle("");
      setAuthor("");
      setNotes("");
      setErrors({});
    }
  }, [open]);

  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = "Name is required.";
    if (!title.trim()) e.title = "Book title is required.";
    if (!email.trim() && !phone.trim()) {
      e.contact = "Please provide email or phone number.";
    } else if (email.trim() && !emailRegex.test(email.trim())) {
      e.email = "Please enter a valid email address.";
    }
    setErrors(e);
    if (e.name) {
      nameRef.current?.focus();
    } else if (e.title) {
      titleRef.current?.focus();
    } else if (e.email) {
      emailRef.current?.focus();
    } else if (e.contact) {
      // prefer focusing phone if email empty else email
      if (!email.trim()) phoneRef.current?.focus();
      else emailRef.current?.focus();
    }
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;

    // setServerError(null);

    const payload = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      title: title.trim(),
      author: author.trim(),
      notes: notes.trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Request failed");

      // success
      alert("Request submitted. We'll contact you when it's available.");
      onClose();
    } catch (e) {
      console.error(e);
      // setServerError(e.message || "Something went wrong");
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      title="Request a Book"
      widthClass="max-w-md"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <p className="text-sm text-slate-500">
          Fill out this form to request a book. We'll contact you when it's
          available.
        </p>

        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            ref={nameRef}
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={`w-full px-3 py-2 border rounded text-sm ${
              errors.name ? "border-red-500" : ""
            }`}
            placeholder="Your name"
          />
          {errors.name && (
            <p className="text-xs text-red-600 mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            ref={emailRef}
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-3 py-2 border rounded text-sm ${
              errors.email || errors.contact ? "border-red-500" : ""
            }`}
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="text-xs text-red-600 mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm mb-1">Phone Number</label>
          <input
            ref={phoneRef}
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={`w-full px-3 py-2 border rounded text-sm ${
              errors.contact ? "border-red-500" : ""
            }`}
            placeholder="Your phone number"
          />
          <p className="text-xs text-slate-400 mt-1">
            We'll use this to contact you via WhatsApp
          </p>
        </div>

        {errors.contact && (
          <p className="text-xs text-red-600">{errors.contact}</p>
        )}

        <div>
          <label className="block text-sm mb-1">Book Title</label>
          <input
            ref={titleRef}
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className={`w-full px-3 py-2 border rounded text-sm ${
              errors.title ? "border-red-500" : ""
            }`}
            placeholder="Title of the book you're looking for"
          />
          {errors.title && (
            <p className="text-xs text-red-600 mt-1">{errors.title}</p>
          )}
        </div>

        <div>
          <label className="block text-sm mb-1">Author (if known)</label>
          <input
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-3 py-2 border rounded text-sm"
            placeholder="Author name"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Additional Information</label>
          <textarea
            name="notes"
            rows="4"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full px-3 py-2 border rounded text-sm"
            placeholder="Any additional details about the book or your request"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded text-sm"
          >
            Submit Request
          </button>
        </div>
      </form>
    </Dialog>
  );
}
