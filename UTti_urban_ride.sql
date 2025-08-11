--
-- PostgreSQL database dump
--

-- Dumped from database version 17.5
-- Dumped by pg_dump version 17.5

-- Started on 2025-08-11 20:32:31

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 222 (class 1259 OID 16605)
-- Name: bookings; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.bookings (
    booking_id uuid DEFAULT gen_random_uuid() NOT NULL,
    user_id uuid,
    booking_time timestamp without time zone,
    status character varying(20),
    schedule_id uuid
);


ALTER TABLE public.bookings OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16553)
-- Name: cabs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cabs (
    cab_id uuid DEFAULT gen_random_uuid() NOT NULL,
    vendor_id uuid,
    license_plate character varying(20) NOT NULL,
    model character varying(50) NOT NULL,
    capacity integer NOT NULL,
    current_status character varying(20)
);


ALTER TABLE public.cabs OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16621)
-- Name: payments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.payments (
    payment_id uuid DEFAULT gen_random_uuid(),
    booking_id uuid,
    amount numeric,
    payment_method character varying(50),
    payment_time timestamp without time zone,
    status character varying(20)
);


ALTER TABLE public.payments OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16574)
-- Name: route_schedules; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.route_schedules (
    route_id uuid NOT NULL,
    cab_id uuid NOT NULL,
    departure_time timestamp with time zone NOT NULL,
    arrival_time timestamp with time zone NOT NULL,
    price numeric,
    schedule_id uuid NOT NULL
);


ALTER TABLE public.route_schedules OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16566)
-- Name: routes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.routes (
    route_id uuid DEFAULT gen_random_uuid() NOT NULL,
    start_location character varying(150) NOT NULL,
    end_location character varying(150) NOT NULL,
    distance_km numeric NOT NULL
);


ALTER TABLE public.routes OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16535)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    user_id uuid DEFAULT gen_random_uuid() NOT NULL,
    name character varying(100) NOT NULL,
    email character varying(150) NOT NULL,
    phone character varying(15) NOT NULL,
    password_hash text NOT NULL,
    role character varying(20) NOT NULL,
    created_at timestamp with time zone
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16543)
-- Name: vendors; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.vendors (
    vendor_id uuid DEFAULT gen_random_uuid() NOT NULL,
    name character varying(100) NOT NULL,
    contact_person character varying(100),
    phone character varying(15) NOT NULL,
    email character varying(150),
    created_at timestamp with time zone
);


ALTER TABLE public.vendors OWNER TO postgres;

--
-- TOC entry 4840 (class 0 OID 16605)
-- Dependencies: 222
-- Data for Name: bookings; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.bookings (booking_id, user_id, booking_time, status, schedule_id) FROM stdin;
cce4aa25-c17b-4c2b-9571-ae9ff433cd0a	acfbe0a0-e5dd-490f-a9e2-9acc2578f113	\N	confirmed	\N
\.


--
-- TOC entry 4837 (class 0 OID 16553)
-- Dependencies: 219
-- Data for Name: cabs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cabs (cab_id, vendor_id, license_plate, model, capacity, current_status) FROM stdin;
16e4e2d9-b35b-4f84-88cc-9b8c3555028c	8ed3de41-b2c2-4e1c-b0df-a4a2e7a7796b	MH12AB1234	Toyota Innova	6	available
981ff205-dd42-4b89-966f-a106808e6096	8ed3de41-b2c2-4e1c-b0df-a4a2e7a7796b	MH112AB1234	Toyota Innova	6	available
\.


--
-- TOC entry 4841 (class 0 OID 16621)
-- Dependencies: 223
-- Data for Name: payments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.payments (payment_id, booking_id, amount, payment_method, payment_time, status) FROM stdin;
d42936dd-0422-4df4-bab1-80ed2087f250	cce4aa25-c17b-4c2b-9571-ae9ff433cd0a	1500.00	UPI	\N	paid
\.


--
-- TOC entry 4839 (class 0 OID 16574)
-- Dependencies: 221
-- Data for Name: route_schedules; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.route_schedules (route_id, cab_id, departure_time, arrival_time, price, schedule_id) FROM stdin;
\.


--
-- TOC entry 4838 (class 0 OID 16566)
-- Dependencies: 220
-- Data for Name: routes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.routes (route_id, start_location, end_location, distance_km) FROM stdin;
9c16f06a-b078-422f-8f01-e06aa33a1200	Pune Station	Mumbai CST	150.00
e490c454-c9e2-40cd-ab05-c8064e225768	Pune Station	Mumbai CST	150.00
\.


