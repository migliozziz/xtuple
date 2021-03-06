select xt.create_table('updaterhist', 'public');

ALTER TABLE public.updaterhist DISABLE TRIGGER ALL;

select xt.add_column('updaterhist','updaterhist_id', 'SERIAL', 'PRIMARY KEY', 'public');
select xt.add_column('updaterhist','updaterhist_user', 'TEXT', 'NOT NULL', 'public');
select xt.add_column('updaterhist','updaterhist_start', 'TIMESTAMP WITH TIME ZONE', 'NOT NULL', 'public');
select xt.add_column('updaterhist','updaterhist_end', 'TIMESTAMP WITH TIME ZONE', 'NOT NULL', 'public');
select xt.add_column('updaterhist','updaterhist_file', 'TEXT', 'NOT NULL', 'public');
select xt.add_column('updaterhist','updaterhist_pkgname', 'TEXT', '', 'public');
select xt.add_column('updaterhist','updaterhist_osuser', 'TEXT', 'NOT NULL', 'public');
select xt.add_column('updaterhist','updaterhist_hostname', 'TEXT', 'NOT NULL', 'public');
select xt.add_column('updaterhist','updaterhist_os', 'TEXT', 'NOT NULL', 'public');
select xt.add_column('updaterhist','updaterhist_updaterver', 'TEXT', 'NOT NULL', 'public');
select xt.add_column('updaterhist','updaterhist_prepkgver', 'TEXT', '', 'public');
select xt.add_column('updaterhist','updaterhist_postpkgver', 'TEXT', '', 'public');
select xt.add_column('updaterhist','updaterhist_predbver', 'TEXT', 'NOT NULL', 'public');
select xt.add_column('updaterhist','updaterhist_postdbver', 'TEXT', 'NOT NULL', 'public');

ALTER TABLE public.updaterhist ENABLE TRIGGER ALL;