--
-- TOC entry 4835 (class 0 OID 16535)
-- Dependencies: 217
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (user_id, name, email, phone, password_hash, role, created_at) FROM stdin;
acfbe0a0-e5dd-490f-a9e2-9acc2578f113	Ayush Kumar	ayush@example.com	9876543210	hashedpassword1	customer	\N
fc5ec2e8-1f0a-41ad-8471-83770ec2306b	Admin User	admin@example.com	9123456780	hashedpassword2	admin	\N
1699f40a-6917-4ec8-9c6a-9abdc41dc39d	Ayush Kumar	ayush@example.com	9876543210	hashedpassword1	customer	\N
859ab4b8-0009-46c6-8646-d1e72164db58	Admin User	admin@example.com	9123456780	hashedpassword2	admin	\N
\.


--
-- TOC entry 4836 (class 0 OID 16543)
-- Dependencies: 218
-- Data for Name: vendors; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.vendors (vendor_id, name, contact_person, phone, email, created_at) FROM stdin;
8ed3de41-b2c2-4e1c-b0df-a4a2e7a7796b	City Taxi Service	Ravi Sharma	9876501234	contact@citytaxi.com	\N
\.


--
-- TOC entry 4675 (class 2606 OID 16563)
-- Name: cabs  license_plate; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabs
    ADD CONSTRAINT " license_plate" UNIQUE (license_plate) INCLUDE (license_plate);


--
-- TOC entry 4683 (class 2606 OID 16610)
-- Name: bookings bookings _pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bookings
    ADD CONSTRAINT "bookings _pkey" PRIMARY KEY (booking_id);


--
-- TOC entry 4677 (class 2606 OID 16565)
-- Name: cabs cabs _pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabs
    ADD CONSTRAINT "cabs _pkey" PRIMARY KEY (cab_id);


--
-- TOC entry 4681 (class 2606 OID 16633)
-- Name: route_schedules route_schedules_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.route_schedules
    ADD CONSTRAINT route_schedules_pkey PRIMARY KEY (schedule_id);


--
-- TOC entry 4679 (class 2606 OID 16573)
-- Name: routes routes _pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.routes
    ADD CONSTRAINT "routes _pkey" PRIMARY KEY (route_id);


--
-- TOC entry 4671 (class 2606 OID 16542)
-- Name: users users _pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "users _pkey" PRIMARY KEY (user_id);


--
-- TOC entry 4673 (class 2606 OID 16548)
-- Name: vendors vendors _pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vendors
    ADD CONSTRAINT "vendors _pkey" PRIMARY KEY (vendor_id);


--
-- TOC entry 4687 (class 2606 OID 16611)
-- Name: bookings bookings _user_id _fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bookings
    ADD CONSTRAINT "bookings _user_id _fkey" FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- TOC entry 4688 (class 2606 OID 16634)
-- Name: bookings bookings_schedule_id _fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bookings
    ADD CONSTRAINT "bookings_schedule_id _fkey" FOREIGN KEY (schedule_id) REFERENCES public.route_schedules(schedule_id) NOT VALID;


--
-- TOC entry 4685 (class 2606 OID 16586)
-- Name: route_schedules cab_idf; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.route_schedules
    ADD CONSTRAINT cab_idf FOREIGN KEY (cab_id) REFERENCES public.cabs(cab_id) NOT VALID;


--
-- TOC entry 4689 (class 2606 OID 16627)
-- Name: payments payments _booking_id _fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payments
    ADD CONSTRAINT "payments _booking_id _fkey" FOREIGN KEY (booking_id) REFERENCES public.bookings(booking_id);


--
-- TOC entry 4686 (class 2606 OID 16579)
-- Name: route_schedules route_idf; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.route_schedules
    ADD CONSTRAINT route_idf FOREIGN KEY (route_id) REFERENCES public.routes(route_id);


--
-- TOC entry 4684 (class 2606 OID 16557)
-- Name: cabs vendor_id ; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabs
    ADD CONSTRAINT "vendor_id " FOREIGN KEY (vendor_id) REFERENCES public.vendors(vendor_id) ON DELETE RESTRICT;


-- Completed on 2025-08-11 20:32:32

--
-- PostgreSQL database dump complete
--

